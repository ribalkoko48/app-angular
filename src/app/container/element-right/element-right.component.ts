import {Component, Input} from '@angular/core';
import {Data} from '../../weathersData'

@Component({
    selector: 'app-element-right',
    templateUrl: './element-right.component.html',
    styleUrls: ['./element-right.component.css']
})
export class ElementRightComponent{

     @Input()
    public WEATHER:Data;
}
