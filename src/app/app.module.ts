import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ServicesComponent } from './services/services.component';

const routes = [
    // {path: '', component: NavComponent},
    {path: 'home', component: HomeComponent, useAsDefault: true},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    BlogPostComponent,
    BlogComponent,
    BlogPostDetailComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
