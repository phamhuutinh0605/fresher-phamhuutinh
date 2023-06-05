// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import DetailButton from "./DetailButton"

export default {
  title: "Atoms/DetailButton",
  component: DetailButton
} as Meta;

export const Detail = () => <DetailButton />
