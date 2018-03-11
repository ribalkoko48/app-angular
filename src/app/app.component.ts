import {Component} from '@angular/core';
import {DATA, Data} from './weathersData'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';

    public topImg:number | string = 1

    public megaAddress:string = 'Россия, Сочи'

    public DATA:Data[] = DATA.filter((data)=> {
        if (data.type === 'Hotel') {
            return data
        }
    })

    public changeImg(imgName:string | number):void {
        this.topImg = imgName
    }

    public changeSection(sectionName:string):void {
        this.DATA = DATA.filter((data)=> {
            if (data.type === sectionName) {
                return data
            }
        })
    }

    public changeWeather(address:string):void {
        console.log(address)
        this.megaAddress = address
    }
}