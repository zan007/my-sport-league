import { Injectable } from '@angular/core';
import { ApiService } from '@common/services/api.service';
import { Observable } from 'rxjs';
import { AuthStep } from '../models/auth-step';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private apiService: ApiService) {}

    public authPrepare(cif: string): Observable<AuthStep> {
        return this.apiService.post('/prepare', { login: cif }).pipe(
            map((step: AuthStep) => {
                console.log('map', step);
                return step;
            })
        );
    }

    public authPassword(password: string): Observable<AuthStep> {
        return this.apiService
            .post('/password', { password })
            .pipe(map((step: AuthStep) => step));
    }
}
