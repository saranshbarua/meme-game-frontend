import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state ={
      redirect: false
    }
  }

  redirectUser(event) {
    event.preventDefault();
    console.log('Redirecting user');
    this.setState({
      redirect: true
    })
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/joinroom" />
    }
    return (
      <div className="home">
        <div className="paci logo">
            Meme Lord
        </div>

        <div className="create-server">
            <button className="cr">
                <FontAwesomeIcon 
                    icon="plus"
                    size="3x"
                    color="white"
                />
            </button>
        </div>
        <span className="ssp-400" style={{marginTop: '10px', color: '#607d8b'}}>Create Room</span>
        
        <button 
            className="er ssp-400"
            onClick={(e) => (this.redirectUser(e))}
        >
            Join a room
        </button>

      </div>
    )
  }
}
