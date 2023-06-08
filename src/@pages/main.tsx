import { useNavigate } from 'react-router-dom';
import * as St from './style';

export default function Main() {
  const navigate = useNavigate();

  const handleMoveToPage = (page: string) => {
    navigate(page);
  };

  return (
    <>
      <h1>형그니와 지수수의 22웹스</h1>
      <St.Button onClick={() => handleMoveToPage('/get')}>맞팔하지 않은 친구 보러가기</St.Button>
      <St.Button onClick={() => handleMoveToPage('/put')}>맞팔하지 않은 친구 팔로우하기</St.Button>
    </>
  );
}
