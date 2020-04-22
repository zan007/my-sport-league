import { Component } from '@angular/core';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.html',
})
export class SignInComponent {
    constructor() {
        console.log('sign in controller');
    }
}
