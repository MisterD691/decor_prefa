import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Decor Prefa";
  content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo, ante a sagittis euismod, felis nisi imperdiet urna, sed tincidunt dolor neque non turpis. Nullam efficit...";

  ngOnInit(): void {
    //
  }
}
