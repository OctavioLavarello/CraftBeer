import { UserCompany, Product, UserPerson, Qualification } from "../db";

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
};


export default dataBase;
