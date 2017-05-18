import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared";
import { ListModule } from "./+list/list.module";
import { DetailsModule } from "./+details/details.module";

@NgModule({
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        ListModule,
        DetailsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}