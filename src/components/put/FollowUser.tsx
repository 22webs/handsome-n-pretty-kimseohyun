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
  const [successCounting, setSuccessCounting] = useState({
    now: 0,
    total: 0,
  });

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
  const { mutate: followNotFollowingUser, isLoading } = useMutation(followUsers, {
    onSuccess: () => {
      //모두 다 팔로우된 경우에만 팔로우되도록
      if (successCounting.now === successCounting.total) {
        alert('팔로우되었습니다.');
        navigate('/');
        setSuccessCounting({ now: 0, total: 0 });
      }
    },
    onError: (error) => {
      console.log(error);
      alert('팔로우에 실패하였습니다.');
    },
  });

  //클릭한 유저만 팔로우
  const handle_Follow = () => {
    const readyFollows: string[] = [];
    readyToFollowData.map((userName) => readyFollows.push(userName));
    setSuccessCounting({ ...successCounting, total: readyFollows.length });

    followPromiseAll(readyFollows);
  };

  //맞팔이 아닌 사람 전체 팔로우
  const handle_FollowAll = () => {
    const notFollows: string[] = [];
    notFollowing.map((userName) => notFollows.push(userName));

    setSuccessCounting({ ...successCounting, total: notFollows.length });

    followPromiseAll(notFollows);
  };

  //한번에 팔로우하는 로직
  const followPromiseAll = (followData: string[]) => {
    Promise.allSettled(followData.map((userName) => followNotFollowingUser({ userName, PAT }))).then((results) => {
      results.forEach((result, num) => {
        if (result.status == 'fulfilled') {
          setSuccessCounting({ ...successCounting, now: successCounting.now + 1 });
        }
        if (result.status == 'rejected') {
          alert(`${followData[num]}: ${result.reason}`);
        }
      });
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
