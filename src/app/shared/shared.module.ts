import { NgModule, ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ServerService } from './server';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        
    ],
    exports: [
        CommonModule,
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