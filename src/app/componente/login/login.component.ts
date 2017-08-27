import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : string="";
  pass : string="";
  constructor() { }

  ngOnInit() {
  }

  Entrar = function ():void
  {
    console.log(this.usuario+" "+this.pass);
  }

}
