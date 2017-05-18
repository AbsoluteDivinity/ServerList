import { NgModule, ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ServerService } from './server';
import { OrderByPipe } from "./pipes";


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        OrderByPipe
    ],
    exports: [
        CommonModule,
        OrderByPipe
    ],
    providers: [
        ServerService
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}