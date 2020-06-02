import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { CardapioItemComponent } from "./cardapio/cardapio-item/cardapio-item.component";
import { HeaderComponent } from "./header/header.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { ContatoComponent } from "./contato/contato.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ConfirmaPedidoComponent } from "./confirma-pedido/confirma-pedido.component";
import { FaleConoscoComponent } from "./fale-conosco/fale-conosco.component";
import { HomeComponent } from "./home/home.component";
import { PedidosComponent } from "./pedidos/pedidos.component";
const routes: Routes = [
  {
    path: "cardapio",
    component: CardapioComponent,
  },
  {
    path: "carrinho",
    component: CarrinhoComponent,
  },
  {
    path: "finaliza",
    component: ConfirmaPedidoComponent,
  },
  {
    path: "fale-conosco",
    component: FaleConoscoComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "pedidos",
    component: PedidosComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    CardapioItemComponent,
    HeaderComponent,
    CarrinhoComponent,
    ContatoComponent,
    ConfirmaPedidoComponent,
    FaleConoscoComponent,
    HomeComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
