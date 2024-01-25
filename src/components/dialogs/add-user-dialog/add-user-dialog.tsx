import userAdd from '@assets/icons/user-add.svg';
import { IBaseDialogProps } from '@components/dialogs';
import { AddUserForm } from '@components/forms/add-user-form';
import { Button } from '@components/ui';
import { DialogAdapter, DialogFooter } from '@components/ui/dialog';
import { AddUserSchema } from '@lib/utils/validations/add-user-schema';
import { z } from 'zod';

import { useAppDispatch } from '@/store';
import { addUser } from '@/store/user/user-slice';

interface AddUserDialogProps extends IBaseDialogProps {}

export const AddUserDialog = (props: AddUserDialogProps) => {
  const dispatch = useAppDispatch();

  const handleAddUser = (dto: z.infer<typeof AddUserSchema>) => {
    dispatch(addUser({ ...dto, id: Date.now() }));
    props.onOpenChange(false);
  };

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title="Adding a user"
    >
      <div className="flex w-full justify-center mt-5">
        <img src={userAdd} alt="logo" className="w-28" />
      </div>
      <AddUserForm
        onSubmit={handleAddUser}
        extraFormContent={
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </DialogFooter>
        }
      />
    </DialogAdapter>
  );
};
