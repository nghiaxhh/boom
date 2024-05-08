import http from '.'
import { apiUploadFile } from './apiRouter'

const uploadFile = (body) =>
  http.post(apiUploadFile, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

const FileServices = { uploadFile }

export default FileServices
