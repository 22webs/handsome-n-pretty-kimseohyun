import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followUsers } from '../../api/put';
import { followersData, followingData } from '../../state/atom/followingData';
import { userData } from '../../state/atom/user';
import { UserDataType } from '../../types/userDataType';
import * as St from './style';

export default function FollowUser() {
  const followers = useRecoilValue<string[]>(followersData);
  const followings = useRecoilValue<string[]>(followingData);
  const [notFollowingData, setNotFollowingData] = useState<string[]>([]);
  const [readyToFollowData, setReadyToFollowData] = useState<string[]>([]);
  const userInfo = useRecoilValue<UserDataType>(userData);
  const { PAT } = userInfo;
  const navigate = useNavigate();

  //맞팔이 아닌 유저를 notFollowingData에 넣는 함수
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
    setNotFollowingData(data);
  };

  useEffect(() => {
    check_notFollowUsers();
  }, []);

  //버튼을 클릭해서 선택
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

  //업데이트 함수
  const { mutate: followNotFollowingUser } = useMutation(followUsers, {
    onSuccess: () => {
      alert('팔로우되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
      alert('팔로우에 실패하였습니다.');
    },
  });

  //클릭한 유저만 팔로우
  const handle_Follow = () => {
    readyToFollowData.map((userName) => followNotFollowingUser({ userName, PAT }));
  };

  //맞팔이 아닌 사람 전체 팔로우
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
