import { initWelcome } from "../pages/welcome";
import { initComoJugar } from "../pages/init";
import { initSelect } from "../pages/choose";
import { initResultado } from "../pages/result";
import { initSelectEnd } from "../pages/choose-e";

const BASE_PATH = "/desafio-rps";

function isGithubPages() {
  return location.host.includes("nashinshin.github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/instructions/,
    component: initComoJugar,
  },
  {
    path: /\/choose/,
    component: initSelect,
  },
  {
    path: /\/versus/,
    component: initSelectEnd,
  },
  {
    path: /\/result/,
    component: initResultado,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    //    console.log("el handle Route recibio una nueva ruta y es", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (
    location.pathname == "/" ||
    location.pathname == "/desafio5-piedrapapeltijera/"
  ) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}