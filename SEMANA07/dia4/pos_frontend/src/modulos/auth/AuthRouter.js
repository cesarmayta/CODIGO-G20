import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthLogin from './pages/AuthLogin'

const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={AuthLogin}/>
    </Switch>
  )
}

export default AuthRouter
