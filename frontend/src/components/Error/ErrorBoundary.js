import React, { Component } from 'react';
import ErrorFallback from './ErrorFallback'

export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

  render() {
      const {hasError} = this.state;
      if(hasError){
        return <ErrorFallback></ErrorFallback>
    }
    return this.props.children
  }
}
