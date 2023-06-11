import UserInfoType from '../types/userInfoType';

export default function filterUserName(data: UserInfoType[]) {
  return data.map((x) => x.login);
}
