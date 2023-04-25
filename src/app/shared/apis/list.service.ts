import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ListService {

  orderBaseApiUrl=environment.appConstants.orderBaseApiUrl;


 constructor(private http:HttpClient) { }


 getOrderList(num:any){

  return this.http.get(this.orderBaseApiUrl + '/api/Order/GetAll?page=1&pageSize='+num);

 }

}
