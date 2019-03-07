"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.clickCount = 0;
        this.clickCountStr = "";
        this.txt = "";
        this.lista = ["pozycja 1", "pozycja 2"];
    }
    HomeComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
        var res = localStorage.getItem('counter');
        if (res != null) {
            console.log(res);
            this.clickCount = parseInt(res);
            this.clickCount = this.clickCount + 1;
        }
        else {
            console.log("Res is null");
            this.clickCount = 1;
        }
        console.log(this.clickCount);
        localStorage.setItem('counter', this.clickCount.toString());
    };
    HomeComponent.prototype.dodaj = function () {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQWdDSTtRQTlCQSxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBZ0IzQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBYSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQVk3QyxDQUFDO0lBN0JELGlDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFFMUQsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUtELDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDakI7SUFFTCxDQUFDO0lBTUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFwQ1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBcUN6QjtJQUFELG9CQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjbGlja0NvdW50OiBudW1iZXIgPSAwO1xuICAgIGNsaWNrQ291bnRTdHI6IHN0cmluZyA9IFwiXCI7XG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0l0ZW0gd2l0aCBpbmRleDogJyArIGFyZ3MuaW5kZXggKyAnIHRhcHBlZCcpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHJlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudGVyJyk7XG4gICAgICAgIGlmKHJlcyAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSBwYXJzZUludChyZXMpO1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gdGhpcy5jbGlja0NvdW50ICsgMTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXMgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGlja0NvdW50KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50ZXInLCB0aGlzLmNsaWNrQ291bnQudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHR4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIGxpc3RhOiBzdHJpbmdbXSA9IFtcInBvenljamEgMVwiLCBcInBvenljamEgMlwiXTtcblxuICAgIGRvZGFqKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50eHQpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGEucHVzaCh0aGlzLnR4dCk7XG4gICAgICAgICAgICB0aGlzLnR4dCA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxufVxuIl19