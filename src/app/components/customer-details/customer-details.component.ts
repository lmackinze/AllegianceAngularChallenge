import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomerDto } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomerDto;

  constructor(
    private customerService : CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetCustomer(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  GetCustomer(id: number) {
    this.customerService.get(id)
      .subscribe(
        data => {
          // this.customer = data.find(c => c.id == id); //Added for testing purposes
          this.customer = data;
        },
        error => {
          console.log(error);
        });
  }
}
