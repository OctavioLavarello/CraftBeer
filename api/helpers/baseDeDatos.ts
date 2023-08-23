import { UserCompany, Product, UserPerson, Qualification, ShoppingHistory, Item  } from "../db";

const dataBase = async () => {
  let companies = [
    {
      name: "Alberto",
      lastName: "Mendez",
      document: 40556481,
      email: "Alber.beer@company.com",
      password: "12345678ABC",
      phone: 3158183233,
      country: "Colombia",
      city: "Medellin",
      state: "Antioquia",
      company: "Artesanos de cervezas",
      address: "Calle 30 No. 44 - 176",
      image:
        "https://birrapedia.com/img/modulos/empresas/481/3-cordilleras_14654681684523_t.jpg",
    },
    {
      name: "Maria",
      lastName: "Oviedo",
      document: 28549852,
      email: "Bogotabeer@company.com",
      password: "12345678AB",
      phone: 3152486655,
      country: "Colombia",
      city: "Villavicencio",
      state: "Meta",
      company: "Bogotá beer company",
      address: "AV esperanza # 48 - 50",
      image:
        "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1455767993/content-items/001/545/117/bogota-beer-company-logo-original.jpg?1455767993",
    },
    {
      name: "Mateo",
      lastName: "Florido",
      document: 28548954,
      email: "Grupo Carlsberg@Carlsberg.com",
      password: "12345678A",
      phone: 3168526652,
      country: "Colombia",
      city: "Villavicencio",
      state: "Meta",
      company: "El Grupo Carlsberg",
      address: "Av 40 , 03 - 22",
      image: "https://www.computing.es/wp-content/uploads/2014/09/67810_19.jpg",
    },
  ];
  const company = await UserCompany.bulkCreate(companies);

  let product = [
    {
      userCompanyId: company[0].id,
      name: "Blanca",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/blanca.png",
      type: "Wheat beer",
      ABV: 4.6,
      description:
        "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo,contenido de 330 ml.",
      price: 3,
      stock: 100,
      presentation: "Botella",
      IBU: 15,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Mona",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mona.png",
      type: "Ale",
      ABV: 3.9,
      description:
        " Refrescante y ligera, con suaves notas cítricas,contenido de 330 ml",
      price: 3,
      stock: 100,
      presentation: "Botella",
      IBU: 20,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Mestiza",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mestiza.png",
      type: "Amber Ale",
      ABV: 4.8,
      description:
        "Cítrica en aroma y sabor, amargo pronunciado y ﬁnal seco,contenido de 330 ml",
      price: 3,
      stock: 100,
      presentation: "Botella",
      IBU: 29,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Mulata",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mulata.png",
      type: "Amber Ale",
      ABV: 5.2,
      description:
        "Maltosa, con toques acaramelados y ﬁnal amaderado, contenido de 330 ml.",
      price: 3,
      stock: 100,
      presentation: "Botella",
      IBU: 27,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Negra",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/negra.png",
      type: "Stout",
      ABV: 6.4,
      description:
        "Carácter fuerte, con aroma y sabor a chocolate y café,contenido de 330 ml.",
      price: 3,
      stock: 3,
      presentation: "Botella",
      IBU: 25,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Rosada",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/rosada.png",
      type: "Saison",
      ABV: 3.8,
      description:
        "Suave, balance perfecto entre dulzura y frutos rojos,contenido de 330 ml.",
      price: 3,
      stock: 44,
      presentation: "Botella",
      IBU: 15,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cajica Miel x4",
      image:
        "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/caja%20rubia%20final.png",
      type: "Ale",
      ABV: 3.8,
      description:
        "Suave y  dulce, contenido 330 ml por botella, x4 unidades, ",
      price: 8,
      stock: 44,
      presentation: "Botella",
      IBU: 15,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cajica Miel Lata x4",
      image:
        "https://dislicoresqa.vtexassets.com/arquivos/ids/326309/371096-CERVEZA_BBC_CAJICA_LATA_FOUR_PACK_269ML.png?v=638077995538270000",
      type: "Ale",
      ABV: 3.8,
      description:
        "para disfrutar en buena compañia, contenido 269 ml por lata, x4 unidades",
      price: 4,
      stock: 50,
      presentation: "Lata",
      IBU: 15,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Lager x6",
      image:
        "https://dislicoresqa.vtexassets.com/arquivos/ids/326295/371001-BBC-LAGER-SIXPACK-BOT-330ML.png?v=638077995458370000",
      type: "Lager",
      ABV: 3,
      description:
        "para disfrutar en buena compañia,contenido 330 ml por lata, x6 unidades",
      price: 10,
      stock: 50,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cotidiana",
      image: "https://lalicorera.com/img/products/bbc-la-cotidiana.png",
      type: "Stout",
      ABV: 4,
      description: "para disfrutar en buena compañia,contenido 269 ml por lata",
      price: 1,
      stock: 10,
      presentation: "Lata",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cotidiana x4",
      image:
        "https://dislicoresqa.vtexassets.com/arquivos/ids/326310/371092-LA-COTIDIANA-269-x4.png?v=638077995543270000",
      type: "Stout",
      ABV: 4,
      description:
        "para disfrutar en buena compañia,contenido 269 ml por lata, x4 unidades",
      price: 4,
      stock: 60,
      presentation: "Lata",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cotidiana x12",
      image:
        "https://dislicoresqa.vtexassets.com/arquivos/ids/326310/371092-LA-COTIDIANA-269-x4.png?v=638077995543270000",
      type: "Stout",
      ABV: 4,
      description:
        "para disfrutar en buena compañia,contenido 269 ml por lata, x12 unidades",
      price: 12,
      stock: 60,
      presentation: "Lata",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cotidiana x24",
      image:
        "https://licoresmiprimershot.com.co/wp-content/uploads/2021/01/Four-Pack-BBC-La-Cotidiana-x269ml.png",
      type: "Stout",
      ABV: 4,
      description:
        "para disfrutar en buena compañia,contenido 269 ml por lata, x24 unidades",
      price: 24,
      stock: 80,
      presentation: "Lata",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Monserrate",
      image:
        "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/MONSERRATE.png",
      type: "Ale",
      ABV: 4,
      description: "para disfrutar en buena compañia,contenido 330 ml",
      price: 1.5,
      stock: 60,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Monserrate x4",
      image:
        "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/caja%20roja%20final.png",
      type: "Porter",
      ABV: 4,
      description:
        "para disfrutar en buena compañia,contenido 330 ml por botella, x4 unidades",
      price: 6,
      stock: 60,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Chapinero x4",
      image:
        "https://dislicoresqa.vtexassets.com/arquivos/ids/342411/371011-CERVEZABBCFOURPACK-CHAPINEROPORTER330.png?v=638138475213200000",
      type: "Porter",
      ABV: 6,
      description:
        "para disfrutar en buena compañia,contenido 330 ml por botella, x4 unidades",
      price: 6,
      stock: 60,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Chapinero",
      image: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/CHAPINERO_0.png",
      type: "Ale",
      ABV: 6,
      description: "para disfrutar en buena compañia,contenido 330 ml",
      price: 1.5,
      stock: 10,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[2].id,
      name: "Birrificio Angelo",
      image:
        "https://s3.amazonaws.com/images.ecwid.com/images/16242262/3063887751.jpg",
      type: "Ale",
      ABV: 6,
      description:
        "Original es generosamente lupulada y extraordinariamente equilibrada,contenido 330 ml",
      price: 3,
      stock: 10,
      presentation: "Botella",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[2].id,
      name: "Carlsberg",
      image:
        "https://i.pinimg.com/originals/ff/b9/5f/ffb95f7f5fd3f9772f9fdfa37add99be.png",
      type: "Pilsner",
      ABV: 0,
      description:
        "ahora podemos disfrutar de una cerveza de gran sabor en cualquier momento,contenido 330 ml",
      price: 2,
      stock: 120,
      presentation: "Botella",
      IBU: 6,
      status: true,
    },
    {
      userCompanyId: company[2].id,
      name: "Carlsberg x6",
      image:
        "https://jumbo.vtexassets.com/arquivos/ids/342058/376543PAK1-42586.jpg?v=637280082554300000",
      type: "Pilsner",
      ABV: 0,
      description:
        "ahora podemos disfrutar de una cerveza de gran sabor en cualquier momento,contenido 330 ml, x4 unidades",
      price: 2,
      stock: 120,
      presentation: "Botella",
      IBU: 6,
      status: true,
    },
  ];
  const productSaved = await Product.bulkCreate(product);

  let person = [
    {
      name: "Diego",
      lastName: "Beta",
      document: 25485662,
      email: "DiegoBeta@gmail.com",
      password: "12345678DE",
      country: "Colombia",
      city: "Bogotá",
      state: "Cundinamarca",
      address: "calle 25 N° 15 20",
    },
    {
      name: "Antonia",
      lastName: "Gamma",
      document: 25895621,
      email: "AntoGama@gmail.com",
      password: "12345678FG",
      country: "Colombia",
      city: "medellin",
      state: "Antioquia",
      address: "calle 44 N° 25 35",
    },
    {
      name: "admin",
      lastName: "Gamma",
      document: 12345678,
      email: "craftbeer514@gmail.com",
      password: "12345678FG",
      country: "Colombia",
      city: "medellin",
      state: "Antioquia",
      address: "calle 44 N° 25 35",
      role: "Admin"
    },
    {
      name: "admin",
      lastName: "admin",
      document: 111111,
      email: "craftbeer515@gmail.com",
      password: "craftbeer2023",
      country: "Argentina",
      city: "Cordoba",
      state: "cordoba",
      address: "rondeau 358",
      role:"Admin",
      image:"https://i.postimg.cc/mDYMdsVF/Simple-October-Fest-Instagram-Post-3.png"
    },
    {
      name: "Amigos",
      lastName: "Front",
      document: 98765432,
      email: "amigosfront@gmail.com",
      password: "Amigos1234",
      country: "Sudamerica",
      city: "Todas",
      state: "Felices",
      company: "PF Henry",
      address: "Cerca de lograrlo",
      role: "Admin",
      image: "data:image/jpeg;base64,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",
    },
  ];
  const personSaved = await UserPerson.bulkCreate(person);
  personSaved[0].addProduct(productSaved[0])
  let qualification = [
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[2].id,
      comment:"excelente producto"
    },
    {
      rate: 5,
      userPersonId: personSaved[1].id,
      ProductId: productSaved[2].id,
      comment:"me encanto su sabor"
    },
    {
      rate: 5,
      userPersonId: personSaved[1].id,
      ProductId: productSaved[0].id,
      comment:"inigualable 10/10"
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[5].id,
      comment:"inigualable 10/10"
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[4].id,
      comment:"me encanto su sabor"
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[7].id,
      comment:"excelente producto"
    
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[9].id,
      comment:"una cerveza llena de magia"
    },
  ];
  const qualificationSaved = await Qualification.bulkCreate(qualification);
   //busco las calificaciones del producto
  qualificationSaved.forEach( async (arg:any) => {
    const productById = await Product.findByPk(arg.ProductId)
    productById.addQualification(arg)
   let rating = await Qualification.findAll({
    where: { ProductId: arg.ProductId},
    attributes: ["rate"],
  });
  // realizo el promedio del producto

  let qualifications = rating.reduce(
    (acc: number, rate: { rate: number }) => {
      acc = rate.rate + acc;
      return acc;
    },
    0
  );
  const average = (qualifications / rating.length).toFixed(2);

  // agrego el promedio de calificaciones al producto
  const updateProductQualification = await Product.update(
    { qualification: average },
    {
      where: { id: arg.ProductId },
    }
  );
});

const shoppingHistories = [
  {
    date: new Date(),
    totalPrice: 100.0,
    userPersonId: personSaved[0].id,
    items: [
      {
        ProductId: productSaved[0].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 2,
        unitPrice: 50.0,
        summary: "Descripción del producto 1",
        totalPrice: 100.0,
      },
    ],
  },
  {
    date: new Date(),
    totalPrice: 60.0,
    userPersonId: personSaved[1].id,
    items: [
      {
        ProductId: productSaved[1].id,
        name: "Producto 2",
        image: "imagen2.jpg",
        amount: 1,
        unitPrice: 60.0,
        summary: "Descripción del producto 2",
        totalPrice: 60.0,
      },
      {
        ProductId: productSaved[0].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 2,
        unitPrice: 50.0,
        summary: "Descripción del producto 1",
        totalPrice: 100.0,
      },
    ],
  },
  {
    date: new Date(),
    totalPrice: 250.0,
    userPersonId: personSaved[3].id,
    items: [
      {
        ProductId: productSaved[3].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 5,
        unitPrice: 50.0,
        summary: "Descripción del producto 4",
        totalPrice: 250.0,
      },
      // Agrega más items si es necesario
    ],
  },
  {
    date: new Date(),
    totalPrice: 150.0,
    userPersonId: personSaved[2].id,
    items: [
      {
        ProductId: productSaved[4].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 3,
        unitPrice: 50.0,
        summary: "Descripción del producto 5",
        totalPrice: 150.0,
      },
      // Agrega más items si es necesario
    ],
  },
  {
    date: new Date(),
    totalPrice: 100.0,
    userPersonId: personSaved[0].id,
    items: [
      {
        ProductId: productSaved[0].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 2,
        unitPrice: 50.0,
        summary: "Descripción del producto 1",
        totalPrice: 100.0,
      },
      // Agrega más items si es necesario
    ],
  },
  {
    date: new Date(),
    totalPrice: 300.0,
    userPersonId: personSaved[2].id,
    items: [
      {
        ProductId: productSaved[0].id,
        name: "Producto 1",
        image: "imagen1.jpg",
        amount: 6,
        unitPrice: 50.0,
        summary: "Descripción del producto 1",
        totalPrice: 300.0,
      },
      // Agrega más items si es necesario
    ],
  },
];

const shoppingHistoriesSaved = await Promise.all(
  shoppingHistories.map(async (shoppingHistory) => {
    const { date, totalPrice, userPersonId, items } = shoppingHistory;

    const person = await UserPerson.findByPk(userPersonId);

    if (!person) {
      console.warn(`UserPerson with ID ${userPersonId} not found.`);
      return null;
    }

    const newShoppingHistory = await ShoppingHistory.create({
      date,
      totalPrice,
      userPersonId,
    });

    person.addShoppingHistory(newShoppingHistory);

    const createdItems = await Promise.all(
      items.map(async (item) => {
        const {
          ProductId,
          name,
          image,
          amount,
          unitPrice,
          summary,
          totalPrice: itemTotalPrice,
        } = item;

        const product = await Product.findByPk(ProductId);

        if (!product) {
          console.warn(`Product with ID ${ProductId} not found.`);
          return null;
        }

        if (product.stock < amount) {
          console.warn(`Not enough stock for product with ID ${ProductId}.`);
          return null;
        }

        const createdItem = await Item.create({
          ProductId,
          name,
          image,
          amount,
          unitPrice,
          summary,
          totalPrice: itemTotalPrice,
        });

        await newShoppingHistory.addItems(createdItem);

        const newStock = product.stock - amount;
        await Product.update({ stock: newStock }, { where: { id: ProductId } });

        return createdItem;
      })
    );

    const newItems = createdItems.filter((item) => item !== null);

    if (newShoppingHistory) {
      // Realizar acciones adicionales si es necesario
    }

    return newShoppingHistory;
  })
);

// console.log("ShoppingHistories saved:", shoppingHistoriesSaved);


};


export default dataBase;
