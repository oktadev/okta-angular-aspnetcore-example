import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-or-update-jogging',
  templateUrl: './add-or-update-jogging.component.html',
  styleUrls: ['./add-or-update-jogging.component.css']
})
export class AddOrUpdateJoggingComponent implements OnInit {
  @Output() joggingCreated = new EventEmitter<any>();
  @Input() joggingInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearJoggingInfo();
  }

  ngOnInit() {

  }

  private clearJoggingInfo = function() {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };


  public addOrUpdateJoggingRecord = function(event) {
    this.joggingCreated.emit(this.joggingInfo);
    this.clearJoggingInfo();
  };

}
