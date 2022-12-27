import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { StyledWrapper} from './styles';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
          <Outlet />
      </StyledWrapper>
    </ThemeProvider>
  );
};
export default Root;
