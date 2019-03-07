import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";

require("nativescript-localstorage");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
        localStorage.setItem('k1', 'some value');
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
