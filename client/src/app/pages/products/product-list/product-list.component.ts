import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { CartService } from 'src/app/services/product/cart.service';
import { Product } from 'src/app/services/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: any[] = [];
  public prodDatas: any[] = [];
  public categories: Category[] = [];
  public selectedCatId: string = "";
  protected role: string = "";
  public loading: boolean = false;
  public selectedProd: any;
  p: number = 1;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    protected auth: AuthService,
    private cartService: CartService
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
        this.prodDatas = res.datas;
        this.products = res.datas;
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((res) => {
      if (res.datas) {
        this.categories = res.datas;
        this.categories.push({label: "Tout", _id: "0"});
      }
    });
  }

  addToCart(item: Product) {
    this.cartService.addItemsToCart(item);
  }

  selectProd(prod: any): void {
    this.selectedProd = prod;
  }

  deleteProduct(id?: string) {
    this.loading = true;
    this.productService.remove(id).subscribe((res) => {
      this.loading = false;
      if (res.datas) {
        Notify.success("Suppression effectuée avec succès");
        this.getProducts();
      }
    }, (err) => {
      this.loading = false;
      Notify.success("Une erreur est survenue pendant la suppression. Si l'erreur persiste veuillez contacter l'administrateur");
    });
  }

  research(event: any): void {
    let value = event.target.value.toLowerCase();
    if (value != "") {
      this.products = this.prodDatas.filter((prod) => (prod.title.toLowerCase().includes(value) || prod.price.toString().toLowerCase().includes(value)));
    } else {
      this.filterCat();
    }
  }

  filterCat(): void {
    if (this.selectedCatId == "0") {
      this.products = this.prodDatas;
    } else {
      this.products = this.prodDatas.filter((prod) => (prod.category._id == this.selectedCatId));
    }
  }

}
