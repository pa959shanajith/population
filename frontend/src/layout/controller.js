import React from 'react'

class LayoutController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleSidebar = evt => {
    evt.preventDefault()
    this.setState({ collapsed: !this.state.collapsed })
  }
}

export default LayoutController