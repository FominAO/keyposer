import { Component, ViewChild, ElementRef } from '@angular/core';
import { state, animate, transition, style, trigger } from '@angular/animations'
import { PwaService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger ('spawnLost', 
    [ 
      state('spawned', style({
        fontSize: '200px',
        opacity: "0"
      })),
      state('shown', style({
        fontSize: '170px',
        opacity: "1"
      })),
      state('lost', style({
        fontSize: '170px',
        opacity: "1"
      })),
      transition('spawned => shown', [animate('0.3s')]),
      transition('shown => lost', [animate('0.3s')]),
      transition('lost => spawned', [animate('0.0s')]),
    ]
    )
  ]
})
export class AppComponent {
  @ViewChild('appDiv') appDiv: ElementRef;
  letter = "";
  goalString = "Water in two states: liquid (including the clouds, which are examples of aerosols), and solid (ice). Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.";
  score = 0;
  progress = 0;
  started = false;
  currentIndex = 0;
  timerScore = 0;
  time = 0;
  rate = 0;
  shown = false;
  markStates = ['spawned', 'shown', 'lost']
  constructor(private pwaService: PwaService) {
    this.letter = this.goalString[0]
  }
  installApp() {
    this.pwaService.promptEvent.prompt()
  }
  onKeyup(e) {
    if (this.started && e == this.goalString[this.currentIndex]) {
      this.changeLetter()
    }
    if (e == 'Enter') {
      this.turnGame()
    }
  }
  turnGame() {
    this.started = !this.started;
    this.started ? this.appDiv.nativeElement.focus() : ''
  }

  changeLetter() {
    
    ++this.currentIndex
    if (this.goalString[this.currentIndex] == ' ') {
      this.letter = 'Space'
    } else {
    this.letter = this.goalString[this.currentIndex]
    }
    
    this.getProgress()
    this.getMark()
  }
  getProgress() {
    this.progress = (this.currentIndex/this.goalString.length)*100
  }
  getMark() {
    this.time = +(new Date()) - this.timerScore;
    this.addScore();

    this.timerScore = +(new Date());
  }
  addScore() {
    if (this.time <= 3000) {
      this.score += Math.floor(1000000/this.goalString.length) - Math.floor(this.time / 3);
    }
    this.rate = Math.floor(this.score * (1 + this.progress/20)/100)
  }
  getPercent(perc) {
    return 100 - perc + '%'
  }
}
