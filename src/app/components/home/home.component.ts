import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})

export class HomeComponent implements OnInit {
  	public page_title:string;
	public identity;
	

  constructor(
		private _userService:UserService
  ) { 
    this.page_title = 'Bienvenido a nuestro foro de Programación';
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
  }

}





  

 