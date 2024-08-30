export interface HttpError extends Error {
  status: number
  details?: any | null
  errors?: any
}

// FIXME: fix and rewrite error handling
