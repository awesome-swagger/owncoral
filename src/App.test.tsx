import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import { AppTheme } from './AppTheme';

test('renders profile title', () => {
  render(
    <ThemeProvider theme={AppTheme(false)}>
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
      );
    </ThemeProvider>,
  );
  const linkElement = screen.getAllByText(/Portfolio/i);
  expect.arrayContaining(linkElement);
});