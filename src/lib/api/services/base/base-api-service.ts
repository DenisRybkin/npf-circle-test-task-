import { ModelWithId } from '@lib/api/models';
import { AxiosInstance } from 'axios';

export class BaseApiService<T extends ModelWithId> {
  constructor(readonly client: AxiosInstance, readonly uri: string) {}

  public async getAll(): Promise<T[]> {
    const { data } = await this.client.get<T[]>(this.uri);
    return data as T[];
  }

  public async getById(id: number): Promise<T> {
    const { data } = await this.client.get<T>(`${this.uri}/${id}`);
    return data;
  }

  public async create(payload: Omit<T, 'id'>): Promise<T> {
    return await this.client.post(this.uri, payload);
  }

  public async delete(id: number): Promise<void> {
    await this.client.delete(`${this.uri}/${id}`);
  }

  public async updateById(id: number, payload: T): Promise<T> {
    return await this.client.patch(`${this.uri}/${id}`, payload);
  }

  public async fullUpdate(payload: T[]) {
    await this.client.patch(this.uri, payload);
  }
}
