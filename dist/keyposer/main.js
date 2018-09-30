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

module.exports = "<div class=\"app\" tabindex=\"0\" (keypress)=\"onKeyup($event.key)\">\n<div class=\"header\">\n  <span class=\"mark\">{{marks | markFilter : time}}</span>\n  <span class=\"score\">{{score | scoreFilter}}</span>\n</div>\n<div class=\"letter\">{{letter}}</div>\n<div class=\"seporator\" [style.width] = \"getPercent(progress)\"></div>\n<div class=\"progress\" >{{progress | number: '1.0-0'}}%</div>\n<div class=\"info\">Just click on big letter and begin!</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  height: 98vh;\n  width: 100%; }\n  .app:focus {\n    outline: none; }\n  .header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n  .mark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 100px;\n  width: 100%;\n  margin-left: 170px; }\n  .score {\n  width: 170px;\n  font-size: 50px;\n  font-weight: bold; }\n  .letter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 230px; }\n  .seporator {\n  width: 100%;\n  float: right;\n  transition: 0.3s;\n  box-shadow: 0 0 0 2px grey; }\n  .progress {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px; }\n  .info {\n  margin-top: 250px;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

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
    function AppComponent() {
        this.letter = "";
        this.goalString = "Water in two states: liquid (including the clouds, which are examples of aerosols), and solid (ice). Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms connected by covalent bonds. Water is the name of the liquid state of H2O at standard ambient temperature and pressure. It forms precipitation in the form of rain and aerosols in the form of fog. Clouds are formed from suspended droplets of water and ice, its solid state. When finely divided, crystalline ice may precipitate in the form of snow. The gaseous state of water is steam or water vapor. Water moves continually through the water cycle of evaporation, transpiration (evapotranspiration), condensation, precipitation, and runoff, usually reaching the sea.";
        this.score = 99999;
        this.progress = 0;
        this.started = false;
        this.currentIndex = 0;
        this.timerScore = 0;
        this.time = 0;
        this.letter = this.goalString[0];
    }
    AppComponent.prototype.onKeyup = function (e) {
        if (!this.started) {
            this.startGame();
        }
        if (e == this.goalString[this.currentIndex]) {
            this.changeLetter();
        }
    };
    AppComponent.prototype.startGame = function () {
        this.started = true;
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
            this.score += 1000 - Math.floor(this.time / 3);
        }
    };
    AppComponent.prototype.getPercent = function (perc) {
        return 100 - perc + '%';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [])
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
                _score_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ScoreFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
            result = this.getZeros(5 - value.toString().length) + value;
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