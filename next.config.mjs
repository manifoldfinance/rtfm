// @ts-check
/**
 * @type {import('next').NextConfig}
 */

import nextMDX from '@next/mdx';

import { recmaPlugins } from './src/mdx/recma.mjs';
import { rehypePlugins } from './src/mdx/rehype.mjs';
import { remarkPlugins } from './src/mdx/remark.mjs';
import withSearch from './src/mdx/search.mjs';

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
 swcMinify: true,
    compiler: {
      reactRemoveProperties: process.env.INSTRUMENT_COVERAGE !== 'true',
      removeConsole:
        process.env.NODE_ENV === 'production'
          ? { exclude: ['error', 'warn'] }
          : false,
    },
    productionBrowserSourceMaps: process.env.SOURCE_MAPS === 'true',
    output: 'standalone',
    experimental: {
      swcPlugins: [
        process.env.INSTRUMENT_COVERAGE === 'true' && [
          'swc-plugin-coverage-instrument',
          {},
        ],
      ],
    },
};

export default withSearch(withMDX(nextConfig));
