import type { FileNode } from './Types';

export const fileStructure: FileNode[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      { id: '2', name: 'App.tsx', type: 'file' },
      { id: '3', name: 'main.tsx', type: 'file' },
      {
        id: '4',
        name: 'components',
        type: 'folder',
        children: [
          { id: '5', name: 'Header.tsx', type: 'file' },
          { id: '6', name: 'Footer.tsx', type: 'file' },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'public',
    type: 'folder',
    children: [{ id: '8', name: 'favicon.ico', type: 'file' }],
  },
  { id: '9', name: 'package.json', type: 'file' },
  { id: '10', name: 'README.md', type: 'file' },
];