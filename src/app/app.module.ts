import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
