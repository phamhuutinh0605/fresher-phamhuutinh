import type { Meta, StoryObj } from '@storybook/react';
import { Button, Props } from "./Button";
import { action } from "@storybook/addon-actions"
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default Text'
    }
  }
}
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Im primary',
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Im secondary',
  }
}

