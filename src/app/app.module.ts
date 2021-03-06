import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ElementLeftComponent } from './container/element-left/element-left.component';
import { ElementRightComponent } from './container/element-right/element-right.component';
import { FiltersPipe } from './common/pipes/filters.pipe';
import { FindPipe } from './common/pipes/find.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ElementLeftComponent,
    ElementRightComponent,
    FiltersPipe,
    FindPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
