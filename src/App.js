
import React, { Component } from 'react'
import UserInfo from './Components/UserInfo';

export default class App extends Component {
  state = {
    users:
    [
      {
        firstName: "Matthew",
        lastName: "Ola",
        emailAddress: "matthew@me.com",
        phoneNumber: "08176454332",
      },
      {
        firstName: "Tola",
        lastName: "Dupe",
        emailAddress: "tola@me.com",
        phoneNumber: "09176454332",
      },
      {
        firstName: "Kunle",
        lastName: "Posi",
        emailAddress: "kunle@yahoo.com",
        phoneNumber: "07076454332",
      },
      {
        firstName: "Biola",
        lastName: "Kehinde",
        emailAddress: "beekay@me.com",
        phoneNumber: "09076454332",
      },
      {
        firstName: "Seyi",
        lastName: "Ademola",
        emailAddress: "tope@me.com",
        phoneNumber: "08076454332",
      },
      {
        firstName: "Kolapo",
        lastName: "Taiwo",
        emailAddress: "Kolatee@me.com",
        phoneNumber: "09876454332",
      }
    ],
  };

  render() {
    return (
      <div>
        <UserInfo users={this.state.users} />
        
      </div>
    );
  }
}
