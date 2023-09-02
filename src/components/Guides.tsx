/**
 * @module components/Guides
 * @description The Guides component for the documentation.
 *    - Protocol
 *    - Infrastructure
 *    - Vaults
 *    - Metrics
 *
 * @see {@link https://github.com/manifoldfinance/rtfm/}
 * @copyright 2023 CommodityStream, Inc.
 */

import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';

/**
 *
 * @const guides
 * @description An array of objects that contain information about the guides.
 * @property {string} href - The URL of the guide.
 * @property {string} name - The name of the guide.
 * @property {string} description - The description of the guide.
 * @exports guides
 *
 * @version August 31, 2023
 */

// TODO: Rename Metrics to more generic namespace that includes metrics and other data

const guides = [
  {
    href: '/protocol',
    name: 'Protocol',
    description: 'Learn how mevETH works and how to integrate with it.',
  },
  {
    href: '/infrastructure',
    name: 'Infrastructure',
    description: 'Understand how we manage and secure our infrastructure.',
  },
  {
    href: '/vaults',
    name: 'Vaults',
    description: 'Our Vaults defines our market structure and terms',
  },
  {
    href: '/metrics',
    name: 'Metrics',
    description:
      'Learn how to programmatically access metrics from our API endpoints.',
  },
];

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
