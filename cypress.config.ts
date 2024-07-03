import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1280,
        viewportHeight: 720,
    },

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
});
