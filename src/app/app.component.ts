import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  letter = "";
  goalString = "Water in two states: liquid (including the clouds, which are examples of aerosols), and solid (ice). Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.";
  score = 0;
  progress = 0;
  started = false;
  currentIndex = 0;
  timerScore = 0;
  time = 0;
  constructor() {
    this.letter = this.goalString[0]
  }
  onKeyup(e) {
    if (!this.started) {
      this.startGame()
    }
    if (e == this.goalString[this.currentIndex]) {
      this.changeLetter()
    }
  }
  startGame() {
    this.started = true;
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
      this.score += 1000 - Math.floor(this.time / 3);
    }
  }
  getPercent(perc) {
    return 100 - perc + '%'
  }
}
