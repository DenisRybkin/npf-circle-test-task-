import { CircularLoader } from '@components/ui/loader';
import { UserCard } from '@components/user-card';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { getLoadingInfo, getUsers } from '@/store/user/user-slice';

export const UserCardList = () => {
  const users = useSelector(getUsers);
  const loadingInfo = useSelector(getLoadingInfo);
  const [parent] = useAutoAnimate({ easing: 'linear' });

  return (
    <>
      {users.length != 0 ? (
        <div
          ref={parent}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {users.map(user => (
            <UserCard model={user} key={user.id} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          {loadingInfo.isFetching ? (
            <CircularLoader size="xl" />
          ) : (
            <img src="/empty-content.png" alt="empty content" />
          )}
        </div>
      )}
    </>
  );
};
