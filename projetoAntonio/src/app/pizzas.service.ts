import { Injectable } from "@angular/core";
import { Pizza } from "./cardapio/model-pizza";

@Injectable({
  providedIn: "root",
})
export class PizzasService {
  pizzas: Pizza[] = [];

  constructor() {}

  addPizza(p: Pizza): void {
    const existePizza = this.pizzas.filter((pizza) => pizza.id === p.id);
    if (existePizza.length <= 0) {
      this.pizzas.push(p);
    }
  }

  getPizzas(): Pizza[] {
    return this.pizzas;
  }
}
