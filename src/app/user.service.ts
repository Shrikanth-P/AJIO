import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authad=new Subject<boolean>();

  validateAdmin(data:boolean){

    this.authad.next(data);
  }
  
  public authSubject = new Subject<boolean>();

  validateAuth(data:boolean) {
    this.authSubject.next(data);
  }
  hosturl=environment.userapi;
  
  value?:boolean;
    getAuthStatus(){
    this.authSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    this.authad.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }  
  constructor(private http:HttpClient) { }
  posturl=environment.userapi;
  postuser(data:any){
    return this.http.post<any>(this.posturl, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserDetails(){
    return this.http.get<any>(this.posturl).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data:any, id:number){
    return this.http.put<any>(this.posturl+'/'+ id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteuser(id:number){
    return this.http.delete<any>(this.posturl+'/'+ id).pipe(map((res:any)=>{
      return res;
    }))
  }
}