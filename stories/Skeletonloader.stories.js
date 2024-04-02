import Skeletonloader from './Skeletonloader.vue'

export default {
  title: 'Components/Skeletonloader',
  component: Skeletonloader,
}

const Template = (args) => ({
  components: { Skeletonloader },
  setup() {
    return { args }
  },
  template: '<Skeletonloader v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}

export const WithCustomSize = Template.bind({})
WithCustomSize.args = {
 }

export const WithCustomColor = Template.bind({})
WithCustomColor.args = {
  }
