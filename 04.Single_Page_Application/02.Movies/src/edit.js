import { showView} from './dom.js';


let section = document.getElementById('edit-movie');
section.remove();

export function showEdit(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}