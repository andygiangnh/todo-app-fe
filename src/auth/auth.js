import API from '../redux/actions/api'
class Auth {

    async login(credentials) {
        try {
            const res = await API.post('/authenticate', credentials)
            if(res.data.success) {
                localStorage.setItem('token', res.data.token)
            }
        } catch(err) {}
    }

    logout(cb) {
        localStorage.removeItem('token')
        cb()
    }

    isAuthenticated() {
        return !!localStorage.getItem('token')
    }
}

export default new Auth()