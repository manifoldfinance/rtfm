// @ts-check

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  singleQuote: true,
  bracketSameLine: true,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 110,
  proseWrap: 'always',
  quoteProps: 'consistent',
  requirePragma: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
};
