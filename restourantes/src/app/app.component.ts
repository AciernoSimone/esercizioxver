import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restourantes';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient){}

  load10restourantes()
  {
    this.obs = this.http.get("https://3000-b7fcc9c1-9a2a-49c3-916d-b37d5e7e2c7d.ws-eu01.gitpod.io/users");
    this.obs.subscribe(this.getData);
  }
    load10restourantesbrooklyn()
  {
    this.obs = this.http.get("https://3000-b7fcc9c1-9a2a-49c3-916d-b37d5e7e2c7d.ws-eu01.gitpod.io/brooklyn");
    this.obs.subscribe(this.getData);
  }

      load10restouranteshamburgers()
  {
    this.obs = this.http.get("https://3000-b7fcc9c1-9a2a-49c3-916d-b37d5e7e2c7d.ws-eu01.gitpod.io/hamburgers");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
}
