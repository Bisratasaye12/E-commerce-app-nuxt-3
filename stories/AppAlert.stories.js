import AppAlert from '../components/AppAlert.vue';

export default {
  title: 'Components/AppAlert', // The title defines the category in Storybook
  component: AppAlert, // This tells Storybook which component to use
};

const Template = (args) => ({
  components: { AppAlert },
  setup() {
    return { args };
  },
  template: '<AppAlert v-bind="args"><slot>{{ args.message }}</slot></AppAlert>',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  message: 'This is a default alert message!',
};

// Custom message
export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: 'This is a custom message!',
};
