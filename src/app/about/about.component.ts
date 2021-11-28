import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  router: any;
  onLoadServer(id:number){
    this.router.navigate(['/contact',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
