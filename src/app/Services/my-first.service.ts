import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  
  messages : Array<any> = [];

 constructor(){
   this.Init();
  }

  Init(){
    this.Insert({
      name : 'hama',
      email: 'hama@gmail.com',
      message: 'hello'
    });
    this.Insert({
      name : 'hama',
      email: 'hama@gmail.com',
      message: 'hello'
    });
    this.Insert({
      name : 'hama',
      email: 'hama@gmail.com',
      message: 'hello'
    });
  }


  Insert(message : {name: String, email: String, message:String}){
    this.messages.push(message);
  }

  GetMessage(){
    return this.messages;
  }

  DeleteMessage(index : number){
    this.messages.splice(index, 1);
  }
}
