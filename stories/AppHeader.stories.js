import AppHeader from './AppHeader.vue';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  argTypes: {
    title: { control: 'text' },
    logoUrl: { control: 'text' },
    user: { control: 'object' },
    showCart: { control: 'boolean' },
    promoText: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { AppHeader },
  setup() {
    return { args };
  },
  template: '<AppHeader v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  title: 'BestBuy Online',
  logoUrl: 'https://your-logo-url.com/logo.png',
  user: { name: 'John Doe', loggedIn: true },
  showCart: true,
  promoText: 'Free delivery on orders over $100!',
};

// Story for logged out user
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  title: 'BestBuy Online',
  logoUrl: 'https://your-logo-url.com/logo.png',
  user: { name: '', loggedIn: false },
  showCart: true,
  promoText: 'Free delivery on orders over $100!',
};

// Story for mobile view
export const MobileView = Template.bind({});
MobileView.args = {
  title: 'BestBuy Online',
  logoUrl: 'https://your-logo-url.com/logo.png',
  user: { name: 'John Doe', loggedIn: true },
  showCart: true,
  promoText: 'Free delivery on orders over $100!',
};

// Story for no promo
export const NoPromo = Template.bind({});
NoPromo.args = {
  title: 'BestBuy Online',
  logoUrl: 'https://your-logo-url.com/logo.png',
  user: { name: 'John Doe', loggedIn: true },
  showCart: true,
  promoText: '',
};

