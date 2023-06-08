import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userData } from '../reocil/user';
import { UserDataType } from '../types/userInfoType';
import * as St from './style';

export default function Main() {
  const navigate = useNavigate();
  const [data, setData] = useRecoilState<UserDataType>(userData);

  const handleMoveToPage = (page: string) => {
    navigate(page);
  };

  const handleInputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, userName: e.target.value });
  };

  const handleInputPAT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, PAT: e.target.value });
  };

  return (
    <St.MainWrapper>
      <St.Title>형그니와 지수수의 22웹스</St.Title>
      <St.Input type="text" placeholder="깃허브 유저 이름을 입력해주세요" onChange={handleInputUserName} />
      <St.Input type="text" placeholder="PAT를 입력해주세요" onChange={handleInputPAT} />
      <St.Button onClick={() => handleMoveToPage('/get')}>맞팔하지 않은 친구 보러가기</St.Button>
      <St.Button onClick={() => handleMoveToPage('/put')}>맞팔하지 않은 친구 팔로우하기</St.Button>
    </St.MainWrapper>
  );
}
