import { Component } from '@angular/core';
import { MyFirstService } from '../Services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {

  name : String = ''
  email: String = ''
  message : String = ''
  IsSubmitted : boolean = false;
  
  messages : Array<any> = [];

  constructor(private service : MyFirstService){
    
    this.messages = this.service.GetMessage();
    this.IsSubmitted = this.messages.length > 0;
  }

  ngOnInit(): void {
  }



  //Before Service

  // OnSubmit(){
  //   this.IsSubmitted = true;
  //   console.log(this.name)
  //   console.log(this.email)
  //   console.log(this.message)
  //   this.messages.push({
  //     'name': this.name,
  //     'email': this.email,
  //     'message': this.message
  //   });
  // }



  //After Service

  OnSubmit(){
    this.IsSubmitted = true;
    console.log(this.name)
    console.log(this.email)
    console.log(this.message)
    this.service.Insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
  }


  //Before Service

  // handleDelete(index: number) {
  //   this.message.slice(index); 
  // }



  //After Service 
  handleDelete(index: number) {
    this.service.DeleteMessage(index); 
  }

}
