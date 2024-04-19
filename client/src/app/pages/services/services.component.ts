import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public title: string = "Nos services";
  public content: string = "Chez Decor Prefa international l'innovation est toujours au rendez-vous. Notre mission est de rendre beau et solide. Profites d'un de notre large éventail de services.";

  constructor() { }

  ngOnInit(): void {
    //
  }

  ngOnDestroy(): void {
    $(window).unbind("scroll");
  }

}
