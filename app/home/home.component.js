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
    HomeComponent.prototype.remove = function () {
        if (this.lista.length > 0) {
            this.lista.pop();
        }
    };
    HomeComponent.prototype.removeAll = function () {
        if (this.lista.length > 0) {
            this.lista.length = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQVFJO1FBTEEsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBRWpCLGdDQUFRLEdBQVI7UUFDSSxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6Qiw2REFBNkQ7UUFFN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLGdDQUFnQztRQUNoQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQTNDUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0E0Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgY2xpY2tDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHR4dDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBsaXN0YTogc3RyaW5nW10gPSBbXCJwb3p5Y2phIDFcIiwgXCJwb3p5Y2phIDJcIl07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCByZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIik7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSBwYXJzZUludChyZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2RhaigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50eHQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0YS5wdXNoKHRoaXMudHh0KTtcclxuICAgICAgICAgICAgdGhpcy50eHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGlja0NvdW50Kys7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2xpY2tDb3VudCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIHRoaXMuY2xpY2tDb3VudC50b1N0cmluZygpKTtcclxuICAgIH1cclxufVxyXG4iXX0=