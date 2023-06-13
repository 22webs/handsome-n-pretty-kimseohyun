import axios from 'axios';
import { UserDataType } from '../types/userDataType';

export async function followUsers({ userName, PAT }: UserDataType) {
  const data = await axios.put(`https://api.github.com/user/following/${userName}`, '', {
    headers: {
      Authorization: `token ${PAT}`,
    },
  });
  return data;
}
