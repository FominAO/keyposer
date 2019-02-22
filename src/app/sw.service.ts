import { Injectable, Output, EventEmitter } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  promptEvent;
  @Output() public getPrompt = new EventEmitter<any>();
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      
    });
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
  promptChecked() {
    this.getPrompt.emit(this.getPrompt);
  }
}