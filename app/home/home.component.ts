import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    clickCount: number = 0;
    clickCountStr: string = "";
    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
        
        var res = localStorage.getItem('counter');
        if(res != null){
            this.clickCount = parseInt(res);
            this.clickCount = this.clickCount + 1;
        } else{
            this.clickCount = 1;
        }
        console.log(this.clickCount);
        localStorage.setItem('counter', this.clickCount.toString());
    }
    txt: string = "";

    lista: string[] = ["pozycja 1", "pozycja 2"];

    dodaj(): void {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
        }

    }


    constructor() {
    }

    ngOnInit(): void {
    }
}
