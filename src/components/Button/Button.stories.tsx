// src/components/Button/Button.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me!',
  primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};
