"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.clickCount = 0;
        this.txt = "";
        this.lista = [];
        this.retrievedData = localStorage.getItem("position");
        this.lista2 = JSON.parse(this.retrievedData);
    }
    HomeComponent.prototype.memory = function () {
        localStorage.setItem("position", JSON.stringify(this.lista));
        this.retrievedData = localStorage.getItem("position");
        this.lista2 = JSON.parse(this.retrievedData);
    };
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
            this.memory();
        }
    };
    HomeComponent.prototype.remove = function () {
        if (this.lista.length > 0) {
            this.lista.pop();
            this.memory();
        }
    };
    HomeComponent.prototype.removeAll = function () {
        if (this.lista.length > 0) {
            this.lista.length = 0;
            this.memory();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQVdJO1FBUkEsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFVBQUssR0FBYSxFQUFFLENBQUM7UUFFckIsa0JBQWEsR0FBVyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELFdBQU0sR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRWpCLDhCQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFFZCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6Qiw2REFBNkQ7UUFFN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLGdDQUFnQztRQUNoQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQTFEUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0EyRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgY2xpY2tDb3VudDogbnVtYmVyID0gMDtcclxuICAgIHR4dDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBsaXN0YTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICByZXRyaWV2ZWREYXRhOiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvc2l0aW9uXCIpO1xyXG4gICAgbGlzdGEyOiBzdHJpbmdbXSA9IEpTT04ucGFyc2UodGhpcy5yZXRyaWV2ZWREYXRhKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG1lbW9yeSgpOiB2b2lke1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicG9zaXRpb25cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0YSkpO1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgdGhpcy5saXN0YTIgPSBKU09OLnBhcnNlKHRoaXMucmV0cmlldmVkRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudGVyXCIpO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gcGFyc2VJbnQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9kYWooKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudHh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGEucHVzaCh0aGlzLnR4dCk7XHJcbiAgICAgICAgICAgIHRoaXMudHh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVtb3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGEucG9wKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbW9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbW9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNsaWNrQ291bnQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCB0aGlzLmNsaWNrQ291bnQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuIl19