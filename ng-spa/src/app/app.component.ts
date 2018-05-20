import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) {}

  title: string = 'Code and push and code and push';
  apiValues: string[] = [];

  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
  // apiValues: string[] = [];

  // ngOnInit() {
  //   this._httpService.get('/api/core').subscribe(values => {
  //     this.apiValues = values.json() as string[];
  //   });
  // }
}
