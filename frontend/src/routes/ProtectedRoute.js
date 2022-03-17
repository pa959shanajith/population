import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const ProtectedRoute = ({
    path,
    component:Component,
    render,
    auth,
    ...rest
}) => {
  return (
    <Route 
    path={path}
    {...rest}
    render={(props) => auth ? <Component {...props} /> : <Redirect to="/login" />}
    />
  )
}

const mapStateToProps = (state) => {
    return {auth:state.isAuth}
}
export default connect(mapStateToProps)(ProtectedRoute)