import { Context } from 'aws-lambda';

import { noop } from '../utils';

export function createHandlerContext(context?: Partial<Context>): Context {
  return {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: '',
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    getRemainingTimeInMillis: () => 0,
    done: noop,
    fail: noop,
    succeed: noop,
    ...context,
  };
}
