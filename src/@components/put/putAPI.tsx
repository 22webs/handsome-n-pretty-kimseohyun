import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followUsers } from '../../api/put';
import { followersData, followingData } from '../../reocil/followingData';
import { userData } from '../../reocil/user';
import { UserDataType } from '../../types/userInfoType';
import * as St from './style';

export default function PutAPI() {
  const followers = useRecoilValue<string[]>(followersData);
  const followings = useRecoilValue<string[]>(followingData);
  const [notFollowingData, setNowFollowingData] = useState<string[]>([]);
  const [readyToFollowData, setReadyToFollowData] = useState<string[]>([]);
  const userInfo = useRecoilValue<UserDataType>(userData);
  const { PAT } = userInfo;
  const navigate = useNavigate();

  const check_notFollowUsers = () => {
    const data: string[] = [];
    {
      followers.length > 1 &&
        followers.map((user) => {
          if (!followings.includes(user) && !data.includes(user)) {
            data.push(user);
          }
        });
    }
    setNowFollowingData(data);
  };

  useEffect(() => {
    check_notFollowUsers();
  }, []);

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

  const { mutate: followNotFollowingUser } = useMutation(followUsers, {
    onSuccess: () => {
      alert('팔로우되었습니다.');
      navigate('/');
    },
    onError: () => {
      alert('팔로우에 실패하였습니다.');
    },
  });

  const handle_Follow = () => {
    readyToFollowData.map((userName) => followNotFollowingUser({ userName, PAT }));
  };

  const handle_FollowAll = () => {
    notFollowingData.map((userName) => followNotFollowingUser({ userName, PAT }));
  };

  return (
    <St.FollowerWrapper>
      <St.Title>유저 이름을 클릭해서 팔로우하거나, 모두 팔로우하기를 눌러주세요.</St.Title>
      {notFollowingData?.map((user) => {
        return (
          <St.NameBox key={user} onClick={() => handle_selectName(user)} $isSelected={check_isSelected(user)}>
            {user}
          </St.NameBox>
        );
      })}

      <St.Button onClick={handle_Follow}>팔로우하기</St.Button>
      <St.Button onClick={handle_FollowAll}>모두 팔로우하기</St.Button>
    </St.FollowerWrapper>
  );
}
