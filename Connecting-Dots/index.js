import { AppState, Status, Difficulty } from './state.js';
import { render } from './render.js';

const main = document.querySelector("main");
let state = new AppState(Difficulty.MEDIUM);

render(main, state);