import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

type CustomButtonProps = {
  children: React.ReactNode;
};

export type ButtonProps = CustomButtonProps & AntdButtonProps;

export const Button = ({ children, ...props }: ButtonProps) => <AntdButton {...props}>{children}</AntdButton>;
