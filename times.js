let times= [
    {
        Nome: "Furacaao da Quadra",
        Goleiro: "Rafael Barreira Santos",
        AlaDireita: "Diego Canhota Lima",
        AlaEsquerda: "Bruno Foguete Alves",
        Pivo: "Lucas Tubarao Ferreira",
        Fixo: "Marcelo Muralha Souza",
        Tecnico: "Paulo Maestro Oliveira",
        Vitorias: 18,
        Derrotas: 5
      },
      {
        Nome: "Leoes do Salao",
        Goleiro: "Andre Gelo Pereira",
        AlaDireita: "Felipe Raio Mendes",
        AlaEsquerda: "Gustavo Bala Ribeiro",
        Pivo: "Tiago Tanque Carvalho",
        Fixo: "Rodrigo Aguia Rocha",
        Tecnico: "Carlos Visionario Santos",
        Vitorias: 22,
        Derrotas: 3
      },
      {
        Nome: "Estrelas da Bola",
        Goleiro: "Henrique Mao de Ferro Costa",
        AlaDireita: "Vitor Flash Nunes",
        AlaEsquerda: "Samuel Ritmo Dias",
        Pivo: "Eduardo Gigante Lima",
        Fixo: "Daniel Sentinela Araujo",
        Tecnico: "Ricardo Tatico Alves",
        Vitorias: 15,
        Derrotas: 8
      },
      {
        Nome: "Dragoes do Piso",
        Goleiro: "Lucas Parede Rocha",
        AlaDireita: "Matheus Veloz Goncalves",
        AlaEsquerda: "Joao Ginga Fernandes",
        Pivo: "Felipe Colosso Barbosa",
        Fixo: "Marcelo Guardao Pinto",
        Tecnico: "Sergio Comandante Lima",
        Vitorias: 20,
        Derrotas: 4
      }
    ];
    
    function verTimes() {
        times.forEach((time) => {
            console.log (time.Nome + "-" +
               time.Goleiro + "(goleiro)," +
               time.AlaDireita + "(Aladireita)," +
               time.AlaEsquerda + "(alaesquerda)," +
               time.Pivo + "(oivo)," + 
               time.Fixo + "(Fixo)"+
              time.Tecnico + "(tecnico)"+ 
            time.Vitorias + "(derrotas)")
        
          });
          
    }
    verTimes();

    function CriarArquivo (){
        let dadosEmTexto= JSON.stringify (times);
        const fs = require ("fs");
        fs.writeFileSync ("dados.json", dadosEmTexto);
        console.log("Arquivo gerado com sucesso!")
    }    
    CriarArquivo();

    verTimes();