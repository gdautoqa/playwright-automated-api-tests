import { APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi';

export class ReqResApi extends BaseApi {
  async getUser(id: number): Promise<APIResponse> {
    return this.sendAndLog('get', `/users/${id}`);
  }

  async listUsers(params?: { page?: number; delay?: number }): Promise<APIResponse> {
    let query = '';
    if (params) {
      const qs = new URLSearchParams();
      if (params.page) qs.set('page', params.page.toString());
      if (params.delay) qs.set('delay', params.delay.toString());
      query = '?' + qs.toString();
    }
    return this.sendAndLog('get', `/users${query}`);
  }

  async listResource(): Promise<APIResponse> {
    return this.sendAndLog('get', '/unknown');
  }

  async singleResource(id: number): Promise<APIResponse> {
    return this.sendAndLog('get', `/unknown/${id}`);
  }

  async createUser(data: { name: string; job: string }): Promise<APIResponse> {
    return this.sendAndLog('post', '/users', { data });
  }

  async updateUser(id: number, data: { name: string; job: string }): Promise<APIResponse> {
    return this.sendAndLog('put', `/users/${id}`, { data });
  }

  async patchUser(id: number, data: { name: string; job: string }): Promise<APIResponse> {
    return this.sendAndLog('patch', `/users/${id}`, { data });
  }

  async deleteUser(id: number): Promise<APIResponse> {
    return this.sendAndLog('delete', `/users/${id}`);
  }

  async registerUser(data: { email: string; password?: string }): Promise<APIResponse> {
    return this.sendAndLog('post', '/register', { data });
  }

  async loginUser(data: { email: string; password?: string }): Promise<APIResponse> {
    return this.sendAndLog('post', '/login', { data });
  }
}
