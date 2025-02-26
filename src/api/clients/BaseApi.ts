import { APIRequestContext, APIResponse } from '@playwright/test';
import { logRequest, logResponse } from '../helpers/apiLogger';

export class BaseApi {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  protected async sendAndLog(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    path: string,
    options?: { data?: Record<string, unknown> },
  ): Promise<APIResponse> {
    const normalizedPath = path.startsWith('/api')
      ? path
      : `/api${path.startsWith('/') ? path : `/${path}`}`;

    if (options?.data) {
      logRequest(normalizedPath, method, options.data);
    } else {
      logRequest(normalizedPath, method);
    }

    try {
      const response: APIResponse = await this.request[method](
        normalizedPath,
        options,
      );
      await logResponse(normalizedPath, response);
      return response;
    } catch (error) {
      console.error(
        `Error during ${method.toUpperCase()} request to ${path}:`,
        error,
      );
      throw error;
    }
  }

  protected async parseJson(response: APIResponse): Promise<unknown> {
    return response.json();
  }
}
