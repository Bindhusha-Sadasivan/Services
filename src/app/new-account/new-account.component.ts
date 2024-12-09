import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent {
  @Output() accoutAdded = new EventEmitter<{name:string, status:string}>();

  onAddAccount(accountName:string, accountStatus:string){
    this.accoutAdded.emit({name:accountName, status:accountStatus});
    this.accoutAdded.subscribe(data => console.log(data));
  }

}
