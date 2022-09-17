module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle':'off',
    'vue/multi-word-component-names':"off",
    'eol-last':'off',
    'no-trailing-spaces':'off',
    'indent':'off',
    'no-multiple-empty-lines':'off',
    'padded-blocks':'off',
    'prefer-const':'off',
    'semi':'off',
    'spaced-comment':'off',
    '@typescript-eslint/no-unused-vars':'off',
    'space-before-function-paren':'off',
    'space-before-function-paren':'off',
    '@typescript-eslint/no-empty-function':'off'
  }
}
