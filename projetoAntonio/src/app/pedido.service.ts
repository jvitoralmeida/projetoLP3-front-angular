import { Injectable } from "@angular/core";
import { Pedido } from "./carrinho/pedido";

@Injectable({
  providedIn: "root",
})
export class PedidoService {
  pedidos: Pedido[];
  constructor() {}

  addPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }
}
