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
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQU1FO1FBTEEsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBRWhCLGdDQUFRLEdBQVI7UUFDRSxJQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUMzQiw2REFBNkQ7UUFFN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLGdDQUFnQztRQUNoQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQTdCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOztPQUNXLGFBQWEsQ0E4QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY2xpY2tDb3VudDogbnVtYmVyID0gMDtcclxuICB0eHQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIGxpc3RhOiBzdHJpbmdbXSA9IFtcInBvenljamEgMVwiLCBcInBvenljamEgMlwiXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKTtcclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgdGhpcy5jbGlja0NvdW50ID0gcGFyc2VJbnQocmVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvZGFqKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHh0KSB7XHJcbiAgICAgIHRoaXMubGlzdGEucHVzaCh0aGlzLnR4dCk7XHJcbiAgICAgIHRoaXMudHh0ID0gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xyXG5cclxuICAgIHRoaXMuY2xpY2tDb3VudCsrO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2xpY2tDb3VudCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgdGhpcy5jbGlja0NvdW50LnRvU3RyaW5nKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=