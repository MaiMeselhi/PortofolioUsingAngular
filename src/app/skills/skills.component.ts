import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsFocus:Array<string> = [
    "ui/ux design","responsive design","web design","javascript","react"
   ];

   skillsProgress : Array<any> = [
     {
       skill:"HTML",
       progressBar: 100
     },
     {
       skill:"CSS",
       progressBar:90
     },
     {
       skill:"javaScript",
     progressBar:80
     },
     {
      skill:"React",
      progressBar:70
     },
     {
       skill:"Angular",
       progressBar:60
     },
     {
      skill:"wordPress",
      progressBar:50
     },
     {
      skill:"git",
      progressBar:40
     }

   ]

  constructor() { }

  ngOnInit(): void {
  }

}
