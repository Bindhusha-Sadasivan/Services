import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoggingServiceService } from '../logging-service/logging-service.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  @Output() statusChanged = new EventEmitter<any>();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingServiceService:LoggingServiceService) { }

  handleAddedAccount(name:string, status:string){
    this.accounts.push({name:name,status:status});
    this.loggingServiceService.logMessage(status);
  }

  handleStatusChanged(id:number, status:string){
    this.accounts[id].status=status;
    this.loggingServiceService.logMessage(status);
  }
}
