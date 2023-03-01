import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageServices from './PageServices';


export default {
  title: 'Services/Page/PageServices',
  component: PageServices

} as ComponentMeta<typeof PageServices>
const component: ComponentStory<typeof PageServices> = (args) => <PageServices />
export const pageServices = component.bind({})