import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountComponent } from "./account/account.component";
import { CommonModule } from '@angular/common';
import { AccountService } from './shared-service/account-service/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewAccountComponent, AccountComponent, CommonModule],
  providers:[AccountService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Services';

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Test Account',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];


  // handleAddedAccount(accountInformation:{name:string, status:string}){
  //   this.accounts.push(accountInformation);
  // }

  // handleStatusChanged(statusChanged:{id:number, status:string}){
  //   this.accounts[statusChanged.id].status=statusChanged.status;

  accounts:{name:string, status :string}[]=[];
/**
 *
 */
constructor(private accountService:AccountService) {
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.accounts = this.accountService.accounts;
}


}
