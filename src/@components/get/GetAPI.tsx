import { Octokit } from '@octokit/core';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { notFollowing } from '../../reocil/followingData';
import { userData } from '../../reocil/user';
import { UserDataType } from '../../types/userInfoType';
import * as St from './style';

function GetAPI() {
  const [followers, setFollowers] = useState<string[]>([]);
  const [followings, setFollowings] = useState<string[]>([]);
  const userInfo = useRecoilValue<UserDataType>(userData);
  const [notFollowingData, setNotFollowingData] = useRecoilState<string[]>(notFollowing);

  const func = async () => {
    const octokit = new Octokit({
      // auth: import.meta.env.VITE_APP_GITHUB_PAT,
      auth: `${userInfo?.PAT}`,
    });

    await octokit
      .request('GET /users/{username}/followers', {
        username: `${userInfo?.userName}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => {
        const { data } = res;
        for (let i = 0; i < data.length; i++) {
          if (!followers.includes(data[i].login)) setFollowers((prev) => prev.concat(data[i].login));
        }
      });

    await octokit
      .request('GET /user/following', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((res) => {
        const { data } = res;
        for (let i = 0; i < data.length; i++) {
          if (!followings.includes(data[i].login)) setFollowings((prev) => prev.concat(data[i].login));
        }
      });
  };

  useEffect(() => {
    func();
  }, []);

  return (
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
    </St.GetWrapper>
  );
}

export default GetAPI;
