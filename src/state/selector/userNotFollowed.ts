import { selector } from 'recoil';
import { followersData, followingData } from '../atom/followingData';

export const userNotFollowed = selector({
  key: 'userNotFollowing',
  get: ({ get }) => {
    const following = get(followingData);
    const followers = get(followersData);

    const result = following.filter((indivFollowing) => !followers.includes(indivFollowing));

    return result;
  },
});
