import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/services/credential';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public credential: ICredential = {
    email: '',
    password: '',
  };
  public config = {
    animationType: ngxLoadingAnimationTypes.threeBounce,
    primaryColour: '#0205d2',
    secondaryColour: '#0205d2',
    tertiaryColour: '#0205d2',
    fullScreenBackdrop: true
  };

  constructor(
    protected userService: UserService,
    protected router: Router,
    protected auth: AuthService,
  ) {}

  ngOnInit(): void {
    //
  }

  public login(): void {
    this.loading = true;
    let actual = this;
    if (this.credential.email !== '' && this.credential.password !== '') {
      this.userService.signIn(this.credential).subscribe((res) => {
        this.loading = false;
        if (res.datas) {
          const user = res.datas;
          this.auth.setRole(user.role);
          this.auth.connect("token", user);
          this.router.navigate(['/home'], {
            queryParamsHandling: 'preserve',
          });
        } else {
          Notify.failure("Email ou mot de passe incorrect");
        }
      }, (err) => {
        actual.loading = false;
        if (err.error.message == "Unauthorized") {
          Notify.failure("Email ou mot de passe incorrect");
        } else {
          Notify.failure("Une erreur inconnue est survenu. Si l'erreur persiste, veuillez nous contacter");
        }
      });
    } else {
      this.loading = false;
      Notify.failure("Vérifiez que les champs email et mot de passe soient remplis");
    }
  }

}
