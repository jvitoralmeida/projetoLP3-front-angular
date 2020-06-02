import { Component, OnInit, OnDestroy } from "@angular/core";
import { PizzasService } from "../pizzas.service";
import { Pizza } from "../cardapio/model-pizza";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Pedido } from "./pedido";
import { ConfirmaPedidoComponent } from "../confirma-pedido/confirma-pedido.component";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.component.html",
  styleUrls: ["./carrinho.component.scss"],
})
export class CarrinhoComponent implements OnInit, OnDestroy {
  faTrash = faTrash; //icon
  itens: Pizza[] = [];
  pedido: Pedido[] = [];
  valorfinal: number = 0;
  confirma = false;

  constructor(private pizzaService: PizzasService) {}
  ngOnDestroy(): void {
    this.confirma = false;
  }

  ngOnInit() {
    this.getPizzasService();
    this.calculaValor(this.pedido);
  }

  getPizzasService(): void {
    this.itens = this.pizzaService.getPizzas();
    this.adicionaPizzaPedido(this.itens);
  }

  removeItemLista(index: number): void {
    this.itens.splice(index, 1);
    this.pedido.splice(index, 1);
    this.calculaValor(this.pedido);
  }

  adicionaPizzaPedido(listaPizza: Pizza[]): void {
    this.pedido = [];
    this.itens.forEach((element) => {
      this.pedido.push({ pizza: element, quantidade: 1 });
    });
    console.log(this.pedido);
  }

  calculaValor(pedidoArray: Pedido[]) {
    let valor = 0;
    pedidoArray.forEach((element) => {
      valor += element.pizza.preco * element.quantidade;
    });
    this.valorfinal = valor;
  }

  mudarQuantidadePizza(event: any, id: number) {
    const pedido = this.pedido.filter((elemento) => elemento.pizza.id == id);
    const index = this.pedido.indexOf(pedido[0]);
    this.pedido[index].quantidade = event.target.value;

    this.calculaValor(this.pedido);
  }
}
