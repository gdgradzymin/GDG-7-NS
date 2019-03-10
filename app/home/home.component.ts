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
    txt: string = "";

    lista: string[] = ["pozycja 1", "pozycja 2"];

    constructor() { }

    ngOnInit(): void {
        const res = localStorage.getItem("counter");
        if (res) {
            this.clickCount = parseInt(res);
        }
    }

    dodaj(): void {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
        }
    }

    remove(): void {
        if (this.lista.length > 0) {
            this.lista.pop();
        }
    }

    removeAll(): void {
        if (this.lista.length > 0) {
            this.lista.length = 0;
        }
    }

    onItemTap(args: ItemEventData): void {
        // console.log("Item with index: " + args.index + " tapped");

        this.clickCount++;

        // console.log(this.clickCount);
        localStorage.setItem("counter", this.clickCount.toString());
    }
}
