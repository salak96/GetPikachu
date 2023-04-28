//consume api https://pokeapi.co/api/v2/pokemon/pikachu

const pikachuContainer = document.getElementById("pikachu-container");

fetch("https://pokeapi.co/api/v2/pokemon/25")
  .then(response => response.json())
  .then(data => {
    addEventListener("click", () => {
    //pikachu container
    pikachuContainer.innerHTML = "";
    const pikachuName = document.createElement("h2");
    pikachuContainer.appendChild(pikachuName);
    pikachuContainer.appendChild(document.createElement("br"));
    const pikachuStats = document.createElement("div");``
    pikachuContainer.appendChild(document.createElement("br"));
    pikachuStats.setAttribute("id", "pikachu-stats");
    pikachuContainer.appendChild(pikachuStats);
    pikachuContainer.style.backgroundColor = "#D1D100";

    //pikachu number
    const pikachuNumber = document.createElement("h3");
    pikachuNumber.setAttribute("id", "pikachu-number");
    pikachuNumber.innerHTML = `${data.id} : pikachu`;
    pikachuContainer.appendChild(pikachuNumber);
    //pikachu image
  
    const pikachuImage = document.createElement("img");
    pikachuImage.setAttribute("id", "pikachu-image");
    pikachuImage.src = data.sprites.front_default;
    pikachuContainer.appendChild(pikachuImage);

    //pikachu type
    const pikachuType = document.createElement("h3");
    pikachuType.setAttribute("id", "pikachu-type");
    pikachuType.innerHTML = `Type: ${data.types[0].type.name}`;
    pikachuContainer.appendChild(pikachuType);
    

    // const pikachuStatNames = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
    // const pikachuStatValues = [
    //   data.stats[0].base_stat,
    //   data.stats[1].base_stat,
    //   data.stats[2].base_stat,
    //   data.stats[3].base_stat,
    //   data.stats[4].base_stat,
    //   data.stats[5].base_stat,
    // ];

    // for (let i = 0; i < pikachuStatNames.length; i++) {
    //   const pikachuStat = document.createElement("p");
    //   pikachuStat.setAttribute("id", "pikachu-stat")
    //   pikachuStat.innerHTML = `${pikachuStatNames[i]}: ${pikachuStatValues[i]}`;
    //   pikachuStats.appendChild(pikachuStat);
    // }
  });
  })
  .catch(error => console.error(error));


  
