import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class JoinRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToRoom: false
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

  joinRequest() {
    if(this.state.password === 'pass'){
      this.setState({
        redirectToRoom: true
      })
    }
  }

  render() {
    if(this.state.redirectToRoom) {
      return <Redirect to={{
        pathname: `/play/${this.state.username}`,
        state: {
          userPlaying: this.state.username
        }
      }} />
    }

    return (
      <div className="join-room">
        <div className="paci logo">
            Meme Lord
        </div>
        <form onSubmit={(e) => {this.joinRequest(e)}} className="jr">
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
