import { atom } from 'recoil';

export const notFollowing = atom<string[]>({
  key: 'notFollowing',
  default: [],
});
