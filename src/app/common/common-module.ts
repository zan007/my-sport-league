import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { MslButtonPrimaryComponent } from './components/msl-button-primary/msl-button-primary.component';
import { MslButtonSecondaryComponent } from './components/msl-button-secondary/msl-button-secondary.component';

const commonComponents = [
    MslButtonPrimaryComponent,
    MslButtonSecondaryComponent
];
const commonPipes = [];
const commonServices = [
    ApiService,
];


@NgModule({
    declarations: [
        ...commonComponents,
        ...commonPipes,
    ],
    exports: [
        ...commonComponents,
        ...commonPipes,
        CommonAngularModule,
    ],
    providers: [
        ...commonServices
    ]
})
export class CommonModule implements NgModule {
}
