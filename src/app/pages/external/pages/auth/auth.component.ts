import { Component } from '@angular/core';

@Component({
    selector: 'auth',
    templateUrl: './auth.html',
    styleUrls: ['./auth.scss'],
})
export class AuthComponent {
    constructor() {
        console.log('auth component');
    }
}
