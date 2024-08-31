export interface HttpError extends Error {
  status: number
  details?: any | null
  errors?: any
}
