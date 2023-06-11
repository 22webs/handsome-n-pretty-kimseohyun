import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const followersData = atom<string[]>({
  key: 'followersData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const followingData = atom<string[]>({
  key: 'followingData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
