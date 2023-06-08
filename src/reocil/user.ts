import { atom } from 'recoil';
import { UserDataType } from '../types/userInfoType';

export const userData = atom<UserDataType>({
  key: 'userData',
  default: {
    userName: '',
    PAT: '',
  },
});
