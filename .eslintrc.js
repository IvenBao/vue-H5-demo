module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': ['error', 'never'],
        'generator-star-spacing': ['error', 'after'],
        'eqeqeq': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
