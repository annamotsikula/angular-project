import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class localStorageService {
    
    private storage: any = localStorage;
    
    constructor() {}

    exists(TOKEN_Key: string): boolean {
        return !!this.get(TOKEN_Key);
    }

    get(key: string): any | undefined {
            return JSON.parse(this.storage.getItem(key || undefined))
        }
    set(key: string, value: any): void {
        this.storage.setItem(key, JSON.stringify(value))
    }
    delete(key: string): void {
        this.storage.removeItem(key)
    }
    
    clear(): void {
        this.storage.clear()
    }


}