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
};

export default withSearch(withMDX(nextConfig));
