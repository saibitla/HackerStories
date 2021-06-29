import { asNativeElements, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryProps } from '../story.model';

@Component({
  selector: 'app-latest-story',
  templateUrl: './latest-story.component.html',
  styleUrls: ['./latest-story.component.css']
})
export class LatestStoryComponent implements OnInit {
  
 @Input() singleStory: string = "";

 storyFinal: StoryProps[] = [];

 @ViewChild('paraStoryID', {static : true}) storyID: ElementRef = new ElementRef('paraStoryID');

 storyApi: string =  '';

  constructor(private http: HttpClient) { }

  onFetchStory(){
    this.fetchStory();
  }

  ngOnInit(): void { 
   
  }

  ngAfterViewInit() {   
    this.storyApi =  'https://hacker-news.firebaseio.com/v0/item/' + this.storyID.nativeElement.value +'.json?print=pretty';
   
    this.fetchStory();
}

private fetchStory(){
  
  this.http
  .get<StoryProps>(this.storyApi)  
  .subscribe(ids => {    
    if(ids)
     this.storyFinal.push(ids);
     console.log(this.storyFinal);     
  });

}

}
