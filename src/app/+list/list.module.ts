import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

import { SharedModule } from "../shared";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ListComponent],
    exports: [ListComponent]
})
export class ListModule {}