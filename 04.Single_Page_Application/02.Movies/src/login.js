import { showView} from './dom.js';


let section = document.getElementById('form-login');
section.remove();

export function showLogin(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}