import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data : any = [ 
    {
    name: 'primary',
    selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(d: any) {
    console.log(d);
  }

  verData() {
    console.log(this.data);
  }

}
