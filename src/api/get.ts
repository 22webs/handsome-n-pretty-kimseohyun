import axios from 'axios';
import { UserDataType } from '../types/userDataType';
import UserInfoType from '../types/userInfoType';
import filterUserName from '../utils/filterUserName';

export async function getFollowings({ userName, PAT }: UserDataType) {
  const { data } = await axios.get<UserInfoType[]>(`https://api.github.com/users/${userName}/following`, {
    headers: {
      Authorization: `token ${PAT}`,
    },
  });

  return filterUserName(data);
}

export async function getFollowers({ userName, PAT }: UserDataType) {
  const { data } = await axios.get<UserInfoType[]>(`https://api.github.com/users/${userName}/followers`, {
    headers: {
      Authorization: `token ${PAT}`,
    },
  });

  return filterUserName(data);
}
