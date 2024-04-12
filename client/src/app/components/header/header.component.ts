import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isBig: boolean = true;
  @Input() public title: string = "";
  @Input() public content: string = "";

  ngOnInit(): void {
    //
  }
}
