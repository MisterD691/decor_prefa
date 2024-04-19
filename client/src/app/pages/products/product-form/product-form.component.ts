import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Notify } from 'notiflix';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/product/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public loading: boolean = false;
  public product: Product = {
    title: "",
    description: "",
    price: 0,
    categoryId: "",
    quantity: 0,
    picture: ""
  };
  public categories: Category[] = [];
  protected config = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    primaryColour: '#0205d2',
    secondaryColour: '#0205d2',
    tertiaryColour: '#0205d2'
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  initProduct() {
    this.product = {
      title: "",
      description: "",
      price: 0,
      categoryId: "",
      quantity: 0,
    };
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((res) => {
      if (res.datas) {
        this.categories = res.datas;
      }
    });
  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64string = reader.result as string;
      this.product.picture = base64string;
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  saveProduct(): any {
    this.loading = true;
    this.productService.create(this.product).subscribe((res) => {
      this.loading = false;
      if (res.datas) {
        Notify.success("Enregistrement effectué avec succès");
        this.initProduct();
      }
    }, (error) => {
      this.loading = false;
      Notify.failure("Erreur lors de l'enregistement");
    });
  }
}
