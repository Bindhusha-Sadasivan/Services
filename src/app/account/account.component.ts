import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
@Input() account!:{name:string, status:string};
@Input() id!:number;
@Output() statusChanged=new EventEmitter<{id:number,status:string}>()

setTo(status:string){
  this.statusChanged.emit({id:this.id, status:status});
  this.statusChanged.subscribe(data => console.log(data));
}
}
