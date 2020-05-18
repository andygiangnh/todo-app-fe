import API from '../redux/actions/api'
class Auth {

    async login(credentials) {
        try {
            const res = await API.post('/authenticate', credentials)
            if(res.data.success) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))

                return res.data.user
            }
        } catch(err) {
            return undefined
        }
    }

    logout(cb) {
        localStorage.removeItem('token')
        localStorage.clear();
        cb()
    }

    isAuthenticated() {
        return !!localStorage.getItem('token')
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export default new Auth()