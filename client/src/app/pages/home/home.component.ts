import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string = "Decor Prefa";
  public content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, ante a sagittis euismod, felis nisi imperdiet urna, sed tincidunt dolor neque non turpis. Nullam efficit...";

  ngOnInit(): void {
    //
  }

}
