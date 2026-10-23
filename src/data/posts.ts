export type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  body: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: 'Why I decided to learn React',
    date: '2026-10-21',
    tags: ['study', 'react'],
    body:
      'At first I only wrote plain HTML and CSS. Then in IWaMAD we started to split pages into components and it suddenly became much easier to read my own code. I still forget where to put useState, but I am getting better.',
  },
  {
    id: 2,
    title: 'Git and GitHub: what I understood after a few weeks',
    date: '2026-10-22',
    tags: ['git', 'study'],
    body:
      'Commit often, write a short message, push at the end of the day. Branches and pull requests looked scary in the beginning, but now it feels like a normal part of the homework.',
  },
  {
    id: 3,
    title: 'My notes from the Kali Linux lab',
    date: '2026-10-23',
    tags: ['security', 'lab'],
    body:
      'Setting up the virtual machines took longer than the lab itself. My main rule now: take a snapshot before you try anything new, so you can always go back.',
  },
  {
    id: 4,
    title: 'A beautiful and atmospheric game',
    date: '2026-10-24',
    tags: ['games', 'relax'],
    body:
      'Sometimes I just need to turn off the laptop with code and play something calm. This one has a very pretty world and nice music, so it is perfect after a long study day.',
  },
  {
    id: 5,
    title: 'Autumn in Almaty',
    date: '2026-10-25',
    tags: ['life', 'almaty'],
    body:
      'The mountains look the best in autumn. When the weather is good I try to go for a walk between classes, it helps me to think about the code that does not work.',
  },
];
