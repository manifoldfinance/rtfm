// @ts-check
/**
 * @type {import('next').NextConfig}
 */

import nextMDX from '@next/mdx';
import withPWAInit from '@ducanh2912/next-pwa';

import { recmaPlugins } from './src/mdx/recma.mjs';
import { rehypePlugins } from './src/mdx/rehype.mjs';
import { remarkPlugins } from './src/mdx/remark.mjs';
import withSearch from './src/mdx/search.mjs';

const withPWA = withPWAInit({
  dest: 'public',
  //  runtimeCaching: import ('./pwa/runtime'),
  disable:
    process.env.NODE_ENV !== 'production' || process.env.DISABLE_SW === 'true',
  register: false,
  //  skipWaiting: false,
  cacheStartUrl: true,
  dynamicStartUrl: false,
  extendDefaultRuntimeCaching: true,
  swcMinify: true,
});

const withMDX = nextMDX({
  options: {
    remarkPlugins,

    /**
     @dev this is a false-positive warning.
        Fixing the typecheck error using `rehypePlugins: [],` will result in a runtime error.

    // ```console
    //  requires a `code` prop, or a child with a `code` prop.
    // ```
    */

    // @ts-ignore
    rehypePlugins,
    recmaPlugins,
  },
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    optimizeCss: true,
    swcMinify: true,
    cpus: 4,
    swcPlugins: [
      process.env.INSTRUMENT_COVERAGE === 'true' && [
        'swc-plugin-coverage-instrument',
        {},
      ],
    ],
  },
};

export default withPWA(withSearch(withMDX(nextConfig)));
