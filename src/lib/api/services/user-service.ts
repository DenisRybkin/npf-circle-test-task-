import { User } from '@lib/api/models';
import { BaseApiService } from '@lib/api/services/base';
import { AxiosInstance } from 'axios/index';

export class UserService extends BaseApiService<User> {
  constructor(readonly client: AxiosInstance) {
    super(client, 'user');
  }
}
