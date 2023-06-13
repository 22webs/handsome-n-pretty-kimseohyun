import { useEffect } from 'react';
import { useQueries } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getFollowers, getFollowings } from '../../api/get';
import { followersData, followingData } from '../../state/atom/followingData';
import { userData } from '../../state/atom/user';
import { UserDataType } from '../../types/userDataType';
import * as St from './style';
import { userNotFollowed } from '../../state/selector/userNotFollowed';
import { userNotFollowing } from '../../state/selector/userNotFollowing';

export default function FindFollows() {
  const userInfo = useRecoilValue<UserDataType>(userData);
  const [followers, setFollowers] = useRecoilState(followersData);
  const [followings, setFollowings] = useRecoilState(followingData);
  const notFollowed = useRecoilValue(userNotFollowed);
  const notFollowing = useRecoilValue(userNotFollowing);
  const navigate = useNavigate();

  const [{ data: queriedFollowingsData }, { data: queriedFollowersData }] = useQueries([
    { queryKey: ['getFollowingData', userInfo], queryFn: () => getFollowings(userInfo) },
    { queryKey: ['getFollowersData', userInfo], queryFn: () => getFollowers(userInfo) },
  ]);

  useEffect(() => {
    setFollowings(queriedFollowingsData!);
    setFollowers(queriedFollowersData!);
  }, [queriedFollowingsData, queriedFollowersData]);

  const handle_moveToFollow = () => {
    navigate('/follow-users');
  };

  return (
    <>
      {followers && followings && (
        <St.GetWrapper>
          <St.FollowerWrapper>
            <St.Title>나를 팔로우하는 사람</St.Title>
            {followers.map((x) => (
              <St.NameBox key={x}>{x}</St.NameBox>
            ))}
          </St.FollowerWrapper>
          <St.FollowerWrapper>
            <St.Title>내가 팔로잉하는 사람</St.Title>
            {followings.map((x) => (
              <St.NameBox key={x}>{x}</St.NameBox>
            ))}
          </St.FollowerWrapper>
          <St.FollowerWrapper>
            <St.Title>내가 팔로우하지만 나를 팔로잉하지 않는 사람</St.Title>
            {notFollowed.map((x) => (
              <St.NameBox key={x}>{x}</St.NameBox>
            ))}
          </St.FollowerWrapper>
          <St.FollowerWrapper>
            <St.Title>나를 팔로잉하지만 내가 팔로우하지 않는 사람</St.Title>
            {notFollowing.map((x) => (
              <St.NameBox key={x}>{x}</St.NameBox>
            ))}
          </St.FollowerWrapper>
          <St.Button onClick={handle_moveToFollow}>팔로우하러가기</St.Button>
        </St.GetWrapper>
      )}
    </>
  );
}
