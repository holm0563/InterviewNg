import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Describe what this is doing
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  data = [];

  // Documentation at: http://navitaireinterviewapp.azurewebsites.net/swagger/ui/index.html
  readonly flightsUrl =
    'http://navitaireinterviewapp.azurewebsites.net/api/Flights';

  constructor(protected http: HttpClient) {}

  async ngOnInit() {
    // Difference between a promise and an observable?
    this.data = await this.http.get<any>(this.flightsUrl).toPromise();
  }
}
