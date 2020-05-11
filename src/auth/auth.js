import API from '../redux/actions/api'
class Auth {
    constructor() {
        this.authenticated = false
    }

    login(credentials, cb) {
        API.post('/authenticate', credentials)
        .then(res => {
            if(res.data.success) {
                this.authenticated = true
                // Add a request interceptor
                localStorage.setItem('token', res.data.token)
            }
        })
        cb()
    }

    logout(cb) {
        this.authenticated = false
        localStorage.setItem('token', '')
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()