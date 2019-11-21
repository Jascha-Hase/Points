import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Points } from '../list-with-points/list-of-points';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  private _url: string = '../assets/data/points.json';

  constructor(private http: HttpClient) { }

  getPoints(): Observable<Points[]>{
    return this.http.get<Points[]>(this._url);
  }

  ngOnInit() {
  }
}
