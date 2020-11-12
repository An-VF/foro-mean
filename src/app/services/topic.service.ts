import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class TopicService{
    public url:string;
    public identity;
    public token;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    prueba(){
        return "servicio topic";
    }

    addTopic(token, topic):Observable<any>{
        let parms = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        return this._http.post(this.url+'topic',parms,{headers:headers});                                
    }

    getTopicsByUser(userId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'user-topics/' + userId, {headers:headers});                                
    }

    getTopic(id):Observable<any>{
        return this._http.get(this.url+'topic/' + id);                                
    }

    update(token, id, topic):Observable<any>{
        let parms = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        return this._http.put(this.url+'topic/'+id, parms, {headers:headers});           
    }

    delete(token, id):Observable<any>{  
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                        .set('Authorization',token);
        return this._http.delete(this.url+'topic/'+id, {headers:headers});           
    }

    getTopics(page=1):Observable<any>{
        return this._http.get(this.url+'topics/' + page);                                
    } 
    
    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/' + searchString);                                
    } 
}