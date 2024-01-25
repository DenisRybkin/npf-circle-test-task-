import { User } from '@lib/api/models';

export interface UserStore {
  isFetching: boolean;
  isUpdating: boolean;
  users: User[];
}

export interface RemoveUserPayload {
  id: number;
}

export interface AddUserPayload extends User {}

export interface AsyncThunkPayload {
  onSuccess: () => void;
  onError: () => void;
}

export interface UserActionsPayload {
  removeUserPayload: RemoveUserPayload;
  addUserPayload: AddUserPayload;
  asyncThunkPayload: AsyncThunkPayload;
}
