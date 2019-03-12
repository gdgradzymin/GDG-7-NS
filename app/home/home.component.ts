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
    lista: string[] = [];

    constructor() { }

    ngOnInit(): void {
        const res = localStorage.getItem("counter");
        if (res) {
            this.clickCount = parseInt(res);
        }
        const zmienne = localStorage.getItem("wartosci");
        if (zmienne) {
            this.lista = zmienne.split(',');
        }
    }

    dodaj(): void {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
            localStorage.setItem("wartosci", this.lista.toString());
        }
    }

    remove(): void {
        if (this.lista.length > 0) {
            this.lista.pop();
            localStorage.setItem("wartosci", this.lista.toString());
        }
    }

    removeAll(): void {
        if (this.lista.length > 0) {
            this.lista.length = 0;
            localStorage.setItem("wartosci", this.lista.toString());
        }
    }

    onItemTap(args: ItemEventData): void {
        // console.log("Item with index: " + args.index + " tapped");

        this.clickCount++;

        // console.log(this.clickCount);
        localStorage.setItem("counter", this.clickCount.toString());
    }
}
