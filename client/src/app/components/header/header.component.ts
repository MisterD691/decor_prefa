import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isBig: boolean = true;
  @Input() public title: string = "";
  @Input() public content: string = "";
  public loading: boolean = false;

  protected user: any;
  
  constructor(
    protected auth: AuthService,
    protected userService: UserService,
    protected router: Router,
  ) {
    this.user = auth.getUserObject();
  }

  ngOnInit(): void {
    //
  }

  public logout(): void {
    this.userService.logout();
  }
}
