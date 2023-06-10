import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userData } from '../state/user';
import { UserDataType } from '../types/userDataType';
import * as St from './style';

export default function Main() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState<UserDataType>(userData);

  const handle_moveToPage = (page: string) => {
    navigate(page);
  };

  // 요기는 이벤트 위임으로 처리하도록 변경하기 !!!
  const handle_inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, userName: e.target.value });
  };

  const handle_inputPAT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, PAT: e.target.value });
  };

  return (
    <St.MainWrapper>
      <St.Title>형그니와 지수수의 22웹스</St.Title>
      <St.Input type="text" placeholder="깃허브 유저 이름을 입력해주세요" onChange={handle_inputUserName} />
      <St.Input type="text" placeholder="PAT를 입력해주세요" onChange={handle_inputPAT} />
      <St.Button onClick={() => handle_moveToPage('/get')}>깃허브 팔로우 현황 보러가기</St.Button>
      <St.Button onClick={() => handle_moveToPage('/put')}>맞팔하지 않은 친구 팔로우하기</St.Button>
    </St.MainWrapper>
  );
}
