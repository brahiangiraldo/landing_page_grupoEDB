import { ComponentMeta, ComponentStory } from '@storybook/react'
import UniContact from './UniContact'

export default {
	title: 'Contact/Page/UniContact',
	component: UniContact
} as ComponentMeta<typeof UniContact>

const component: ComponentStory<typeof UniContact> = (args) => <UniContact />
export const uniContact = component.bind({})