export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RequestOptions {
  joinParamsToUrl?: boolean // Splicing request parameters to url

  formatDate?: boolean // Format request parameter time

  isTransformResponse?: boolean // Whether to process the request result

  isReturnNativeResponse?: boolean // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers

  joinPrefix?: boolean // Whether to join url

  apiUrl?: string // Interface address, use the default apiUrl if you leave it blank

  urlPrefix?: string // 请求拼接路径

  errorMessageMode?: ErrorMessageMode // Error message prompt type

  joinTime?: boolean // Whether to add a timestamp

  ignoreCancelToken?: boolean

  withToken?: boolean // Whether to send token in header
}

export interface ResponseResult<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}
