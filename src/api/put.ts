import { UserDataType } from '../types/userInfoType';

export function followUsers({ userName, PAT }: UserDataType) {
  return fetch(`https://api.github.com/user/following/${userName}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${PAT}`,
    },
  });
}
