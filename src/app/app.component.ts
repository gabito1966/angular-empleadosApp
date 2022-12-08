import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService){};

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyCVH4CgN8SydXi0laeQZyBkSdYRM7-1sNw",
      authDomain: "mis-clientes-eb5ec.firebaseapp.com",
    })
  };

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
