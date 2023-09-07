import Spinner from 'components/spinner';
import React, { memo } from 'react';
import Typography from 'components/typography';
import { IButtonProps } from './interfaces';
import { ButtonWrapper } from './style';

const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  onClick,
  icon,
  text,
  iconPosition = 'left',
  isDisabled,
  className,
  mt,
  isLoading = false,
}) => (
  <ButtonWrapper
    mt={mt}
    buttonType={type}
    type="submit"
    onClick={isDisabled ? undefined : onClick}
    isDisabled={isDisabled}
    className={className}
    isLoading={isLoading}
  >
    {isLoading ? (
      <Spinner />
    ) : (
      <>
        {iconPosition === 'left' && icon}
        {text && <Typography.Text3>{text}</Typography.Text3>}
        {iconPosition === 'right' && icon}
      </>
    )}
  </ButtonWrapper>
);

export default memo(Button);
