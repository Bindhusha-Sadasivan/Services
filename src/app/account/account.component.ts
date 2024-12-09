import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServiceService } from '../shared-service/logging-service/logging-service.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  providers:[LoggingServiceService],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
@Input() account!:{name:string, status:string};
@Input() id!:number;
@Output() statusChanged=new EventEmitter<{id:number,status:string}>();

/**
 *
 */
constructor(private loggingService:LoggingServiceService) {
}

setTo(status:string){
  this.statusChanged.emit({id:this.id, status:status});
  // this.statusChanged.subscribe(data => console.log(data));

  this.loggingService.logMessage(status);
}
}
