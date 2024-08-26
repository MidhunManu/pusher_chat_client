import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
interface Message {
  username: string;
  message:string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  username = "username";
  message = "";
  messages: Message[] = [];
  // messages: Message[] = [
  //   {username: "ramesh", message: "hello world , what a nice day"},
  //   {username: "suresh", message: "indeed it is"},
  // ];
  users: string[] = [];
  pusherInstance:any;
  channel: any;
  currentUser = "";

  ngOnInit(): void {
    this.username = history.state.currentUser;
    this.users.push(this.username);
    this.pusherInstance = new Pusher("secret_key", {
      cluster: "ap2"
    });

    this.channel = this.pusherInstance.subscribe("chat");
    this.channel.bind("message", (data:any) => {
      console.log(JSON.stringify(data))
      this.messages.push(data)
    })
  }

  constructor(private http:  HttpClient) {}

  isCurrentUser(username:string): boolean {
    return username === this.username;
  }

  send() {
    this.http.post("http://localhost:8000/api/send", {
      "username": this.username,
      "message": this.message
    }).subscribe((res)=> {
      this.message = "";
      // alert(res)
    }, (error) => {
      console.error(error);
    })
  }

}

