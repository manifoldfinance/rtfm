'use client';

import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

import { Button } from '@/components/Button';
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation';
import { useSectionStore } from '@/components/SectionProvider';
import { Tag } from '@/components/Tag';
import { remToPx } from '@/lib/remToPx';
import React from 'react';

interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current;
  return condition ? initialValue : value;
}

function TopLevelNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
        {children}
      </Link>
    </li>
  );
}

const NavLink = React.memo(function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
}: {
  href: string;
  children: React.ReactNode;
  tag?: string;
  active?: boolean;
  isAnchorLink?: boolean;
}) {
  const className = useCallback(
    () =>
      clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      ),
    [isAnchorLink, active],
  );

  return (
    <Link href={href} passHref>
      <a aria-current={active ? 'page' : undefined} className={className()}>
        <span className="truncate">{children}</span>
        {tag && (
          <Tag variant="small" color="zinc">
            {tag}
          </Tag>
        )}
      </a>
    </Link>
  );
});

// @ts-ignore
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  active: PropTypes.bool,
  isAnchorLink: PropTypes.bool,
};

export default NavLink;

function VisibleSectionHighlight({
  group,
  pathname,
}: {
  group: NavGroup;
  pathname: string;
}) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  );

  let isPresent = useIsPresent();
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0],
    ),
  );
  let itemHeight = remToPx(2);
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight;
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  );
}

function ActivePageMarker({
  group,
  pathname,
}: {
  group: NavGroup;
  pathname: string;
}) {
  let itemHeight = remToPx(2);
  let offset = remToPx(0.25);
  let activePageIndex = group.links.findIndex((link) => link.href === pathname);
  let top = offset + activePageIndex * itemHeight;

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-emerald-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  );
}

function NavigationGroup({
  group,
  className,
}: {
  group: NavGroup;
  className?: string;
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  let [pathname, sections] = useInitialValue(
    [usePathname(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation,
  );

  let isActiveGroup =
    group.links.findIndex((link) => link.href === pathname) !== -1;

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white">
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}>
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink>
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/**
 * @const Navigation
 * @description The navigation component for the documentation.
 *    The navigation is split into two groups: Guides and Protocol.
 *    The Guides group is always visible, while the Protocol group
 *    is only visible on desktop.
 *
 * @version September 02, 2023
 */

/**
 *

@tutorial Navigation
@description The navigation component for the documentation.

| *Description*          | **Tutorials**            | **How-to guides**         | **Reference**               | **Explanation**        |
|------------------------|--------------------------|---------------------------|-----------------------------|------------------------|
| what they do           | "introduce               | educate                   |                             |                        |
| lead"                  | "guide, demonstrate"     | "state, describe, inform" | "explain, clarify, discuss" |                        |
| "answers the           |                          |                           |                             |                        |
| question"              | "Can you teach me        |                           |                             |                        |
| to...?"                | """How do I...?"""       | """What is...?"""         | """Why...?"""               |                        |
| oriented to            | learning                 | tasks                     | information                 | understanding          |
| purpose                | "to allow the newcomer   |                           |                             |                        |
| to get started"        | "to show how to solve a  |                           |                             |                        |
| specific problem"      | "to describe the         |                           |                             |                        |
| machinery"             | to explain               |                           |                             |                        |
| form                   | a lesson                 | a series of steps         | dry description             | discursive explanation |
| analogy                | "teaching a child how to |                           |                             |                        |
| cook"                  | "a recipe in a cookery   |                           |                             |                        |
| book"                  | "a reference             |                           |                             |                        |
| encyclopaedia article" | "an article on culinary  |                           |                             |                        |
| social history"        |                          |                           |                             |                        |

 */

/**
 * @version September 02, 2023
 */
export const navigation: Array<NavGroup> = [
  {
    title: 'Guides',
    links: [
      { title: 'Introduction', href: '/' },
      { title: 'Quickstart', href: '/quickstart' },
      { title: 'SDKs', href: '/sdks' },
      { title: 'Protocol', href: '/protocol' },
      { title: 'Infrastructure', href: '/infrastructure' },
      { title: 'Vaults', href: '/vaults' },
      { title: 'Metrics', href: '/metrics' },
    ],
  },
  {
    title: 'Protocol',
    links: [
      { title: 'MevEth', href: '/protocol/MevEth' },
      { title: 'MevEthShareVault', href: '/protocol/MevEthShareVault' },
      { title: 'MevEthRateProvider', href: '/protocol/MevEthRateProvider' },
      { title: 'WagyuStaker', href: '/protocol/WagyuStaker' },
      { title: 'Rates', href: '/rates' },
      { title: 'Fees', href: '/fees' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { title: 'Specification', href: '/specification' },
      { title: 'Interfaces', href: '/interfaces' },
      { title: 'API', href: '/api' },
      { title: 'Audits', href: '/audits' },
      { title: 'Deployments', href: '/deployments' },
      { title: 'Security', href: '/security' },
      { title: 'Legal', href: '/legal' },
    ],
  },
];

/**
 *
 * @export Navigation
 * @returns NavigationGroup
 * @description The navigation component for the documentation.
 *   - Vision
 *   - MEV Integrators
 *   - Ecosystem
 *
 *  @version September 02, 2023
 */

// TODO: Add a link to the dashboard.
export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">Vision</TopLevelNavItem>
        <TopLevelNavItem href="#">MEV Integrators</TopLevelNavItem>
        <TopLevelNavItem href="#">Ecosystem</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : ''}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Dashboard
          </Button>
        </li>
      </ul>
    </nav>
  );
}
