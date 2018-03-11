import {Component, ViewEncapsulation, Input} from '@angular/core';
import {DATA, Data} from '../../weathersData'

@Component({
    selector: 'app-element-right',
    templateUrl: './element-right.component.html',
    styleUrls: ['./element-right.component.css']
})
export class ElementRightComponent{

     @Input()
    public DATA:Data;

    @Input()
    public megaAddress: string;
    
    @Input()
    public topImg:number | string;
    
    public onClick(aaa) {
        console.log(aaa)
    }

}
