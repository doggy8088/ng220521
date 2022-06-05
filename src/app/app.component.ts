import { DataService } from './data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  keyword = 'Angular';
  currencyCode = 'TWD';
  data$: Observable<any[]> = of([]);

  constructor(private datasvc: DataService) {
    setTimeout(() => {
      this.currencyCode = 'JPY'
    }, 2000);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data$ = this.datasvc.loadPosts();
    // .subscribe({
    //   next: (result) => {
    //     this.data = result;
    //   }
    // })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  doSearch(tKeyword: HTMLInputElement, str: string) {
    this.keyword = tKeyword.value = str;
  }

  doDelete(id: number) {
    console.log(`您刪除了 ${id} 的文章!`);
  }

}
