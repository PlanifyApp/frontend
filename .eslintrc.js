module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                'react/react-in-jsx-scope': 'error',
            },
        },
        {
            files: ['cypress/support/**/*.ts'], // Cypress support 파일 경로
            rules: {
                '@typescript-eslint/no-namespace': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
    },
};
