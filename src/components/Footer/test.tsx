import { renderWithTheme } from '../../utils/tests/helpers';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer', () => {
    renderWithTheme(<Footer />);
  });
});
