import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})
export class DetailsModule {}