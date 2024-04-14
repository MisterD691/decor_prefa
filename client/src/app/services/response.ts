export interface ResponseData {
  code?: number;
  message?: string;
	description?: string;
	datas?: any;
}

export type Response<T = any> = ResponseData;
