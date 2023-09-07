import React from 'react';
import { ISpinnerProps, ESpinnerSize } from './interfaces';
import { Spin, SpinnerCircle, SpinnerWrapper } from './style';

const Spinner: React.FC<ISpinnerProps> = ({ size = ESpinnerSize.Small }) => (
  <SpinnerWrapper>
    <Spin>
      <SpinnerCircle />
    </Spin>
  </SpinnerWrapper>
);

export default Spinner;
