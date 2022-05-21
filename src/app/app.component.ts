import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  keyword = 'Angular';
  data: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<any[]>('/api/articles.json').subscribe({
      next: (result) => {
        this.data = result;
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  doSearch(tKeyword: HTMLInputElement, str: string) {
    this.keyword = tKeyword.value = str;
  }
}
