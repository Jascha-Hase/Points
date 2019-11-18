import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    constructor() { }

    public isAuthenticated(): boolean {
        const user = localStorage.getItem('user');
        return !!user;
    }

    public login(userName: string, password: string): boolean {
        if (userName === 'coyo' && password === 'coyo1') {
            localStorage.setItem('user', userName);
            return true;
        }
        return false;
    }

    public logout() {
        localStorage.removeItem('user');
    }
}