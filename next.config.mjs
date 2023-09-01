// @ts-check
/**
 * @type {import('next').NextConfig}
 */


import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  reactStrictMode: true,
  poweredByHeader: false,
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

export default withSearch(withMDX(nextConfig))
