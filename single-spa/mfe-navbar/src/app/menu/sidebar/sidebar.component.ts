import { Component, OnInit } from '@angular/core';

import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  usuario: any = {};
  urlLogoMenu: string = assetUrl('./logo-ucam-branco.svg');

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.usuario = {... this.usuario, 'firstName': 'Teste Usuário', 'email': 'teste.usuario@teste.com.br'};
  }

  logout() {
    console.log('Realizar o logout da aplicação.')
  }
}
