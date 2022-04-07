const getToken = () => {
  const userData = localStorage.getItem('auth')
  const token = userData && JSON.parse(userData) && JSON.parse(userData).token
  return token ? token.length === 32 && token : false
}

export default getToken
