# `mevETH Documentation`

[https://docs.meveth.org](https://docs.meveth.org)


## Developers

>**Warning**    
> Follow the setup instructions correctly    

### Installing

> Use Volta - we do not use nvm!

```bash
curl https://get.volta.sh | bash
volta install node@18
```
### Building

```bash
npm ci
```

```bash
npm run build
```

## Configuration

### Writing Content

#### `page.mdx` template

```mdx

export const metadata = {
  title: '{{#title}}',
  description:
    '{{#title}}',
};


# {{#title}}

{{#admonitions}}
> `{{{admonitions}}}`

{{/admonitions}}

```

[see https://github.com/sambacha/dappspec/tree/master/rules](https://github.com/sambacha/dappspec/tree/master/rules) 

### Styling

#### Admonitions

```mdx
<Note>
  Before you can make requests to the Protocol API, you will need to grab your
  API key from your dashboard. You find it under [Settings &raquo; API](#).
</Note>
```

#### Colors

> see `src/components/Tag.tsx`

  GET: 'emerald',
  POST: 'sky',
  PUT: 'amber',
  DELETE: 'rose',



### Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/mdx/search.mjs` file.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/) - the official Algolia Autocomplete documentation
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - the official FlexSearch documentation
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - the official Zustand documentation


## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).
