module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: true,
  importOrderSeparation: true,
  importOrder: [
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^(@/app|@/api|@/assets|@/redux|@/hooks|@/components|@/i18n|@/lib|@/utils|@/translations|@/layouts|@/styles)/?',
    '^[./]'
  ],
  plugins: ['prettier-plugin-tailwindcss']
};
