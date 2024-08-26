import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
interface Message {
  username: string;
  message:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  // username = "username"
  // message = "message"
  // messages: Message[] = []
  // pusherInstance:any
  // channel: any

  // ngOnInit(): void {
  //   this.pusherInstance = new Pusher("b106dc00fd1f803e25df", {
  //     cluster: "ap2"
  //   });

  //   this.channel = this.pusherInstance.subscribe("chat");
  //   this.channel.bind("message", (data:any) => {
  //     console.log(JSON.stringify(data))
  //     this.messages.push(data)
  //   })
  // }

  // constructor(private http:  HttpClient) {}

  // send() {
  //   this.http.post("http://localhost:8000/api/send", {
  //     "username": this.username,
  //     "message": this.message
  //   }).subscribe((res)=> {
  //     this.message = "";
  //     // alert(res)
  //   }, (error) => {
  //     console.error(error);
  //   })
  // }

}
