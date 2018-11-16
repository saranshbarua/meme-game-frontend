import React, { Component } from 'react'

export default class JoinRoom extends Component {
  render() {
    return (
      <div className="join-room">
        <div className="paci logo">
            Meme Lord
        </div>
        <form className="jr">
          <input className="inpt ssp-400" type="text" placeholder="Enter username" />
          <input className="inpt ssp-400" type="password" placeholder="Enter shared password" />
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
