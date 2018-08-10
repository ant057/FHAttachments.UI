import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { bounce, jello } from 'ng-animate';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
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
export class ClaimDetailComponent implements OnInit {

  matLineItem: any;
  claimNumber: string  = "SUR-00035178";
  
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
    this.highlightMatLineItem("red");
    useAnimation(jello);
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
