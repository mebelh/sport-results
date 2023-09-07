import React, { memo, useState } from 'react';
import { ISwitchProps } from './interfaces';
import { Label, Value, Container } from './style';

const Switch: React.FC<ISwitchProps> = ({ title, value, onChange }) => {
  const [localeValue, setLocaleValue] = useState<boolean>(false);
  const $value: boolean = value ?? localeValue;

  const onToggle = () => {
    onChange?.(!$value);
  };

  return (
    <Container onClick={onToggle}>
      <Label>{title}</Label>
      <Value isActive={$value} />
    </Container>
  );
};

export default memo(Switch);
