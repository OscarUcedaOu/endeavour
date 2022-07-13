import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [
  ]
})
export class DetailPageComponent {
  artObjet: any;
  lenguage: string = '';
  apiURL: string = '';
  constructor(public http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.lenguage = 'nl';
    this.activatedRoute.params.subscribe(params => {
      this.getData(params['id'])
    });
    this.lenguage = 'nl';
    this.apiURL
  }

  async getData(id: any) {
    const url = environment.apiUrl + this.lenguage + '/collection/' + id + '?key=YE3WmL4m';
    await this.http.get<any>(url)
      .subscribe((res) => {
        (res.artObject);
      this.artObjet = res.artObject

    });


  }
  changeLenguage(a: string) {
    this.lenguage = a;
    this.activatedRoute.params.subscribe(params => {
      this.getData(params['id'])
    });

  }
}
