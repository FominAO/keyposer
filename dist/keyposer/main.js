(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" #appDiv tabindex=\"1\" (keypress)=\"onKeyup($event.key)\">\n<div class=\"header\">\n    <!-- [ngClass]=\"spawned ? '':''\" -->\n  <!-- <span class=\"mark\" [@spawnLost] = \"shown ? 'spawned' : 'shown'\">{{marks | markFilter : time}}</span> -->\n  <span class=\"score\">{{score | scoreFilter}}</span>\n</div>\n<div class=\"letter\">{{letter}}</div>\n<div class=\"seporator\" [style.width] = \"getPercent(progress)\"></div>\n<div class=\"progress\" >{{progress | number: '1.0-0'}}%</div>\n<div class=\"info\">Just click on big letter and begin!</div>\n</div>\n<div class=\"menu\" *ngIf='!started' tabindex=\"0\" autofocus (keypress)=\"onKeyup($event.key)\" >\n  <span class=\"start\" *ngIf='score == 0'>\n    Press Enter to start. <br>\n    If you want to stop the game, press Enter again.\n  </span>\n  <span class=\"end\" *ngIf='score != 0'>\n    Your progress: {{progress | number: '1.0-0'}}% <br>\n    Your score: {{score}} <br>\n    Rating: {{rate}}\n  </span> \n</div>\n<div class=\"mobile\">\n  Only PC version, sorry :(\n    <button (click)=\"installApp()\">Установить</button>\n</div>\n    <ng-template wbCodeHeader>First</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  height: 98vh;\n  width: 100%; }\n  .app:focus {\n    outline: none; }\n  .header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n  .mark {\n  font-size: 200px;\n  transition: 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 100px;\n  width: 100%;\n  margin-left: 170px; }\n  .score {\n  width: 170px;\n  font-size: 50px;\n  font-weight: bold; }\n  .letter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 230px; }\n  .seporator {\n  width: 100%;\n  float: right;\n  transition: 0.3s;\n  box-shadow: 0 0 0 2px grey; }\n  .progress {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px; }\n  .info {\n  margin-top: 250px;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .menu {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000000d4;\n  color: white;\n  font-size: 50px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .mobile {\n  display: none; }\n  @media (max-width: 1000px) {\n  .mobile {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: grey;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _sw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sw.service */ "./src/app/sw.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(pwaService) {
        this.pwaService = pwaService;
        this.letter = "";
        this.goalString = "Water in two states: liquid (including the clouds, which are examples of aerosols), and solid (ice). Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.";
        this.score = 0;
        this.progress = 0;
        this.started = false;
        this.currentIndex = 0;
        this.timerScore = 0;
        this.time = 0;
        this.rate = 0;
        this.shown = false;
        this.markStates = ['spawned', 'shown', 'lost'];
        this.letter = this.goalString[0];
    }
    AppComponent.prototype.installApp = function () {
        this.pwaService.promptEvent.prompt();
    };
    AppComponent.prototype.onKeyup = function (e) {
        if (this.started && e == this.goalString[this.currentIndex]) {
            this.changeLetter();
        }
        if (e == 'Enter') {
            this.turnGame();
        }
    };
    AppComponent.prototype.turnGame = function () {
        this.started = !this.started;
        this.started ? this.appDiv.nativeElement.focus() : '';
    };
    AppComponent.prototype.changeLetter = function () {
        ++this.currentIndex;
        if (this.goalString[this.currentIndex] == ' ') {
            this.letter = 'Space';
        }
        else {
            this.letter = this.goalString[this.currentIndex];
        }
        this.getProgress();
        this.getMark();
    };
    AppComponent.prototype.getProgress = function () {
        this.progress = (this.currentIndex / this.goalString.length) * 100;
    };
    AppComponent.prototype.getMark = function () {
        this.time = +(new Date()) - this.timerScore;
        this.addScore();
        this.timerScore = +(new Date());
    };
    AppComponent.prototype.addScore = function () {
        if (this.time <= 3000) {
            this.score += Math.floor(1000000 / this.goalString.length) - Math.floor(this.time / 3);
        }
        this.rate = Math.floor(this.score * (1 + this.progress / 20) / 100);
    };
    AppComponent.prototype.getPercent = function (perc) {
        return 100 - perc + '%';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "appDiv", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('spawnLost', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('spawned', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        fontSize: '200px',
                        opacity: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        fontSize: '170px',
                        opacity: "1"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('lost', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        fontSize: '170px',
                        opacity: "1"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('spawned => shown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => lost', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('lost => spawned', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.0s')]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_sw_service__WEBPACK_IMPORTED_MODULE_2__["PwaService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mark_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mark-filter.pipe */ "./src/app/mark-filter.pipe.ts");
/* harmony import */ var _score_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-filter.pipe */ "./src/app/score-filter.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _code_tabs_code_tabs_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-tabs/code-tabs.directive */ "./src/app/code-tabs/code-tabs.directive.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _mark_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["MarkFilterPipe"],
                _score_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ScoreFilterPipe"],
                _code_tabs_code_tabs_directive__WEBPACK_IMPORTED_MODULE_6__["CodeTabsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-tabs/code-tabs.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/code-tabs/code-tabs.directive.ts ***!
  \**************************************************/
/*! exports provided: CodeTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeTabsComponent", function() { return CodeTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeTabsComponent = /** @class */ (function () {
    function CodeTabsComponent(template) {
        this.template = template;
        console.log(this.template);
    }
    CodeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[wb-code-header], [wbCodeHeader]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], CodeTabsComponent);
    return CodeTabsComponent;
}());



/***/ }),

/***/ "./src/app/mark-filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/mark-filter.pipe.ts ***!
  \*************************************/
/*! exports provided: MarkFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkFilterPipe", function() { return MarkFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MarkFilterPipe = /** @class */ (function () {
    function MarkFilterPipe() {
        this.mark = "Let's start!";
        this.marks = ['Bad', 'Ok', 'Normal', 'Good', 'Perfect'];
    }
    MarkFilterPipe.prototype.transform = function (marks, time) {
        var result;
        if (time > 3000) {
            this.mark = this.marks[0];
        }
        else if (time > 2000) {
            this.mark = this.marks[1];
        }
        else if (time > 1500) {
            this.mark = this.marks[2];
        }
        else if (time > 1000) {
            this.mark = this.marks[3];
        }
        else if (time > 500) {
            this.mark = this.marks[4];
        }
        else if (time != 0) {
            this.mark = this.marks[4] + '+';
        }
        return this.mark;
    };
    MarkFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'markFilter'
        })
    ], MarkFilterPipe);
    return MarkFilterPipe;
}());



/***/ }),

/***/ "./src/app/score-filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/score-filter.pipe.ts ***!
  \**************************************/
/*! exports provided: ScoreFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreFilterPipe", function() { return ScoreFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ScoreFilterPipe = /** @class */ (function () {
    function ScoreFilterPipe() {
    }
    ScoreFilterPipe.prototype.transform = function (value) {
        var result = value.toString();
        console.log(value);
        if (value.toString().length < 6) {
            result = this.getZeros(6 - value.toString().length) + value;
        }
        return result;
    };
    ScoreFilterPipe.prototype.getZeros = function (n) {
        var str = '0';
        for (var i = 0; i < n - 1; i++) {
            str += '0';
        }
        return str;
    };
    ScoreFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'scoreFilter'
        })
    ], ScoreFilterPipe);
    return ScoreFilterPipe;
}());



/***/ }),

/***/ "./src/app/sw.service.ts":
/*!*******************************!*\
  !*** ./src/app/sw.service.ts ***!
  \*******************************/
/*! exports provided: PwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaService", function() { return PwaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PwaService = /** @class */ (function () {
    function PwaService(swUpdate) {
        var _this = this;
        this.swUpdate = swUpdate;
        this.getPrompt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        swUpdate.available.subscribe(function (event) {
        });
        window.addEventListener('beforeinstallprompt', function (event) {
            _this.promptEvent = event;
        });
    }
    PwaService.prototype.promptChecked = function () {
        this.getPrompt.emit(this.getPrompt);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PwaService.prototype, "getPrompt", void 0);
    PwaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
    ], PwaService);
    return PwaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fomag\Documents\keyposer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map