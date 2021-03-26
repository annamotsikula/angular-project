import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class localStorageService {
    private storage: any = localStorage;
    constructor() {}

    set(key: string, value: any): void {
        this.storage.setItem(key, JSON.stringify(value))
    }
    
    get(key: string): any | undefined {
        return JSON.parse(this.storage.getItem(key || undefined))
    }

    delete(key: string): void {
        this.storage.removeItem(key)
    }
    
    clear(): void {
        this.storage.clear()
    }

}