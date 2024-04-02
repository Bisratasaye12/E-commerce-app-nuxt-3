import ProductLists from './ProductLists.vue'

export default {
  title: 'Components/ProductLists',
  component: ProductLists,
}

const Template = (args) => ({
  components: { ProductLists },
  setup() {
    return { args }
  },
  template: '<ProductLists v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}

export const WithProducts = Template.bind({})
WithProducts.args = {
  allProducts: [
    {
      id: 1,
      title: 'Product 1',
      description: 'A description of product 1.',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'A description of product 2.',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'A description of product 3.',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
  ],
}

export const NoProducts = Template.bind({})
NoProducts.args = {
  allProducts: [],
}

export const WithDifferentOptions = Template.bind({})
WithDifferentOptions.args = {
  options: [
    { value: 8, label: 'Show 8' },
    { value: 12, label: 'Show 12' },
    { value: 16, label: 'Show 16' },
    { value: 20, label: 'Show 20' },
    { value: 24, label: 'Show 24' },
    { value: 28, label: 'Show 28' },
  ],
  selected: 12,
}
