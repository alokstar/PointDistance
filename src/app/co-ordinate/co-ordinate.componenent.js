"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var appService_1 = require("../appService");
var Coordinate = (function () {
    function Coordinate(appService) {
        this.appService = appService;
        this.newDataArray = [];
        this.x1 = 0;
        this.y1 = 0;
    }
    Coordinate.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getdata()
            .subscribe(function (data) {
            _this.dataArray = data;
            console.log(data);
            _this.getMyData();
        }, function (error) {
            console.log(error);
        });
    };
    Coordinate.prototype.ngOnChanges = function (changes) {
        this.getMyData();
    };
    Coordinate.prototype.getMyData = function () {
        this.newDataArray = [];
        for (var i = 0; i < this.dataArray.length; i++) {
            var x2, y2;
            var temp = [];
            x2 = this.dataArray[i].value.split(",").map(Number)[0];
            y2 = this.dataArray[i].value.split(",").map(Number)[1];
            var x = (y2 - this.y1) * (y2 - this.y1);
            var y = (x2 - this.x1) * (x2 - this.x1);
            var dist = Math.sqrt(x + y);
            temp.push(this.dataArray[i].id, this.dataArray[i].value, dist);
            this.newDataArray.push(temp);
        }
        console.log(this.newDataArray);
        function compare(a, b) {
            var distA = a[2];
            var distB = b[2];
            var comp = 0;
            if (distA > distB) {
                comp = 1;
            }
            else if (distA < distB) {
                comp = -1;
            }
            return comp;
        }
        this.newDataArray.sort(compare);
        console.log(this.newDataArray);
    };
    return Coordinate;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Coordinate.prototype, "x1", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Coordinate.prototype, "y1", void 0);
Coordinate = __decorate([
    core_1.Component({
        selector: 'co-ordinate',
        templateUrl: './co-ordinate.html',
        styleUrls: ['./co-ordinate.less']
    }),
    __metadata("design:paramtypes", [appService_1.AppService])
], Coordinate);
exports.Coordinate = Coordinate;
//# sourceMappingURL=co-ordinate.componenent.js.map