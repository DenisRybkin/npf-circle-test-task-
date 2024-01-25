import { AddUserDialog } from '@components/dialogs/add-user-dialog';
import { Button } from '@components/ui';
import { Plus, RotateCcw, SaveAll } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/store';
import {
  fetchUsers,
  getLoadingInfo,
  getUsers,
  saveChanges,
} from '@/store/user';

export const ListPanel = () => {
  const loadingInfo = useSelector(getLoadingInfo);
  const users = useSelector(getUsers);
  const dispatch = useAppDispatch();

  const [isOpenAddUserDialog, setIsOpenAddUserDialog] =
    useState<boolean>(false);

  const handleOpenAddUserDialog = () => setIsOpenAddUserDialog(true);

  const handleSaveChange = () => dispatch(saveChanges(users));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleRefresh = () => dispatch(fetchUsers());

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <AddUserDialog
        isOpen={isOpenAddUserDialog}
        onOpenChange={setIsOpenAddUserDialog}
      />
      <div className="flex w-full gap-4 items-center justify-end">
        <Button
          onClick={handleRefresh}
          variant="primary"
          data={{ leftIcon: <RotateCcw />, isLoading: loadingInfo.isFetching }}
        >
          Refresh
        </Button>
        <Button
          variant="primary"
          onClick={handleSaveChange}
          data={{ leftIcon: <SaveAll />, isLoading: loadingInfo.isUpdating }}
        >
          Save Changes
        </Button>
        <Button
          onClick={handleOpenAddUserDialog}
          data={{ leftIcon: <Plus /> }}
          variant="primary"
        >
          Add User
        </Button>
      </div>
    </>
  );
};
