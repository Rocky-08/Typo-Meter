// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"HhbGK":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d231a23f43d60e28ed500b93b4f5078c"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
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
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4ThtM":[function(require,module,exports) {
'use strict';
let words_place = document.querySelector('.words_cat');
let diff_words = document.querySelector('.diff_words');
let timer_box = document.querySelector('.timer');
let time_left = document.querySelector('.time_left');
let score = document.querySelector('.score');
let input = document.querySelector('.different_input');
let options = document.querySelector('.options');
let end_box = document.querySelector('.end');
let main_box = document.querySelector('.box');
let score_text = document.querySelector('.score-text');
let reset_btn = document.querySelector('.reset');
const words = require('random-words');
let random_words = require('random-words');
let word;
let generate_wordsEasy = ()=>{
    word = random_words({
        exactly: 1,
        maxLength: 12
    });
    words_place.textContent = word;
};
let generate_wordsMedium = ()=>{
    word = random_words({
        exactly: 1,
        maxLength: 15,
        wordsPerString: 2
    });
    words_place.textContent = word;
};
let generate_wordsHard = ()=>{
    word = random_words({
        exactly: 1,
        maxLength: 18,
        wordsPerString: 2,
        separator: '-'
    });
    words_place.textContent = word;
};
let countScore = 0;
let calcMin;
let seconds;
seconds = 8;
let option = 'Easy';
options.addEventListener('click', function() {
    option = options.value;
});
let timer_on = ()=>{
    if (seconds == 1) {
        end_box.classList.remove('hidden');
        main_box.classList.add('hidden');
        score_text.textContent = `Your Score is ${countScore}`;
    }
    if (seconds > 1) {
        calcMin = Math.floor(seconds / 60);
        if (calcMin != 0) seconds = seconds % 60;
        seconds--;
        if (seconds == 0) {
            seconds = 60;
            calcMin--;
        }
        let minute_zero = calcMin < 10 ? '0' : '';
        let seconds_zero = seconds < 10 ? '0' : '';
        time_left.textContent = `Time left ${minute_zero}${calcMin}:${seconds_zero}${seconds}`;
    }
};
/* timer_on(8); */ setInterval(timer_on, 800);
generate_wordsEasy();
input.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        if (input.value == word) {
            if (seconds > 0) {
                countScore++;
                score.textContent = `Score : ${countScore}`;
                console.log('hello');
                input.value = '';
                if (option == 'Easy') {
                    generate_wordsEasy();
                    seconds += 5;
                } else if (option == 'Medium') {
                    generate_wordsMedium();
                    seconds += 4;
                } else if (option == 'Hard') {
                    generate_wordsHard();
                    seconds += 3;
                }
            }
        }
    }
});
reset_btn.addEventListener('click', function() {
    countScore = 0;
    seconds = 8;
    end_box.classList.add('hidden');
    main_box.classList.remove('hidden');
    score.textContent = `Score : ${countScore}`;
    generate_wordsEasy();
    options.value = 'Easy';
    input.value = '';
});

},{"random-words":"27yIA"}],"27yIA":[function(require,module,exports) {
var wordList = [
    // Borrowed from xkcd password generator which borrowed it from wherever
    "ability",
    "able",
    "aboard",
    "about",
    "above",
    "accept",
    "accident",
    "according",
    "account",
    "accurate",
    "acres",
    "across",
    "act",
    "action",
    "active",
    "activity",
    "actual",
    "actually",
    "add",
    "addition",
    "additional",
    "adjective",
    "adult",
    "adventure",
    "advice",
    "affect",
    "afraid",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "ago",
    "agree",
    "ahead",
    "aid",
    "air",
    "airplane",
    "alike",
    "alive",
    "all",
    "allow",
    "almost",
    "alone",
    "along",
    "aloud",
    "alphabet",
    "already",
    "also",
    "although",
    "am",
    "among",
    "amount",
    "ancient",
    "angle",
    "angry",
    "animal",
    "announced",
    "another",
    "answer",
    "ants",
    "any",
    "anybody",
    "anyone",
    "anything",
    "anyway",
    "anywhere",
    "apart",
    "apartment",
    "appearance",
    "apple",
    "applied",
    "appropriate",
    "are",
    "area",
    "arm",
    "army",
    "around",
    "arrange",
    "arrangement",
    "arrive",
    "arrow",
    "art",
    "article",
    "as",
    "aside",
    "ask",
    "asleep",
    "at",
    "ate",
    "atmosphere",
    "atom",
    "atomic",
    "attached",
    "attack",
    "attempt",
    "attention",
    "audience",
    "author",
    "automobile",
    "available",
    "average",
    "avoid",
    "aware",
    "away",
    "baby",
    "back",
    "bad",
    "badly",
    "bag",
    "balance",
    "ball",
    "balloon",
    "band",
    "bank",
    "bar",
    "bare",
    "bark",
    "barn",
    "base",
    "baseball",
    "basic",
    "basis",
    "basket",
    "bat",
    "battle",
    "be",
    "bean",
    "bear",
    "beat",
    "beautiful",
    "beauty",
    "became",
    "because",
    "become",
    "becoming",
    "bee",
    "been",
    "before",
    "began",
    "beginning",
    "begun",
    "behavior",
    "behind",
    "being",
    "believed",
    "bell",
    "belong",
    "below",
    "belt",
    "bend",
    "beneath",
    "bent",
    "beside",
    "best",
    "bet",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bigger",
    "biggest",
    "bill",
    "birds",
    "birth",
    "birthday",
    "bit",
    "bite",
    "black",
    "blank",
    "blanket",
    "blew",
    "blind",
    "block",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "bone",
    "book",
    "border",
    "born",
    "both",
    "bottle",
    "bottom",
    "bound",
    "bow",
    "bowl",
    "box",
    "boy",
    "brain",
    "branch",
    "brass",
    "brave",
    "bread",
    "break",
    "breakfast",
    "breath",
    "breathe",
    "breathing",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "broad",
    "broke",
    "broken",
    "brother",
    "brought",
    "brown",
    "brush",
    "buffalo",
    "build",
    "building",
    "built",
    "buried",
    "burn",
    "burst",
    "bus",
    "bush",
    "business",
    "busy",
    "but",
    "butter",
    "buy",
    "by",
    "cabin",
    "cage",
    "cake",
    "call",
    "calm",
    "came",
    "camera",
    "camp",
    "can",
    "canal",
    "cannot",
    "cap",
    "capital",
    "captain",
    "captured",
    "car",
    "carbon",
    "card",
    "care",
    "careful",
    "carefully",
    "carried",
    "carry",
    "case",
    "cast",
    "castle",
    "cat",
    "catch",
    "cattle",
    "caught",
    "cause",
    "cave",
    "cell",
    "cent",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chain",
    "chair",
    "chamber",
    "chance",
    "change",
    "changing",
    "chapter",
    "character",
    "characteristic",
    "charge",
    "chart",
    "check",
    "cheese",
    "chemical",
    "chest",
    "chicken",
    "chief",
    "child",
    "children",
    "choice",
    "choose",
    "chose",
    "chosen",
    "church",
    "circle",
    "circus",
    "citizen",
    "city",
    "class",
    "classroom",
    "claws",
    "clay",
    "clean",
    "clear",
    "clearly",
    "climate",
    "climb",
    "clock",
    "close",
    "closely",
    "closer",
    "cloth",
    "clothes",
    "clothing",
    "cloud",
    "club",
    "coach",
    "coal",
    "coast",
    "coat",
    "coffee",
    "cold",
    "collect",
    "college",
    "colony",
    "color",
    "column",
    "combination",
    "combine",
    "come",
    "comfortable",
    "coming",
    "command",
    "common",
    "community",
    "company",
    "compare",
    "compass",
    "complete",
    "completely",
    "complex",
    "composed",
    "composition",
    "compound",
    "concerned",
    "condition",
    "congress",
    "connected",
    "consider",
    "consist",
    "consonant",
    "constantly",
    "construction",
    "contain",
    "continent",
    "continued",
    "contrast",
    "control",
    "conversation",
    "cook",
    "cookies",
    "cool",
    "copper",
    "copy",
    "corn",
    "corner",
    "correct",
    "correctly",
    "cost",
    "cotton",
    "could",
    "count",
    "country",
    "couple",
    "courage",
    "course",
    "court",
    "cover",
    "cow",
    "cowboy",
    "crack",
    "cream",
    "create",
    "creature",
    "crew",
    "crop",
    "cross",
    "crowd",
    "cry",
    "cup",
    "curious",
    "current",
    "curve",
    "customs",
    "cut",
    "cutting",
    "daily",
    "damage",
    "dance",
    "danger",
    "dangerous",
    "dark",
    "darkness",
    "date",
    "daughter",
    "dawn",
    "day",
    "dead",
    "deal",
    "dear",
    "death",
    "decide",
    "declared",
    "deep",
    "deeply",
    "deer",
    "definition",
    "degree",
    "depend",
    "depth",
    "describe",
    "desert",
    "design",
    "desk",
    "detail",
    "determine",
    "develop",
    "development",
    "diagram",
    "diameter",
    "did",
    "die",
    "differ",
    "difference",
    "different",
    "difficult",
    "difficulty",
    "dig",
    "dinner",
    "direct",
    "direction",
    "directly",
    "dirt",
    "dirty",
    "disappear",
    "discover",
    "discovery",
    "discuss",
    "discussion",
    "disease",
    "dish",
    "distance",
    "distant",
    "divide",
    "division",
    "do",
    "doctor",
    "does",
    "dog",
    "doing",
    "doll",
    "dollar",
    "done",
    "donkey",
    "door",
    "dot",
    "double",
    "doubt",
    "down",
    "dozen",
    "draw",
    "drawn",
    "dream",
    "dress",
    "drew",
    "dried",
    "drink",
    "drive",
    "driven",
    "driver",
    "driving",
    "drop",
    "dropped",
    "drove",
    "dry",
    "duck",
    "due",
    "dug",
    "dull",
    "during",
    "dust",
    "duty",
    "each",
    "eager",
    "ear",
    "earlier",
    "early",
    "earn",
    "earth",
    "easier",
    "easily",
    "east",
    "easy",
    "eat",
    "eaten",
    "edge",
    "education",
    "effect",
    "effort",
    "egg",
    "eight",
    "either",
    "electric",
    "electricity",
    "element",
    "elephant",
    "eleven",
    "else",
    "empty",
    "end",
    "enemy",
    "energy",
    "engine",
    "engineer",
    "enjoy",
    "enough",
    "enter",
    "entire",
    "entirely",
    "environment",
    "equal",
    "equally",
    "equator",
    "equipment",
    "escape",
    "especially",
    "essential",
    "establish",
    "even",
    "evening",
    "event",
    "eventually",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "everywhere",
    "evidence",
    "exact",
    "exactly",
    "examine",
    "example",
    "excellent",
    "except",
    "exchange",
    "excited",
    "excitement",
    "exciting",
    "exclaimed",
    "exercise",
    "exist",
    "expect",
    "experience",
    "experiment",
    "explain",
    "explanation",
    "explore",
    "express",
    "expression",
    "extra",
    "eye",
    "face",
    "facing",
    "fact",
    "factor",
    "factory",
    "failed",
    "fair",
    "fairly",
    "fall",
    "fallen",
    "familiar",
    "family",
    "famous",
    "far",
    "farm",
    "farmer",
    "farther",
    "fast",
    "fastened",
    "faster",
    "fat",
    "father",
    "favorite",
    "fear",
    "feathers",
    "feature",
    "fed",
    "feed",
    "feel",
    "feet",
    "fell",
    "fellow",
    "felt",
    "fence",
    "few",
    "fewer",
    "field",
    "fierce",
    "fifteen",
    "fifth",
    "fifty",
    "fight",
    "fighting",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "find",
    "fine",
    "finest",
    "finger",
    "finish",
    "fire",
    "fireplace",
    "firm",
    "first",
    "fish",
    "five",
    "fix",
    "flag",
    "flame",
    "flat",
    "flew",
    "flies",
    "flight",
    "floating",
    "floor",
    "flow",
    "flower",
    "fly",
    "fog",
    "folks",
    "follow",
    "food",
    "foot",
    "football",
    "for",
    "force",
    "foreign",
    "forest",
    "forget",
    "forgot",
    "forgotten",
    "form",
    "former",
    "fort",
    "forth",
    "forty",
    "forward",
    "fought",
    "found",
    "four",
    "fourth",
    "fox",
    "frame",
    "free",
    "freedom",
    "frequently",
    "fresh",
    "friend",
    "friendly",
    "frighten",
    "frog",
    "from",
    "front",
    "frozen",
    "fruit",
    "fuel",
    "full",
    "fully",
    "fun",
    "function",
    "funny",
    "fur",
    "furniture",
    "further",
    "future",
    "gain",
    "game",
    "garage",
    "garden",
    "gas",
    "gasoline",
    "gate",
    "gather",
    "gave",
    "general",
    "generally",
    "gentle",
    "gently",
    "get",
    "getting",
    "giant",
    "gift",
    "girl",
    "give",
    "given",
    "giving",
    "glad",
    "glass",
    "globe",
    "go",
    "goes",
    "gold",
    "golden",
    "gone",
    "good",
    "goose",
    "got",
    "government",
    "grabbed",
    "grade",
    "gradually",
    "grain",
    "grandfather",
    "grandmother",
    "graph",
    "grass",
    "gravity",
    "gray",
    "great",
    "greater",
    "greatest",
    "greatly",
    "green",
    "grew",
    "ground",
    "group",
    "grow",
    "grown",
    "growth",
    "guard",
    "guess",
    "guide",
    "gulf",
    "gun",
    "habit",
    "had",
    "hair",
    "half",
    "halfway",
    "hall",
    "hand",
    "handle",
    "handsome",
    "hang",
    "happen",
    "happened",
    "happily",
    "happy",
    "harbor",
    "hard",
    "harder",
    "hardly",
    "has",
    "hat",
    "have",
    "having",
    "hay",
    "he",
    "headed",
    "heading",
    "health",
    "heard",
    "hearing",
    "heart",
    "heat",
    "heavy",
    "height",
    "held",
    "hello",
    "help",
    "helpful",
    "her",
    "herd",
    "here",
    "herself",
    "hidden",
    "hide",
    "high",
    "higher",
    "highest",
    "highway",
    "hill",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "hole",
    "hollow",
    "home",
    "honor",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "huge",
    "human",
    "hundred",
    "hung",
    "hungry",
    "hunt",
    "hunter",
    "hurried",
    "hurry",
    "hurt",
    "husband",
    "ice",
    "idea",
    "identity",
    "if",
    "ill",
    "image",
    "imagine",
    "immediately",
    "importance",
    "important",
    "impossible",
    "improve",
    "in",
    "inch",
    "include",
    "including",
    "income",
    "increase",
    "indeed",
    "independent",
    "indicate",
    "individual",
    "industrial",
    "industry",
    "influence",
    "information",
    "inside",
    "instance",
    "instant",
    "instead",
    "instrument",
    "interest",
    "interior",
    "into",
    "introduced",
    "invented",
    "involved",
    "iron",
    "is",
    "island",
    "it",
    "its",
    "itself",
    "jack",
    "jar",
    "jet",
    "job",
    "join",
    "joined",
    "journey",
    "joy",
    "judge",
    "jump",
    "jungle",
    "just",
    "keep",
    "kept",
    "key",
    "kids",
    "kill",
    "kind",
    "kitchen",
    "knew",
    "knife",
    "know",
    "knowledge",
    "known",
    "label",
    "labor",
    "lack",
    "lady",
    "laid",
    "lake",
    "lamp",
    "land",
    "language",
    "large",
    "larger",
    "largest",
    "last",
    "late",
    "later",
    "laugh",
    "law",
    "lay",
    "layers",
    "lead",
    "leader",
    "leaf",
    "learn",
    "least",
    "leather",
    "leave",
    "leaving",
    "led",
    "left",
    "leg",
    "length",
    "lesson",
    "let",
    "letter",
    "level",
    "library",
    "lie",
    "life",
    "lift",
    "light",
    "like",
    "likely",
    "limited",
    "line",
    "lion",
    "lips",
    "liquid",
    "list",
    "listen",
    "little",
    "live",
    "living",
    "load",
    "local",
    "locate",
    "location",
    "log",
    "lonely",
    "long",
    "longer",
    "look",
    "loose",
    "lose",
    "loss",
    "lost",
    "lot",
    "loud",
    "love",
    "lovely",
    "low",
    "lower",
    "luck",
    "lucky",
    "lunch",
    "lungs",
    "lying",
    "machine",
    "machinery",
    "mad",
    "made",
    "magic",
    "magnet",
    "mail",
    "main",
    "mainly",
    "major",
    "make",
    "making",
    "man",
    "managed",
    "manner",
    "manufacturing",
    "many",
    "map",
    "mark",
    "market",
    "married",
    "mass",
    "massage",
    "master",
    "material",
    "mathematics",
    "matter",
    "may",
    "maybe",
    "me",
    "meal",
    "mean",
    "means",
    "meant",
    "measure",
    "meat",
    "medicine",
    "meet",
    "melted",
    "member",
    "memory",
    "men",
    "mental",
    "merely",
    "met",
    "metal",
    "method",
    "mice",
    "middle",
    "might",
    "mighty",
    "mile",
    "military",
    "milk",
    "mill",
    "mind",
    "mine",
    "minerals",
    "minute",
    "mirror",
    "missing",
    "mission",
    "mistake",
    "mix",
    "mixture",
    "model",
    "modern",
    "molecular",
    "moment",
    "money",
    "monkey",
    "month",
    "mood",
    "moon",
    "more",
    "morning",
    "most",
    "mostly",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "mouth",
    "move",
    "movement",
    "movie",
    "moving",
    "mud",
    "muscle",
    "music",
    "musical",
    "must",
    "my",
    "myself",
    "mysterious",
    "nails",
    "name",
    "nation",
    "national",
    "native",
    "natural",
    "naturally",
    "nature",
    "near",
    "nearby",
    "nearer",
    "nearest",
    "nearly",
    "necessary",
    "neck",
    "needed",
    "needle",
    "needs",
    "negative",
    "neighbor",
    "neighborhood",
    "nervous",
    "nest",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "nobody",
    "nodded",
    "noise",
    "none",
    "noon",
    "nor",
    "north",
    "nose",
    "not",
    "note",
    "noted",
    "nothing",
    "notice",
    "noun",
    "now",
    "number",
    "numeral",
    "nuts",
    "object",
    "observe",
    "obtain",
    "occasionally",
    "occur",
    "ocean",
    "of",
    "off",
    "offer",
    "office",
    "officer",
    "official",
    "oil",
    "old",
    "older",
    "oldest",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "open",
    "operation",
    "opinion",
    "opportunity",
    "opposite",
    "or",
    "orange",
    "orbit",
    "order",
    "ordinary",
    "organization",
    "organized",
    "origin",
    "original",
    "other",
    "ought",
    "our",
    "ourselves",
    "out",
    "outer",
    "outline",
    "outside",
    "over",
    "own",
    "owner",
    "oxygen",
    "pack",
    "package",
    "page",
    "paid",
    "pain",
    "paint",
    "pair",
    "palace",
    "pale",
    "pan",
    "paper",
    "paragraph",
    "parallel",
    "parent",
    "park",
    "part",
    "particles",
    "particular",
    "particularly",
    "partly",
    "parts",
    "party",
    "pass",
    "passage",
    "past",
    "path",
    "pattern",
    "pay",
    "peace",
    "pen",
    "pencil",
    "people",
    "per",
    "percent",
    "perfect",
    "perfectly",
    "perhaps",
    "period",
    "person",
    "personal",
    "pet",
    "phrase",
    "physical",
    "piano",
    "pick",
    "picture",
    "pictured",
    "pie",
    "piece",
    "pig",
    "pile",
    "pilot",
    "pine",
    "pink",
    "pipe",
    "pitch",
    "place",
    "plain",
    "plan",
    "plane",
    "planet",
    "planned",
    "planning",
    "plant",
    "plastic",
    "plate",
    "plates",
    "play",
    "pleasant",
    "please",
    "pleasure",
    "plenty",
    "plural",
    "plus",
    "pocket",
    "poem",
    "poet",
    "poetry",
    "point",
    "pole",
    "police",
    "policeman",
    "political",
    "pond",
    "pony",
    "pool",
    "poor",
    "popular",
    "population",
    "porch",
    "port",
    "position",
    "positive",
    "possible",
    "possibly",
    "post",
    "pot",
    "potatoes",
    "pound",
    "pour",
    "powder",
    "power",
    "powerful",
    "practical",
    "practice",
    "prepare",
    "present",
    "president",
    "press",
    "pressure",
    "pretty",
    "prevent",
    "previous",
    "price",
    "pride",
    "primitive",
    "principal",
    "principle",
    "printed",
    "private",
    "prize",
    "probably",
    "problem",
    "process",
    "produce",
    "product",
    "production",
    "program",
    "progress",
    "promised",
    "proper",
    "properly",
    "property",
    "protection",
    "proud",
    "prove",
    "provide",
    "public",
    "pull",
    "pupil",
    "pure",
    "purple",
    "purpose",
    "push",
    "put",
    "putting",
    "quarter",
    "queen",
    "question",
    "quick",
    "quickly",
    "quiet",
    "quietly",
    "quite",
    "rabbit",
    "race",
    "radio",
    "railroad",
    "rain",
    "raise",
    "ran",
    "ranch",
    "range",
    "rapidly",
    "rate",
    "rather",
    "raw",
    "rays",
    "reach",
    "read",
    "reader",
    "ready",
    "real",
    "realize",
    "rear",
    "reason",
    "recall",
    "receive",
    "recent",
    "recently",
    "recognize",
    "record",
    "red",
    "refer",
    "refused",
    "region",
    "regular",
    "related",
    "relationship",
    "religious",
    "remain",
    "remarkable",
    "remember",
    "remove",
    "repeat",
    "replace",
    "replied",
    "report",
    "represent",
    "require",
    "research",
    "respect",
    "rest",
    "result",
    "return",
    "review",
    "rhyme",
    "rhythm",
    "rice",
    "rich",
    "ride",
    "riding",
    "right",
    "ring",
    "rise",
    "rising",
    "river",
    "road",
    "roar",
    "rock",
    "rocket",
    "rocky",
    "rod",
    "roll",
    "roof",
    "room",
    "root",
    "rope",
    "rose",
    "rough",
    "round",
    "route",
    "row",
    "rubbed",
    "rubber",
    "rule",
    "ruler",
    "run",
    "running",
    "rush",
    "sad",
    "saddle",
    "safe",
    "safety",
    "said",
    "sail",
    "sale",
    "salmon",
    "salt",
    "same",
    "sand",
    "sang",
    "sat",
    "satellites",
    "satisfied",
    "save",
    "saved",
    "saw",
    "say",
    "scale",
    "scared",
    "scene",
    "school",
    "science",
    "scientific",
    "scientist",
    "score",
    "screen",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "see",
    "seed",
    "seeing",
    "seems",
    "seen",
    "seldom",
    "select",
    "selection",
    "sell",
    "send",
    "sense",
    "sent",
    "sentence",
    "separate",
    "series",
    "serious",
    "serve",
    "service",
    "sets",
    "setting",
    "settle",
    "settlers",
    "seven",
    "several",
    "shade",
    "shadow",
    "shake",
    "shaking",
    "shall",
    "shallow",
    "shape",
    "share",
    "sharp",
    "she",
    "sheep",
    "sheet",
    "shelf",
    "shells",
    "shelter",
    "shine",
    "shinning",
    "ship",
    "shirt",
    "shoe",
    "shoot",
    "shop",
    "shore",
    "short",
    "shorter",
    "shot",
    "should",
    "shoulder",
    "shout",
    "show",
    "shown",
    "shut",
    "sick",
    "sides",
    "sight",
    "sign",
    "signal",
    "silence",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "simplest",
    "simply",
    "since",
    "sing",
    "single",
    "sink",
    "sister",
    "sit",
    "sitting",
    "situation",
    "six",
    "size",
    "skill",
    "skin",
    "sky",
    "slabs",
    "slave",
    "sleep",
    "slept",
    "slide",
    "slight",
    "slightly",
    "slip",
    "slipped",
    "slope",
    "slow",
    "slowly",
    "small",
    "smaller",
    "smallest",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "snow",
    "so",
    "soap",
    "social",
    "society",
    "soft",
    "softly",
    "soil",
    "solar",
    "sold",
    "soldier",
    "solid",
    "solution",
    "solve",
    "some",
    "somebody",
    "somehow",
    "someone",
    "something",
    "sometime",
    "somewhere",
    "son",
    "song",
    "soon",
    "sort",
    "sound",
    "source",
    "south",
    "southern",
    "space",
    "speak",
    "special",
    "species",
    "specific",
    "speech",
    "speed",
    "spell",
    "spend",
    "spent",
    "spider",
    "spin",
    "spirit",
    "spite",
    "split",
    "spoken",
    "sport",
    "spread",
    "spring",
    "square",
    "stage",
    "stairs",
    "stand",
    "standard",
    "star",
    "stared",
    "start",
    "state",
    "statement",
    "station",
    "stay",
    "steady",
    "steam",
    "steel",
    "steep",
    "stems",
    "step",
    "stepped",
    "stick",
    "stiff",
    "still",
    "stock",
    "stomach",
    "stone",
    "stood",
    "stop",
    "stopped",
    "store",
    "storm",
    "story",
    "stove",
    "straight",
    "strange",
    "stranger",
    "straw",
    "stream",
    "street",
    "strength",
    "stretch",
    "strike",
    "string",
    "strip",
    "strong",
    "stronger",
    "struck",
    "structure",
    "struggle",
    "stuck",
    "student",
    "studied",
    "studying",
    "subject",
    "substance",
    "success",
    "successful",
    "such",
    "sudden",
    "suddenly",
    "sugar",
    "suggest",
    "suit",
    "sum",
    "summer",
    "sun",
    "sunlight",
    "supper",
    "supply",
    "support",
    "suppose",
    "sure",
    "surface",
    "surprise",
    "surrounded",
    "swam",
    "sweet",
    "swept",
    "swim",
    "swimming",
    "swing",
    "swung",
    "syllable",
    "symbol",
    "system",
    "table",
    "tail",
    "take",
    "taken",
    "tales",
    "talk",
    "tall",
    "tank",
    "tape",
    "task",
    "taste",
    "taught",
    "tax",
    "tea",
    "teach",
    "teacher",
    "team",
    "tears",
    "teeth",
    "telephone",
    "television",
    "tell",
    "temperature",
    "ten",
    "tent",
    "term",
    "terrible",
    "test",
    "than",
    "thank",
    "that",
    "thee",
    "them",
    "themselves",
    "then",
    "theory",
    "there",
    "therefore",
    "these",
    "they",
    "thick",
    "thin",
    "thing",
    "think",
    "third",
    "thirty",
    "this",
    "those",
    "thou",
    "though",
    "thought",
    "thousand",
    "thread",
    "three",
    "threw",
    "throat",
    "through",
    "throughout",
    "throw",
    "thrown",
    "thumb",
    "thus",
    "thy",
    "tide",
    "tie",
    "tight",
    "tightly",
    "till",
    "time",
    "tin",
    "tiny",
    "tip",
    "tired",
    "title",
    "to",
    "tobacco",
    "today",
    "together",
    "told",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "too",
    "took",
    "tool",
    "top",
    "topic",
    "torn",
    "total",
    "touch",
    "toward",
    "tower",
    "town",
    "toy",
    "trace",
    "track",
    "trade",
    "traffic",
    "trail",
    "train",
    "transportation",
    "trap",
    "travel",
    "treated",
    "tree",
    "triangle",
    "tribe",
    "trick",
    "tried",
    "trip",
    "troops",
    "tropical",
    "trouble",
    "truck",
    "trunk",
    "truth",
    "try",
    "tube",
    "tune",
    "turn",
    "twelve",
    "twenty",
    "twice",
    "two",
    "type",
    "typical",
    "uncle",
    "under",
    "underline",
    "understanding",
    "unhappy",
    "union",
    "unit",
    "universe",
    "unknown",
    "unless",
    "until",
    "unusual",
    "up",
    "upon",
    "upper",
    "upward",
    "us",
    "use",
    "useful",
    "using",
    "usual",
    "usually",
    "valley",
    "valuable",
    "value",
    "vapor",
    "variety",
    "various",
    "vast",
    "vegetable",
    "verb",
    "vertical",
    "very",
    "vessels",
    "victory",
    "view",
    "village",
    "visit",
    "visitor",
    "voice",
    "volume",
    "vote",
    "vowel",
    "voyage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "warm",
    "warn",
    "was",
    "wash",
    "waste",
    "watch",
    "water",
    "wave",
    "way",
    "we",
    "weak",
    "wealth",
    "wear",
    "weather",
    "week",
    "weigh",
    "weight",
    "welcome",
    "well",
    "went",
    "were",
    "west",
    "western",
    "wet",
    "whale",
    "what",
    "whatever",
    "wheat",
    "wheel",
    "when",
    "whenever",
    "where",
    "wherever",
    "whether",
    "which",
    "while",
    "whispered",
    "whistle",
    "white",
    "who",
    "whole",
    "whom",
    "whose",
    "why",
    "wide",
    "widely",
    "wife",
    "wild",
    "will",
    "willing",
    "win",
    "wind",
    "window",
    "wing",
    "winter",
    "wire",
    "wise",
    "wish",
    "with",
    "within",
    "without",
    "wolf",
    "women",
    "won",
    "wonder",
    "wonderful",
    "wood",
    "wooden",
    "wool",
    "word",
    "wore",
    "work",
    "worker",
    "world",
    "worried",
    "worry",
    "worse",
    "worth",
    "would",
    "wrapped",
    "write",
    "writer",
    "writing",
    "written",
    "wrong",
    "wrote",
    "yard",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yet",
    "you",
    "young",
    "younger",
    "your",
    "yourself",
    "youth",
    "zero",
    "zebra",
    "zipper",
    "zoo",
    "zulu"
];
function words(options) {
    function word() {
        if (options && options.maxLength > 1) return generateWordWithMaxLength();
        else return generateRandomWord();
    }
    function generateWordWithMaxLength() {
        var rightSize = false;
        var wordUsed;
        while(!rightSize){
            wordUsed = generateRandomWord();
            if (wordUsed.length <= options.maxLength) rightSize = true;
        }
        return wordUsed;
    }
    function generateRandomWord() {
        return wordList[randInt(wordList.length)];
    }
    function randInt(lessThan) {
        return Math.floor(Math.random() * lessThan);
    }
    // No arguments = generate one word
    if (typeof options === 'undefined') return word();
    // Just a number = return that many words
    if (typeof options === 'number') options = {
        exactly: options
    };
    // options supported: exactly, min, max, join
    if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
    }
    // not a number = one word par string
    if (typeof options.wordsPerString !== 'number') options.wordsPerString = 1;
    //not a function = returns the raw word
    if (typeof options.formatter !== 'function') options.formatter = (word1)=>word1
    ;
    //not a string = separator is a space
    if (typeof options.separator !== 'string') options.separator = ' ';
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    var token = '';
    var relativeIndex = 0;
    for(var i = 0; i < total * options.wordsPerString; i++){
        if (relativeIndex === options.wordsPerString - 1) token += options.formatter(word(), relativeIndex);
        else token += options.formatter(word(), relativeIndex) + options.separator;
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = '';
            relativeIndex = 0;
        }
    }
    if (typeof options.join === 'string') results = results.join(options.join);
    return results;
}
module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;

},{}]},["HhbGK","4ThtM"], "4ThtM", "parcelRequire4207")

//# sourceMappingURL=index.b4f5078c.js.map
