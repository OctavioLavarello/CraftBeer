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
        "data:image/png;base64,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",
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
      degreeOfAlcohol: 4.6,
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
      degreeOfAlcohol: 3.9,
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
      degreeOfAlcohol: 4.8,
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
