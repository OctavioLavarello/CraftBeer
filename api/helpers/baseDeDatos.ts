import { UserCompany, Product, UserPerson } from "../db";

const dataBase = async () => {
  let companies = [
    {
      name: "Alberto",
      lastName: "Mendez",
      document: 40556481,
      email: "cumplimiento@3cordilleras.com",
      password: "12345678",
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
      password: "12345678",
      phone: 3152486655,
      country: "Colombia",
      city: "Villavicencio",
      state: "Meta",
      company: "Bogotá beer company",
      address: "AV esperanza # 48 - 50",
      image:
        "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1455767993/content-items/001/545/117/bogota-beer-company-logo-original.jpg?1455767993",
    },
  ];
  const company = await UserCompany.bulkCreate(companies);

  let product = [
    {
      userCompanyId: company[0].id,
      name: "Blanca",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/blanca.png",
      type: "Wheat Ale",
      ABV: 4.6,
      description:
        "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo.",
      price: 12000,
      stock: 100,
      presentation: "Botella",
      IBU: 15,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Mona",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mona.png",
      type: "Blonde Ale",
      ABV: 3.9,
      description: " Refrescante y ligera, con suaves notas cítricas",
      price: 12000,
      stock: 100,
      presentation: "Botella",
      IBU: 20,
      status: true,
    },
    {
      userCompanyId: company[0].id,
      name: "Mestiza",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mestiza.png",
      type: "Pale Ale",
      ABV: 4.8,
      description: "Cítrica en aroma y sabor, amargo pronunciado y ﬁnal seco",
      price: 12000,
      stock: 100,
      presentation: "Botella",
      IBU: 29,
      status: true,
    },
  ];
  const productSaved = await Product.bulkCreate(product);

  let person = [
    {
        name:"Diego",
        lastName:"Beta",
        document:25485662,
        email: "DiegoBeta@gmail.com",
        password: "12345678",
        country: "Colombia",
        city:"Bogotá",
        state:"Cundinamarca",
        address: "calle 25 N° 15 20"
    }
  ]
  const personSaved= await UserPerson.bulkCreate(person);

};

export default dataBase;
