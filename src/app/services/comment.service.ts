import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class CommentService{
    public url:string;
    public identity;
    public token;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    add(token, comment,topicId):Observable<any>{
        let parms = JSON.stringify(comment);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        return this._http.post(this.url+'comment/topic/'+topicId,parms,{headers:headers});                                
    }

    delete(token, topicId,commentId):Observable<any>{  
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        return this._http.delete(this.url+'comment/'+topicId+'/'+ commentId, {headers:headers});           
    } 
}