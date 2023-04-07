import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props {
  label: String;
  color: String;
  backgroundColor: String;
  padding: String;
  fontSize: String;
  border: String;
  cursor: string;
  width: String;
  height: String;
}
export const Button = ({ label, color, backgroundColor, padding, fontSize, border, width, height, cursor, ...props }: Props) => {
  return (
    <button {...props} style={{ color: `${color}`, backgroundColor: `${backgroundColor}`, padding: `${padding}`, fontSize: `${fontSize}`, border: `${border}`, width: `${width}`, height: `${height}`, cursor: `${cursor}` }}>{label}</button>
  );
};
