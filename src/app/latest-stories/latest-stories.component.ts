import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-latest-stories',
  templateUrl: './latest-stories.component.html',
  styleUrls: ['./latest-stories.component.css']
})
export class LatestStoriesComponent implements OnInit {

  apiUrl : string = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
  
  stories: string[] = [];

  page = 1;
  count = 0;
  pageSize = 10;
  title = '';
  
  constructor(private http: HttpClient) { }

  onFetchPosts(){
    this.fetchStories();
  }

  ngOnInit(): void {
    this.fetchStories();
  }

  private fetchStories(){
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.http
    .get<{[key : string] :  string}>(this.apiUrl)
    .pipe(
      map(responseData => {
      const storiesArray  = [];
      for (const key in responseData){
       
        storiesArray.push(responseData[key])
        
      }
      return storiesArray;
    }))
    .subscribe(ids => {
      this.stories = ids
    });
    
    
    

  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.fetchStories();
  }


  
  

}
