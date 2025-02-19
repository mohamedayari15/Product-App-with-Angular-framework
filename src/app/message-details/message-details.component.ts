import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {

    @Input() message: any = {};
    @Input() index: any = '';

    @Output() Delete = new EventEmitter();

    OnDelete()
    {
      this.Delete.emit(this.index);
    }

    
}
