import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public countrys:any;
;

  constructor(private http: HttpClient) {
    const name = 'michael';
    const url = `https://api.nationalize.io?name=${name}`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
        // Hier kannst du Fehlerbehandlung durchführen
      }
    );
  }
  submitFormName(name: string) {
    console.log('Submitted name:', name);
    const url = `https://api.nationalize.io?name=${name}`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('Response:', response);
        this.countrys = response;
        this.countrys = this.countrys.country;
        console.log(99999, this.countrys);
      },
      (error) => {
        console.error('Error:', error);
        // Hier kannst du Fehlerbehandlung durchführen
      }
    );
  }
}
