import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  cards:string[]=["Web Design" ,"Mobile Design" , "Logo Design" , "Web Application" , "PWA Development" , "Mobile Application"];
  constructor() { }

  ngOnInit(): void {
  }

}
