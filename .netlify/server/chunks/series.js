import { a as autores } from "./autores.js";
const series = [
  {
    id: "harry-potter",
    titulo: "Harry Potter",
    descricao: "A série de livros Harry Potter, escrita por J.K. Rowling, segue a jornada de um jovem bruxo, Harry Potter, enquanto ele descobre seu lugar no mundo mágico e enfrenta desafios para derrotar o malvado bruxo Lord Voldemort. Ao longo de sete livros, Harry e seus amigos, Hermione Granger e Ron Weasley, exploram a magia, enfrentam perigos e aprendem sobre amizade, coragem e o poder da escolha em uma luta épica entre o bem e o mal.",
    autor: autores[0],
    ano: 1997,
    imagem: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2549/7ababc2015043445b750ebc853a5f706.jpg",
    livros: [
      {
        id: "harry-potter-e-a-pedra-filosofal",
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: autores[0],
        ano: 1997,
        ordem: 1,
        imagem: "https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96G4?ref_=dbs_p_pwh_rwt_anx_cl_0&storeType=ebooks"
      },
      {
        id: "harry-potter-e-a-camara-secreta",
        titulo: "Harry Potter e a Câmara Secreta",
        autor: autores[0],
        ano: 1998,
        ordem: 2,
        imagem: "https://m.media-amazon.com/images/I/81D+5aMHzFL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96K0?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks"
      },
      {
        id: "harry-potter-e-o-prisioneiro-de-azkaban",
        titulo: "Harry Potter e o Prisioneiro de Azkaban",
        autor: autores[0],
        ano: 1999,
        ordem: 3,
        imagem: "https://m.media-amazon.com/images/I/81Q+2zleuwL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96HI?ref_=dbs_p_pwh_rwt_anx_cl_2&storeType=ebooks"
      },
      {
        id: "harry-potter-e-o-calice-de-fogo",
        titulo: "Harry Potter e o Cálice de Fogo",
        autor: autores[0],
        ano: 2e3,
        ordem: 4,
        imagem: "https://m.media-amazon.com/images/I/81IsnaNraBL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96FA?ref_=dbs_p_pwh_rwt_anx_cl_3&storeType=ebooks"
      },
      {
        id: "harry-potter-e-a-ordem-da-fenix",
        titulo: "Harry Potter e a Ordem da Fênix",
        autor: autores[0],
        ano: 2003,
        ordem: 5,
        imagem: "https://m.media-amazon.com/images/I/81ZQUV67MGL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96IC?ref_=dbs_p_pwh_rwt_anx_cl_4&storeType=ebooks"
      },
      {
        id: "harry-potter-e-o-enigma-do-principe",
        titulo: "Harry Potter e o Enigma do Príncipe",
        autor: autores[0],
        ano: 2005,
        ordem: 6,
        imagem: "https://m.media-amazon.com/images/I/81SZC96OGOL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96LY?notRedirectToSDP=1&ref_=dbs_mng_calw_5&storeType=ebooks"
      },
      {
        id: "Harry Potter e as Reliquias da Morte",
        titulo: "Harry Potter e as Relíquias da Morte",
        autor: autores[0],
        ano: 2007,
        ordem: 7,
        imagem: "https://m.media-amazon.com/images/I/81PbdwXqKkL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B01LQM96GE?notRedirectToSDP=1&ref_=dbs_mng_calw_6&storeType=ebooks"
      },
      {
        id: "harry-potter-e-a-crianca-amaldicoada",
        titulo: "Harry Potter e a Criança Amaldiçoada",
        autor: autores[0],
        ano: 2016,
        ordem: 8,
        imagem: "https://rocco.com.br/app/uploads/2024/04/9786555322682.jpg",
        link: "https://www.amazon.com.br/Harry-Potter-Crian%C3%A7a-Amaldi%C3%A7oada-Parte/dp/8532530435"
      }
    ]
  },
  {
    id: "o-senhor-dos-aneis",
    titulo: "O Senhor dos Anéis",
    descricao: "A trilogia O Senhor dos Anéis, escrita por J.R.R. Tolkien, narra a aventura épica de Frodo Bolseiro, um hobbit que recebe a missão de destruir o poderoso Anel do Poder e impedir que ele caia nas mãos do sombrio Senhor Sauron. Acompanhado por um grupo diverso de heróis, Frodo enfrenta batalhas, perigos sobrenaturais e tentações, em uma jornada que explora temas de coragem, sacrifício e amizade. A história celebra a luta do bem contra o mal em um vasto e detalhado mundo de fantasia, a Terra-média.",
    autor: autores[1],
    ano: 1954,
    imagem: "https://cinepop.com.br/wp-content/uploads/2021/12/o-senhor-dos-aneis.jpg",
    livros: [
      {
        id: "a-sociedade-do-anel",
        titulo: "A Sociedade do Anel",
        autor: autores[1],
        ano: 1954,
        ordem: 1,
        imagem: "https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B0B3C98K98?ref_=dbs_p_pwh_rwt_cpsb_cl_0&storeType=ebooks"
      },
      {
        id: "as-duas-torres",
        titulo: "As Duas Torres",
        autor: autores[1],
        ano: 1954,
        ordem: 2,
        imagem: "https://m.media-amazon.com/images/I/81N9hxO6XdL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B0B3CCH4XF?ref_=dbs_p_pwh_rwt_cpsb_cl_1&storeType=ebooks"
      },
      {
        id: "o-retorno-do-rei",
        titulo: "O Retorno do Rei",
        autor: autores[1],
        ano: 1955,
        ordem: 3,
        imagem: "https://m.media-amazon.com/images/I/81LUEEYfQNL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B0B3D2GFXN?ref_=dbs_p_pwh_rwt_cpsb_cl_2&storeType=ebooks"
      }
    ]
  },
  {
    id: "as-cronicas-de-gelo-e-fogo",
    titulo: "As Crônicas de Gelo e Fogo",
    descricao: "As Crônicas de Gelo e Fogo, série escrita por George R.R. Martin, acompanha a luta pelo Trono de Ferro em Westeros, um continente marcado por rivalidades, alianças e traições. Nobres famílias, como os Starks, Lannisters e Targaryens, jogam um perigoso jogo de intrigas, onde poder e sobrevivência andam lado a lado. Enquanto reis e rainhas disputam o controle dos Sete Reinos, uma antiga ameaça cresce ao norte, e o inverno se aproxima, trazendo consigo o perigo dos Caminhantes Brancos. A série explora temas de poder, lealdade e moralidade em uma narrativa complexa e repleta de reviravoltas.",
    autor: autores[2],
    ano: 1996,
    imagem: "https://img.odcdn.com.br/wp-content/uploads/2024/07/Design-sem-nome-16-1-scaled.jpg",
    livros: [
      {
        id: "a-guerra-dos-tronos",
        titulo: "A Guerra dos Tronos",
        autor: autores[2],
        ano: 1996,
        ordem: 1,
        imagem: "https://m.media-amazon.com/images/I/91eHityofNL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B07PPB9QW1?ref_=dbs_p_pwh_rwt_anx_cl_0&storeType=ebooks"
      },
      {
        id: "a-furia-dos-reis",
        titulo: "A Fúria dos Reis",
        autor: autores[2],
        ano: 1998,
        ordem: 2,
        imagem: "https://m.media-amazon.com/images/I/91N6C0jwzuL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B07QYPLKV1?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks"
      },
      {
        id: "a-tormenta-de-espadas",
        titulo: "A Tormenta de Espadas",
        autor: autores[2],
        ano: 2e3,
        ordem: 3,
        imagem: "https://m.media-amazon.com/images/I/91VVZ-v5GYL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B07QXSYDSB?ref_=dbs_p_pwh_rwt_anx_cl_2&storeType=ebooks"
      },
      {
        id: "o-festim-dos-corvos",
        titulo: "O Festim dos Corvos",
        autor: autores[2],
        ano: 2019,
        ordem: 4,
        imagem: "https://m.media-amazon.com/images/I/814UZhEYFfL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B081284MLJ?notRedirectToSDP=1&ref_=dbs_mng_calw_3&storeType=ebooks"
      },
      {
        id: "a-danca-dos-dragoes",
        titulo: "A Dança dos Dragões",
        autor: autores[2],
        ano: 2020,
        ordem: 5,
        imagem: "https://m.media-amazon.com/images/I/91DisjRjFxL._SL1500_.jpg",
        link: "https://www.amazon.com.br/gp/product/B084SS25D3?notRedirectToSDP=1&ref_=dbs_mng_calw_4&storeType=ebooks"
      }
    ]
  }
];
export {
  series as s
};
