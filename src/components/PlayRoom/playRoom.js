import React, { Component } from 'react'

export default class PlayRoom extends Component {
  render() {
    return (
      <div>
        Play as you like!!! {this.props.match.params.user}
      </div>
    )
  }
}
