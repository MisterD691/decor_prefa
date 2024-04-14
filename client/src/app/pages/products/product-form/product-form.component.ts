import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: any = {
    title: "",
    description: "",
    type: "",
    price: 0,
    image: "",
    file: "",
    rating: 1,
    isActive: true
  };

  ngOnInit(): void {
    //
  }

  saveProduct(): any {
    alert("Product saved");
  }
}
