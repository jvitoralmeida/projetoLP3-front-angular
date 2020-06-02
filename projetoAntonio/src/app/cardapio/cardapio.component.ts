import { Component, OnInit } from "@angular/core";
import { CardapioItemComponent } from "./cardapio-item/cardapio-item.component";
import { pizzas } from "./data-pizza";

@Component({
  selector: "app-cardapio",
  templateUrl: "./cardapio.component.html",
  styleUrls: ["./cardapio.component.scss"],
})
export class CardapioComponent implements OnInit {
  pizzaArray = pizzas;

  constructor() {}

  ngOnInit() {}
}
