import Button from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Large',
  color: 'primary',
  size: 'lg',
};