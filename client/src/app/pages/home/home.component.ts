import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string = "Bienvenue sur notre plateforme Decor Prefa";
  public content: string = "Decor Prefa se propose de toujours mettre premièrement en avant sa clientèle en lui offrant le meilleur dans l’accompagnement immobilière à moindre cout.";

  ngOnInit(): void {
    //
  }

}
