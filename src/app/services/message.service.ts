import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface sendToTeam {
    name:string;
     message:string;
     email:string;
}
@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private http: HttpClient) { }


  sendToTeam(body: sendToTeam){
    console.log(body)
    return this.http.post(environment.apiUrl+'/api/v1/messages/msg',body);
  }
}
