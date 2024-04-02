import AppFooter from '../components/AppFooter.vue';

export default {
  title: 'Components/AppFooter', // The title defines the category in Storybook
  component: AppFooter, // This tells Storybook which component to use
};

const Template = (args) => ({
  components: { AppFooter },
  setup() {
    return { args };
  },
  template: '<AppFooter v-bind="args" />',
});

// Default footer
export const Default = Template.bind({});
Default.args = {};

// Custom footer with modified links
export const CustomFooter = Template.bind({});
CustomFooter.args = {
  // You could add props here if you want dynamic behavior, such as changing the company name or links.
};
