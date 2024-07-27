// .eslintrc.js
module.exports = {
    extends: ['react-app'],
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
    ],
};
