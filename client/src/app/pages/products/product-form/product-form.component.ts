import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Notify } from 'notiflix';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public loading: boolean = false;
  public productId: string = "";
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
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    const productId = this.route.snapshot.params['prodId'];
    if (productId) {
      this.productId = productId;
      this.getProduct();
    }
  }

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

  getProduct(): void {
    this.productService.getById(this.productId).subscribe((res) => {
      if (res.datas) {
        this.product = res.datas;
        this.product.categoryId = this.product.category?._id;
      }
    });
  }

  saveProduct(): any {
    this.loading = true;
    if (this.product._id) {
      this.productService.update(this.product._id, this.product).subscribe((res) => {
        this.loading = false;
        if (res.datas) {
          Notify.success("Mise à jour effectuée avec succès");
          this.initProduct();
        }
      }, (error) => {
        this.loading = false;
        Notify.failure("Erreur lors de la mise à jour");
      });
    } else {
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
}
