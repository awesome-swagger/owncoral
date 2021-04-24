import { render } from '@testing-library/react';
import { expect } from 'chai';

import App from './App';

describe('<App>', () => {
  it('App can render', () => {
    render(<App />);
  });
});
