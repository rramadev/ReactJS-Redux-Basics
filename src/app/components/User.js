import React from 'react';

import { UserList } from './UserList';

export class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: { 
        name: 'Anna',
        age: 28,
        hobbies: ['tennis', 'cooking']
      },
      homeLink: props.initialLinkName
    }  
  }
  
  onChangeHomeLink(newName) {
    // That doesnt update the root component in real time, not a valid solution 
    this.setState({
      homeLink: newName
    });
    this.props.changeHomeLink(this.state.homeLink);
  }

  onGreet() {
    alert('The UserList component says Congrats! to the User component.');
  }

  onSayHi() {
    alert('The UserList component say Hi! to the User component.');
  }
  
  render() {
    let defaultUser = {
      name: 'Anna',
      age: 28,
      hobbies: ['tennis', 'cooking']
    };

    return (      
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
         :: {this.state.homeLink} ::
         <hr/>
         <UserList 
            name={'John'} 
            initialAge={29} 
            hobbies={['Chess', 'Swimming']}
            greet={this.onSayHi}
            changeHomeLink={this.onChangeHomeLink.bind(this)} 
            initialLinkName={this.state.homeLink}>
            <p>- This is a paragraph passed as a children prop from the User component.</p>
          </UserList>
          <UserList 
            name={defaultUser.name} 
            initialAge={defaultUser.age} 
            hobbies={defaultUser.hobbies} 
            greet={this.onGreet} 
            changeHomeLink={this.onChangeHomeLink.bind(this)} 
            initialLinkName={this.state.homeLink}>
            <p>- Another paragraph passed as a children prop from the Parent component.</p>
          </UserList>
        </div>        
      </div>      
    );
  }
}