import { APIResponse } from 'playwright/test';

export function logRequest(url: string, method: string, payload?: Record<string, unknown>): void {
  console.log(`Sending ${method.toUpperCase()} request to ${url}`);
  if (payload) {
    console.log('Payload:', JSON.stringify(payload, null, 2));
  }
}

export async function logResponse(url: string, response: APIResponse) {
  const startTime = Date.now();
  try {
    const data = await response.json();
    const duration = Date.now() - startTime;
    console.log(`Response from ${url} (status: ${response.status()}, duration: ${duration}ms):`, data);
  } catch (error) {
    console.log(`Response from ${url} is not JSON or failed to parse.`);
    console.error(error);
  }
}
