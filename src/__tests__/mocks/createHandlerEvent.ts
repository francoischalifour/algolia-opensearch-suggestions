export function createHandlerEvent<TEvent>(event?: Partial<TEvent>) {
  return {
    path: '',
    httpMethod: '',
    headers: new Headers(),
    queryStringParameters: {},
    body: '',
    isBase64Encoded: false,
    ...event,
  };
}
