// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _buttonEl = require("../components/button-el");
var _handsEl = require("../components/hands-el");
var _scoreEl = require("../components/score-el");
var _resultEl = require("../components/result-el");
(function() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
})();

},{"./router":"4QFWt","../components/button-el":"gelUP","../components/hands-el":"eRmUc","../components/score-el":"35LYL","../components/result-el":"koHU5"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("../pages/welcome");
var _init = require("../pages/init");
var _choose = require("../pages/choose");
var _result = require("../pages/result");
var _chooseE = require("../pages/choose-e");
const BASE_PATH = "/desafio-rps";
function isGithubPages() {
    return location.host.includes("nashinshin.github.io");
}
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/instructions/,
        component: (0, _init.initComoJugar)
    },
    {
        path: /\/choose/,
        component: (0, _choose.initSelect)
    },
    {
        path: /\/versus/,
        component: (0, _chooseE.initSelectEnd)
    },
    {
        path: /\/result/,
        component: (0, _result.initResultado)
    }
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        //    console.log("el handle Route recibio una nueva ruta y es", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.pathname == "/desafio5-piedrapapeltijera/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"../pages/welcome":"24vYR","../pages/init":"g7ddV","../pages/choose":"29ezN","../pages/result":"80KGJ","../pages/choose-e":"e2OFc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24vYR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
function initWelcome(params) {
    const div = document.createElement("div");
    div.className = "welcome";
    div.innerHTML = `
    <h1 class="welcome-title">Piedra</h1>
    <h1 class="welcome-title">Papel</h1>
    <h1 class="welcome-title">Tijera</h1>
   
    <el-button class="empezar-button">Empezar</el-button>
  
    <div class="hands-div">  
    <hands-el hand="piedra" type="hand-img"></hands-el>
    <hands-el hand="papel"  type="hand-img"></hands-el>
    <hands-el hand="tijera" type="hand-img"></hands-el>
    </div>
    `;
    const startButtonEl = div.querySelector(".empezar-button");
    startButtonEl?.addEventListener("click", function() {
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g7ddV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initComoJugar", ()=>initComoJugar);
function initComoJugar(params) {
    const div = document.createElement("div");
    div.className = "comojugar-div";
    div.innerHTML = `
        <h2 class="comojugar-title">Presion\xe1 jugar y eleg\xed: <br> piedra, papel o tijera <br> antes de que <br> pasen los 5<br>segundos.</h2>
  
  
        <el-button class="jugar-button">\xa1Jugar!</el-button>
  
  
        <div class="hands-div">  
           <hands-el hand="piedra" type="hand-img"></hands-el>
           <hands-el hand="papel"  type="hand-img"></hands-el>
           <hands-el hand="tijera" type="hand-img"></hands-el>
        </div>
  
        `;
    const jugarButtonEl = div.querySelector(".jugar-button");
    jugarButtonEl?.addEventListener("click", ()=>{
        params.goTo("/choose");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29ezN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSelect", ()=>initSelect);
var _state = require("../src/state");
function initSelect(params) {
    (0, _state.state).setUserMove("papel");
    const div = document.createElement("div");
    div.className = "select";
    let counter = 6;
    let typesPiedra = "hand-img ";
    let typesPapel = "hand-img ";
    let typesTijera = "hand-img ";
    const interval = setInterval(()=>{
        counter--;
        div.innerHTML = `                 
                <div class="div-redondo"> <h2 class="h2-redondo">${counter}</h2> </div>


                <div class="hands-div">  
                  <hands-el hand="piedra" type="${typesPiedra}" class="piedra"></hands-el>
                  <hands-el hand="papel"  type="${typesPapel}" class="papel"></hands-el>
                  <hands-el hand="tijera" type="${typesTijera}" class="tijera"></hands-el>
                 </div>

                 `;
        const piedraEl = div.querySelector(".piedra");
        const papelEl = div.querySelector(".papel");
        const tijeraEl = div.querySelector(".tijera");
        piedraEl?.addEventListener("click", ()=>{
            typesPiedra = "hand-grande";
            typesPapel = "hand-none";
            typesTijera = "hand-none";
            (0, _state.state).setUserMove("piedra");
        });
        papelEl?.addEventListener("click", ()=>{
            typesPiedra = "hand-none";
            typesPapel = "hand-grande";
            typesTijera = "hand-none";
            (0, _state.state).setUserMove("papel");
        });
        tijeraEl?.addEventListener("click", ()=>{
            typesPiedra = "hand-none";
            typesPapel = "hand-none";
            typesTijera = "hand-grande";
            (0, _state.state).setUserMove("tijera");
        });
        if (counter === 0) {
            // Detener el intervalo
            clearInterval(interval);
            (0, _state.state).runPlayComputer();
            params.goTo("/versus");
        }
    }, 1000);
    return div;
}

},{"../src/state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            userPlay: ""
        },
        history: {
            computerScore: 0,
            userScore: 0
        }
    },
    listeners: [],
    setUserMove (move) {
        const currentState = this.getState();
        currentState.currentGame.userPlay = move;
    },
    setComputerMove (move) {
        const currentState = this.getState();
        currentState.currentGame.computerPlay = move;
    },
    runPlayComputer () {
        let numeroRandom = Math.floor(Math.random() * 9) + 1;
        let jugada = "papel";
        if (numeroRandom < 4) jugada = "piedra";
        else if (numeroRandom >= 4 && numeroRandom <= 6) jugada = "papel";
        else jugada = "tijera";
        this.setComputerMove(jugada);
    },
    whoWins (userPlay, computerPlay) {
        let winner = "empate";
        if (userPlay == "papel" && computerPlay == "piedra") winner = "user";
        if (userPlay == "papel" && computerPlay == "tijera") winner = "computer";
        if (userPlay == "piedra" && computerPlay == "tijera") winner = "user";
        if (userPlay == "piedra" && computerPlay == "papel") winner = "computer";
        if (userPlay == "tijera" && computerPlay == "papel") winner = "user";
        if (userPlay == "tijera" && computerPlay == "piedra") winner = "computer";
        this.pushHistory(winner);
        return winner;
    },
    pushHistory (ganador) {
        const currentState = this.getState();
        if (ganador == "computer") currentState.history.computerScore++;
        else if (ganador == "user") currentState.history.userScore++;
    },
    getState () {
        return this.data;
    },
    setState (state) {
        this.data = state;
        for (const cb of this.listeners)cb();
    },
    subscribe (cb) {
        this.listeners.push(cb);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80KGJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultado", ()=>initResultado);
var _state = require("../src/state");
function initResultado(params) {
    const currentState = (0, _state.state).getState();
    let jugadaUser = currentState.currentGame.userPlay;
    let jugadaComputer = currentState.currentGame.computerPlay;
    let verGanador = (0, _state.state).whoWins(jugadaUser, jugadaComputer);
    let resultado;
    if (verGanador == "user") resultado = "Ganaste";
    if (verGanador == "empate") resultado = "Empate";
    if (verGanador == "computer") resultado = "Perdiste";
    const div = document.createElement("div");
    div.className = "resultado-div";
    div.innerHTML = `
     
    <div class="${resultado}">  
    
    <winlost-el resultado="${resultado}" ></winlost-el>

    <score-el></score-el>
    
    <el-button class="button-reinicar">Volver a Jugar</el-button></div>
  
        `;
    const reiniciarButtonEl = div.querySelector(".button-reinicar");
    reiniciarButtonEl?.addEventListener("click", ()=>{
        params.goTo("/choose");
    });
    return div;
}

},{"../src/state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OFc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSelectEnd", ()=>initSelectEnd);
var _state = require("../src/state");
function initSelectEnd(params) {
    const div = document.createElement("div");
    div.className = "select-end";
    const currentSate = (0, _state.state).getState();
    const computerSelect = currentSate.currentGame.computerPlay;
    const userSelect = currentSate.currentGame.userPlay;
    div.innerHTML = `  
  
  <hands-el hand="${computerSelect}" type="hand-grande" class="select-end-computer"></hands-el>
  <hands-el hand="${userSelect}"  type="hand-grande" class="select-end-user"></hands-el>
   
  `;
    let counter = 1;
    const interval = setInterval(()=>{
        counter--;
        if (counter === 0) {
            // Detener el intervalo
            clearInterval(interval);
            params.goTo("/resultado");
        }
    }, 1000);
    return div;
}

},{"../src/state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gelUP":[function(require,module,exports) {
class ButtonEl extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.innerHTML = `
      .root{
            width: 330px;
            height: 80px;
            border-style: solid; 
            border-radius: 10px;          
            border-width: 10px;
            background-color:#006CFC;
            border-color: #001997;
            font-size: 45px;
            font-family: "Times New Roman", sans-serif;
            color: white;
           }`;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const buttonEl = document.createElement("button");
        buttonEl.textContent = this.textContent;
        buttonEl.className = "root";
        this.shadow.appendChild(buttonEl);
    }
}
customElements.define("el-button", ButtonEl);

},{}],"eRmUc":[function(require,module,exports) {
const hands = {
    tijera: require("29dc8fd358d0f284"),
    piedra: require("8ccf7c0f7f458ceb"),
    papel: require("578ab61593e63aed")
};
class HandComponent extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.textContent = `
            .hand-img {           
                width: 125px;
                height: 225px;   
            }
            .hand-grande {
              width:125px;
              height:225x;
            }
    
            .hand-none {
              opacity:50%;
             
        }
         
        @media (max-width: 460px) {
            .hand-img {
              width: 70px;
              height: 125px;
          }
           .hand-grande{
              width:145px;
              height:200px;
            
              }
  
              .hand-none {
                opacity:50%;
              
            }
            `;
        this.render();
        this.shadow.appendChild(style);
    }
    render() {
        const typeAttr = this.getAttribute("type");
        const handAttr = this.getAttribute("hand");
        this.shadow.innerHTML = `
            <img class="${typeAttr}" src="${hands[handAttr]}">
            `;
    }
}
customElements.define("hands-el", HandComponent);

},{"29dc8fd358d0f284":"8Sf1K","8ccf7c0f7f458ceb":"4IMka","578ab61593e63aed":"3vOBD"}],"8Sf1K":[function(require,module,exports) {
module.exports = require("402bce8122db4cce").getBundleURL("7UhFu") + "tijera.8152bbce.svg" + "?" + Date.now();

},{"402bce8122db4cce":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4IMka":[function(require,module,exports) {
module.exports = require("ef978e0fe055e4f5").getBundleURL("7UhFu") + "piedra.e056e2fd.svg" + "?" + Date.now();

},{"ef978e0fe055e4f5":"lgJ39"}],"3vOBD":[function(require,module,exports) {
module.exports = require("647e6c54b853b26f").getBundleURL("7UhFu") + "papel.b1a95542.svg" + "?" + Date.now();

},{"647e6c54b853b26f":"lgJ39"}],"35LYL":[function(require,module,exports) {
const resultados = {
    Ganaste: require("a7848fecd59a86cd"),
    Empate: require("4593cba6d932c4f9"),
    Perdiste: require("c72ec78fd1263cb8")
};
class WinLost extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.innerHTML = `
        
      .estrella {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
        }
        
        .imagen {
          position: relative;
          z-index: 0;
        }
        
        .texto {
          font-size: 45px;
          text-shadow: 0 0 8px black;
          color: white;
          padding: 0px;
          margin: 0px;
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
          `;
        this.render();
        this.shadow.appendChild(style);
    }
    render() {
        const handAttr = this.getAttribute("resultado");
        this.shadow.innerHTML = `
      <div class="estrella">
      <img class="imagen" src="${resultados[handAttr]}">
      <h1 class="texto">${handAttr}</h1>
    </div>
            `;
    }
}
customElements.define("winlost-el", WinLost);

},{"a7848fecd59a86cd":"iHBii","4593cba6d932c4f9":"f2ur6","c72ec78fd1263cb8":"i0T8B"}],"iHBii":[function(require,module,exports) {
module.exports = require("7a7e858eec04e20d").getBundleURL("7UhFu") + "ganaste.c161846f.svg" + "?" + Date.now();

},{"7a7e858eec04e20d":"lgJ39"}],"f2ur6":[function(require,module,exports) {
module.exports = require("35995ff08f1fc45").getBundleURL("7UhFu") + "empate.12d44ab5.png" + "?" + Date.now();

},{"35995ff08f1fc45":"lgJ39"}],"i0T8B":[function(require,module,exports) {
module.exports = require("81726d21bf1b980").getBundleURL("7UhFu") + "perdiste.5ab8737d.svg" + "?" + Date.now();

},{"81726d21bf1b980":"lgJ39"}],"koHU5":[function(require,module,exports) {
var _state = require("../src/state");
class ScoreEl extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.innerHTML = `
      .score {
        font-family: "Times New Roman", sans-serif;
        width: 250px;
        height: 215px;
        border: solid;
        border-color: black;
        border-radius: 15px;
        border-width: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        }

        .textoh1{
           font-size: 40px;
        }

        .div-score{
          display: flex;
          flex-direction: column;
          align-items: end;
        }
        
        .textoh2 {
          font-family: "Work Sans", sans-serif;
          margin:0;  
        }

        `;
        this.shadow.appendChild(style);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const currentState = (0, _state.state).getState();
        const userScore = currentState.history.userScore;
        const computerScore = currentState.history.computerScore;
        const scoreEl = document.createElement("div");
        scoreEl.className = "score";
        scoreEl.innerHTML = `
    <h1 class="textoh1">SCORE</h1>
    <div class="div-score"><h1 class="textoh2">Vos: ${userScore}</h1> 
          <h1 class="textoh2">Compu: ${computerScore}</h1>
    </div>
   
       `;
        this.shadow.appendChild(scoreEl);
    }
}
customElements.define("score-el", ScoreEl);

},{"../src/state":"1Yeju"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire1d69")

//# sourceMappingURL=index.b71e74eb.js.map
