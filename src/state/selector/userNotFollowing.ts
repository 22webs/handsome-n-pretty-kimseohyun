import { selector } from 'recoil';
import { followersData, followingData } from '../atom/followingData';

export const userNotFollowing = selector({
  key: 'userNotFollowing',
  get: ({ get }) => {
    const following = get(followingData);
    const followers = get(followersData);

    const result = followers.filter((follower) => !following.includes(follower));

    return result;
  },
});
