import { useNavigate } from 'react-router-dom';
import * as St from './style';

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <St.Button>맞팔하지 않은 친구 보러가기</St.Button>
      <St.Button>맞팔하지 않은 친구 팔로우하기</St.Button>
    </>
  );
}
