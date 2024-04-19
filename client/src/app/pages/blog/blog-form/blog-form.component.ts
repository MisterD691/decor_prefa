import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public artId: string = "false";
  protected config = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    primaryColour: '#0205d2',
    secondaryColour: '#0205d2',
    tertiaryColour: '#0205d2'
  };

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    const artId = this.route.snapshot.params['articleId'];
    if (artId) {
      this.artId = artId;
      this.getArticle();
    }
  }

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

  getArticle(): void {
    this.articleService.getById(this.artId).subscribe((res) => {
      if (res.datas) {
        this.article = res.datas;
      }
    });
  }

  saveArticle(): any {
    this.loading = true;
    if (this.article._id) {
      this.articleService.update(this.article._id, this.article).subscribe((res) => {
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
}
