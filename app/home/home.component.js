"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-localstorage");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.txt = "";
        this.lista = ["pozycja 1", "pozycja 2"];
    }
    HomeComponent.prototype.onItemTap = function (args) {
        console.log('Item with index: ' + args.index + ' tapped');
        localStorage.setItem('k1', 'some value');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUVsRCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQVFyQztJQW9CSTtRQWJBLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFFakIsVUFBSyxHQUFhLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBWTdDLENBQUM7SUFsQkQsaUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQztRQUMxRCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBS0QsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFNRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXhCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0F5QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgICBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIHdpdGggaW5kZXg6ICcgKyBhcmdzLmluZGV4ICsgJyB0YXBwZWQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnazEnLCAnc29tZSB2YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgdHh0OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGxpc3RhOiBzdHJpbmdbXSA9IFtcInBvenljamEgMVwiLCBcInBvenljamEgMlwiXTtcclxuXHJcbiAgICBkb2RhaigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50eHQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0YS5wdXNoKHRoaXMudHh0KTtcclxuICAgICAgICAgICAgdGhpcy50eHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==