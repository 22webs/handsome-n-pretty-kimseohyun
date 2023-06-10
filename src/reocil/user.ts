import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserDataType } from '../types/userInfoType';

const { persistAtom } = recoilPersist();

export const userData = atom<UserDataType>({
  key: 'userData',
  default: {
    userName: '',
    PAT: '',
  },
  effects_UNSTABLE: [persistAtom],
});
