import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { AuthState } from '../types/auth'

export const useGetStateUser = () => {
  return useSelector<RootState, AuthState>((state) => state.auth)
}
