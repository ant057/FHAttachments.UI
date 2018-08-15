// angular
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';

// 3rd party
import { bounce, jello } from 'ng-animate';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

@Component({
  selector: 'app-claim-attachment',
  templateUrl: './claim-attachment.component.html',
  styleUrls: ['./claim-attachment.component.css']
 /* animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0.2 })),
      state('active', style({ opacity: 1 })),
      transition('* <=> *', [
       animate(200)
      ])
    ])
  ]*/
})
export class ClaimAttachmentComponent implements OnInit {

  @Input() claim: ClaimDetail | FHAttachmentsError;
  matLineItem: any;
  
  fade: any;
  state: string = 'inactive';
  times = 25;
  counter = 0;

  attachments: Array<any> = [
    {
      fileName: "MyFirstDocument.PDF",
      uploadedBy: "Anthony Cunningham",
      icon: "save"
    },
    {
      fileName: "MySecondDocument.PDF",
      uploadedBy: "Luke Cage",
      icon: "save"
    },
    {
      fileName: "ScheduleofItems.xslx",
      uploadedBy: "Jessica Jones",
      icon: "picture_in_picture"
    },
    {
      fileName: "Meetingnotes-10202018.doc",
      uploadedBy: "Iron Man",
      icon: "insert_drive_file"
    },
    {
      fileName: "Idontknow.msg",
      uploadedBy: "Pikachu",
      icon: "email"
    },
    {
      fileName: "LastMessage.xslx",
      uploadedBy: "Bobs Burgers",
      icon: "picture_in_picture"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  highlightEnter(e){
    this.matLineItem = e;
    this.highlightMatLineItem("#E8EAF6");
  }

  highlightLeave(e){
    this.matLineItem = e;
    this.highlightMatLineItem(null);
  }

  highlightMatLineItem(color: string){
    this.matLineItem.target.style.backgroundColor = color;
  }

  /*
  onDone($event) {
    // call this function at the end of the previous animation.
    // run it as many time as defined
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }
  */
}
