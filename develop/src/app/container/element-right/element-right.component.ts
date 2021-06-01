import {Component, Input} from '@angular/core';
import {Data, DATA} from '../../weathersData'

@Component({
  selector: 'app-element-right',
  templateUrl: './element-right.component.html',
  styleUrls: ['./element-right.component.css']
})
export class ElementRightComponent {

  @Input()
  public DATA: Data[];

  @Input()
  public ADDRESS: string;
}
