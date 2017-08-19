import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedService} from './shared.service';
import { PostsComponent } from './blog/posts/posts.component';
import {BlogService} from './blog/blog.service';
import {HttpModule} from '@angular/http';

const routes = [
    // {path: '', component: NavComponent},
    {path: 'home', component: HomeComponent, useAsDefault: true},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
      HttpModule
  ],
  providers: [SharedService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
