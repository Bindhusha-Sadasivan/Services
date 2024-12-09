import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServiceService } from '../shared-service/logging-service/logging-service.service';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [],
  providers: [LoggingServiceService],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent {
  @Output() accoutAdded = new EventEmitter<{name:string, status:string}>();

  onAddAccount(accountName:string, accountStatus:string){
    this.accoutAdded.emit({name:accountName, status:accountStatus});
    // this.accoutAdded.subscribe(data => console.log(data));
    // console.log('A server status changed, new status:' + accountStatus);

    const loggingServiceService = new LoggingServiceService();
    loggingServiceService.logMessage(accountStatus);
  }

}
