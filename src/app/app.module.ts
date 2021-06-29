import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestStoryComponent } from './latest-story/latest-story.component';
import { LatestStoriesComponent } from './latest-stories/latest-stories.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



const appRoutes: Routes  = [
  { path: 'latestStories', component: LatestStoriesComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    LatestStoryComponent,
    LatestStoriesComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
