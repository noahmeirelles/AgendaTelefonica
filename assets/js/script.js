class Container {
    constructor(name, fixo, celular, image, calendario, email, cep, cidade, insta, git) {
        this.name = name;
        this.fixo = fixo;
        this.celular = celular;
        this.image = image;
        this.calendario = calendario;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git;
        this.age = this.calculateAge(calendario);
        this.id = this.getRandomId();
    }
    calculateAge(calendario) {
        const today = new Date();
        const birthdate = new Date(calendario);
        let age = today.getFullYear() - birthdate.getFullYear();
        const m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) { age--; } return age;
    }
    getRandomId() {
        return Math.floor(Math.random() * 999);
    }
}
class List {
    constructor() {
        this.lista = []
    }
    add(agenda) {
        if (verifica()) {
            mensg("Preencha os campos");
        } else if (!isURLValida(agenda.image)) {
            mensg("URL Invalida");
        }
        else {
            this.lista.push(agenda);
            mensg("Cadastrado");
            clear();
            render();
            //console.log(this.lista);
        }

    }
    getContactById(id) {

    }
}
function render() {
    let contem1 = "";
    const ray = list.lista

    ray.forEach(agenda => {
        contem1 += `
        <div id="noah" onclick="render2(${agenda.id})">
        <section>
         <img src="${agenda.image}" id="cat" alt="${agenda.name}" class="richard">
         </section><section>
         <h2>${agenda.name}</h2>
         <h4>Telefone fixo: (019)${agenda.fixo}</h4>
         <h4>Telefone celular: (011)${agenda.celular}</h4>
         </section>
        </div>`
    });
    document.getElementById("list-container").innerHTML = contem1;

}
function render2(id) {
    alert(id)

    const ray = list.lista

    const contem = `
        <div class="noah">
         <img src="${Container.image}" alt="${Container.name}" class="richard">
         <h2>Nome: ${Container.name}</h2>
         <h2>Telefone fixo: ${Container.fixo}</h2>
         <h2>Telefone celular: ${Container.celular}</h2>
         <h2>E-mail: ${Container.email}</h2>
         <h2>CEP: ${Container.cep}</h2>
         <h2>Cidade de residência: ${Container.cidade}</h2>
         <h2>Instagram: @${Container.insta}</h2>
         <h2>Conta do Github: ${Container.git}</h2>
         <h2>Data de nascimanto: ${Container.calendario}</h2>
         <h2>Idade: ${Container.age}anos humanos</h2>
         <button class="what"></button>
         <button class="insta"></button>
         <button class="git"></button>
        </div>`
    ray.push(contem)
    document.getElementById("noah2").innerHTML = contem;

}
function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function mensg(msg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
    <p>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

function cadastrar() {
    let name = document.getElementById("name").value
    let fixo = document.getElementById("fixo").value
    let celular = document.getElementById("celular").value
    let image = document.getElementById("image").value
    let calendario = document.getElementById("calendario").value
    let email = document.getElementById("email").value
    let cep = document.getElementById("cep").value
    let cidade = document.getElementById("cidade").value
    let insta = document.getElementById("insta").value
    let git = document.getElementById("git").value


    let obj = new Container(name, fixo, celular, image, calendario, email, cep, cidade, insta, git);
    list.add(obj);

}
const list = new List();
function verifica() {

    let fixo = document.getElementById("fixo").value
    let celular = document.getElementById("celular").value
    let image = document.getElementById("image").value
    let calendario = document.getElementById("calendario").value
    let email = document.getElementById("email").value
    let cep = document.getElementById("cep").value
    let cidade = document.getElementById("cidade").value
    let insta = document.getElementById("insta").value
    let git = document.getElementById("git").value
    let name = document.getElementById("name").value

    if (name == "" || fixo == "" || celular == "" || image == "" || calendario == "" || email == "" || cep == "" || cidade == "" || insta == "" || git == "") {

        console.log("Ta vazio");

        return true;
    } else {
        console.log("Prft");
        return false;
    }
}
function clear() {
    document.getElementById("name").value = "";
    document.getElementById("fixo").value = ""
    document.getElementById("celular").value = "";
    document.getElementById("image").value = "";
    document.getElementById("calendario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("git").value = "";
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) { return true; }
    else { return false; }
}