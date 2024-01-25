import { ModelWithId } from '@lib/api/models';

export interface User extends ModelWithId {
  name: string;
  username: string;
  email: string;
}
