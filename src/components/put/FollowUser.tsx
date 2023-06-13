import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followUsers } from '../../api/put';
import LoadingPage from '../../pages/LoadingPage';
import { userData } from '../../state/atom/user';
import { userNotFollowing } from '../../state/selector/userNotFollowing';
import { UserDataType } from '../../types/userDataType';
import * as St from './style';

export default function FollowUser() {
  const [readyToFollowData, setReadyToFollowData] = useState<string[]>([]);
  const notFollowing = useRecoilValue(userNotFollowing);
  const userInfo = useRecoilValue<UserDataType>(userData);
  const { PAT } = userInfo;
  const navigate = useNavigate();

  //버튼을 클릭해서 선택
  const handleSelectName = (user: string) => {
    if (checkIsSelected(user)) {
      const removedData = readyToFollowData.filter((data) => data !== user);
      setReadyToFollowData(removedData);
    } else {
      setReadyToFollowData([...readyToFollowData, user]);
    }
  };

  const checkIsSelected = (user: string) => {
    return readyToFollowData.includes(user);
  };

  //업데이트 함수
  const { mutate: followNotFollowingUser, isLoading } = useMutation(followUsers, {
    onError: (error) => {
      alert(error + '팔로우에 실패하였습니다.');
    },
  });

  //클릭한 유저만 팔로우
  const handleFollow = () => {
    const readyFollows: string[] = [];
    readyToFollowData.map((userName) => readyFollows.push(userName));

    followPromiseAll(readyFollows);
  };

  //맞팔이 아닌 사람 전체 팔로우
  const handleFollowAll = () => {
    const notFollows: string[] = [];
    notFollowing.map((userName) => notFollows.push(userName));

    followPromiseAll(notFollows);
  };

  //한번에 팔로우하는 로직
  const followPromiseAll = (followData: string[]) => {
    Promise.allSettled(followData.map((userName) => followNotFollowingUser({ userName, PAT }))).then(() => {
      alert('팔로우되었습니다.');
      navigate('/');
    });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <St.FollowerWrapper>
      <St.Title>유저 이름을 클릭해서 팔로우하거나, 모두 팔로우하기를 눌러주세요.</St.Title>
      {notFollowing.map((user) => {
        return (
          <St.NameBox key={user} onClick={() => handleSelectName(user)} $isSelected={checkIsSelected(user)}>
            {user}
          </St.NameBox>
        );
      })}

      <St.Button onClick={handleFollow}>팔로우하기</St.Button>
      <St.Button onClick={handleFollowAll}>모두 팔로우하기</St.Button>
    </St.FollowerWrapper>
  );
}
