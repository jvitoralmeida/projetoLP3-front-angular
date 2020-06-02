import { Component, OnInit, Input } from "@angular/core";
import { Pizza } from "../model-pizza";
import { PizzasService } from "src/app/pizzas.service";

@Component({
  selector: "app-cardapio-item",
  templateUrl: "./cardapio-item.component.html",
  styleUrls: ["./cardapio-item.component.scss"],
})
export class CardapioItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor(private pizzaService: PizzasService) {}

  ngOnInit() {}

  addPizzaNoCarrinho(p: Pizza) {
    this.pizzaService.addPizza(p);
  }
}
