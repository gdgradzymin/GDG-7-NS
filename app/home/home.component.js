"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.txt = "";
        this.lista = ["pozycja 1", "pozycja 2"];
    }
    HomeComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQVFsRDtJQW1CSTtRQWJBLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFFakIsVUFBSyxHQUFhLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBWTdDLENBQUM7SUFqQkQsaUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBS0QsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFNRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXZCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSXRlbSB3aXRoIGluZGV4OiAnICsgYXJncy5pbmRleCArICcgdGFwcGVkJyk7XHJcbiAgICB9XHJcbiAgICB0eHQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgbGlzdGE6IHN0cmluZ1tdID0gW1wicG96eWNqYSAxXCIsIFwicG96eWNqYSAyXCJdO1xyXG5cclxuICAgIGRvZGFqKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnR4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RhLnB1c2godGhpcy50eHQpO1xyXG4gICAgICAgICAgICB0aGlzLnR4dCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIl19