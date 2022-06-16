const products = [
    {
      id: 1,
      name: "Comunicacion Empatica",
      cost: 5000,
      stock: 50,
      description: "Comunicacion no violenta Aprender a escuchar Como decir lo que realmente sentimos Opinar con respeto",
      duration: "4 clases",
      initialDate: "1 de Noviembre 2022",
      image: [
        "data:image/jpeg;base64,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"
      ],
      categoryId: 1
    },
    {
        id: 2,
        name: "Gestionando las Emociones",
        cost: 2500,
        stock: 20,
        description: "Inteligencia emocional Identificar las emociones Como canalizarlas La meditacion como herramienta",
        Duration: "2 clases",
        InitialDate: "12 de Noviembre 2022",
        image: [
          "https://amadag.com/wp-content/uploads/2017/02/caras-inteligencia-emocional-513x295.jpg"  ],
          categoryId: 1
      },
      {
        id: 3,
        name: "Limites",
        cost: 3000,
        stock: 50,
        description: "Aprender a decir que no Respetar y escuchar tus deseos Cuando saber poner un limite",
        Duration: "1 clase",
        InitialDate: "30 de noviembre 2022",
        image: [
          "https://i.pinimg.com/564x/fd/1f/7f/fd1f7fdc27bf7c94ced76b3730c8a9aa.jpg"  ],
          categoryId: 1
      },
     
      {
        id: 4,
        name: "Escucha empatica",
        cost: 5000,
        stock: 70,
        description: "Escuchar sin juzgar Tecnicas de sesión Como manejar mis emciones y mi opiniones para que no interfieran Prácticas",
        Duration: "4 clases",
        InitialDate: "	30 de Octubree 2022",
        image: [
          "https://lateoriadelamente.com/wp-content/uploads/2017/06/04eea0644e6e84bb4e997273ac2b88c7-1280x640.png"  ],
          categoryId: 2
        },
        {
        id: 5,
        name: "Acompañamiento desde la no directividad",
        cost: 7500,
        stock: 30,
        description: "Tecnica de terapía Detectar cuando estoy interfiriendo Guiar sin influir Prácticas",
        duration: "8 clases",
        InitialDate: "27 de Octubree 2022",
        image: [
          "https://www.educarchile.cl/sites/default/files/2021-04/IA-Educacion-Socioemocional.png"],
          categoryId: 2
      }]

      module.exports = {
        products,
      }