import { showView} from './dom.js';


let section = document.getElementById('movie-example');
section.remove();

export function showDetails(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}