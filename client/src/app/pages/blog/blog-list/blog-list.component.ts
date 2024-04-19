import { Component } from '@angular/core';
import { Notify } from 'notiflix';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  public articles: any[] = [];
  public articleDatas: any[] = [];
  protected role: string = "";
  public loading: boolean = false;
  public selectedArticle: any;
  p: number = 1;

  constructor(
    private articleService: ArticleService,
    protected auth: AuthService,
  ) {
    this.role = auth.getRole();
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getAll().subscribe((res) => {
      if (res.datas) {
        this.articleDatas = res.datas;
        this.articles = res.datas;
      }
    });
  }

  selectArticle(prod: any): void {
    this.selectedArticle = prod;
  }

  deleteArticle(id?: string) {
    this.loading = true;
    this.articleService.remove(id).subscribe((res) => {
      this.loading = false;
      if (res.datas) {
        Notify.success("Suppression effectuée avec succès");
        this.getArticles();
      }
    }, (err) => {
      this.loading = false;
      Notify.success("Une erreur est survenue pendant la suppression. Si l'erreur persiste veuillez contacter l'administrateur");
    });
  }

  research(event: any): void {
    let value = event.target.value.toLowerCase();
    if (value != "") {
      this.articles = this.articleDatas.filter((art) => (art.title.toLowerCase().includes(value)));
    } else {
      this.articles = this.articleDatas;
    }
  }
}
