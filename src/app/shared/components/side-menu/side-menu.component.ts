import { Component } from '@angular/core';

interface menuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent {
  public reactiveMenu: menuItem[] = [
    {
      title: 'Basicos',
      route: './reactive/basic',
    },
    {
      title: 'dynamic',
      route: './reactive/dynamic',
    },
    {
      title: 'switches',
      route: './reactive/switches',
    },
  ];

  public authMenu: menuItem[] = [
    {
      title: 'Registro',
      route: './auth/sign-up',
    },
  ];
}
