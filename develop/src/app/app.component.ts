import {Component, Output, EventEmitter} from '@angular/core';
import {DATA, Data} from './weathersData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public topImg: number | string = 1;

  public SECTION: string = 'Hotel';

  public ADDRESS: string = 'Россия, Сочи';

  public DATA: Data[] = DATA

  public changeImg(imgName: string | number): void {
    this.topImg = imgName
  }

  public changeSection(sectionName: string): void {
    this.SECTION = sectionName
  }

  public changeWeather(eventObj) {
    const addressTegName: string = eventObj.target.localName;
    const address = eventObj.toElement.innerHTML;

    if (addressTegName !== 'h5') return;

    this.ADDRESS = address
  }
}
