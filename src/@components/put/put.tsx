import { useRecoilValue } from 'recoil';
import { followersData, followingData } from '../../reocil/followingData';
import * as St from './style';

export default function Put() {
  const followers = useRecoilValue<string[]>(followersData);
  const followings = useRecoilValue<string[]>(followingData);

  return (
    <>
      <St.FollowerWrapper>
        <St.Title>나를 팔로잉하지만 내가 팔로우하지 않는 사람</St.Title>
        {followers.length > 1 &&
          followers.map((x) => {
            if (!followings.includes(x)) return <St.NameBox key={x}>{x}</St.NameBox>;
          })}
      </St.FollowerWrapper>
    </>
  );
}
