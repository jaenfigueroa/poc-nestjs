module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'quotes': ['warn', 'single'], //USAR COMILLAS SIMPLES ''
    // 'semi': ['warn', 'never'], //NO USAR PUNTO Y COMA ;
    // 'indent': ['warn', 2], //USAR DOS ESPACIOS COMO TAB
    'eqeqeq': ['warn'], //USAR SIEMPRE IGUALDAD ESTRICTA ===
    'comma-dangle': ['warn', 'always-multiline'], //SIEMPRE PONER COMA ADICIONAL AL FINAL DE LAS LISTAS
    // 'no-console': ['warn'], //NO DEJAR CONSOLE.LOG TIRADOS
    // NO DEJAR PUNTOS Y COMAS AL FINAL EN TS
    '@typescript-eslint/member-delimiter-style': ['warn', {
      'multiline': {
        'delimiter': 'none',
        'requireLast': false,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
    }],
    // PONER UN ESPACIO ANTES DEL TIPADO -> variable: string
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true,
      'overrides': {
        'arrow': {
          'before': true,
          'after': true,
        },
      },
    }],
    // NO USAR VAR
    'no-var': 'warn',
    // USAR SIEMPRE CONST EN CASO QUE SE NO SE REASIGNEN VALORES
    'prefer-const': 'warn',
    // USAR NOMECLATURA CAMELCASE
    'camelcase': 'warn',
  },
};
