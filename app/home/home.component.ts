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

    retrievedData: string = localStorage.getItem("position");
    lista2: string[] = JSON.parse(this.retrievedData);

    constructor() { }

    memory(): void{
        localStorage.setItem("position", JSON.stringify(this.lista));
        this.retrievedData = localStorage.getItem("position");
        this.lista2 = JSON.parse(this.retrievedData);
    }

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

            this.memory();
        }
    }

    remove(): void {
        if (this.lista.length > 0) {
            this.lista.pop();

            this.memory();
        }
    }

    removeAll(): void {
        if (this.lista.length > 0) {
            this.lista.length = 0;

            this.memory();
        }
    }

    onItemTap(args: ItemEventData): void {
        // console.log("Item with index: " + args.index + " tapped");

        this.clickCount++;

        // console.log(this.clickCount);
        localStorage.setItem("counter", this.clickCount.toString());
    }
}
