import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Data} from '../../weathersData'


@Component({
    selector: 'app-element-left',
    templateUrl: './element-left.component.html',
    styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {
    
    
     @Output()
      public changeWeather: EventEmitter<string> = new EventEmitter();

    @Input()
    public DATA:Data;

    @Input()
    public topImg:number | string;

    @Input()
    public changeImg;

    @Input()
    public changeSection;


    public onclick(img:number | string):void {
        this.changeImg(img)
    }


    public onClickSection(Section:string):void {
        this.changeSection(Section)
    }


    public onClickCountry(address):void {
        this.changeWeather.emit(address)
    }


}
