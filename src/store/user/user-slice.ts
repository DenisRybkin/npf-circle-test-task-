import { toast } from '@components/ui/use-toast';
import { api } from '@lib/api';
import { User } from '@lib/api/models';
import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { UserActionsPayload, UserStore } from '@/store/user/types';

const createSliceWithThunks = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
});

const initialState: UserStore = {
  isFetching: false,
  isUpdating: false,
  users: [],
};

export const userSlice = createSliceWithThunks({
  name: 'user',
  initialState: initialState,
  reducers: create => ({
    removeUser: create.reducer<UserActionsPayload['removeUserPayload']>(
      (state, action) => {
        state.users = state.users.filter(user => user.id != action.payload.id);
      }
    ),
    addUser: create.reducer<UserActionsPayload['addUserPayload']>(
      (state, action) => {
        state.users.push(action.payload);
      }
    ),
    fetchUsers: create.asyncThunk(async () => await api.user.getAll(), {
      pending: state => {
        state.isFetching = true;
      },
      rejected: state => {
        state.isFetching = false;
        toast({
          title: 'Something went wrong...',
          variant: 'destructive',
        });
      },
      fulfilled: (state, action) => {
        state.isFetching = false;
        state.users = action.payload;
      },
    }),
    saveChanges: create.asyncThunk(
      async (data: User[]) => await api.user.fullUpdate(data),
      {
        pending: state => {
          state.isUpdating = true;
        },
        rejected: state => {
          state.isUpdating = false;
          toast({
            title: 'Something went wrong...',
            variant: 'destructive',
          });
        },
        fulfilled: state => {
          state.isUpdating = false;
          toast({ title: 'Data saving was successful', variant: 'success' });
        },
      }
    ),
  }),
  selectors: {
    getUsers: state => state.users,
    getLoadingInfo: state => ({
      isFetching: state.isFetching,
      isUpdating: state.isUpdating,
    }),
  },
});

export const { fetchUsers, addUser, removeUser, saveChanges } =
  userSlice.actions;
export const { getUsers, getLoadingInfo } = userSlice.selectors;
