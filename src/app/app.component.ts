import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nametitle = 'Angular';
 

  inputName:Array<string> = [
    'button',
    'checkbox',
    'color',
    'date', 
    'datetime-local',
    'email', 
    'file',
    'hidden',
    'image',
    'month', 
    'number', 
    'password',
    'radio',
    'range', 
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time', 
    'url',
    'week'
  ];
  nametitleinput = "button name";

  onKeyup(newTitle:string) {   

   this.nametitle = newTitle;
  
  }

  onFocus(){
  this.nametitleinput = null;
  }
}
