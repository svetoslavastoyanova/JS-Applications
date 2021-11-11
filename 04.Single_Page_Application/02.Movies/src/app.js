alert('it works');

import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
//import { showCreate } from './create';


let views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
}

document.querySelector('nav').addEventListener('clcik', (event) => {
    if(event.target.tagName == 'A'){
        let view = views[event.target.id]; 
        if(typeof view == 'function'){ 
            view();
    }
}
})

showHome();
