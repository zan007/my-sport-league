import { Component } from '@angular/core';

@Component({
    selector: 'external',
    templateUrl: './external.html',
    styleUrls: ['./external.scss'],
})
export class ExternalComponent {
    constructor() {
        console.log('external component');
    }
}
