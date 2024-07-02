import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {provideNgxSerializer} from "../../../ngx-serializer/src/lib/ngx-serializer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideNgxSerializer()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
