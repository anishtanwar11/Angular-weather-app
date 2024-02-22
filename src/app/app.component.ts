import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = "ee0d08329fdd7f87f0461f8c900745f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  weatherData: any;

  constructor(private http:HttpClient){}

  search(location:string) {
    this.http.get(apiUrl + location + "&appid=" + apiKey).subscribe((data: any) => {
      this.weatherData = data;
    })
  }
}
