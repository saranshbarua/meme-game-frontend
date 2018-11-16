import React, { Component } from 'react'

export default class JoinRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className="join-room">
        <div className="paci logo">
            Meme Lord
        </div>
        <form className="jr">
          <input value={this.state.username} onChange={(e) => (this.handleUsername(e))} className="inpt ssp-400" type="text" placeholder="Enter username" />
          <input value={this.state.password} onChange={(e) => (this.handlePassword(e))} className="inpt ssp-400" type="password" placeholder="Enter shared password" />
          <button
            className="enter-room ssp-400"
          >
            Enter
          </button>
        </form>
      </div>
    )
  }
}
