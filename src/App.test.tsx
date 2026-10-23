import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import { LikesProvider } from './context/LikesContext';
import App from './App';

function renderApp(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>
  );
}

test('profile page shows the sign in page when you are signed out', () => {
  renderApp('/profile');

  expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument();
  expect(screen.queryByText('My profile')).not.toBeInTheDocument();
});

test('after sign in the profile page opens', async () => {
  renderApp('/signin');

  await userEvent.click(screen.getByRole('button', { name: 'Sign in' }));

  expect(screen.getByRole('heading', { name: 'My profile' })).toBeInTheDocument();
});

test('unknown post shows a message', () => {
  renderApp('/posts/999');

  expect(screen.getByText('No such post')).toBeInTheDocument();
});
