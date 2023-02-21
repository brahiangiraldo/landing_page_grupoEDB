import { ComponentMeta, ComponentStory } from '@storybook/react'
import HeaderTemplate from './HeaderTemplate'

export default {
  title: 'Header/templates',
  component: HeaderTemplate
} as ComponentMeta<typeof HeaderTemplate>

const component: ComponentStory<typeof HeaderTemplate> = (args) => <HeaderTemplate { ...args } />
export const headerTemplate = component.bind({})
headerTemplate.args = {
  head: <div style={ { background: '#06D92D', width: '100%', height: '100%' } }></div>,
  body: <div style={ { background: '#E3F70D', width: '100%', height: '100%' } }></div>
}
