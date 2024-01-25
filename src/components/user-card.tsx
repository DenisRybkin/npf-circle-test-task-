import { Button } from '@components/ui';
import { User } from '@lib/api/models';
import { Trash2 } from 'lucide-react';

import { useAppDispatch } from '@/store';
import { removeUser } from '@/store/user';

interface UserCardProps {
  model: User;
}

export const UserCard = (props: UserCardProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => dispatch(removeUser({ id: props.model.id }));

  return (
    <div
      className="flex flex-col w-full gap-3 p-8 border border-primary-500/30 rounded-3xl bg-dark-2 hover:-translate-y-2 hover:shadow-md transition-all"
      data-te-animation-init
      data-te-animation-start="onHover"
      data-te-animation-reset="true"
      data-te-animation="[slide-in-up_1s_ease-in-out]"
    >
      <p>
        <b>Username: </b>@{props.model.username}
      </p>
      <p>
        <b>Name: </b>
        {props.model.name}
      </p>
      <p>
        <b>Email: </b>
        {props.model.email}
      </p>
      <Button
        data={{ leftIcon: <Trash2 /> }}
        onClick={handleDeleteClick}
        variant="destructive"
      >
        Delete
      </Button>
    </div>
  );
};
