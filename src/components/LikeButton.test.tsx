import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LikesProvider } from '../context/LikesContext';
import LikeButton from './LikeButton';

test('like button changes after a click and back after second click', async () => {
  render(
    <LikesProvider>
      <LikeButton postId={1} />
    </LikesProvider>
  );

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Like');

  await userEvent.click(button);
  expect(button).toHaveTextContent('Liked');

  await userEvent.click(button);
  expect(button).toHaveTextContent('Like');
  expect(button).not.toHaveTextContent('Liked');
});

test('each post has its own like', async () => {
  render(
    <LikesProvider>
      <LikeButton postId={1} />
      <LikeButton postId={2} />
    </LikesProvider>
  );

  const buttons = screen.getAllByRole('button');
  await userEvent.click(buttons[0]);

  expect(buttons[0]).toHaveTextContent('Liked');
  expect(buttons[1]).not.toHaveTextContent('Liked');
});
