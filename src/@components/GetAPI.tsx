import { Octokit } from '@octokit/core';
import { useEffect, useState } from 'react';

function GetAPI() {
  const [followers, setFollowers] = useState<string[]>([]);
  const [followings, setFollowings] = useState<string[]>([]);

  const func = async () => {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_APP_GITHUB_PAT,
    });

    await octokit
      .request('GET /users/{username}/followers', {
        username: 'Geun-Oh',
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
    <div style={{ display: 'flex' }}>
      <div>
        나를 팔로우하는 사람
        {followers.map((x) => (
          <p key={x}>{x}</p>
        ))}
      </div>
      <div>
        내가 팔로잉하는 사람
        {followings.map((x) => (
          <h2 key={x}>{x}</h2>
        ))}
      </div>
      <div>
        내가 팔로우하지만 나를 팔로잉하지 않는 사람
        {followings.length > 1 &&
          followings.map((x) => {
            if (!followers.includes(x)) return <h2 key={x}>{x}</h2>;
          })}
      </div>
      <div>
        나를 팔로잉하지만 내가 팔로우하지 않는 사람
        {followers.length > 1 &&
          followers.map((x) => {
            if (!followings.includes(x)) return <h2 key={x}>{x}</h2>;
          })}
      </div>
    </div>
  );
}

export default GetAPI;
