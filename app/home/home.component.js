"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.clickCount = 0;
        this.txt = "";
        this.lista = ["pozycja 1", "pozycja 2"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var res = localStorage.getItem("counter");
        if (res) {
            this.clickCount = parseInt(res);
        }
    };
    HomeComponent.prototype.dodaj = function () {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
        }
    };
    HomeComponent.prototype.onItemTap = function (args) {
        // console.log("Item with index: " + args.index + " tapped");
        this.clickCount++;
        // console.log(this.clickCount);
        localStorage.setItem("counter", this.clickCount.toString());
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQVFJO1FBTEEsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBRWpCLGdDQUFRLEdBQVI7UUFDSSxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsSUFBbUI7UUFDekIsNkRBQTZEO1FBRTdELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixnQ0FBZ0M7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUEvQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIGNsaWNrQ291bnQ6IG51bWJlciA9IDA7XG4gICAgdHh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgbGlzdGE6IHN0cmluZ1tdID0gW1wicG96eWNqYSAxXCIsIFwicG96eWNqYSAyXCJdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIik7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IHBhcnNlSW50KHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2RhaigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudHh0KSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RhLnB1c2godGhpcy50eHQpO1xuICAgICAgICAgICAgdGhpcy50eHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcblxuICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNsaWNrQ291bnQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkpO1xuICAgIH1cbn1cbiJdfQ==