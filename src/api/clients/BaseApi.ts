import { APIRequestContext, APIResponse } from '@playwright/test';
import { logRequest, logResponse } from '../helpers/apiLogger';

export class BaseApi {
  protected request: APIRequestContext;
  protected baseURL: string;

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL;
  }

  protected endpoint(path: string): string {
    return `${this.baseURL}${path}`;
  }

  protected async sendAndLog(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    path: string,
    options?: any
  ): Promise<APIResponse> {
    const url = this.endpoint(path);
    if (options?.data) {
      logRequest(url, method, options.data);
    } else {
      logRequest(url, method);
    }
    const response: APIResponse = await (this.request as any)[method](url, options);
    await logResponse(url, response);
    return response;
  }

  protected async parseJson(response: APIResponse): Promise<any> {
    return response.json();
  }
}
