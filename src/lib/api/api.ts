import { apiClient } from '@lib/api/client';
import { UserService } from '@lib/api/services/user-service';
import { AxiosInstance } from 'axios';

class Api {
  public readonly user: UserService;

  constructor(client: AxiosInstance) {
    this.user = new UserService(client);
  }
}

export const api = new Api(apiClient);
