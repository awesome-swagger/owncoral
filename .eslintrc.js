module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['jest', '@typescript-eslint', 'react-hooks', 'react', 'simple-import-sort', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // <> doesn't play nicely with Emotion's `jsx`, so let's ban it
    'react/jsx-fragments': ['error', 'element'],

    /*
     * simple-import-sort seems to be the most stable import sorting currently,
     * disable others
     */
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with React first
        // More examples:
        //   https://github.com/lydell/eslint-plugin-simple-import-sort/blob/0947ef1fbb23ad92855bb7bde4f96d0a2acb6131/examples/.eslintrc.js#L74
        groups: [
          ["^react", "^@?\\w"],
          ['^\\u0000'],
          ['^@?\\w'],
          ['^'],
          ['^\\.']
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',

    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',

    'import/no-default-export': 'warn',
  },
};
