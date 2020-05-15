module.exports = {
    stories: ["../stories/**/*.stories.[tj]s"],
    addons: [
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    prettierConfig: {
                        singleQuote: false
                    }
                }
            }
        }
    ]
};
