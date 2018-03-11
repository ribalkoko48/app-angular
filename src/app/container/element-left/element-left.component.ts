import {Component, ViewEncapsulation, Input, Output} from '@angular/core';
import {Data} from '../../weathersData'


@Component({
    selector: 'app-element-left',
    templateUrl: './element-left.component.html',
    styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

    @Input()
    public DATA:Data;

    @Input()
    public topImg:number | string

    @Input()
    public changeImg

    @Input()
    public changeSection

    @Input()
    public changeWeather

    public onclick(img:number | string):void {
        this.changeImg(img)
    }

    public onClickSection(Section:string):void {
        this.changeSection(Section)
    }
    
    public onClickCountry(addr: string):void {
        this.changeWeather(addr)
    }


}
