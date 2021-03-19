import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomerDto } from '../models/customer';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<ICustomerDto[]>{
    return this.httpClient.get<ICustomerDto[]>(baseUrl);
    // return this.httpClient.get<ICustomerDto[]>("../../assets/customers.json"); //Added for testing purposes
  }

  get(id: number) : Observable<ICustomerDto> {
    return this.httpClient.get<ICustomerDto>(`${baseUrl}/${id}`);
    // return this.httpClient.get<ICustomerDto[]>("../../assets/customers.json"); //Added for testing purposes
  }
}
