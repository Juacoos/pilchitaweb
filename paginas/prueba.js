const obtenerProductos = async () =>{
    const response = await fetch('productos.json');
    const data = await response.json();
    console.log(data.results);
}
obtenerProductos();

const obtenerPersonajes = async () => { 
    const container = document.getElementById("container"); 
    const response = await axios("https://rickandmortyapi.com/api/character");
    const characters = response.data.results;
    characters.forEach(character => {
        let item = document.createElement("div");item.innerHTML = `
        <h2>nombre: ${character.name}</h2>
        <p>estado: ${character.status}</p>
        <p>especies: ${character.species} </p>
        <img src="${character.image}"><hr/>
        `;
        container.append(item);
    });
}

obtenerPersonajes();