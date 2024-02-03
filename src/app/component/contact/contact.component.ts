import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/message.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    messageToSend = new FormGroup({
        email : new FormControl('',[Validators.required,Validators.email]),
        name : new FormControl('',[Validators.required]),
        message: new FormControl('',[Validators.required])
      })
  constructor(private msg: MessagesService) { }

  ngOnInit() {

  }


  sendMessage(){
    if(this.messageToSend.valid) {
        this.msg.sendToTeam(this.messageToSend.value).subscribe((res)=>{
            console.log(res)
        })
    }
  }

}
