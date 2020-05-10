class Auth {
    constructor() {
        this.authenticated = false
    }

    login({ username, password }, cb) {
        if (username === 'admin@email.com' && password === 'password') {
            console.log('successful login')
            this.authenticated = true
        }
        console.log('login failed')
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()