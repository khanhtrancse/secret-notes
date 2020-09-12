export interface FieldError {
  domain: string;
  reason: string;
  message: string;
}

export interface BaseResponse<T> {
  code: number;
  data: T;
  errors?: FieldError[];
  page?: number;
  total_page?: number;
  count?: number;
  debugErrors?: any;
  message: string;
}
