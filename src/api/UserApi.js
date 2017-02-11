class UserApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getUserInfo() {
    const headers = this.requestHeaders()
    const request = new Request(`${process.env.API_HOST}/api/users/me`, {
      method: 'GET',
      headers: headers
    })

    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }
}

export default UserApi
