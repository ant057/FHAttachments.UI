// angular
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// 3rd party
import { UploaderOptions, UploadFile, UploadInput, humanizeBytes, UploadOutput } from 'ngx-uploader';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

@Component({
  selector: 'app-claim-drop',
  templateUrl: './claim-drop.component.html',
  styleUrls: ['./claim-drop.component.css']
})
export class ClaimDropComponent {

  @Input() claim: ClaimDetail;
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  @Output() selectClaim: EventEmitter<String>;
  humanizeBytes: Function;
  dragOver: boolean;

  //apiurl: string = 'ausd-sur-web01:8089';
  apiurl: string = 'localhost:8080';

  constructor() {
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.selectClaim = new EventEmitter<String>();
    this.humanizeBytes = humanizeBytes;
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { // when all files added in queue
      console.log(output);
      // uncomment this if you want to auto upload files when added
         const event: UploadInput = {
           type: 'uploadAll',
           url: 'http://' + this.apiurl + '/api/addclaimattachment/' + this.claim.fh_claim_num,
           method: 'POST'
         };
         this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
      console.log(output);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      // need to add an "x" or a "clear" on the UI to remove a file.
      // let the user manually do this?
      // "clear" will emit the 'removed' event to the file drop component
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if(output.type === 'done') {
      console.log('all done');
      this.selectClaim.emit(this.claim.fh_claim_num);
    } else if(output.type === 'rejected') {
      console.log('Rejected', output);
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://' + this.apiurl + '/api/addclaimattachment/' + this.claim.fh_claim_num,
      method: 'POST',
      file: this.files[0]
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

}
