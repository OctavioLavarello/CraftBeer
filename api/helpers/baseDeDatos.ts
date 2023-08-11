import { UserCompany, Product, UserPerson, Qualification } from "../db";

const dataBase = async () => {
  let companies = [
    {
      name: "Alberto",
      lastName: "Mendez",
      document: 40556481,
      email: "cumplimiento@3cordilleras.com",
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
      name: "BBC Cajica Miel",
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
      name: "BBC Cajica Miel",
      image:
        "https://www.luchocorrea.com/assets/images/home/slider/_2000xAUTO_crop_center-center_none/cajica_miel_lata_cuatrovistas_med_banner.jpg",
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
      name: "BBC Cajica Miel",
      image:
        "https://www.luchocorrea.com/assets/images/home/slider/_2000xAUTO_crop_center-center_none/cajica_miel_lata_cuatrovistas_med_banner.jpg",
      type: "Ale",
      ABV: 3,
      description:
        "para disfrutar en buena compañia,contenido 269 ml por lata, x6 unidades",
      price: 10,
      stock: 50,
      presentation: "Lata",
      IBU: 18,
      status: true,
    },
    {
      userCompanyId: company[1].id,
      name: "BBC Cotidiana",
      image: "https://bevgo.com.co/wp-content/uploads/2020/12/7845.jpg",
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
      name: "BBC Cotidiana",
      image:
        "https://pimiento.com.co/2299-large_default/cerveza-artesanal-bbc-la-cotidiana-lata-4-und-x-269-ml.jpg",
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
      name: "BBC Cotidiana",
      image:
        "https://pimiento.com.co/2299-large_default/cerveza-artesanal-bbc-la-cotidiana-lata-4-und-x-269-ml.jpg",
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
      name: "BBC Cotidiana",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_921964-MCO47837822170_102021-O.webp",
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
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/440082/7707358310029.jpg?v=638043996772430000",
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
      name: "BBC Monserrate",
      image:
        "https://plazaenvivo.com/wp-content/uploads/2020/11/7707358310449.jpg",
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
      name: "BBC CHAPINERO",
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
      name: "BBC CHAPINERO",
      image: "https://bevgo.com.co/wp-content/uploads/2020/12/7845.jpg",
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
        "https://www.carlsberggroup.com/media/55550/it_birrificio-angelo-poretti-4-luppoli-l-originale.png?height=570&mode=max",
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
        "https://www.carlsberggroup.com/media/45401/cb_nd_00_pilsner_330ml_bottle_wet_isolated_rgb_72dpi.png?height=570&mode=max",
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
  ];
  const personSaved = await UserPerson.bulkCreate(person);
  let qualification = [
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[2].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[1].id,
      ProductId: productSaved[2].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[1].id,
      ProductId: productSaved[0].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[5].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[4].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[7].id,
    },
    {
      rate: 5,
      userPersonId: personSaved[0].id,
      ProductId: productSaved[9].id,
    },
  ];
  const qualificationSaved = await Qualification.bulkCreate(qualification);
   //busco las calificaciones del producto
  qualificationSaved.forEach( async (arg:any) => {
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
