import { Octokit } from '@octokit/core';
import axios from 'axios';
import { useEffect } from 'react';

function GetAPI() {
  // const func = async () => {
  //   const octokitInstance = new Octokit({
  //     auth: import.meta.env.VITE_APP_GITHUB_PAT,
  //   });

  //   await octokitInstance.request('GET /user', {
  //     headers: {
  //       'x-github-api-version': '2022-11-28',
  //     },
  //   });
  // };

  const func = async () => {
    const octokit = new Octokit({});

    await octokit.request('GET /octokit').then((res) => console.log(res));
  };

  useEffect(() => {
    func();
  }, []);

  return <div>Get</div>;
}

export default GetAPI;
