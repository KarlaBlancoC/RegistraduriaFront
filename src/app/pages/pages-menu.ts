import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "login",
    icon: "log-in-outline",
    link: '/pages/seguridad/login',
    home: true
  },
  {
    title: "Partidos",
    icon: "keypad-outline",
    link: "/pages/partido/listar"
  },
  {
    title: "Candidatos",
    icon: "flag",
    link: "/pages/candidato/listar"
  },
  {
    title: "Mesas",
    icon: "cube-outline",
    link: "/pages/mesa/listar"
  },
  {
    title: "Resultados",
    icon: "bar-chart-outline",
    link: "/pages/resultado/listar"
  },
  {
    title: "admin",
    icon: "settings-outline",
    children: [
      {
        title: "Usuarios",
        icon: "people-outline",
        link: "/pages/usuario/listar"
      }
    ]
  },
  {
    title: "logout",
    icon: "log-out-outline",
    link: '/pages/seguridad/logout'
  }
];
