import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArtObjet } from 'src/app/interfaces/ArtObjet';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  artObjets: ArtObjet[] | undefined;
  artObjetsCopy: ArtObjet[] | undefined;
  lenguage: string = '';
  apiURL: string = '';
  pageActual:number = 1;
  constructor(public http: HttpClient) {
    this.lenguage = 'nl';
    this.getData();
    console.log(this.lenguage);
    this.apiURL

  }

  async getData() {
    const url = environment.apiUrl + this.lenguage + '/collection?key=YE3WmL4m&ps=100'
    await this.http.get<any>(url)
      .subscribe((res) => {
        console.log(res.artObjects);

        this.artObjets = res.artObjects.map(({ id, title, principalOrFirstMaker, webImage, objectNumber, longTitle, permitDownload }: ArtObjet) => {
          return {
            id: id,
            title: title,
            longTitle: longTitle,
            principalOrFirstMaker: principalOrFirstMaker,
            webImage: webImage,
            objectNumber: objectNumber,
            permitDownload: permitDownload,
          };
        });
        console.log(this.artObjets);

        this.artObjetsCopy = this.artObjets;
      });


  }

  filter(e: any) {
    const search: string = e.target.value;
    console.log({ search });
    this.artObjets = this.artObjetsCopy?.filter(({title,principalOrFirstMaker}: ArtObjet) => {
      return (title.toLowerCase().includes(search.toLowerCase()) || principalOrFirstMaker.toLowerCase().includes(search.toLowerCase()));
     });


  }
  changeLenguage(a: string) {
    console.log(a);
    this.lenguage = a;
    this.getData();

  }
}
