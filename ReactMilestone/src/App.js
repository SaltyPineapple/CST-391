import React from 'react';
import AddUser from './AddUser';
import User from './User';

class App extends React.Component {

  state = {
    userCount: 4,
    users: [
      {
        id: 0,
        name: "Mark",
        age: "23",
      },
      {
        id: 1,
        name: "Jim",
        age: "56",
      },
      {
        id: 2,
        name: "Frank",
        age: "42",
      },
      {
        id: 3,
        name: "Barbara",
        age: "55",
      },
    ]
  }

  addUser = (user) => {
    var newUser = {
      id: this.state.userCount,
      name: user.name,
      age: user.age,
    }
    this.setState( {userCount: this.state.userCount + 1})

    var newArray = this.state.users.concat(newUser);
    this.setState( {users: newArray});
  }

  deleteUser = (userIdToBeDeleted) => {
    var userToDelete = this.state.users.filter((user) => {
      return user.id === userIdToBeDeleted;
    })

    this.setState({users: this.state.users.filter(
      (user) => {return user !== userToDelete[0]})
    });
  }

  render() {

    const users = this.state.users.map(user => (
      <User onClick={this.deleteUser} id={user.id} name={user.name} age = {user.age} />
    ))

    return (
      <div>
        <AddUser onClick = {this.addUser}/>
        {users}
      </div>
    );
  }
}

export default App;
