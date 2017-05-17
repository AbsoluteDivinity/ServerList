import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListComponent } from './list.component';

import { SharedModule } from "../shared";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    declarations: [ListComponent],
    exports: [ListComponent]
})
export class ListModule {}