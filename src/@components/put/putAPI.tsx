import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { followersData, followingData } from '../../reocil/followingData';
import * as St from './style';

export default function PutAPI() {
  const followers = useRecoilValue<string[]>(followersData);
  const followings = useRecoilValue<string[]>(followingData);
  const [readyToFollowData, setReadyToFollowData] = useState<string[]>([]);

  const handle_selectName = (user: string) => {
    if (check_isSelected(user)) {
      const removedData = readyToFollowData.filter((data) => data !== user);
      setReadyToFollowData(removedData);
    } else {
      setReadyToFollowData([...readyToFollowData, user]);
    }
  };

  const check_isSelected = (user: string) => {
    return readyToFollowData.includes(user);
  };

  return (
    <St.FollowerWrapper>
      <St.Title>유저 이름을 클릭해서 팔로우하거나, 모두 팔로우하기를 눌러주세요.</St.Title>
      {followers.length > 1 &&
        followers.map((user) => {
          if (!followings.includes(user))
            return (
              <St.NameBox key={user} onClick={() => handle_selectName(user)} $isSelected={check_isSelected(user)}>
                {user}
              </St.NameBox>
            );
        })}

      <St.Button>팔로우하기</St.Button>
      <St.Button>모두 팔로우하기</St.Button>
    </St.FollowerWrapper>
  );
}
