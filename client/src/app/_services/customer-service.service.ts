import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Member } from '../_models/member';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
url="https://localhost:44311/api/"
  constructor(private http:HttpClient) { }
  saveCustomer(model:Member){
    debugger;
    return this.http.post(this.url+"members",model)
  }
}
