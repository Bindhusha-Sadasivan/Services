import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountComponent } from "./account/account.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewAccountComponent, AccountComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Services';

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


  handleAddedAccount(accountInformation:{name:string, status:string}){
    this.accounts.push(accountInformation);
  }

  handleStatusChanged(statusChanged:{id:number, status:string}){
    this.accounts[statusChanged.id].status=statusChanged.status;
  }
}
