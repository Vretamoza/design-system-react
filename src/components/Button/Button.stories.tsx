import { Meta, StoryFn } from '@storybook/react';
import Button, {ButtonProps} from './Button';
import * as Icons from '../Icon';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    iconName: {
      control: "select",
      options: Object.keys(Icons),
      description: 'Nombre del icono',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me!',
  iconOnly: false,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  iconName: "StepBackwardOutlined"
};
