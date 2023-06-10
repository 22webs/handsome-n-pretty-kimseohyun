import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { followersData, followingData } from '../../reocil/followingData';
import { userData } from '../../reocil/user';
import { UserDataType } from '../../types/userInfoType';
import * as St from './style';
import { getFollowers, getFollowings } from '../../api/get';

function GetAPI() {
  const userInfo = useRecoilValue<UserDataType>(userData);
  const [followers, setFollowers] = useRecoilState(followersData);
  const [followings, setFollowings] = useRecoilState(followingData);
  const navigate = useNavigate();

  useEffect(() => {
    getFollowings(userInfo).then((res) => setFollowings(res!));
    getFollowers(userInfo).then((res) => setFollowers(res!));
  }, [userInfo]);

  const handle_moveToFollow = () => {
    navigate('/put');
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
            {followings.length > 1 &&
              followings.map((x) => {
                if (!followers.includes(x)) return <St.NameBox key={x}>{x}</St.NameBox>;
              })}
          </St.FollowerWrapper>
          <St.FollowerWrapper>
            <St.Title>나를 팔로잉하지만 내가 팔로우하지 않는 사람</St.Title>
            {followers.length > 1 &&
              followers.map((x) => {
                if (!followings.includes(x)) return <St.NameBox key={x}>{x}</St.NameBox>;
              })}
          </St.FollowerWrapper>
          <St.Button onClick={handle_moveToFollow}>팔로우하러가기</St.Button>
        </St.GetWrapper>
      )}
    </>
  );
}

export default GetAPI;
