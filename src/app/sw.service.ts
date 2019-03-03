import { Injectable, Output, EventEmitter, HostListener } from '@angular/core';
@Injectable()
export class PwaService {
  promptEvent;
  @Output() public getPrompt = new EventEmitter<any>();
  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onbeforeinstallprompt(e) {
  //   console.log(e);
  //   // Prevent Chrome 67 and earlier from automatically showing the prompt
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   this.getPrompt.emit(e);
  // }
  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.promptEvent = event;
    });
  }
  promptChecked() {
    this.getPrompt.emit(this.getPrompt);
  }
}