import { Pizza } from "../cardapio/model-pizza";

export interface Pedido {
  pizza: Pizza;
  quantidade: number;
}
