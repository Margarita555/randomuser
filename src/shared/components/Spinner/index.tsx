import { FC } from 'react';
import { Oval } from 'react-loader-spinner';
import { StyledSpinner } from './styles';

const Spinner: FC = () => {
  const spinnerFeatures = {
    type: 'InfinitySpin',
    color: '#737df9',
    height: `${40}`,
    width: `${40}`,
    ariaLabel: 'oval-loading',
    secondaryColor: '#B0C4DE',
    strokeWidth: `${3}`,
    strokeWidthSecondary: `${3}`,
  };
  return (
    <StyledSpinner>
      <Oval {...spinnerFeatures} />
    </StyledSpinner>
  );
};

export default Spinner;
