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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _records_list_page_records_list_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./records-list-page/records-list-page.component */ "./src/app/records-list-page/records-list-page.component.ts");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _records_list_page_records_list_page_component__WEBPACK_IMPORTED_MODULE_6__["RecordsListPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'records-list',
                        component: _records_list_page_records_list_page_component__WEBPACK_IMPORTED_MODULE_6__["RecordsListPageComponent"]
                    }, {
                        path: '',
                        redirectTo: 'records-list',
                        pathMatch: 'full'
                    }
                ]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            providers: [
                _records_service__WEBPACK_IMPORTED_MODULE_7__["RecordsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/records-list-page/records-list-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/records-list-page/records-list-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/records-list-page/records-list-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/records-list-page/records-list-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loaded\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"nameFilter\">Contains</label>\n      <input type=\"text\" class=\"form-control\" id=\"nameFilter\" #filter (keyup.enter)=\"onFilterChanged(filter.value)\" />\n    </div>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"current\" #current (change)=\"onCurrentChange(current.checked)\">\n      <label class=\"form-check-label\" for=\"current\">Current</label>\n    </div>\n    <div class=\"form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"readed\" #readed (change)=\"onReadedChange(readed.checked)\">\n      <label class=\"form-check-label\" for=\"readed\">Readed</label>\n    </div>\n  </form>\n\n  <ngb-pagination \n  [pageSize]=\"pageSize\"\n  [(page)]=\"pageProperty\"\n  [collectionSize]=\"itemsCount\"\n  [maxSize]=\"10\" [rotate]=\"true\" [boundaryLinks]=\"true\"\n  aria-label=\"Default pagination\"></ngb-pagination>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let item of items\">\n      <div>\n        {{ item.title }}\n      </div>\n      <div>\n        {{ item.description }}\n      </div>\n      <div class=\"btn-group btn-group-toggle\">\n        <label class=\"btn-primary\" ngbButtonLabel>\n          <input type=\"checkbox\" ngbButton [(ngModel)]=\"item.readed\" (click)=\"setReaded(item)\"> Readed\n        </label>\n        <label class=\"btn-primary\" ngbButtonLabel>\n          <input type=\"checkbox\" ngbButton [(ngModel)]=\"item.current\" (click)=\"setCurrent(item)\"> Current\n        </label>\n      </div>\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/records-list-page/records-list-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/records-list-page/records-list-page.component.ts ***!
  \******************************************************************/
/*! exports provided: RecordsListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsListPageComponent", function() { return RecordsListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RecordsListPageComponent = /** @class */ (function () {
    function RecordsListPageComponent(recordsService, route, router) {
        this.recordsService = recordsService;
        this.route = route;
        this.router = router;
        this.page = 1;
        this.itemsCount = 0;
        this.pageSize = 10;
        this.items = [];
        this.filterString = '';
        this.loaded = false;
        this.filter = {};
    }
    RecordsListPageComponent_1 = RecordsListPageComponent;
    RecordsListPageComponent.parseBoolean = function (value) {
        return value == null ? null : value === 'true';
    };
    Object.defineProperty(RecordsListPageComponent.prototype, "pageProperty", {
        get: function () {
            return this.page;
        },
        set: function (page) {
            this.page = page;
            this.navigate();
        },
        enumerable: true,
        configurable: true
    });
    RecordsListPageComponent.prototype.navigate = function () {
        this.router.navigate(['records-list', __assign({ page: this.page }, this.filter)]);
    };
    RecordsListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var skip, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.page = parseInt(params.page, 10) || 1;
                        skip = (this.page - 1) * this.pageSize;
                        return [4 /*yield*/, this.recordsService.getRecords({
                                contains: params.contains,
                                readed: RecordsListPageComponent_1.parseBoolean(params.readed),
                                current: RecordsListPageComponent_1.parseBoolean(params.current),
                            }, this.pageSize, skip)];
                    case 1:
                        result = _a.sent();
                        this.items = result.records;
                        this.itemsCount = result.total;
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RecordsListPageComponent.prototype.onFilterChanged = function (value) {
        this.filter.contains = value;
        this.navigate();
    };
    RecordsListPageComponent.prototype.onCurrentChange = function (current) {
        this.filter.current = current;
        this.navigate();
    };
    RecordsListPageComponent.prototype.onReadedChange = function (readed) {
        this.filter.readed = readed;
        this.navigate();
    };
    RecordsListPageComponent.prototype.setCurrent = function (record) {
        record.current = !record.current;
        this.recordsService.update(record);
    };
    RecordsListPageComponent.prototype.setReaded = function (record) {
        record.readed = !record.readed;
        this.recordsService.update(record);
    };
    RecordsListPageComponent = RecordsListPageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-records-list-page',
            template: __webpack_require__(/*! ./records-list-page.component.html */ "./src/app/records-list-page/records-list-page.component.html"),
            styles: [__webpack_require__(/*! ./records-list-page.component.css */ "./src/app/records-list-page/records-list-page.component.css")]
        }),
        __metadata("design:paramtypes", [_records_service__WEBPACK_IMPORTED_MODULE_1__["RecordsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecordsListPageComponent);
    return RecordsListPageComponent;
    var RecordsListPageComponent_1;
}());



/***/ }),

/***/ "./src/app/records.service.ts":
/*!************************************!*\
  !*** ./src/app/records.service.ts ***!
  \************************************/
/*! exports provided: RecordsResult, RecordsFilter, RecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsResult", function() { return RecordsResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsFilter", function() { return RecordsFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsService", function() { return RecordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var RecordsResult = /** @class */ (function () {
    function RecordsResult() {
    }
    return RecordsResult;
}());

var RecordsFilter = /** @class */ (function () {
    function RecordsFilter() {
    }
    return RecordsFilter;
}());

var RecordsService = /** @class */ (function () {
    function RecordsService(http) {
        this.http = http;
    }
    RecordsService.prototype.getRecords = function (recordsFilter, limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsCache()];
                    case 1:
                        cache = _a.sent();
                        filtered = cache.filter(function (rec) {
                            if (recordsFilter.contains) {
                                var filter = recordsFilter.contains.toLowerCase();
                                if (rec.description.toLowerCase().indexOf(filter) < 0 && rec.title.toLowerCase().indexOf(filter) < 0) {
                                    return false;
                                }
                            }
                            if (recordsFilter.current != null) {
                                if (!recordsFilter.current !== !rec.current) {
                                    return false;
                                }
                            }
                            if (recordsFilter.readed != null) {
                                if (!recordsFilter.readed !== !rec.readed) {
                                    return false;
                                }
                            }
                            return true;
                        });
                        return [2 /*return*/, {
                                total: filtered.length,
                                records: filtered.slice(skip, skip + limit)
                            }];
                }
            });
        });
    };
    RecordsService.prototype.getRecordsCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.recordsCache) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.http.get('/records').toPromise()];
                    case 1:
                        _a.recordsCache = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.recordsCache];
                }
            });
        });
    };
    RecordsService.prototype.update = function (record) {
        return this.http.put('/records/' + record.id, record).toPromise();
    };
    RecordsService.prototype.markAsRead = function (record) {
        record.readed = true;
        return this.update(record);
    };
    RecordsService.prototype.markAsCurrent = function (record) {
        record.current = true;
        return this.update(record);
    };
    RecordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordsService);
    return RecordsService;
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

module.exports = __webpack_require__(/*! U:\_proj\js\feed-client\feed-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map