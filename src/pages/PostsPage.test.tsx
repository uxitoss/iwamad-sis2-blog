import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { LikesProvider } from '../context/LikesContext';
import { posts } from '../data/posts';
import PostsPage from './PostsPage';

test('posts page shows one card for every post', () => {
  render(
    <MemoryRouter>
      <LikesProvider>
        <PostsPage />
      </LikesProvider>
    </MemoryRouter>
  );

  const cards = screen.getAllByRole('article');
  expect(cards).toHaveLength(posts.length);
});
