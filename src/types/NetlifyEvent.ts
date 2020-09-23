export type NetlifyEvent = {
  path: string;
  httpMethod: string;
  headers: Headers;
  queryStringParameters: Record<string, string>;
  body: string;
  isBase64Encoded: boolean;
};
