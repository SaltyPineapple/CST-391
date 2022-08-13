import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import usersData from '../../data/users.json'
import { User } from '../../models/User'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() {
    for(let y=0; y < usersData.length; y++){
      let cur = usersData[y];
      this.users.push(new User(cur.id, cur.username, cur.password, cur.email));
    }
  }

  getUserById(formSubmission:any){
    let isFound = false;
    for(let y=0; y<usersData.length; y++){
      let cur = usersData[y];
      if(cur.id.toString() === formSubmission.id){
        this.specificUser.Id = cur.id;
        this.specificUser.Name = cur.username;
        this.specificUser.password = cur.password;
        this.specificUser.email = cur.email;
        isFound = true;
        break;
      }
    }
    if(!isFound){
      this.specificUser = new User(0, "user not found", "null", "null");
    }
  }

  createUser(createdUser:any){
      this.newUser.Id = this.users.length + 1;
      this.newUser.name = createdUser.username;
      this.newUser.password = createdUser.password;
      this.newUser.email = createdUser.email;
      console.log(this.newUser);
  }

  appForm = new FormGroup({
    id: new FormControl(''),
  })

  createForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  })

  ngOnInit(): void {
  }

  users: User[] = []
  specificUser: User = new User(0, "", "", "");
  newUser: User = new User(0, "", "", "");
}
