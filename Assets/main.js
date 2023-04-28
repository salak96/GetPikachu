//consume api https://pokeapi.co/api/v2/pokemon/pikachu

const pikachuContainer = document.getElementById("pikachu-container");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json())
  .then(data => {
    addEventListener("click", () => {
    document.getElementById('pikachu-container').innerHTML = '';
    document.getElementById('pikachu-container')    
    const pikachuImage = document.createElement("img");
    pikachuImage.setAttribute("src", data.sprites.front_default);
    pikachuImage.setAttribute("alt", "Pikachu");
    pikachuImage.setAttribute("id", "pikachu-image");
    pikachuContainer.appendChild(pikachuImage);

    const pikachuName = document.createElement("h2");
    pikachuName.setAttribute("id", "pikachu-name");
    pikachuName.innerHTML = data.name;
    pikachuContainer.appendChild(pikachuName);
    pikachuContainer.appendChild(document.createElement("br"));
    const pikachuStats = document.createElement("div");
    pikachuContainer.appendChild(document.createElement("br"));
    pikachuStats.setAttribute("id", "pikachu-stats");
    pikachuContainer.appendChild(pikachuStats);
    pikachuContainer.style.backgroundColor = "#D1D100";
    

    const pikachuStatNames = ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
    const pikachuStatValues = [
      data.stats[0].base_stat,
      data.stats[1].base_stat,
      data.stats[2].base_stat,
      data.stats[3].base_stat,
      data.stats[4].base_stat,
      data.stats[5].base_stat,
    ];

    for (let i = 0; i < pikachuStatNames.length; i++) {
      const pikachuStat = document.createElement("p");
      pikachuStat.setAttribute("id", "pikachu-stat")
      pikachuStat.innerHTML = `${pikachuStatNames[i]}: ${pikachuStatValues[i]}`;
      pikachuStats.appendChild(pikachuStat);
    }
  });
  })
  .catch(error => console.error(error));


  
