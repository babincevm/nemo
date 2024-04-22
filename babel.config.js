module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    'plugins': [
        [
            'module-resolver',
            {
                'root': ['.'],
                'alias': {
                    '@': './src',
                    '@ui': './src/ui',
                    '@components': './src/components',
                    '@layouts': './src/layouts'
                }
            }
        ]
    ]
};
