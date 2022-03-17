export default {
  get: (url, customHeaders = {}) => {
    const token = localStorage.getItem("accessToken")
    return fetch(process.env.REACT_APP_API_URI + url, {
      method: 'GET',
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token !== null ? `Bearer ${token}` : '',
        ...customHeaders
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch(error => {
      console.error(error)
      alert('Kesalahan pada server, mohon mencoba lagi.')
    })
  },

  post: (url, bodyData = {}, customHeaders = {}) => {
    const token = localStorage.getItem("accessToken")
    return fetch(process.env.REACT_APP_API_URI + url, {
      method: 'POST',
      timeout: 120000,
      body: JSON.stringify(bodyData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token !== null ? `Bearer ${token}` : '',
        ...customHeaders
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch(error => {
      console.error(error)
      alert('Kesalahan pada server, mohon mencoba lagi.')
    })
  },

  postData: (url, bodyData = {}, customHeaders = {}) => {
    const token = localStorage.getItem("accessToken")
    return fetch(process.env.REACT_APP_API_URI + url, {
      method: 'POST',
      timeout: 120000,
      body: bodyData,
      headers: {
        'Authorization': token !== null ? `Bearer ${token}` : '',
        ...customHeaders
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch(error => {
      console.error(error)
      alert('Kesalahan pada server, mohon mencoba lagi.')
    })
  },

  delete: (url, customHeaders = {}) => {
    const token = localStorage.getItem("accessToken")
    return fetch(process.env.REACT_APP_API_URI + url, {
      method: 'DELETE',
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token !== null ? `Bearer ${token}` : '',
        ...customHeaders
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
    }).catch(error => {
      console.error(error)
      alert('Kesalahan pada server, mohon mencoba lagi.')
    })
  }
}
