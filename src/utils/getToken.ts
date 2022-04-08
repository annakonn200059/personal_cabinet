const getToken = () => {
  const userData = localStorage.getItem('auth')
  const token =
    userData && JSON.parse(userData) && JSON.parse(userData).accessToken
  return token ? token.length > 170 && token : false
}

export default getToken
