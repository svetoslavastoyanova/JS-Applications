import { showView} from './dom.js';


let section = document.getElementById('form-sign-up');
section.remove();

export function showRegister(){
    showView(section); // towa koeto modyla si e priswoil shte go pokajem na ekrana

}