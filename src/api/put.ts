import { UserDataType } from '../types/userInfoType';

// export async function followUsers({ userName, PAT }: UserDataType) {
//   const data = await axios.put(`https://api.github.com/user/following/${userName}`, {
//     headers: {
//       Authorization: `token ${PAT}`,
//     },
//   });
//   return data;
// }

export function followUsers({ userName, PAT }: UserDataType) {
  return fetch(`https://api.github.com/user/following/${userName}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${PAT}`,
    },
  });
}

// export function followUsers({ userName, PAT }: UserDataType) {
//   return axios.put(`https://api.github.com/user/following/${userName}`, {
//     headers: {
//       Authorization: `token ${PAT}`,
//     },
//   });
// }
