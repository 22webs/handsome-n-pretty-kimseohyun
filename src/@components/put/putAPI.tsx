import { useRecoilValue } from 'recoil';
import { followersData, followingData } from '../../reocil/followingData';
import * as St from './style';

export default function PutAPI() {
  const followers = useRecoilValue<string[]>(followersData);
  const followings = useRecoilValue<string[]>(followingData);

  return (
    <St.FollowerWrapper>
      <St.Title>유저 이름을 클릭해서 팔로우하거나, 모두 팔로우하기를 눌러주세요.</St.Title>
      {followers.length > 1 &&
        followers.map((x) => {
          if (!followings.includes(x)) return <St.NameBox key={x}>{x}</St.NameBox>;
        })}

      <St.Button>팔로우하기</St.Button>
      <St.Button>모두 팔로우하기</St.Button>
    </St.FollowerWrapper>
  );
}
