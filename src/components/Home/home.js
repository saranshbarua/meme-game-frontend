import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="paci logo">
            Meme Lord
        </div>

        <div className="create-server">
            <button className="cs">
                <FontAwesomeIcon 
                    icon="plus"
                    size="3x"
                    color="white"
                />
            </button>
        </div>

      </div>
    )
  }
}
