// .storybook/preview.js
import { setup } from '@storybook/vue3';  // For setting up global configuration
import { app } from '@storybook/vue3'; // Access the app instance
import MyPlugin from '../src/plugins/myPlugin'; // Adjust path if needed
import MyComponent from '../src/components/MyComponent.vue'; // Adjust path if needed

// Setup function to configure global settings
setup((app) => {
  // Example: Use a Vue plugin globally (Make sure MyPlugin is correctly implemented)
  app.use(MyPlugin);

  // Register a global component
  app.component('my-component', MyComponent);

  // Global Mixin example (be cautious about using mixins globally)
  app.mixin({
    methods: {
      globalMethod() {
        console.log('This is a global method!');
      }
    }
  });

  // Example: Set a global property (useful for things like i18n, etc.)
  app.config.globalProperties.$myGlobalProp = 'My Global Property';

  // Register a custom Vue 3 directive globally
  app.directive('my-directive', {
    beforeMount(el) {
      el.style.backgroundColor = 'yellow';
    }
  });
});

// Define Storybook's global parameters (optional)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }, // Automatically detect events like "onClick" for storybook actions
  controls: { expanded: true }, // Make controls panel expanded by default
  viewport: { viewports: { /* custom viewports */ } }, // Define custom viewports for responsive testing
  // Add more parameters here depending on your needs
};
