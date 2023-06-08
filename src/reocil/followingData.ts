import { atom } from 'recoil';

export const followersData = atom<string[]>({
  key: 'followersData',
  default: [],
});

export const followingData = atom<string[]>({
  key: 'followingData',
  default: [],
});
