import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public categories: Category[] = [];
  public selectedCatId: string = "";
  protected role: string = "";

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    protected auth: AuthService,
  ) {
    this.role = auth.getRole();
  }

  ngOnInit(): void {
    this.getProducts();
    this.loadCategories();
  }

  getProducts(): void {
    this.productService.getAll().subscribe((res) => {
      if (res.datas) {
        this.products = res.datas;
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((res) => {
      if (res.datas) {
        this.categories = res.datas;
      }
    });
  }

}
