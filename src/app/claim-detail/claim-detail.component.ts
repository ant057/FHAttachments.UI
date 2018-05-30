import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  matLineItem: any;
  claimNumber: string  = "SUR-00035178";
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
  }

  highlightLeave(e){
    this.matLineItem = e;
    this.highlightMatLineItem(null);
  }

  highlightMatLineItem(color: string){
    this.matLineItem.target.style.backgroundColor = color;
    //e.nativeElement.style.backgroundColor = "red";
  }

}
