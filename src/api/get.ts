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

  // return axios
  //   .get<UserInfoType[]>(`https://api.github.com/users/${userName}/following`, {
  //     headers: {
  //       Authorization: `token ${PAT}`,
  //     },
  //   })
  //   .then((res) => {
  //     const { data } = res;

  //     const followerNames = data.map((x) => x.login);

  //     return followerNames;
  //   });
}

export async function getFollowers({ userName, PAT }: UserDataType) {
  const { data } = await axios.get<UserInfoType[]>(`https://api.github.com/users/${userName}/followers`, {
    headers: {
      Authorization: `token ${PAT}`,
    },
  });

  return filterUserName(data);

  // return axios
  //   .get(`https://api.github.com/users/${userName}/followers`, {
  //     headers: {
  //       Authorization: `token ${PAT}`,
  //     },
  //   })
  //   .then((res) => {
  //     const { data } = res;
  //     const followingNames: string[] = [];

  //     for (let i = 0; i < data.length; i++) {
  //       if (!followingNames.includes(data[i].login)) followingNames.push(data[i].login);
  //     }

  //     return followingNames;
  //   });
}
