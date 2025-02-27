import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] =  Array(20);

  @ViewChild('infiniteScroll') infiniteScroll!: IonInfiniteScroll;
  //@ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;


  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    //console.log(event);
    setTimeout(() => {

      if( this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();

      

      //(event as InfiniteScrollCustomEvent).target.complete();
    }, 1500);
  }

}
