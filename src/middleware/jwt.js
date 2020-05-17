var jwt = require('jsonwebtoken')

const checkTokenExpirationMiddleware = store => next => action => {
    const token = localStorage.getItem("token")
    if (token && jwt.decode(token).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
      store.dispatch( {
        type: 'LOGOUT'
      })
    }
    next(action);
  };

  export default checkTokenExpirationMiddleware