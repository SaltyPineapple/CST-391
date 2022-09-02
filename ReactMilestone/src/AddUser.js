import React from "react";
import "./User.css"

class AddUser extends React.Component {
    state = {
        user: {
            name: "",
            age: 0,
        }
    }

    updateStateName = (event) => {

        this.setState( {user: {name: event.target.value, age: this.state.user.age}});
    }

    updateStateAge = (event) => {
        this.setState({user: {name: this.state.user.name, age: event.target.value}});
    }

    handleAdd = () => {
        this.props.onClick(this.state.user);
    }

    render() {
        return(
            <div className="userContainer">
                <input type="text" onChange={this.updateStateName} placeholder="Name" value={this.state.user.name} />
                <br/>
                <input type="text" onChange={this.updateStateAge} placeholder="Age" value={this.state.user.age} />
                <br />
                <button onClick={this.handleAdd}>Add User</button>
            </div>
        )
    }
}

export default AddUser;