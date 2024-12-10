import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
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

  constructor() { }

  handleAddedAccount(name:string, status:string){
    this.accounts.push({name:name,status:status});
  }

  handleStatusChanged(id:number, status:string){
    this.accounts[id].status=status;
  }
}
