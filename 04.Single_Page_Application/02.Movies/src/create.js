import { showView} from './dom.js';


let section = document.getElementById('add-movie');
section.remove();

export function showCreate(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}