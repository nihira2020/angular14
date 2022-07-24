import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http: HttpClient) { }
  apiurl = 'https://localhost:44308/api/UserMaster';

  GetAllUser():Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiurl);
  }

  GetUserbyId(UserId: any) {
    return this.http.get(this.apiurl + '/' + UserId);
  }

  RemoveUser(UserId: any) {
    return this.http.delete(this.apiurl + '/' + UserId);
  }


  UpdateUser(inputdata: any) {
    return this.http.post(this.apiurl + '/ActivateUser', inputdata);
  }

  GetAllRoles(){
    return this.http.get("https://localhost:44308/User/GetAllRole");
  }


}
