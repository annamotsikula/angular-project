import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class localStorageService {
    
    exists(TOKEN_Key: string): boolean {
        return !!this.get(TOKEN_Key);
    }
    private storage: any = localStorage;
    constructor() {}

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