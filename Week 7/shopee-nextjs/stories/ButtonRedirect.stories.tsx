import ButtonRedirect from '../components/Atoms/Buttons/ButtonRedirect';
import type { Meta } from '@storybook/react';

export default {
  title: "Atoms/Button",
  component: ButtonRedirect
} as Meta;

interface Props {
  handleRedirects: () => void;
}
export const Redirect = ({ handleRedirects }: Props) => <ButtonRedirect handleRedirects={handleRedirects} />
