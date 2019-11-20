import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'repair-app';

  constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/api/').subscribe();
  }
}
