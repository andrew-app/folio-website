import { expand, collapse} from "./AnimationHelpers";

const wasmHybrid = document.querySelector('#wasm-hybrid-lambda');
const wasmHybridCode = wasmHybrid.querySelector('#wasm-hybrid-lambda #wasm-hybrid-lambda-code');
const wasmHybridSummary = wasmHybrid.querySelector('#wasm-hybrid-lambda summary');
let isCollapsing = false;
let isExpanding = false;
let animation = null;

const wasmCollapseArgs = [wasmHybrid, wasmHybridSummary, animation, isCollapsing, isExpanding];
const wasmExpandArgs = [wasmHybrid, wasmHybridSummary, wasmHybridCode, animation, isExpanding, isCollapsing];

wasmHybridSummary.addEventListener('click', (e) => {
    e.preventDefault();
    wasmHybrid.style.overflow = 'hidden';
    wasmHybrid.open ? collapse(...wasmCollapseArgs) : expand(...wasmExpandArgs);
});

const jsHybrid = document.querySelector('#js-hybrid-lambda');
const jsHybridCode = jsHybrid.querySelector('#js-hybrid-lambda #js-hybrid-lambda-code');
const jsHybridSummary = jsHybrid.querySelector('#js-hybrid-lambda summary');


const jsCollapseArgs = [jsHybrid, jsHybridSummary, animation, isCollapsing, isExpanding];
const jsExpandArgs = [jsHybrid, jsHybridSummary, jsHybridCode, animation, isExpanding, isCollapsing];

jsHybridSummary.addEventListener('click', (e) => {
    e.preventDefault();
    jsHybrid.style.overflow = 'hidden';
    jsHybrid.open ? collapse(...jsCollapseArgs) : expand(...jsExpandArgs);
});