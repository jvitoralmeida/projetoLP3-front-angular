import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Pedido } from "../carrinho/pedido";
import { Pessoa } from "../model-person";

@Component({
  selector: "app-confirma-pedido",
  templateUrl: "./confirma-pedido.component.html",
  styleUrls: ["./confirma-pedido.component.scss"],
})
export class ConfirmaPedidoComponent implements OnInit {
  @Input() pedido: Pedido;
  @Input() valorFinal: number;

  @ViewChild("nome", { static: true }) nome: ElementRef;
  @ViewChild("cpf", { static: true }) cpf: ElementRef;
  @ViewChild("telefone", { static: true }) telefone: ElementRef;
  @ViewChild("endereco", { static: true }) endereco: ElementRef;

  pessoa: Pessoa;
  constructor() {}

  ngOnInit() {}

  enviaPedido(): void {}
}
