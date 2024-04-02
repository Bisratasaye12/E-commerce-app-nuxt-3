import HeroArea from './HeroArea.vue'

export default {
  title: 'Components/HeroArea',
  component: HeroArea,
}

const Template = (args) => ({
  components: { HeroArea },
  setup() {
    return { args }
  },
  template: '<HeroArea v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}

export const WithSearchResults = Template.bind({})
WithSearchResults.args = {
  search: 'gadget',
  filterItems: [
    { id: 1, title: 'Gadget A', category: 'Gadget' },
    { id: 2, title: 'Gadget B', category: 'Gadget' },
  ]
}

export const NoSearchResults = Template.bind({})
NoSearchResults.args = {
  search: 'xyz',
  filterItems: []
}

export const WithCategories = Template.bind({})
WithCategories.args = {
  category: ['Gadgets', 'Jewelry', 'Clothing', 'Accessories'],
}
