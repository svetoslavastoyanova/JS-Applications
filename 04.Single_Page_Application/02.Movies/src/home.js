// initialization
// find relevant section
// detach section from DOM
import { showView} from './dom.js';


let section = document.getElementById('home-page');
section.remove();

export function showHome(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}