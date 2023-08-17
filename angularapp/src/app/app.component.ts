import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    
  }

  title = 'Car Management';

  @Input() carYear!: string;

  @Input() carMake!: string;

  @Input() carModel!: string;

  errorMessage = "";
  cars: Array<Car> = [];

  addCar() {
    this.http.post('https://localhost:7036/Car', { year: this.carYear, make: this.carMake, model: this.carModel }).subscribe({
      next: response => {
        this.errorMessage = "";
        this.cars.push(new Car(this.carYear, this.carMake, this.carModel));
      },
      error: response => {
        this.errorMessage = response.error.detail;
      }
    });
  }
}

class Car {
  readonly year: string;
  readonly make: string;
  readonly model: string;

  constructor(year: string, make: string, model: string) {
    this.year = year;
    this.make = make;
    this.model = model;
  }
}
