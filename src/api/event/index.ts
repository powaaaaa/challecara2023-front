/* eslint-disable */
import type * as Types from '@/libs/@types/api';

export type Methods = {
  post: {
    /** access_tokenをheaderに挿入 */
    reqHeaders: { Authorization: string };
    reqBody: Types.RegisterEventPayload;
  };
};
