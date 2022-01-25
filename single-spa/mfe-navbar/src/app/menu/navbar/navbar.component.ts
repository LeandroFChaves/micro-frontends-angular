import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(10, Validators.min(10));
  usuario: any = {};

  urlUsuario1: string = assetUrl('usuario-1.jpg');
  urlUsuario2: string = assetUrl('images/faces/usuario-2.jpg');
  urlUsuario3: string = assetUrl('images/faces/usuario-3.jpg');

  constructor() { }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  async ngOnInit(): Promise<void> {
    this.usuario = {... this.usuario, 'firstName': 'Teste Usuário'};
  }
}
