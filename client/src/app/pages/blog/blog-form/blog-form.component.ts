import { Component } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Notify } from 'notiflix';
import { Article } from 'src/app/services/article/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {
  public loading: boolean = false;
  public article: Article = {
    title: "",
    content: "",
    picture: ""
  };
  protected config = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    primaryColour: '#0205d2',
    secondaryColour: '#0205d2',
    tertiaryColour: '#0205d2'
  };

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    //
  }

  initProduct() {
    this.article = {
      title: "",
      content: "",
      picture: ""
    };
  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64string = reader.result as string;
      this.article.picture = base64string;
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  saveArticle(): any {
    this.loading = true;
    this.articleService.create(this.article).subscribe((res) => {
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
