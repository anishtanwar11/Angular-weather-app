import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
  @Input() weather: any;
}
