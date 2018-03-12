import {Component, Output, EventEmitter} from '@angular/core';
import {DATA, Data} from './weathersData'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';

    public topImg:number | string = 1

    public WEATHER:Data = DATA.filter((data)=> {
        if (data.address === 'Россия, Сочи') {
            return data
        }
    })[0]

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

    public changeWeather(address) {
        if (address.target.localName !== 'h5') return
        this.WEATHER = DATA.find((data) => data.address === address.toElement.innerHTML)
    }
}