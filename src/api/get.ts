import axios from 'axios';
import { UserDataType } from '../types/userDataType';

export function getFollowings({ userName, PAT }: UserDataType) {
  return axios
    .get(`https://api.github.com/users/${userName}/following`, {
      headers: {
        Authorization: `token ${PAT}`,
      },
    })
    .then((res) => {
      const { data } = res;
      const followerNames: string[] = [];

      for (let i = 0; i < data.length; i++) {
        if (!followerNames.includes(data[i].login)) followerNames.push(data[i].login);
      }

      return followerNames;
    });
}

export function getFollowers({ userName, PAT }: UserDataType) {
  return axios
    .get(`https://api.github.com/users/${userName}/followers`, {
      headers: {
        Authorization: `token ${PAT}`,
      },
    })
    .then((res) => {
      const { data } = res;
      const followingNames: string[] = [];

      for (let i = 0; i < data.length; i++) {
        if (!followingNames.includes(data[i].login)) followingNames.push(data[i].login);
      }

      return followingNames;
    });
}
