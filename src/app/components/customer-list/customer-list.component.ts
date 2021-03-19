import { Component, OnInit } from '@angular/core';
import { ICustomerDto } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomerDto[];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers() {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
        },
        error => {
          console.log(error);
        });
  }

}
