import axios from 'axios'

export const API_ENDPOINT = process.env.ENDPOINT
  ? process.env.ENDPOINT
  : ' http://localhost:3006'

export function apiRequest(token?: string) {
  let headers
  if (token) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    }
  } else {
    headers = {
      'Content-Type': 'application/json',
    }
  }
  return axios.create({
    baseURL: API_ENDPOINT,
    headers: headers,
  })
}
