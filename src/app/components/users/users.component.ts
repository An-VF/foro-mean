import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';//import servicio
import { User } from '../../models/user';//import modelo
import { global } from '../../services/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
    public users:User[];
    public url:string;
    public page_title;

  constructor(
    private _userService:UserService
  ) {
    this.page_title = 'Todos los usuarios'
    this.url = global.url;
   }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(){
    this._userService.getUsers().subscribe(
      response =>{
        if (response.users) {
          this.users = response.users;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
