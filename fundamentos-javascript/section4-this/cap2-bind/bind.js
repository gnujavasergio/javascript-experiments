
class Toggable {

    constructor(element){
        this.el = el;
        this.el.innerHTML = 'Off';
        this.activated = false;
        
        //this.onClick = this.onClick.bind(this); // sobreescribir el metodo
        //this.el.addEventListener('click', this.onClick);
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    onClick(){
        // cambiar estado interno
        this.activated = !this.activated;
        this.toggleText();
    }

    toggleText(){
        // cambiar el texto
        this.el.innerHTML = this.activated ? 'On' : 'Off';
    }
}

const button = document.getElementById('boton');
const myButton = new Toggable();