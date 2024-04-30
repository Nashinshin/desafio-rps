import { state } from "../src/state";
import { initRouter } from "./router";
import "../components/button-el";
import "../components/hands-el";
import "../components/score-el";
import "../components/result-el";

(function () {
  const root = document.querySelector(".root");
  initRouter(root!);
})();