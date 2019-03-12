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
    save(){
        localStorage.setItem("position", JSON.stringify(this.lista));
    }

    load(){
        this.lista = JSON.parse(localStorage.getItem("position"));
    }

    ngOnInit(): void {
        const res = localStorage.getItem("counter");
        if (res) {
            this.clickCount = parseInt(res);
        }
        this.load();
    }

    dodaj(): void {
        if (this.txt) {
            this.lista.push(this.txt);
            this.txt = "";
            this.save();
        }
    }

    remove(): void {
        if (this.lista.length > 0) {
            this.lista.pop();
            this.save();
        }
    }

    removeAll(): void {
        if (this.lista.length > 0) {
            this.lista.length = 0;
            this.save();
        }
    }

    onItemTap(args: ItemEventData): void {
        // console.log("Item with index: " + args.index + " tapped");

        this.clickCount++;

        // console.log(this.clickCount);
        localStorage.setItem("counter", this.clickCount.toString());
    }
}
