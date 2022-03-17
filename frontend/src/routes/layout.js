import React, { Component } from 'react'
import LayoutComponent from './../layout'

export default (ComposedComponent) => {
  return class Layout extends Component {
    render() {
      return (
        <LayoutComponent>
          <ComposedComponent />
        </LayoutComponent>
      )
    }
  }
}
