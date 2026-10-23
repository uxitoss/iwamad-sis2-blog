import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type LikesContextValue = {
  likedIds: number[];
  toggleLike: (id: number) => void;
};

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedIds, setLikedIds] = useState<number[]>([]);

  function toggleLike(id: number) {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter((x) => x !== id));
    } else {
      setLikedIds([...likedIds, id]);
    }
  }

  return (
    <LikesContext.Provider value={{ likedIds, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (context === null) {
    throw new Error('useLikes must be used inside LikesProvider');
  }
  return context;
}
