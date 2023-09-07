import React from 'react';

export type TButtonType = 'primary' | 'danger' | 'accent';
export type TIconPosition = 'left' | 'right';

export interface IButtonProps {
  type: TButtonType;
  icon?: React.ReactNode;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  iconPosition?: TIconPosition;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  mt?: number;
}

export type TButtonWrapperProps = Pick<IButtonProps, 'isDisabled'> & {
  buttonType: IButtonProps['type'];
  mt?: number;
  isLoading?: boolean;
};
