class personajes{
    constructor(Nombre,Especie,Imagen)
    {
        this.Nombre=Nombre;
        this.Especie=Especie;
        this.Imagen=Imagen;
    }

    get information() {
        let array = [this.Nombre, this.Especie, this.Imagen];
        return array;
    }
}

    function show(params){
        let id  = document.getElementById("test");
        id.innerHTML += `<div class="card">
        <h3>${params[0]}</h3>
        <p>${params[1]}</p>
        <img width="25%" src = "${params[2]}" />
        </div>`;
    }

    async function getPersonas() {
        const resp = await fetch("https://rickandmortyapi.com/api/character");
        const data = await resp.json();
        let persons = data.results;
        persons.map((person) => {
            let people = new personajes(person.name,person.species, person.image);
            show(people.information);
            
        });
    }

    getPersonas();