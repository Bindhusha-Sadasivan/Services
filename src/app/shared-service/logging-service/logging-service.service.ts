import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  logMessage(status:string):any{
    console.log('A server status changed, new status:' + status)
  }
}
