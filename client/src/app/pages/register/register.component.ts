import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Notify } from 'notiflix';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loading: boolean = false;
  public newUser: User = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    role: "client",
  };
  public cPwd: string = "";
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

  public initUser(): void {
    this.newUser = {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      role: "client",
    }
  }

  ngOnInit(): void {
    this.initUser();
  }

  public register() {
    this.loading = true;
    if (this.newUser.password !== this.cPwd) {
      Notify.failure("Confirmation mot de passe incorrect");
      this.loading = false;
      return;
    }
    this.userService.signUp(this.newUser).subscribe((res) => {
      this.loading = false;
      if (res.datas) {
        Notify.success("Compte créé avec succès!");
        this.initUser();
      }
    }, (err) => {
      this.loading = false;
      Notify.failure("Erreur lors de l'enregistement, si l'erreur persiste veuillez nous contacter");
    });
  }

}
