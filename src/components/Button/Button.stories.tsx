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
  label: 'Submit',
  iconOnly: false,
};

export const Small = Template.bind({});
Small.args = {
  label: "Submit",
  size: "small"
};

export const Large = Template.bind({});
Large.args = {
  label: "Submit",
  size: "large"
};

export const Round = Template.bind({});
Round.args = {
  label: "Submit",
  round: true
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Submit",
  danger: true
};


export const Ghost = Template.bind({});
Ghost.args = {
  label: "Submit",
  ghost: true
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnly: true,
  iconName: "StepBackwardOutlined"
};