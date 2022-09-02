import React from "react";
import "./User.css";

class User extends React.Component {
    state = {}

    handleDelete = () =>{
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className="userContainer">
                <span>User #{this.props.id}</span>
                <br />
                <span>User Name: {this.props.name}</span>
                <br />
                <span>User Age: {this.props.age}</span>
                <br />
                <button onClick={this.handleDelete}>Delete User</button>
            </div>
        )
    }

}

export default User;