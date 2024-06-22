const banks = [
  {
    value: "1",
    label: "Associa\xe7\xe3o de Poupan\xe7a e Emprestimo Poupex",
    cnpj: "00.655.522/0001-21",
    ispb: "00655522",
    area: "Imobili\xe1rio",
  },
  {
    value: "2",
    label: "AL5 S.A. - Cr\xe9dito, Financiamento e Investimento",
    cnpj: "27.214.112/0001-00",
    ispb: "27214112",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "3",
    label: "Aymor\xe9 Cr\xe9dito, Financiamento e Investimento S.A.",
    cnpj: "07.707.650/0001-10",
    ispb: "07707650",
    area: "Ve\xedculos",
  },
  {
    value: "4",
    label: "Banco ABC Brasil S.A",
    cnpj: "28.195.667/0001-06",
    ispb: "28195667",
    area: "Pessoal, Outros Cr\xe9ditos, Cheques Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "5",
    label: "Banco Agibank S.A.",
    cnpj: "10.664.513/0001-50",
    ispb: "10664513",
    area: "Consignado, Pessoal, Cheque Especial e Troca de Modalidade",
  },
  {
    value: "6",
    label: "Banco Alfa SA",
    cnpj: "03.323.840/0001-83",
    ispb: "03323840",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "7",
    label: "Banco Arbi S.A",
    cnpj: "54.403.563/0001-50",
    ispb: "54403563",
    area: "Consignado",
  },
  {
    value: "8",
    label: "Banco Bari de Investimentos e  Financiamentos  S A.",
    cnpj: "00.556.603/0001-74",
    ispb: "00556603",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Troca de Modalidade",
  },
  {
    value: "9",
    label: "Banco BMG S.A",
    cnpj: "61.186.680/0001-74",
    ispb: "61186680",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Troca de Modalidade",
  },
  {
    value: "10",
    label: "Banco Bradescard S.A.",
    cnpj: "04.184.779/0001-01",
    ispb: "04184779",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Troca de Modalidade",
  },
  {
    value: "11",
    label: "Banco Bradesco Financiamento SA",
    cnpj: "07.207.996/0001-50",
    ispb: "07207996",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "12",
    label: "Banco Bradesco SA",
    cnpj: "60.746.948/0001-12",
    ispb: "60746948",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "13",
    label: "Banco BS2 S.A.",
    cnpj: "71.027.866/0001-34",
    ispb: "71027866",
    area: "Consignado",
  },
  {
    value: "14",
    label: "Banco BTG Pactual S.A.",
    cnpj: "30.306.294/0001-45",
    ispb: "30306294",
    area: "Pessoal, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "15",
    label: "Banco C6 Consignado S.A.",
    cnpj: "61.348.538/0001-86",
    ispb: "61348538",
    area: "Consignado e Ve\xedculos",
  },
  {
    value: "16",
    label: "Banco C6 S.A",
    cnpj: "31.872.495/0001-72",
    ispb: "31872495",
    area: "Pessoal, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "17",
    label: "Banco Cetelem S.A",
    cnpj: "00.558.456/0001-71",
    ispb: "00558456",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "18",
    label: "Banco Citibank S.A.",
    cnpj: "33.479.023/0001-80",
    ispb: "33479023",
    area: "Consignado, Imobili\xe1rio e Pessoal",
  },
  {
    value: "19",
    label: "Banco CNH Industrial Capital S/A",
    cnpj: "02.992.446/0001-75",
    ispb: "02992446",
    area: "Ve\xedciulos, Outros Cr\xe9ditos e Troca de Modalidade",
  },
  {
    value: "20",
    label: "Banco Cooperativo Sicoob S.A",
    cnpj: "02.038.232/0001-64",
    ispb: "02038232",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "21",
    label: "Banco Cooperativo Sicredi S.A",
    cnpj: "01.181.521/0001-55",
    ispb: "01181521",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "22",
    label: "Banco Crefisa S.A",
    cnpj: "61.033.106/0001-86",
    ispb: "61033106",
    area: "Consignado e Pessoal",
  },
  {
    value: "23",
    label: "Banco da Amaz\xf4nia S.A.",
    cnpj: "04.902.979/0001-44",
    ispb: "04902979",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "24",
    label: "Banco daycoval SA",
    cnpj: "62.232.889/0001-90",
    ispb: "62232889",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "25",
    label: "Banco de Investimentos Credit Suisse Brasil SA",
    cnpj: "33.987.793/0001-33",
    ispb: "33987793",
    area: "Pessoal, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "26",
    label: "Banco Digimais S.A.",
    cnpj: "92.874.270/0001-40",
    ispb: "92874270",
    area: "Consignado, Pessoal, Ve\xedculos, Cheque Especial e Troca de Modalidade",
  },
  {
    value: "27",
    label: "Banco Digio S.A.",
    cnpj: "27.098.060.0001-45",
    ispb: "27098060",
    area: "Consignado",
  },
  {
    value: "28",
    label: "Banco do Brasil SA",
    cnpj: "00.000.000/0001-91",
    ispb: "00000000",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "29",
    label: "Banco do Estado de Sergipe S.A.",
    cnpj: "13.009.717/0001-46",
    ispb: "13009717",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "30",
    label: "Banco do Estado do Esp\xedrito Santo - Banestes",
    cnpj: "28.127.603/0001-78",
    ispb: "28127603",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "31",
    label: "Banco do Estado do Para SA",
    cnpj: "04.913.711/0001-08",
    ispb: "04913711",
    area: "Consignado, Imobili\xe1rio e Pessoal",
  },
  {
    value: "32",
    label: "Banco do Estado do Rio Grande do Sul SA",
    cnpj: "92.702.067/0001-96",
    ispb: "92702067",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "33",
    label: "Banco do Nordeste do Brasil S.A.",
    cnpj: "07.237.373/0001-20",
    ispb: "07237373",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "34",
    label: "Banco Fibra S.A",
    cnpj: "58.616.418/0001-08",
    ispb: "58616418",
    area: "Consignado e Ve\xedculos",
  },
  {
    value: "35",
    label: "Banco GM S.A.",
    cnpj: "59.274.605/0001-13",
    ispb: "59274605",
    area: "Ve\xedculos",
  },
  {
    value: "36",
    label: "Banco Honda S.A",
    cnpj: "03.634.220/0001-65",
    ispb: "03634220",
    area: "Ve\xedculos",
  },
  {
    value: "37",
    label: "Banco Inbursa S.A",
    cnpj: "04.866.275/0001-63",
    ispb: "04866275",
    area: "Consigando, Pessoal, Veiculos e Outros Cr\xe9ditos.",
  },
  {
    value: "38",
    label: "Banco Industrial do Brasil S.A",
    cnpj: "31.895.683/0001-16",
    ispb: "31895683",
    area: "Consignado e Pessoal",
  },
  {
    value: "39",
    label: "Banco Inter S.A",
    cnpj: "00.416.968/0001-01",
    ispb: "00416968",
    area: "Consignado, Imobili\xe1rio, Pessoal e Troca de Modalidade",
  },
  {
    value: "40",
    label: "Banco Ita\xfa Consignado S.A.",
    cnpj: "33.885.724/0001-19",
    ispb: "33885724",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "41",
    label: "Banco Itau S.A",
    cnpj: "60.701.190/0001-04",
    ispb: "60701190",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "42",
    label: "Banco J.P.Morgan S.A",
    cnpj: "33.172.537/0001-98",
    ispb: "33172537",
    area: "Pessoal",
  },
  {
    value: "43",
    label: "Banco Losango S.A - Banco M\xfaltiplo",
    cnpj: "33.254.319/0001-00",
    ispb: "33254319",
    area: "Consignado, Pessoal, Outros Cr\xe9ditos e Troca de Modalidade",
  },
  {
    value: "44",
    label: "Banco Luso Brasileiro S.A",
    cnpj: "59.118.133/0001-00",
    ispb: "59118133",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "45",
    label: "Banco Master S.A",
    cnpj: "33.923.798/0001-00",
    ispb: "33923798",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "46",
    label: "Banco Mercantil do Brasil S.A",
    cnpj: "17.184.037/0001-10",
    ispb: "17184037",
    area: "Consignado, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "47",
    label: "Banco Mercedes Benz do Brasil S.A",
    cnpj: "60.814.191/0001-57",
    ispb: "60814191",
    area: "Pessoal e Ve\xedculos",
  },
  {
    value: "48",
    label: "Banco Ol\xe9 Consignado S.A",
    cnpj: "71.371.686/0001-75",
    ispb: "71371686",
    area: "Consignado",
  },
  {
    value: "51",
    label: "Banco Paulista S.A.",
    cnpj: "61.820.817/0001-09",
    ispb: "61820817",
    area: "Consignado, Imobili\xe1rio e Troca de Modalidade",
  },
  {
    value: "52",
    label: "Banco Pine S.A.",
    cnpj: "62.144.175/0001-20",
    ispb: "62144175",
    area: "Consignado e Ve\xedculos",
  },
  {
    value: "53",
    label: "Banco PSA Finance Brasil S.A.",
    cnpj: "03.502.961/0001-92",
    ispb: "03502961",
    area: "Ve\xedculos",
  },
  {
    value: "54",
    label: "Banco RCI Brasil S.A.",
    cnpj: "62.307.848/0001-15",
    ispb: "62307848",
    area: "Veiculos",
  },
  {
    value: "55",
    label: "Banco Rendimento S.A",
    cnpj: "68.900.810/0001-38",
    ispb: "68900810",
    area: "Pessoal, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "56",
    label: "Banco Ribeir\xe3o Preto S.A",
    cnpj: "00.517.645/0001-04",
    ispb: "00517645",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "57",
    label: "Banco RNX S.A",
    cnpj: "80.271.455/0001-80",
    ispb: "80271455",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "58",
    label: "Banco Rodobens S.A.",
    cnpj: "33.603.457/0001-40",
    ispb: "33603457",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Troca de Modalidade",
  },
  {
    value: "59",
    label: "Banco Safra SA",
    cnpj: "58.160.789/0001-28",
    ispb: "58160789",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Cheque Especial e Troca de Modalidade e Capital de Giro",
  },
  {
    value: "60",
    label: "Banco Santander (Brasil) S.A",
    cnpj: "90.400.888/0001-42",
    ispb: "90400888",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "61",
    label: "Banco Semear S.A",
    cnpj: "00.795.423/0001-45",
    ispb: "00795423",
    area: "Consignado e Pessoal",
  },
  {
    value: "62",
    label: "Banco Senff S.A.",
    cnpj: "11.970.623/0001-03",
    ispb: "11970623",
    area: "Consignado",
  },
  {
    value: "63",
    label: "Banco Top\xe1zio S.A.",
    cnpj: "07.679.404/0001-00",
    ispb: "07679404",
    area: "Consignado e Pessoal",
  },
  {
    value: "64",
    label: "Banco Toyota do Brasil S.A.",
    cnpj: "03.215.790/0001-10",
    ispb: "03215790",
    area: "Ve\xedculos",
  },
  {
    value: "65",
    label: "Banco Volkswagen S.A",
    cnpj: "59.109.165/0001-49",
    ispb: "59109165",
    area: "Consignado, Ve\xedculos, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "66",
    label: "Banco Volvo (Brasil) S.A",
    cnpj: "58.017.179/0001-70",
    ispb: "58017179",
    area: "Ve\xedculos",
  },
  {
    value: "67",
    label: "Banco Votorantim S.A",
    cnpj: "59.588.111/0001-03",
    ispb: "59588111",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "68",
    label: "Banco XP SA.",
    cnpj: "33.264.668/0001-03",
    ispb: "33264668",
    area: "Pessoal, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "69",
    label: "Banco Yamaha Motor do Brasil S.A",
    cnpj: "10.371.492/0001-85",
    ispb: "10371492",
    area: "Ve\xedculos",
  },
  {
    value: "70",
    label: "BancoSeguro S.A",
    cnpj: "10.264.663/0001-77",
    ispb: "10264663",
    area: "Consignado e Pessoal",
  },
  {
    value: "71",
    label: "Bari Compahia Hipotecaria",
    cnpj: "14.511.781/0001-93",
    ispb: "14511781",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "72",
    label: "BMW Financeira S/A CFI - BMW",
    cnpj: "04.452.473/0001-80",
    ispb: "04452473",
    area: "Ve\xedculos",
  },
  {
    value: "75",
    label: "Caixa Economica Federal",
    cnpj: "00.360.305/0001-04",
    ispb: "00360305",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "76",
    label: "Cartos Sociedade de Cr\xe9dito Direto SA",
    cnpj: "21.332.862/0001-91",
    ispb: "21332862",
    area: "Consignado, Imobili\xe1rio, Pessoal e Troca de Modalidade.",
  },
  {
    value: "77",
    label: "CC Cecres - Sicoob Cecres",
    cnpj: "54.603.022/0001-75",
    ispb: "54603022",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "78",
    label: "CC Credimata Ltda. - Sicoob Credimata",
    cnpj: "01.152.097/0001-10",
    ispb: "01152097",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "79",
    label: "CC Credl\xedder - Sicoob Credl\xedder",
    cnpj: "05.463.934/0001-83",
    ispb: "05463934",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "80",
    label:
      "CC da Regi\xe3o e Colar Metropolitano da Vale do A\xe7o - Sicoob Cosmipa -",
    cnpj: "17.361.536/0001-35",
    ispb: "17361536",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "81",
    label: "CC de Cascavel e Regi\xe3o - Sicoob Credicapital",
    cnpj: "04.529.074/0001-70",
    ispb: "04529074",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "82",
    label:
      "CC de Livre Admiss\xe3o da Grande Teresina e Microrregi\xf5es de Campo Maior, M\xe9dio Parna\xedba, Alto M\xe9dio Gurgueia, Floriano, Picos e Litoral Piauiense  - Sicoob Piau\xed",
    cnpj: "05.477.038/0001-73",
    ispb: "05477038",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "83",
    label:
      "CC de Livre Admiss\xe3o da Regi\xe3o Metropolitana de Goi\xe2nia Ltda. - Secovicred",
    cnpj: "07.599.206/0001-29",
    ispb: "07599206",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "84",
    label:
      "CC de Livre Admiss\xe3o de Belo Horizonte e Cidades P\xf3lo do Estado de Minas Gerais Ltda - Sicoob Nossacoop",
    cnpj: "01.760.242/0001-46",
    ispb: "01760242",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "85",
    label:
      "CC de Livre Admiss\xe3o do Oeste Maranhense - Sicoob Oeste Maranhense",
    cnpj: "09.424.988/0001-90",
    ispb: "09424988",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "86",
    label:
      "CC de Livre Admiss\xe3o Sicoob UniMais Centro Leste Paulista -  Sicoob UniMais Centro Leste Paulista",
    cnpj: "01.259.518/0001-07",
    ispb: "01259518",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "87",
    label:
      "CC de Produtores Rurais e de Livre Admiss\xe3o do Tri\xe2ngulo - Sicoob Creditril",
    cnpj: "41.669.227/0001-01",
    ispb: "41669227",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "88",
    label: "CC de Servidores P\xfablicos Cooperplan Ltda - Sicoob Cooperplan",
    cnpj: "02.674.113/0001-06",
    ispb: "02674113",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "89",
    label: "CC do Alto Parana\xedba e Regi\xe3o Ltda - Sicoob Credipatos",
    cnpj: "25.387.671/0001-88",
    ispb: "25387671",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "90",
    label:
      "CC do Nordeste de Minas Gerais e Sul da Bahia Ltda - Sicoob Credinorte",
    cnpj: "64.276.058/0001-45",
    ispb: "64276058",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "91",
    label: "CC do Noroeste de Minas Gerais - Sicoob Carlos Chagas",
    cnpj: "41.753.500/0001-81",
    ispb: "41753500",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "92",
    label: "CC do Norte e Noroeste de Minas Gerais Ltda - Sicoob Credigerais",
    cnpj: "00.698.609/0001-86",
    ispb: "00698609",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "93",
    label:
      "CC dos Integrantes do Poder Judici\xe1rio e das Institui\xe7\xf5es Jur\xeddicas da Uni\xe3o em Minas Gerais Ltda - Sicoob Coopjus",
    cnpj: "25.363.615/0001-03",
    ispb: "25363615",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "94",
    label:
      "CC dos Magistrados e Servidores de Goi\xe1s e Empregados da CELG - Sicoob JuriscredCelg",
    cnpj: "09.552.111/0001-85",
    ispb: "09552111",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "95",
    label: "CC Horizonte - Sicoob Horizonte",
    cnpj: "07.194.313/0001-77",
    ispb: "07194313",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "96",
    label:
      "CC Maxi Alfa de Livre Admiss\xe3o de Associados - Sicoob Maxicr\xe9dito",
    cnpj: "78.825.270/0001-29",
    ispb: "78825270",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "97",
    label:
      "CC M\xfatuo dos Servidores Municipais de Bebedouro - Sicoob Coocresb",
    cnpj: "05.969.937/0001-93",
    ispb: "05969937",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "98",
    label: "CC Rural de ira\xed de Minas - Sicoob Credimil",
    cnpj: "71.207.740/0001-41",
    ispb: "71207740",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "99",
    label: "CC Sicoob Vale do Igua\xe7u",
    cnpj: "02.466.552/0001-15",
    ispb: "02466552",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "100",
    label: "CC Vale do Canoas - Sicoob/SC - Credicanoas",
    cnpj: "00.707.903/0001-07",
    ispb: "00707903",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "101",
    label: "CCB Brasil S.A. \u2010 Cr\xe9dito, Financiamentos e Investimentos",
    cnpj: "92.764.489/0001-96",
    ispb: "92764489",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "102",
    label: "CCLA da Cidade de Goi\xe2nia e Entorno - Sicoob Crediforte",
    cnpj: "97.360.804/0001-33",
    ispb: "97360804",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "103",
    label: "CCLA da Lagoa da Prata e Regi\xe3o - Sicoob lagoacred",
    cnpj: "01.739.375/0001-30",
    ispb: "01739375",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "104",
    label:
      "CCLA da Margem Esquerda do Urucuia e S\xe3o Francisco - Sicoob Credichapada",
    cnpj: "14.046.512/0001-01",
    ispb: "14046512",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "105",
    label: "CCLA da Regi\xe3o central e oeste Mineiro Ltda - Sicoob Divicred",
    cnpj: "01.736.516/0001-61",
    ispb: "01736516",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "106",
    label: "CCLA da Regi\xe3o de Frutal - Sicoob Frutal",
    cnpj: "71.419.600/0001-37",
    ispb: "71419600",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "107",
    label: "CCLA da Regi\xe3o de Guaxup\xe9 - Sicoob Acicred",
    cnpj: "01.699.652/0001-29",
    ispb: "01699652",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "108",
    label: "CCLA da Regi\xe3o de Iturama - Sicoob Credirama",
    cnpj: "03.412.878/0001-22",
    ispb: "03412878",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "109",
    label:
      "CCLA da Regi\xe3o de S\xe3o Sebasti\xe3o do Paraiso - Sicoob Paraisocred",
    cnpj: "01.657.678/0001-04",
    ispb: "01657678",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "110",
    label: "CCLA da Regi\xe3o de Tr\xeas Pontas - Sicoob Copersul",
    cnpj: "18.966.739/0001-18",
    ispb: "18966739",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "111",
    label:
      "CCLA da Regi\xe3o do Circuito Campos das Vertentes Ltda - Sicoob Copermec",
    cnpj: "02.232.383/0001-59",
    ispb: "02232383",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "112",
    label: "CCLA da Regi\xe3o Leste da Bacia do Rio doce - Sicoob Credileste",
    cnpj: "05.158.093/0001-09",
    ispb: "05158093",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "113",
    label:
      "CCLA da Regi\xe3o Sudeste de MG - Sicoob Credisucesso - Sicoob Unicoob Meridional",
    cnpj: "42.887.133/0001-71",
    ispb: "42887133",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "114",
    label:
      "CCLA da Uni\xe3o dos Vales do Ipiranga e Matip\xf3 - Sicoob Uni\xe3o",
    cnpj: "01.060.307/0001-40",
    ispb: "01060307",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "115",
    label: "CCLA de Associados Auriverde-Sicoob Credial -SC",
    cnpj: "78.858.107/0001-62",
    ispb: "78858107",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "116",
    label: "CCLA de Associados do Alto Uruguai Catarinense - Sicoob Crediau/SC",
    cnpj: "78.840.071/0001-90",
    ispb: "78840071",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "117",
    label: "CCLA de Associados do Norte de Minas - Sicoob Credinor",
    cnpj: "21.866.694/0001-14",
    ispb: "21866694",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "118",
    label: "CCLA de Associados do Vale do Vinho - Sicoob Vale do Vinho",
    cnpj: "81.016.131/0001-69",
    ispb: "81016131",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "119",
    label:
      "CCLA de Associados Integra\xe7\xe3o de Estados do Rio Grande do Sul e Santa Catarina - Sicredi Integra\xe7\xe3o de Estados RS/SC",
    cnpj: "87.781.530/0001-00",
    ispb: "87781530",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "120",
    label: "CCLA de Associados Litor\xe2nea - Sicoob/SC Credija",
    cnpj: "85.291.086/0001-01",
    ispb: "85291086",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "121",
    label: "CCLA de Associados Nova Trento - Sicoob TrentoCredi SC",
    cnpj: "02.641.969/0001-77",
    ispb: "02641969",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "122",
    label: "CCLA de Associados Oeste Catarinense - Sicoob Oestecredi",
    cnpj: "78.825.023/0001-22",
    ispb: "78825023",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "123",
    label: "CCLA de Associados Sul Catarinense - Sicoob Credisulca SC",
    cnpj: "81.367.880/0001-30",
    ispb: "81367880",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "124",
    label: "CCLA de Associados Teixeira de Freitas Ltda - Sicoob Extremo Sul",
    cnpj: "02.447.120/0001-67",
    ispb: "02447120",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "125",
    label: "CCLA de Boa Esperan\xe7a - Sicoob Belcredo",
    cnpj: "00.869.687/0001-04",
    ispb: "00869687",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "126",
    label: "CCLA de Conselheiro Pena e Regi\xe3o - Sicoob Credicope",
    cnpj: "38.588.174/0001-90",
    ispb: "38588174",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "127",
    label: "CCLA de Formiga Ltda - Sicoob Credifor",
    cnpj: "41.931.445/0001-72",
    ispb: "41931445",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "128",
    label: "CCLA de Goi\xe2nia e Microrregi\xf5es  - Sicoob Goi\xe2nia",
    cnpj: "01.720.488/0001-94",
    ispb: "01720488",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "129",
    label:
      "CCLA de Goi\xe2nia, Senador Canedo e Regi\xf5es CrediGoias - Sicoob Credigoias",
    cnpj: "37.255.049/0001-03",
    ispb: "37255049",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "130",
    label: "CCLA de Itajub\xe1 Ltda - Sicoob Sul de Minas",
    cnpj: "04.079.285/0001-59",
    ispb: "04079285",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "131",
    label: "CCLA de Ita\xfana e Regi\xe3o - Sicoob Centro Oeste",
    cnpj: "66.463.407/0001-63",
    ispb: "66463407",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "132",
    label: "CCLA de Jatai e Regi\xe3o - Sicoob Cooprem",
    cnpj: "10.143.499/0001-40",
    ispb: "10143499",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "133",
    label: "CCLA de Martinho de Campos Ltda - Sicoob Credimac",
    cnpj: "64.480.833/0001-80",
    ispb: "64480833",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "134",
    label: "CCLA de Piracanjuba Ltda - Sicoob Cerrado",
    cnpj: "05.222.094/0001-67",
    ispb: "05222094",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "135",
    label: "CCLA de Pitangui e Regi\xe3o - Sicoob Credpit",
    cnpj: "04.181.542/0001-69",
    ispb: "04181542",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "136",
    label: "CCLA de Rio Verde e Regi\xe3o - Sicoob Empresarial",
    cnpj: "09.033.698/0001-16",
    ispb: "09033698",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "137",
    label:
      "CCLA de Santa Cruz das Palmeiras e Regi\xe3o - Sicoob Credi\xe7ucar",
    cnpj: "06.910.457/0001-10",
    ispb: "06910457",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "138",
    label: "CCLA do Centro Goiano - Sicoob Credi SGPA",
    cnpj: "03.730.508/0001-33",
    ispb: "03730508",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "139",
    label: "CCLA do Centro Nordeste Mineiro - Sicoob Credicenm",
    cnpj: "02.173.447/0001-98",
    ispb: "02173447",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "140",
    label: "CCLA do Centro Sul Goiano - Sicoob Centro-Sul",
    cnpj: "33.579.731/0001-92",
    ispb: "33579731",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "141",
    label: "CCLA do Centro Sul Rondoniense - Sicoob Credip",
    cnpj: "02.015.588/0001-82",
    ispb: "02015588",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "142",
    label: "CCLA do Circuito das Malhas - Sicoob Credmalhas",
    cnpj: "03.941.182/0001-93",
    ispb: "03941182",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "143",
    label: "CCLA do Leste de Minas - Sicoob Credicaf",
    cnpj: "25.395.435/0001-03",
    ispb: "25395435",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "144",
    label: "CCLA do M\xe9dio leste de Mato Grosso - Sicoob Primavera",
    cnpj: "05.241.619/0001-01",
    ispb: "05241619",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "145",
    label: "CCLA do M\xe9dio Piracicaba e Circuito do Ouro - Sicoob Credimepi",
    cnpj: "01.644.264/0001-40",
    ispb: "01644264",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "146",
    label: "CCLA do Noroeste de Minas Gerais - Sicoob Credipinho",
    cnpj: "71.154.876/0001-30",
    ispb: "71154876",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "147",
    label: "CCLA do Sert\xe3o de MG - Sicoob Sert\xe3o Minas",
    cnpj: "01.667.352/0001-68",
    ispb: "01667352",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "148",
    label: "CCLA do Sudoeste de MG e Noroeste de SP - Sicoob Agrocredi",
    cnpj: "42.873.828/0001-02",
    ispb: "42873828",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "149",
    label: "CCLA do Sudoeste Goiano - Sicoob Credi-Rural",
    cnpj: "24.795.049/0001-46",
    ispb: "24795049",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "150",
    label: "CCLA do Sul de Minas Gerais Ltda - Sicoob Credivass",
    cnpj: "01.604.998/0001-04",
    ispb: "01604998",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "151",
    label: "CCLA do Tri\xe2ngulo Mineiro - Sicoob Aracoop",
    cnpj: "03.320.525/0001-00",
    ispb: "03320525",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "152",
    label: "CCLA do Vale de S\xe3o Patricio - Sicoob Coopercred",
    cnpj: "00.968.602/0001-37",
    ispb: "00968602",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "153",
    label: "CCLA do Vale do Araguaia - Sicoob Mineiros",
    cnpj: "24.830.879/0001-67",
    ispb: "24830879",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "154",
    label: "CCLA do Vale do Paranapanema - Sicoob Credivale",
    cnpj: "01.637.949/0001-60",
    ispb: "01637949",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "155",
    label: "CCLA do Vale do Rio Grande LTda - Sicoob Uberaba",
    cnpj: "25.683.475/0001-50",
    ispb: "25683475",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "156",
    label: "CCLA do Vale Rio Crix\xe1s - Sicoob do Vale Rio Crix\xe1s",
    cnpj: "07.108.146/0001-02",
    ispb: "07108146",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "157",
    label: "CCLA M\xe9dio Oeste - Sicoob Medio oeste",
    cnpj: "07.318.874/0001-30",
    ispb: "07318874",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "158",
    label: "CCLA Regional de Montes Claros - Sicoob Credimontes",
    cnpj: "02.031.139/0001-28",
    ispb: "02031139",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "159",
    label: "CCLA Sul do Esp\xedrito Santo - Sicoob Sul",
    cnpj: "32.467.086/0001-53",
    ispb: "32467086",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "160",
    label: "CCLA Tr\xeas Fronteiras - Sicoob Tr\xeas Fronteiras",
    cnpj: "04.876.393/0001-52",
    ispb: "04876393",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "161",
    label: "CCLA Uni\xe3o Centro Oeste de Minas - Sicoob Credesp",
    cnpj: "01.703.620/0001-50",
    ispb: "01703620",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "162",
    label: "CCLA Uni\xe3o Centro Oeste Ltda - Sicoob Uni\xe3o Centro oeste",
    cnpj: "26.072.728/0001-12",
    ispb: "26072728",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "163",
    label: "CCM  do Grupo ABC - Cooper 7",
    cnpj: "04.414.354/0001-33",
    ispb: "04414354",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "164",
    label:
      "CCM de Economia e Cr\xe9dito M\xfatuo Unicred Integra\xe7\xe3o LTda - Unicred Integra\xe7\xe3o",
    cnpj: "73.750.424/0001-47",
    ispb: "73750424",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "165",
    label: "CCM dos Advogados  de Santa Catarina - Sicoob Advocacia",
    cnpj: "05.861.932/0001-42",
    ispb: "05861932",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "166",
    label: "CCM dos Corretores de Seguros de SP - Sicoob Credicor/SP",
    cnpj: "08.030.602/0001-01",
    ispb: "08030602",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "167",
    label:
      "CCM dos Funcion\xe1rios P\xfablicos do Poder Judici\xe1rio da Capital do Estado de S\xe3o Paulo",
    cnpj: "07.651.495/0001-68",
    ispb: "07651495",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "168",
    label:
      "CCM dos Servidores do Minist\xe9rio da Educa\xe7\xe3o SP - Coopemesp",
    cnpj: "73.092.827/0001-46",
    ispb: "73092827",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "169",
    label:
      "CECM de Livre Admiss\xe3o de Araraquara e regi\xe3o - Sicoob Iesacred",
    cnpj: "53.236.808/0001-39",
    ispb: "53236808",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "170",
    label: "CECM do Vale das Antas LTda - Unicred Vale das Antas.",
    cnpj: "94.243.839/0001-02",
    ispb: "94243839",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "171",
    label:
      "CECM dos Aposentados Pensionistas e Idosos Ligados ao Sindicato Nacional dos Aposentados Pensionistas e Idosos - Sicoob Coopernapi",
    cnpj: "16.564.240/0001-59",
    ispb: "16564240",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "172",
    label: "CECM dos Colaboradores da Vale S/A Ltda - Sicoob Credivale",
    cnpj: "20.961.629/0001-05",
    ispb: "20961629",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "173",
    label:
      "CECM dos Contabilistas e Corretores de Seguros da Grande BH - Sicoob Credit\xe1bil",
    cnpj: "02.217.068/0001-52",
    ispb: "02217068",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "174",
    label:
      "CECM dos Empregados da Cemig e das Industrias Metal\xfargicas e de Material El\xe9trico e dos Servidores P\xfablicos Municipais de Juiz de Fora LTda - Sicoob Cecremec",
    cnpj: "17.502.881/0001-41",
    ispb: "17502881",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "175",
    label:
      "CECM dos empregados da Coop - Cooperativa de Consumo e dos Empregados do Supermercado Zona Sul S.A",
    cnpj: "47.074.323/0001-93",
    ispb: "47074323",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "176",
    label: "CECM dos Empregados da Eaton - Eaton",
    cnpj: "73.077.398/0001-38",
    ispb: "73077398",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "177",
    label:
      "CECM dos Empregados da Mondelez, Brasil, Philip Morris Brasil e K&S Alimentos",
    cnpj: "62.795.257/0001-34",
    ispb: "62795257",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "178",
    label: "CECM dos Empregados da Novelis",
    cnpj: "57.545.436/0001-83",
    ispb: "57545436",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "179",
    label:
      "CECM dos Empregados das Empresas Controladas e Coligadas da Usina Santa Adelia - Usagro",
    cnpj: "68.969.625/0001-08",
    ispb: "68969625",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "180",
    label: "CECM dos Empregados das Empresas Randon - Sicoob Cooperando",
    cnpj: "89.280.960/0001-66",
    ispb: "89280960",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "181",
    label: "CECM dos empregados das Empresas Zillo Lorenzetti - Copercred",
    cnpj: "58.022.195/0001-50",
    ispb: "58022195",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "182",
    label:
      "CECM dos Empregados das Institui\xe7\xf5es de Ensino Sup. do Sul de Minas Ltda - Credfenas",
    cnpj: "02.414.044/0001-93",
    ispb: "02414044",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "183",
    label:
      "CECM dos Empregados de Furnas e das demais Empresas do Sistema Eletrobr\xe1s - Sicoob Cecremef",
    cnpj: "33.370.115/0001-27",
    ispb: "33370115",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "184",
    label: "CECM dos Empres\xe1rios de Itapetininga Sicoob Cred-Aci",
    cnpj: "08.844.074/0001-16",
    ispb: "08844074",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "185",
    label:
      "CECM dos Empres\xe1rios de Praia Grande e Regi\xe3o - Sicoob Cooperace",
    cnpj: "09.639.338/0001-62",
    ispb: "09639338",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "186",
    label:
      "CECM dos Empres\xe1rios de Ribeir\xe3o Preto e Regi\xe3o - Sicoob Cooperac",
    cnpj: "08.071.414/0001-13",
    ispb: "08071414",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "187",
    label:
      "CECM dos Fabricantes de Cal\xe7ados de Nova Serrana - SicoobCredinova",
    cnpj: "01.667.766/0001-97",
    ispb: "01667766",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "188",
    label:
      "CECM dos Funcion\xe1rios da Cia A\xe7ucareira Vale do Ros\xe1rio - Coopervale",
    cnpj: "44.958.981/0001-50",
    ispb: "44958981",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "189",
    label:
      "CECM dos Funcion\xe1rios da Cia Paulista de Trens Metropolitanos - Coopertrem",
    cnpj: "01.530.136/0001-76",
    ispb: "01530136",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "190",
    label:
      "CECM dos Funcion\xe1rios e Prestadores de Servi\xe7os da cocred-copercana-canaoeste Sicoob Cred Copercana",
    cnpj: "64.739.121/0001-32",
    ispb: "64739121",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "191",
    label: "CECM dos Magistrados de S\xe3o Paulo - Sicoob Magiscred",
    cnpj: "51.489.318/0001-19",
    ispb: "51489318",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "192",
    label: "CECM dos Medico de Jaboticabal - Copermed de Jaboticabal",
    cnpj: "02.159.014/0001-88",
    ispb: "02159014",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "193",
    label:
      "CECM dos M\xe9dicos e demais Profissionais da \xc1rea de Sa\xfade de Nivel Superior de Juiz de Fora LTda - Unicred Juiz de Fora",
    cnpj: "71.479.653/0001-43",
    ispb: "71479653",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "194",
    label:
      "CECM dos M\xe9dicos e demais Profissionais da Area de Sa\xfade do Estado de S\xe3o Paulo LTda - Unicred do Estado de S\xe3o Paulo",
    cnpj: "71.884.498/0001-40",
    ispb: "71884498",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "195",
    label:
      "CECM dos M\xe9dicos e Profissionais da \xc1rea de Sa\xfade do Brasil  Ltda - Sicoob Credicom",
    cnpj: "42.898.825/0001-15",
    ispb: "42898825",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "196",
    label:
      "CECM dos M\xe9dios e demais Profissionais e N\xedvel Superior da \xc1rea de Sa\xfade de Ourinhos - Sicoob Ouricred",
    cnpj: "02.179.673/0001-86",
    ispb: "02179673",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "197",
    label:
      "CECM dos Pequenos Empres\xe1rio, Microempres\xe1rios e Microempreendedores do DF - Sicoob Empresarial",
    cnpj: "05.856.736/0001-80",
    ispb: "05856736",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "198",
    label:
      "CECM dos Profissionais da Area Notarial e Registral - Uniced Coopnore",
    cnpj: "07.714.057-0001-00",
    ispb: "07714057",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "199",
    label:
      "CECM dos Securit\xe1rios, Corretores de Seguros e de Capitaliza\xe7\xe3o do Rio de Janeiro - Sicoob Credicor RJ",
    cnpj: "03.930.587/0001-26",
    ispb: "03930587",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "200",
    label: "CECM dos Servidores da Faculdade de Engenharia de Ilha Solteira",
    cnpj: "96.409.263/0001-28",
    ispb: "96409263",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "201",
    label:
      "CECM dos Servidores da Justi\xe7a do Estado de Minas Gerais LTda - Sicoob Credjus",
    cnpj: "04.894.460/0001-61",
    ispb: "04894460",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "202",
    label:
      "CECM dos Servidores da Prefeitura Municipal de Orl\xe2ndia - Cred Serv",
    cnpj: "00.946.465/0001-30",
    ispb: "00946465",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "203",
    label:
      "CECM dos Servidores da Secretaria de Estado de Fazenda do Distrito Federa",
    cnpj: "03.603.683/0001-60",
    ispb: "03603683",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "204",
    label:
      "CECM dos Servidores da Secretaria de Seguran\xe7a e da defesa Social do RN - Sicoob Credipol",
    cnpj: "02.382.755/0001-23",
    ispb: "02382755",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "205",
    label:
      "CECM dos Servidores da Universidade Federal de Vi\xe7osa - Sicoob Ufvcredi",
    cnpj: "02.794.761/0001-98",
    ispb: "02794761",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "206",
    label:
      "CECM dos Servidores do Munic\xedpio de Santo Andr\xe9 - SP  - Sicoob Cecresa",
    cnpj: "00.512.839/0001-09",
    ispb: "00512839",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "207",
    label:
      "CECM dos Servidores do Poder Judici\xe1rio do Estado do Rio de Janeiro",
    cnpj: "02.000.895/0001-90",
    ispb: "02000895",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "208",
    label:
      '"CECM dos Servidores e Empregados Municipais   das Prefeituras de BH, Betim, Brumadinho, Contagem, Ibirit\xe9, Nova Lima, Ribeir\xe3o das Neves, Sabar\xe1, Santa Luzia e Vespasino Ltda',
  },
  {
    value: '\u2013 Sicoob Crediserv"',
    label: "01.864.151/0001-50",
    cnpj: "01864151",
    ispb: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "209",
    label:
      "CECM dos Servidores Municipais  da Regi\xe3o Metropolitana do Vale do Para\xedba e Litoral Norte - Sicoob- Cressem",
    cnpj: "54.190.525/0001-66",
    ispb: "54190525",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "210",
    label:
      "Cecm dos Servidores Publicos do Poder Executivo Federal No Estado do Esp\xedrito Santo - Coopsefes",
    cnpj: "03.639.902/0001-60",
    ispb: "03639902",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "211",
    label:
      "CECM dos Servidores P\xfablicos Federais do Munic\xedpio de Uberaba e suas Funda\xe7\xf5es - Sicoob Credimed",
    cnpj: "71.336.432/0001-16",
    ispb: "71336432",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "212",
    label: "CECM dos Trabalhadores da Cia Proc. dados Est. SP Crediprodesp",
    cnpj: "67.915.868/0001-92",
    ispb: "67915868",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "213",
    label: "CECM Unicred Eleva Ltda. - Unicred Eleva",
    cnpj: "95.163.002/0001-08",
    ispb: "95163002",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "214",
    label: "CECM Unicred Ponto Capital",
    cnpj: "02.641.032/0001-00",
    ispb: "02641032",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "215",
    label: "CECM Unicred Regi\xe3o da Campanha LTda",
    cnpj: "01.705.236/0001-96",
    ispb: "01705236",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "216",
    label: "CECM Unicredi Ijui LTda - Unicredo Ijui",
    cnpj: "01.526.924/0001-99",
    ispb: "01526924",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "217",
    label:
      "Central Cooperativa de Cr\xe9dito no Estado do Espirito Santo - CECOOP",
    cnpj: "05.790.149/0001-35",
    ispb: "05790149",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade",
  },
  {
    value: "218",
    label:
      "Central das Cooperativas de Cr\xe9dito do Estado de S\xe3o Paulo - Sicoob Central Cecresp",
    cnpj: "62.931.522/0001-64",
    ispb: "62931522",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "219",
    label: "China Construction Bank",
    cnpj: "7.450.604/0001-89",
    ispb: "07450604",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "220",
    label: "CLA do Alto S\xe3o Francisco - Sicoob Credialto",
    cnpj: "41.805.003/0001-80",
    ispb: "41805003",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "221",
    label: "Companhia de Cr\xe9dito Financiamento e Investimento RCI Brasil",
    cnpj: "61.784.278/0001-91",
    ispb: "61784278",
    area: "Ve\xedculos",
  },
  {
    value: "222",
    label: "Companhia Hipotec\xe1ria Piratini - CHP",
    cnpj: "18.282.093/0001-50",
    ispb: "18282093",
    area: "Cr\xe9dito Imobili\xe1rio",
  },
  {
    value: "223",
    label:
      "Confedera\xe7\xe3o Nacional das Cooperativas Centrais de Cr\xe9dito e Economia Familiar e Solid\xe1ria",
    cnpj: "10.398.952/0001-69",
    ispb: "10398952",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "224",
    label:
      "Confedera\xe7\xe3o Nacional das Cooperativas Centrais Unicred Ltda. \u2013 Unicred do Brasil",
    cnpj: "00.315.557/0001-11",
    ispb: "00315557",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "225",
    label: "Coop de Econ e Cred M\xfatuo dos Func da Nestle",
    cnpj: "62.562.012/0001-67",
    ispb: "62562012",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "226",
    label: "Coopecredi Guariba - Cooperativa de Cr\xe9dito",
    cnpj: "44.469.161/0001-02",
    ispb: "44469161",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "227",
    label: "Cooperativa Central de Cr\xe9dito - AILOS",
    cnpj: "05.463.212/0001-29",
    ispb: "05463212",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "228",
    label: "Cooperativa de  Cr\xe9dito CREDSAOPAULO - SICOOB CREDSAOPAULO",
    cnpj: "02.197.569/0001-14",
    ispb: "02197569",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "229",
    label:
      "Cooperativa de Cr\xe9d. de Livre Admiss\xe3o de Associados da Gr. Get\xfalio Vargas do RS",
    cnpj: "87.784.088/0001-68",
    ispb: "87784088",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "230",
    label: "Cooperativa de Cr\xe9dito - Sicredi Rio Grande do Norte",
    cnpj: "70.038.237/0001-47",
    ispb: "70038237",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "231",
    label:
      "Cooperativa de Cr\xe9dito Alian\xe7a RS/SC - Sicredi Alian\xe7a RS/SC",
    cnpj: "87.795.639/0001-99",
    ispb: "87795639",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "232",
    label:
      "Cooperativa de Cr\xe9dito Alto Vale do Itaja\xed - Sicoob Alto Vale",
    cnpj: "80.959.612/0001-45",
    ispb: "80959612",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "233",
    label: "Cooperativa de Cr\xe9dito Capital Forte - Sicoob Crediforte",
    cnpj: "03.497.143/0001-49",
    ispb: "03497143",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "234",
    label: "Cooperativa de Cr\xe9dito Centro Leste - Sicredi Centro Leste - RS",
    cnpj: "88.471.024/0001-70",
    ispb: "88471024",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "235",
    label:
      "Cooperativa de Cr\xe9dito Cl\xe1ssica do Estado do Rio de Janeiro - Sicoob Empresas RJ",
    cnpj: "04.120.633/0001-94",
    ispb: "04120633",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "236",
    label:
      "Cooperativa de Cr\xe9dito Cl\xe1ssica dos Empregados da Vale S.A. e Entidades Vinculadas Ltda.",
    cnpj: "33.924.028/0001-74",
    ispb: "33924028",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "237",
    label:
      "Cooperativa de Credito Classica dos Funcionarios e Prestadores de Servicos das Empresas Ligadas ao Grupo Eucatur Ltda - Eucred",
    cnpj: "21.110.927/0001-54",
    ispb: "21110927",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "238",
    label: "Cooperativa de Cr\xe9dito Cocre",
    cnpj: "54.401.286/0001-46",
    ispb: "54401286",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "239",
    label: "Cooperativa de Cr\xe9dito Cogem",
    cnpj: "44.401.800/0001-90",
    ispb: "44401800",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "240",
    label: "Cooperativa de Cr\xe9dito Coocrelivre",
    cnpj: "53.935.029/0001-21",
    ispb: "53935029",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "241",
    label:
      "Cooperativa de Cr\xe9dito Coopacredi Ltda. \u2013 Sicoob Coopacredi",
    cnpj: "65.229.254/0001-21",
    ispb: "65229254",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "242",
    label: "Cooperativa de Cr\xe9dito Coopcred",
    cnpj: "53.623.781/0001-37",
    ispb: "53623781",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "243",
    label: "Cooperativa de Cr\xe9dito Coopera\xe7\xe3o RS/SC",
    cnpj: "87.779.625/0001-81",
    ispb: "87779625",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "244",
    label: "Cooperativa de Cr\xe9dito Coopermais - Sicoob Coopermais",
    cnpj: "31.804.966/0001-05",
    ispb: "31804966",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "245",
    label: "Cooperativa de Cr\xe9dito Cooplivre",
    cnpj: "49.389.307/0001-15",
    ispb: "49389307",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "246",
    label: "Cooperativa de Cr\xe9dito Credcooper Ltda. - Sicoob Credcooper",
    cnpj: "19.449.602/0001-59",
    ispb: "19449602",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "247",
    label: "Cooperativa de Cr\xe9dito Crediagro Ltda. - Sicoob Crediagro",
    cnpj: "00.429.890/0001-51",
    ispb: "00429890",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "248",
    label: "Cooperativa de Cr\xe9dito Credialp Ltda - Sicoob Credialp",
    cnpj: "25.353.939/0001-60",
    ispb: "25353939",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "249",
    label: "Cooperativa de Cr\xe9dito Credibam Ltda. - Sicoob Credibam",
    cnpj: "66.259.110/0001-80",
    ispb: "66259110",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "250",
    label: "Cooperativa de Cr\xe9dito Credicampo LTda - Sicoob Credicampo",
    cnpj: "21.661.202/0001-54",
    ispb: "21661202",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "251",
    label: "Cooperativa de Cr\xe9dito Credicarpa Ltda",
    cnpj: "23.949.522/0001-30",
    ispb: "23949522",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "252",
    label: "Cooperativa de Cr\xe9dito Crediceripa - Sicoob Crediceripa",
    cnpj: "00.966.246/0001-12",
    ispb: "00966246",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "253",
    label: "Cooperativa de Cr\xe9dito Credicitrus - SICOOB CREDICITRUS",
    cnpj: "54.037.916/0001-45",
    ispb: "54037916",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "254",
    label: "Cooperativa de Cr\xe9dito Credicocapec",
    cnpj: "67.096.909/0001-66",
    ispb: "67096909",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "255",
    label: "Cooperativa de Cr\xe9dito Credifiemg Ltda. - SICOOB CREDIFIEMG",
    cnpj: "07.469.260/0001-50",
    ispb: "07469260",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "256",
    label: "Cooperativa de Cr\xe9dito Credigua\xe7u - Sicoob Credigua\xe7u",
    cnpj: "67.960.229.0001-49",
    ispb: "67960229",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "257",
    label:
      "Cooperativa de Cr\xe9dito Credijequitinhonha - Sicoob Credijequitinhonha",
    cnpj: "71.243.034/0001-55",
    ispb: "71243034",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "258",
    label: "Cooperativa de Cr\xe9dito Crediluz Ltda. - Sicoob Crediluz",
    cnpj: "25.536.764.0001-27",
    ispb: "25536764",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "259",
    label: "Cooperativa de Cr\xe9dito Credimota - Sicoob Credimota",
    cnpj: "66.788.142/0001-73",
    ispb: "66788142",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "260",
    label: "Cooperativa de Cr\xe9dito Credinor Ltda - Sicoob Credinor",
    cnpj: "02.254.376/0001-58",
    ispb: "02254376",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "261",
    label: "Cooperativa de Cr\xe9dito Credinosso Ltda",
    cnpj: "06.324.872/0001-91",
    ispb: "06324872",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "262",
    label: "Cooperativa de Cr\xe9dito Credinter Ltda. - Sicoob Credinter",
    cnpj: "24.048.910.0001-02",
    ispb: "24048910",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "263",
    label: "Cooperativa de Cr\xe9dito Credirochas  - Sicoob Credirochas",
    cnpj: "03.358.914/0001-17",
    ispb: "03358914",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "264",
    label: "Cooperativa de Cr\xe9dito Credisete Ltda. - Sicoob Credisete",
    cnpj: "22.753.982/0001-25",
    ispb: "22753982",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "265",
    label: "Cooperativa de Cr\xe9dito Credisudeste Ltda. - Sicoob Credisudeste",
    cnpj: "22.656.789/0001-76",
    ispb: "22656789",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "266",
    label: "Cooperativa de Cr\xe9dito Crediuna Ltda. - Sicoob Crediuna",
    cnpj: "64.237.530/0001-30",
    ispb: "64237530",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "267",
    label: "Cooperativa de Cr\xe9dito Credivar LTda - SICOOB CREDIVAR",
    cnpj: "25.798.596/0001-48",
    ispb: "25798596",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "268",
    label: "Cooperativa de Cr\xe9dito Credivertentes LTda",
    cnpj: "22.724.710/0001-05",
    ispb: "22724710",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "269",
    label: "Cooperativa de Cr\xe9dito da Amaz\xf4nia - Sicoob Amaz\xf4nia",
    cnpj: "05.203.605.0001-01",
    ispb: "05203605",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "270",
    label:
      "Cooperativa de Cr\xe9dito da Foz do Rio Itaja\xed A\xe7u - Credifoz",
    cnpj: "09.512.539/0001-02",
    ispb: "09512539",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "271",
    label:
      "Cooperativa de Cr\xe9dito da Fronteira Sul \u2013 Sicredi Fronteira Sul RS",
    cnpj: "88.530.142/0001-01",
    ispb: "88530142",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "272",
    label: "Cooperativa de Cr\xe9dito da Grande Florian\xf3polis - \xdanilos",
    cnpj: "02.405.189/0001-28",
    ispb: "02405189",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "273",
    label:
      "Cooperativa de Cr\xe9dito da Regi\xe3o Central de Minas Ltda - Sicoob Uni\xe3o Central.",
    cnpj: "22.749.014/0001-45",
    ispb: "22749014",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "274",
    label:
      "Cooperativa de Cr\xe9dito da Regi\xe3o Centro Norte do Cear\xe1 - Sicredi Cear\xe1 Centro Norte",
    cnpj: "72.257.793/0001-30",
    ispb: "72257793",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "275",
    label:
      "Cooperativa de Cr\xe9dito da Regi\xe3o de Fronteiras de RO/MT Ltda. - Sicoob Fronteiras",
    cnpj: "03.612.764/0001-26",
    ispb: "03612764",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "276",
    label: "Cooperativa de Cr\xe9dito da Regi\xe3o do Cariri - SICREDI CARIRI",
    cnpj: "86.913.993/0001-08",
    ispb: "86913993",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "277",
    label: "Cooperativa de Cr\xe9dito da Regi\xe3o do Contestado - Civia",
    cnpj: "10.218.474/0001-68",
    ispb: "10218474",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "278",
    label:
      "Cooperativa de Cr\xe9dito da Regi\xe3o do Sudoeste do Paran\xe1 - Evolua",
    cnpj: "10.311.218/0001-10",
    ispb: "10311218",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "279",
    label:
      "Cooperativa de Cr\xe9dito da Regi\xe3o Meridional do Brasil - Sicoob Unicoob Meridional",
    cnpj: "05.392.810/0001-54",
    ispb: "05392810",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "280",
    label: "Cooperativa de Cr\xe9dito da Serra Catarinense - Credicomin",
    cnpj: "09.590.601/0001-76",
    ispb: "09590601",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "281",
    label: "Cooperativa de Cr\xe9dito de Empres\xe1rios - Sicoob - Transcredi",
    cnpj: "04.247.370/0001-89",
    ispb: "04247370",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "282",
    label:
      "Cooperativa de Credito de Livre Adm de Associados do Sudoeste de MT",
    cnpj: "32.995.755/0001-60",
    ispb: "32995755",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "283",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o - Sicoob Copesita",
    cnpj: "19.875.244/0001-46",
    ispb: "19875244",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "284",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Centro Brasileira LTda. - SICOOB UNICENTRO BRASILEIRA",
    cnpj: "37.395.399.0001-67",
    ispb: "37395399",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "285",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Centro Oeste Goiano Ltda - Sicoob Emprecred",
    cnpj: "07.502.031.0001-90",
    ispb: "07502031",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "286",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Credfaz Ltda.  \u2013 Sicoob Credfaz",
    cnpj: "00.952.415/0001-65",
    ispb: "00952415",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "287",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Crediembrapa Ltda - Sicoob Crediembrapa",
    cnpj: "02.338.666/0001-80",
    ispb: "02338666",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "288",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Alta Paulista - SICOOB COCREALPA",
    cnpj: "59.869.560.0001-20",
    ispb: "59869560",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "289",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Grande Goi\xe2nia Ltda",
    cnpj: "10.209.619.0001-64",
    ispb: "10209619",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "290",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Para\xedba - Sicoob Para\xedba",
    cnpj: "11.907.520/0001-07",
    ispb: "11907520",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "291",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o Central de Rond\xf4nia - SICOOB OUROCREDI",
    cnpj: "02.144.899.0001-41",
    ispb: "02144899",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "292",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o de Arax\xe1 LTda - SICOOB CREDIARA",
    cnpj: "66.398.496/0001-01",
    ispb: "66398496",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "293",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admissao da Regiao de Divinopolis Ltda. - Sicoob Crediverde",
    cnpj: "25.528.753/0001-03",
    ispb: "25528753",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "294",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o de Par\xe1 de Minas Ltda",
    cnpj: "25.387.713/0001-80",
    ispb: "25387713",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "295",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o do Alto S\xe3o Francisco Ltda - Sicoob Crediprata",
    cnpj: "26.178.111/0001-86",
    ispb: "26178111",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "296",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o do Capar\xe3o LTda -  Sicoob Sa\xfade",
    cnpj: "71.261.184/0001-91",
    ispb: "71261184",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "297",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Zona da Mata de Minas LTda - Sicoob Credilivre",
    cnpj: "41.697.103/0001-30",
    ispb: "41697103",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "298",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o da Zona da Mata LTda. - SICOOB COOPEMATA",
    cnpj: "02.335.109.0001-05",
    ispb: "02335109",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "299",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o das Micro Regi\xf5es de Goiania e An\xe1polis Ltda - Sicoob CredSeguro",
    cnpj: "02.935.307/0001-00",
    ispb: "02935307",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "300",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o das Regi\xf5es Sudoeste, Sul e Oeste de Goi\xe1s - UNICRED SUdoESTE E SUL GOIANO",
    cnpj: "03.047.549.0001-20",
    ispb: "03047549",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "301",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de An\xe1polis e Regi\xe3o LTda. - SICOOB CREDICAPA",
    cnpj: "33.615.055.0001-65",
    ispb: "33615055",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "302",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Arax\xe1 Ltda. - SICOOB COOCREZ",
    cnpj: "71.378.426.0001-21",
    ispb: "71378426",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "303",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Arcos Ltda- Siccob Arcomcredi",
    cnpj: "71.230.338/0001-88",
    ispb: "71230338",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "304",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados - Sicoob Credicaru SC/RS",
    cnpj: "00.694.389.0001-12",
    ispb: "00694389",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "305",
    label:
      "Cooperativa de Cr\xe9dito de livre Admiss\xe3o de Associados Altos da Serra - SICREDI ALTOS da SERRA RS/SC",
    cnpj: "92.555.150/0001-80",
    ispb: "92555150",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "306",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Campos Novos - Sicoob Campos Novos",
    cnpj: "78.862.083.0001-15",
    ispb: "78862083",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "307",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Celeiro Centro Oeste - Sicredi Celeiro Centro Oeste",
    cnpj: "03.566.655/0001-10",
    ispb: "03566655",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "308",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de Associados de Guaramirim - CREVISC",
    cnpj: "10.143.743/0001-74",
    ispb: "10143743",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "309",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de Associados Vale do Chapecozinho - SICOOB VALCREDI SUL",
    cnpj: "02.090.126/0001-20",
    ispb: "02090126",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "310",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de Espumoso - Sicredi Espumoso RS/MG",
    cnpj: "87.900.411/0001-11",
    ispb: "87900411",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "311",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de Jaragu\xe1 do Sul e Regi\xe3o - SICOOB CEJASCRED",
    cnpj: "12.384.953.0001-80",
    ispb: "12384953",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "312",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de Manaus",
    cnpj: "01.566.038.0001-99",
    ispb: "01566038",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "313",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados de S\xe3o Miguel do Oeste - SICOOB S\xc3O MIGUEL SC",
    cnpj: "81.607.046.0001-75",
    ispb: "81607046",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "314",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Meio Oeste Catarinense - SICOOB CREDIMOC SC",
    cnpj: "80.959.638.0001-93",
    ispb: "80959638",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "315",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Planalto Catarinense. - SICOOB CREDIPLANALTO SC/RS",
    cnpj: "01.389.651.0001-88",
    ispb: "01389651",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "316",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Planalto Gaucho",
    cnpj: "88.038.260/0001-05",
    ispb: "88038260",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "317",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Planalto Serrano Sicoob Crediserra SC",
    cnpj: "01.692.448/0001-86",
    ispb: "01692448",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "318",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Sert\xe3o Baiano LTda. - SICOOB SERT\xc3O",
    cnpj: "02.057.584.0001-67",
    ispb: "02057584",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "319",
    label:
      "Cooperativa de Credito de Livre Admiss\xe3o de Associados do Sudeste Paraense",
    cnpj: "08.723.661/0001-57",
    ispb: "08723661",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "320",
    label:
      "Cooperativa de Credito de Livre Admissao de Associados do Sul de Mato Grosso",
    cnpj: "26.549.311/0001-06",
    ispb: "26549311",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "321",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Sul do Estado de Santa Catarina",
    cnpj: "03.793.242/0001-78",
    ispb: "03793242",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "322",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados do Vale do Canoinhas - SICOOB CREDICANOINHAS/SC",
    cnpj: "78.834.975.0001-02",
    ispb: "78834975",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "323",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Itaipu - SICOOB CREDITAIPU",
    cnpj: "81.014.060.0001-65",
    ispb: "81014060",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "324",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Itapiranga - Sicoob Creditapiranga SC/RS",
    cnpj: "78.483.310/0001-00",
    ispb: "78483310",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "325",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Unirond\xf4nia Ltda - Sicoob UNIPVH",
    cnpj: "01.664.968.0001-85",
    ispb: "01664968",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "326",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Urubuci - SICOOB CREDIARAUC\xc1RIA/SC",
    cnpj: "02.587.492.0001-99",
    ispb: "02587492",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "327",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Vale do Cerrado",
    cnpj: "32.983.165/0001-17",
    ispb: "32983165",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "328",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Associados Vale do Rio do Peixe Sicoob Credirio SC",
    cnpj: "78.865.995/0001-40",
    ispb: "78865995",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "329",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Boa Vista Ltda. - SICOOB UNIBV",
    cnpj: "02.137.018.0001-65",
    ispb: "02137018",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "330",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Bom despacho LTda - SICOOB CREDIBOM",
    cnpj: "21.670.187.0001-00",
    ispb: "21670187",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "331",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Campina Verde LTda. - SICOOB CREDICAMPINA",
    cnpj: "01.609.345.0001-00",
    ispb: "01609345",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "332",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Campos Gerais e Campo do Meio Ltda \u2013 Sicoob Credcam",
    cnpj: "71.146.450/0001-35",
    ispb: "71146450",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "333",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Carmo do Rio Claro Ltda",
    cnpj: "25.743.311/0001-71",
    ispb: "25743311",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "334",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Ceres e Rialma LTda. - SICOOB CREDICER",
    cnpj: "09.576.849.0001-82",
    ispb: "09576849",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "335",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Marechal C\xe2ndido Rondon e Regi\xe3o - SICOOB MARECHAL",
    cnpj: "07.097.064.0001-00",
    ispb: "07097064",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "336",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Monte Carmelo e Regi\xe3o LTda - SICOOB MONTECREDI",
    cnpj: "71.392.047.0001-96",
    ispb: "71392047",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "337",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Para de Minas LTda - SICOOB ASCICRED",
    cnpj: "01.009.908.0001-29",
    ispb: "01009908",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "338",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Pedro Leopoldo Ltda - Sicoob Credipel.",
    cnpj: "71.441.406/0001-58",
    ispb: "71441406",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "339",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Pernambuco -  Sicoob Pernambuco",
    cnpj: "03.732.359/0001-41",
    ispb: "03732359",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "340",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Pitangui, Papagaios, Maravilhas e Regi\xe3o Ltda - SICOOB CREDICOOP",
    cnpj: "41.931.221/0001-60",
    ispb: "41931221",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "341",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Pompeu Ltda - Sicoob Credip\xe9u",
    cnpj: "66.262.643/0001-11",
    ispb: "66262643",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "342",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Rio Branco LTda. - UNICRED RIO BRANCO",
    cnpj: "01.608.685.0001-16",
    ispb: "01608685",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "343",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Rubiataba e Regi\xe3o LTda. - SICOOB do VALE",
    cnpj: "73.422.792.0001-66",
    ispb: "73422792",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "344",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Sacramento Ltda. - SICOOB SACRAMENTO",
    cnpj: "71.154.256/0001-00",
    ispb: "71154256",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "345",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de Santo Ant\xf4nio do Monte LTda - Sicoob Credimonte",
    cnpj: "41.707.258/0001-00",
    ispb: "41707258",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "346",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o de S\xe3o Roque de Minas Ltda.",
    cnpj: "66.402.207/0001-09",
    ispb: "66402207",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "347",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Alto Vale do Itaja\xed - VIACREDI ALTO VALE",
    cnpj: "16.779.741/0001-52",
    ispb: "16779741",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "348",
    label:
      '"Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Centro Norte dos Estados de Mato Grosso e Mato Grosso do Sul',
  },
  {
    value: '- Sicoob Uni\xe3o MT/MS"',
    label: "03.326.437/0001-08",
    cnpj: "03326437",
    ispb: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "349",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Centro Norte Goiano - SICOOB UNICENTRO NORTE GOIANO",
    cnpj: "02.282.709.0001-52",
    ispb: "02282709",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "350",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Centro Sul de Mato Grosso do Sul  - Sicoob Centro Sul MS",
    cnpj: "10.319.386.0001-52",
    ispb: "10319386",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "351",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Cerrado Mato-grossense  - Sicoob Cerrado MT",
    cnpj: "05.247.312/0001-18",
    ispb: "05247312",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "352",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Estado do Par\xe1 - Sicoob Cooesa",
    cnpj: "83.836.114/0001-01",
    ispb: "83836114",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "353",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Estado do Rio de Janeiro - Sicoob Fluminense",
    cnpj: "02.931.668/0001-88",
    ispb: "02931668",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "354",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Leste e Nordeste Mineiros Ltda - SICOOB AC CREDI",
    cnpj: "01.559.914/0001-50",
    ispb: "01559914",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "355",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Norte de Mato Grosso - SICOOB NORTE",
    cnpj: "23.623.636/0001-95",
    ispb: "23623636",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "356",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Oeste Mineiro Ltda. - SICOOB CREDICOPA",
    cnpj: "71.297.899/0001-02",
    ispb: "71297899",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "357",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Pontal do Tri\xe2ngulo LTda - SICOOB CREDIPONTAL",
    cnpj: "26.178.533.0001-51",
    ispb: "26178533",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "358",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Sudoeste da Amaz\xf4nia LTda. - SICOOB CREDISUL",
    cnpj: "03.632.872.0001-60",
    ispb: "03632872",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "359",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Sul Catarinense - Acentra",
    cnpj: "03.427.097/0001-01",
    ispb: "03427097",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "360",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Tocantins Ltda.",
    cnpj: "26.960.328/0001-43",
    ispb: "26960328",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "361",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Tri\xe2ngulo Mineiro e Sudeste de Goi\xe1s LTda. - SICOOB ARACREDI",
    cnpj: "00.068.987/0001-86",
    ispb: "00068987",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "362",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Vale - SICOOB CREDIVALE/SC",
    cnpj: "86.829.827.0001-28",
    ispb: "86829827",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "363",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Vale do A\xe7o LTda - SICOOB VALE do A\xc7O",
    cnpj: "19.869.338.0001-02",
    ispb: "19869338",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "364",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Vale do Gorutuba LTda - SICOOB CREDIVAG",
    cnpj: "25.404.542.0001-50",
    ispb: "25404542",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "365",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o do Vale do Parana\xedba LTda. - SICOOB AGRORURAL",
    cnpj: "24.799.033.0001-01",
    ispb: "24799033",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "366",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o e dos Advogados Ltda. \u2013 Sicoob Credijur",
    cnpj: "02.480.577/0001-73",
    ispb: "02480577",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "367",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o e dos Transportadores Rodovi\xe1rios de Ve\xedculos - Sicoob Credceg",
    cnpj: "07.789.195/0001-40",
    ispb: "07789195",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "368",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Ltda - Unicred Alian\xe7a",
    cnpj: "70.937.271/0001-53",
    ispb: "70937271",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "369",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Ltda. - Sicoob Credijustra",
    cnpj: "37.079.720/0001-02",
    ispb: "37079720",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "370",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Paranapanema",
    cnpj: "79.086.997/0001-02",
    ispb: "79086997",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "371",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Sicoob Arenito",
    cnpj: "07.026.923/0001-61",
    ispb: "07026923",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "372",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Sicoob Crediacil",
    cnpj: "08.795.285/0001-06",
    ispb: "08795285",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "373",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Sicoob Uni\xe3o Sudeste",
    cnpj: "07.946.216/0001-93",
    ispb: "07946216",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "374",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Sul Maranhense - SICOOB SUL MARANHENSE",
    cnpj: "26.526.166/0001-30",
    ispb: "26526166",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "375",
    label:
      "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Uni\xe3o e Neg\xf3cios - SICOOB INTEGRA\xc7\xc3O",
    cnpj: "08.742.188.0001-55",
    ispb: "08742188",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "376",
    label: "Cooperativa de Cr\xe9dito de Livre Admiss\xe3o Vale do Mucuri Ltda",
    cnpj: "25.387.655/0001-95",
    ispb: "25387655",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "377",
    label:
      "Cooperativa de Cr\xe9dito de Livre Amiss\xe3o Centro Norte do Paran\xe1 - Sicoob Alian\xe7a",
    cnpj: "06.174.009/0001-03",
    ispb: "06174009",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "378",
    label: "Cooperativa de Cr\xe9dito de Salvador - SICREDI SALVAdoR",
    cnpj: "02.245.493/0001-55",
    ispb: "02245493",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "379",
    label: "Cooperativa de Cr\xe9dito de Vazante LTda - Sicoob Credivaz",
    cnpj: "00.803.287/0001-98",
    ispb: "00803287",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "380",
    label:
      "Cooperativa de Cr\xe9dito do Centro do Estado de Rond\xf4nia - Sicoob Centro",
    cnpj: "08.044.854/0001-81",
    ispb: "08044854",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "381",
    label:
      "Cooperativa de Cr\xe9dito do Centro Leste e Norte Maranhense - Sicoob Centro Leste e Norte Maranhense",
    cnpj: "09.403.026/0001-55",
    ispb: "09403026",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "382",
    label: "Cooperativa de Cr\xe9dito do Centro Sul Mineiro -Ltda",
    cnpj: "71.238.232/0001-20",
    ispb: "71238232",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "383",
    label:
      "Cooperativa de Cr\xe9dito do Distrito Federal e Entorno Ltda. - Sicoob Credibrasilia",
    cnpj: "01.187.961/0001-10",
    ispb: "01187961",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "384",
    label:
      "Cooperativa de Cr\xe9dito do Igua\xe7u Integrado - Sicoob Integrado",
    cnpj: "07.122.321.0001-08",
    ispb: "07122321",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "385",
    label:
      "Cooperativa de Cr\xe9dito do Noroeste de Minas - Sicoob Noroeste de Minas",
    cnpj: "86.564.051/0001-61",
    ispb: "86564051",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "386",
    label: "Cooperativa de Cr\xe9dito do Norte Catarinense - Acredicoop",
    cnpj: "03.461.243/0001-15",
    ispb: "03461243",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "387",
    label:
      "Cooperativa de Cr\xe9dito do Norte Catarinense e Sul Paranaense - Sicoob Credinorte",
    cnpj: "81.011.686/0001-18",
    ispb: "81011686",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "388",
    label:
      "Cooperativa de Cr\xe9dito do Oeste Mineiro e Regi\xe3o Metropolitana de Belo Horizonte Ltda - Sicoob Credioeste",
    cnpj: "25.420.696/0001-36",
    ispb: "25420696",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "389",
    label: "Cooperativa de Cr\xe9dito do Planalto Sul - Sicoob Crediserrana",
    cnpj: "03.033.469/0001-15",
    ispb: "03033469",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "390",
    label:
      "Cooperativa de Cr\xe9dito do Servidores da Universidade Federal do Esp\xedrito Santo",
    cnpj: "27.302.181/0001-67",
    ispb: "27302181",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "391",
    label:
      "Cooperativa de Cr\xe9dito do Sudoeste Baiano Ltda. - SICOOB CREDICONQUISTA",
    cnpj: "02.282.165.0001-29",
    ispb: "02282165",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "392",
    label:
      "Cooperativa de Cr\xe9dito do Vale do Itaja\xed e Litoral Catarinense- Sicredi Vale Litoral SC",
    cnpj: "10.348.181/0001-03",
    ispb: "10348181",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "393",
    label:
      "Cooperativa de Cr\xe9dito do Vale do S\xe3o Francisco - SICREDI VALE do S\xc3O FRANCISCO",
    cnpj: "04.237.413/0001-45",
    ispb: "04237413",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "394",
    label:
      "Cooperativa de Cr\xe9dito do Vale dos Pinhais - Sicoob Vale dos Pinhais",
    cnpj: "86.791.837.0001-11",
    ispb: "86791837",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "395",
    label: "Cooperativa de Cr\xe9dito do Vale Europeu - Sicoob Euro Vale",
    cnpj: "82.133.182/0001-33",
    ispb: "82133182",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "396",
    label:
      "Cooperativa de Cr\xe9dito dos Empregados da Companhia Industrial Cataguases e da Bauminas Ltda - Sicoob Coopecic",
    cnpj: "19.495.266/0001-80",
    ispb: "19495266",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "397",
    label:
      "Cooperativa de Cr\xe9dito dos Empres\xe1rios de Manaus - SICOOB CREdeMPRESAS AM",
    cnpj: "10.808.037.0001-02",
    ispb: "10808037",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "398",
    label:
      "Cooperativa de Cr\xe9dito dos Empres\xe1rios do Estado de Goi\xe1s Ltda. - SICOOB LOJICRED",
    cnpj: "04.406.371.0001-29",
    ispb: "04406371",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "399",
    label: "Cooperativa de Cr\xe9dito dos Funcionarios do Grupo PPG",
    cnpj: "03.657.230/0001-16",
    ispb: "03657230",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "400",
    label:
      "Cooperativa de Cr\xe9dito dos Integrantes do Minist\xe9rio P\xfablico e do Poder Judici\xe1rio nos Estados do Amap\xe1 e Cear\xe1 e Livre Admiss\xe3o no Estado do Par\xe1 - Sicoob Coimppa",
    cnpj: "84.156.470/0001-39",
    ispb: "84156470",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "401",
    label:
      "Cooperativa de Cr\xe9dito dos Integrantes do Poder Judici\xe1rio e do Minist\xe9rio P\xfablico do Estado de Minas Gerais Ltda - SICOOB JUS-MP",
    cnpj: "03.519.240/0001-95",
    ispb: "03519240",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "402",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos e demais Profissionais da Sa\xfade do Sul de Minas Ltda - Unicred Sul de Minas",
    cnpj: "71.418.784/0001-10",
    ispb: "71418784",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "403",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos e demais Profissionais da Sa\xfade, Contabilistas, Professores e Empres\xe1rios de Blumenau e Vale do Itaja\xed Ltda. - UNICRED BLUMENAU",
    cnpj: "73.443.863/0001-07",
    ispb: "73443863",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "404",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos e demais Profissionais de N\xedvel Superior da \xc1rea de Sa\xfade de Salvador e Regi\xe3o Metropolitana Ltda",
    cnpj: "07.440.317/0001-98",
    ispb: "07440317",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "405",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos e demais Profissionais de Vit\xf3ria da Conquista - Unicred Sudoeste da Bahia",
    cnpj: "02.833.202/0001-40",
    ispb: "02833202",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "406",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos e Profissionais de Sa\xfade de S\xe3o Lu\xeds - Sicredi S\xe3o Lu\xeds",
    cnpj: "08.143.326/0001-80",
    ispb: "08143326",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "407",
    label:
      "Cooperativa de Credito dos Medicos, Profissionais da Saude e Empresarios de Mato Grosso - UNICRED MATO GROSSO",
    cnpj: "36.900.256/0001-00",
    ispb: "36900256",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "408",
    label:
      "Cooperativa de Cr\xe9dito dos M\xe9dicos, Servidores P\xfablicos e Empres\xe1rios do Nordeste Ltda. - Unicred do Nordeste",
    cnpj: "02.602.922/0001-02",
    ispb: "02602922",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "409",
    label:
      "Cooperativa de Cr\xe9dito dos Membros de Institui\xe7\xf5es P\xfablicas das Carreiras Jur\xeddicas e dos Servidores P\xfablicos Federais, Estaduais e Municipais em S\xe3o Lu\xeds / MA e Munic\xedpios Circunvizin - SICREDI COOMAMP",
    cnpj: "05.545.390/0001-07",
    ispb: "05545390",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "410",
    label:
      "Cooperativa de Cr\xe9dito dos Militares e da Seguran\xe7a P\xfablica no Distrito Federal Ltda - Sicoob DFMil",
    cnpj: "04.649.337/0001-85",
    ispb: "04649337",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "411",
    label:
      "Cooperativa de Cr\xe9dito dos Profissionais de Sa\xfade do Tri\xe2ngulo Mineiro e Sul de Minas LTda. - Unicred Tri\xe2ngulo Mineiro e Sul de Minas",
    cnpj: "71.432.926/0001-02",
    ispb: "71432926",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "412",
    label:
      "Cooperativa de Cr\xe9dito dos Servidores da Uni\xe3o, Empres\xe1rios, Profissionais Aut\xf4nomos e Liberais - Sicoob Centro Nordeste",
    cnpj: "03.102.185/0001-33",
    ispb: "03102185",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "413",
    label:
      "Cooperativa de Cr\xe9dito dos Servidores dos Poderes Legislativos do Estado de Minas Gerais e do seu \xd3rg\xe3o Auxiliar Ltda. - SICOOB COFAL",
    cnpj: "21.797.311/0001-01",
    ispb: "21797311",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "414",
    label:
      "Cooperativa de Cr\xe9dito dos Servidores P\xfablicos no Estado da Bahia Ltda. Sicoob Cred Executivo",
    cnpj: "04.321.309/0001-34",
    ispb: "04321309",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "415",
    label:
      "Cooperativa de Cr\xe9dito e Investimento Bandeirantes - Sicredi Bandeirantes SP",
    cnpj: "04.853.988/0001-92",
    ispb: "04853988",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "416",
    label:
      '"Cooperativa de Cr\xe9dito e Investimento de Livre Admiss\xe3o Vanguarda da Regi\xe3o das Cataratas do Igua\xe7u e',
  },
  {
    value: 'Vale do Para\xedba \u2013 Sicredi Vanguarda PR/SP"',
    label: "78.414.067/0001-60",
    cnpj: "78414067",
    ispb: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "417",
    label:
      "Cooperativa de Cr\xe9dito e Investimentos de Livre Admiss\xe3o Agroempresarial - Sicredi Agroempresarial PR",
    cnpj: "79.457.883/0001-13",
    ispb: "79457883",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "418",
    label:
      "Cooperativa de Cr\xe9dito e Investimentos de Rond\xf4nia  - Sicoob Credjurd",
    cnpj: "04.751.713/0001-48",
    ispb: "04751713",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "419",
    label: "Cooperativa de Cr\xe9dito e Investimentos do Acre - Sicoob Acre",
    cnpj: "03.528.402/0001-51",
    ispb: "03528402",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "420",
    label:
      "Cooperativa de Cr\xe9dito Integra\xe7\xe3o Rota das Terras - Sicredi Integra\xe7\xe3o Rota das Terras RS/MG",
    cnpj: "87.510.475/0001-06",
    ispb: "87510475",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "421",
    label:
      "Cooperativa de Cr\xe9dito Leste Capixaba \u2013 Sicoob Leste Capixaba",
    cnpj: "32.430.233/0001-10",
    ispb: "32430233",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "422",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo de Servidores P\xfablicos do Estado de S\xe3o Paulo - Credifisco",
    cnpj: "04.546.162/0001-80",
    ispb: "04546162",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "423",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos despachantes de Tr\xe2nsito de Santa Catarina e Rio Grande do Sul - SICOOB CREDITRAN",
    cnpj: "04.715.685.0001-03",
    ispb: "04715685",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "424",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Empregados da Embraer \u2014 COOPEREMB",
    cnpj: "46.642.294/0001-56",
    ispb: "46642294",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "425",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Empregados da Pilkington Brasil",
    cnpj: "02.104.058/0001-00",
    ispb: "02104058",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "426",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Empregados do Magazine Lu\xedza, Empresas Controladas e Coligadas - Coopluiza",
    cnpj: "02.093.154/0001-09",
    ispb: "02093154",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "427",
    label:
      "COOPERATIVA de CR\xc9DITO M\xdaTUO doS ESCRIV\xc3ES, NOT\xc1RIOS E REGISTRAdoRES NO ESTAdo do PARAN\xc1 - SICREDI CREdeNOREG PR.",
    cnpj: "06.078.926/0001-86",
    ispb: "06078926",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "428",
    label: "Cooperativa de Cr\xe9dito M\xfatuo dos Funcionarios da Riclan",
    cnpj: "06.077.760/0001-83",
    ispb: "06077760",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "429",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Integrantes da Justi\xe7a do Trabalho da 13\xaa Regi\xe3o LTda. - Credjust",
    cnpj: "04.608.925/0001-70",
    ispb: "04608925",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "430",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Policiais Federais e Servidores da Uni\xe3o no Cear\xe1 e Livre Admiss\xe3o nas Mesorregi\xf5es Metropolitana de Fortaleza e Sul Cearense  - Sicoob Cear\xe1",
    cnpj: "03.620.772/0001-14",
    ispb: "03620772",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "431",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Profissionais da Sa\xfade e Livre Admiss\xe3o de Te\xf3filo Otoni Ltda. - Unicred Tr\xeas Vales",
    cnpj: "01.709.266/0001-70",
    ispb: "01709266",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "432",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Servidores Federais na Para\xedba - Sicoob Coopercret",
    cnpj: "02.275.781/0001-52",
    ispb: "02275781",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "433",
    label:
      "Cooperativa de Cr\xe9dito M\xfatuo dos Servidores Municipais de S\xe3o Jo\xe3o Da Boa Vista - CREDIVISTA",
    cnpj: "74.248.949/0001-41",
    ispb: "74248949",
    area: "Consignado, Cr\xe9dito Pessoal e Troca de Modalidade",
  },
  {
    value: "434",
    label: "Cooperativa de Credito Mutuo Serra Mar LTda - UNICRED SERRA MAR",
    cnpj: "86.803.939/0001-00",
    ispb: "86803939",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "435",
    label: "Cooperativa de Cr\xe9dito M\xfatuo- Sicoob Crediasisc",
    cnpj: "07.669.921/0001-90",
    ispb: "07669921",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "436",
    label:
      "Cooperativa de Cr\xe9dito Norte do Esp\xedrito Santo \u2013 Sicoob Norte",
    cnpj: "31.815.293/0001-99",
    ispb: "31815293",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "437",
    label:
      "Cooperativa de Cr\xe9dito Norte Sul da Bahia Ltda - Sicoob Norte Sul",
    cnpj: "02.876.918/0001-24",
    ispb: "02876918",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "438",
    label:
      "Cooperativa de Cr\xe9dito Nossa Senhora do desterro - Sicoob Credisc",
    cnpj: "03.419.786/0001-74",
    ispb: "03419786",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "439",
    label: "Cooperativa de Cr\xe9dito Original - Sicoob Original",
    cnpj: "81.292.278/0001-81",
    ispb: "81292278",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "440",
    label:
      "Cooperativa de Cr\xe9dito Poupan\xe7a e Investimento da Zona Sul - Sicredi Zona Sul RS",
    cnpj: "90.497.256/0001-49",
    ispb: "90497256",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "441",
    label:
      "Cooperativa de Cr\xe9dito Poupan\xe7a e Investimento dos Advogados do Estado do Rio Grande do Sul - Sicredi Cooabcred RS",
    cnpj: "19.962.468/0001-95",
    ispb: "19962468",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "442",
    label:
      "Cooperativa de Cr\xe9dito Rural dos Produtores de Leite do Vale do Rio Grande LTda - SICOOB CREDILEITE",
    cnpj: "86.585.049.0001-79",
    ispb: "86585049",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "443",
    label: "Cooperativa de Cr\xe9dito Sicoob Coopemar Ltda",
    cnpj: "04.174.720/0001-24",
    ispb: "04174720",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "444",
    label: "Cooperativa de Cr\xe9dito Sicoob Coopmil",
    cnpj: "62.673.470/0001-73",
    ispb: "62673470",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "445",
    label: "Cooperativa de Cr\xe9dito Sicoob Costa do Descobrimento Ltda.",
    cnpj: "01.205.736/0001-69",
    ispb: "01205736",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "446",
    label: "Cooperativa de Cr\xe9dito Sicoob Cred-Acif",
    cnpj: "04.013.172/0001-50",
    ispb: "04013172",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "447",
    label: "Cooperativa de Cr\xe9dito Sicoob Credcoop Ltda. Sicoob Credcoop",
    cnpj: "02.528.151/0001-42",
    ispb: "02528151",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "448",
    label: "Cooperativa de Cr\xe9dito Sicoob Credmetal - Sicoob Credmetal",
    cnpj: "03.535.065/0001-20",
    ispb: "03535065",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "449",
    label:
      "Cooperativa de Cr\xe9dito Sicoob Engecred Ltda - Sicoob Engecred-GO",
    cnpj: "04.388.688/0001-80",
    ispb: "04388688",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "450",
    label: "Cooperativa de Cr\xe9dito Sicoob Ip\xea - Sicoob Ip\xea",
    cnpj: "24.610.065/0001-17",
    ispb: "24610065",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "451",
    label: "Cooperativa de Cr\xe9dito Sicoob Itapagipe Ltda",
    cnpj: "71.506.513/0001-17",
    ispb: "71506513",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "452",
    label: "Cooperativa de Cr\xe9dito Sicoob Transamaz\xf4nica",
    cnpj: "24.431.221/0001-82",
    ispb: "24431221",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "453",
    label: "Cooperativa de Cr\xe9dito Sicoob Unidas",
    cnpj: "01.042.487/0001-38",
    ispb: "01042487",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "454",
    label:
      "Cooperativa de Cr\xe9dito Sicredi Alto Sert\xe3o Paraibano - Sicredi Alto Sert\xe3o Paraibano",
    cnpj: "09.343.038/0001-31",
    ispb: "09343038",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "455",
    label: "Cooperativa de Cr\xe9dito Sicredi Aracaju - Sicredi Aracaju",
    cnpj: "02.923.389/0001-72",
    ispb: "02923389",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "456",
    label:
      "Cooperativa de Cr\xe9dito Sicredi Centro Pernambucana - Sicredi Centro Pernambucana",
    cnpj: "41.255.225/0001-76",
    ispb: "41255225",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "457",
    label: "Cooperativa de Cr\xe9dito Sicredi Credsuper",
    cnpj: "04.138.455/0001-29",
    ispb: "04138455",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "458",
    label: "Cooperativa de Cr\xe9dito Sicredi Pernambucred",
    cnpj: "04.146.333/0001-84",
    ispb: "04146333",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "459",
    label: "Cooperativa de Cr\xe9dito Sicredi Recife - Sicredi Recife",
    cnpj: "70.241.658/0001-70",
    ispb: "70241658",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "460",
    label:
      "Cooperativa de Cr\xe9dito Sicredi Regi\xe3o Sul da Bahia -SICREDI REGI\xc3O SUL da BAHIA",
    cnpj: "97.489.280/0001-85",
    ispb: "97489280",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "461",
    label:
      "Cooperativa de Cr\xe9dito Sicredi Serrana RS/ES - Sicredi Serrana RS",
    cnpj: "90.608.712/0001-80",
    ispb: "90608712",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "462",
    label: "Cooperativa de Cr\xe9dito Sul - Sicoob Sul",
    cnpj: "05.888.589/0001-20",
    ispb: "05888589",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "463",
    label:
      "Cooperativa de Cr\xe9dito Sul\u2010Litor\xe2nea do Esp\xedrito Santo \u2013 Sicoob Sul\u2010Litor\xe2neo",
    cnpj: "32.474.884/0001-02",
    ispb: "32474884",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "464",
    label:
      "Cooperativa de Cr\xe9dito Sul-Serrana do Esp\xedrito Santo  -  Sicoob Sul - Serrano",
    cnpj: "00.815.319/0001-75",
    ispb: "00815319",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "465",
    label:
      "Cooperativa de Cr\xe9dito Uni\xe3o do Centro Oestes de Minas LTda - Sicoob Centro Uni\xe3o",
    cnpj: "65.239.402/0001-99",
    ispb: "65239402",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "466",
    label:
      "Cooperativa de Cr\xe9dito Unicoob Ouro Branco -Sicoob Unicoob Ouro Branco",
    cnpj: "05.772.229/0001-68",
    ispb: "05772229",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "467",
    label:
      "Cooperativa de Cr\xe9dito Unicred Centro Sul  Ltda - Unicred Centro Sul",
    cnpj: "00.075.847.0001-35",
    ispb: "00075847",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "468",
    label: "Cooperativa de Cr\xe9dito Unicred Coomarca Ltda. \u2013 COOMARCA",
    cnpj: "04.355.489/0001-75",
    ispb: "04355489",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "469",
    label:
      "Cooperativa de Cr\xe9dito Unicred desbravadora Ltda. - Unicred desbravadora",
    cnpj: "01.039.011/0001-48",
    ispb: "01039011",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "470",
    label:
      "Cooperativa de Cr\xe9dito Unicred Evolu\xe7\xe3o Ltda. - Unicred Evolu\xe7\xe3o",
    cnpj: "01.727.929/0001-80",
    ispb: "01727929",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "471",
    label:
      "Cooperativa de Cr\xe9dito Unicred Regi\xe3o dos Vales Ltda. - Unicred Regi\xe3o dos Vales",
    cnpj: "01.796.302/0001-80",
    ispb: "01796302",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "472",
    label:
      "Cooperativa de Cr\xe9dito Unicred Uni\xe3o Ltda. - Unicred Uni\xe3o",
    cnpj: "74.114.042.0001-90",
    ispb: "74114042",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "473",
    label:
      "Cooperativa de Cr\xe9dito Unicred Valor Capital Ltda - Unicred Valor Capital",
    cnpj: "74.064.502/0001-12",
    ispb: "74064502",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "474",
    label: "Cooperativa de Cr\xe9dito Vale do Itaja\xed - VIACREDI",
    cnpj: "82.639.451/0001-38",
    ispb: "82639451",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "475",
    label:
      "Cooperativa de Cr\xe9dito, Investimento e Servi\xe7os Financeiros Sicoob Uni Sudeste",
    cnpj: "86.389.236/0001-87",
    ispb: "86389236",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "476",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento -  Sicredi Evolu\xe7\xe3o",
    cnpj: "35.571.249/0001-31",
    ispb: "35571249",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "477",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Alian\xe7a - Sicredi Alian\xe7a PR/SP",
    cnpj: "79.052.122/0001-81",
    ispb: "79052122",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "478",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Alto Rio Grande MG Sicredi Credigrande MG.",
    cnpj: "25.626.490/0001-67",
    ispb: "25626490",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "479",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Alto Uruguai  - Sicredi Alto Uruguai RS/SC/MG",
    cnpj: "87.733.770/0001-21",
    ispb: "87733770",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "480",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Botucara\xed - Sicredi Botucara\xed RS/MG",
    cnpj: "87.900.601/0001-39",
    ispb: "87900601",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "481",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Campos Gerais - Sicredi Campos Gerais PR/SP",
    cnpj: "81.466.286/0001-05",
    ispb: "81466286",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "482",
    label: "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Celeiro",
    cnpj: "88.099.247/0001-58",
    ispb: "88099247",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "483",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Centro Serra - Sicredi Centro Serra RS",
    cnpj: "87.067.757/0001-80",
    ispb: "87067757",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "484",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Centro Sul - Sicredi Centro Sul PR/SC/RJ",
    cnpj: "78.907.607/0001-47",
    ispb: "78907607",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "485",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento da Alta Noroeste de S\xe3o Paulo - Sicredi Alta Noroeste SP",
    cnpj: "04.484.490/0001-08",
    ispb: "04484490",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "486",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento da Regi\xe3o Centro Oeste Paulista - Sicredi Centro Oeste Paulista",
    cnpj: "04.463.602/0001-36",
    ispb: "04463602",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "487",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento da Regi\xe3o da Produ\xe7\xe3o - Sicredi Regi\xe3o da Produ\xe7\xe3o RS/SC/MG",
    cnpj: "89.468.565/0001-01",
    ispb: "89468565",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "488",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento da Regi\xe3o das Flores, das \xc1guas e dos Ventos SP",
    cnpj: "57.647.653/0001-84",
    ispb: "57647653",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "489",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento da Regi\xe3o dos Vales  - Sicredi Regi\xe3o dos Vales RS",
    cnpj: "89.126.130/0001-89",
    ispb: "89126130",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "490",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento das Regi\xf5es Centro do RS e MG - Sicredi Regi\xe3o Centro RS/MG",
    cnpj: "95.594.941/0001-07",
    ispb: "95594941",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "491",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento de Araraquara e Regi\xe3o  - Sicredi Centro Norte SP",
    cnpj: "73.113.243/0001-00",
    ispb: "73113243",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "492",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento de Associados do Noroeste de Mato Grosso e Acre - Sicredi Noroeste MT e Acre",
    cnpj: "33.022.690/0001-39",
    ispb: "33022690",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "493",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento de Campo Grande e Regi\xe3o - Sicredi Campo Grande MS",
    cnpj: "03.042.597/0001-25",
    ispb: "03042597",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "494",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento de Ibiraiaras - Sicredi Ibiraiaras RS/MG",
    cnpj: "89.990.501/0001-76",
    ispb: "89990501",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "495",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento de Lajeado - Sicredi Integra\xe7\xe3o RS/MG.",
    cnpj: "91.159.764/0001-80",
    ispb: "91159764",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "496",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Araguaia e Xingu - Sicredi Araxingu",
    cnpj: "33.021.064/0001-28",
    ispb: "33021064",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "497",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Centro Sul do Mato Grosso do Sul - Sicredi Centro-Sul MS",
    cnpj: "26.408.161/0001-02",
    ispb: "26408161",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "498",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Cerrado de Goi\xe1s - Sicredi Cerrado GO",
    cnpj: "06.332.931/0001-73",
    ispb: "06332931",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "499",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Estado do Piau\xed - Sicredi Piau\xed",
    cnpj: "03.128.973/0001-07",
    ispb: "03128973",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "500",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Noroeste do Estado de S\xe3o Paulo - Sicredi Noroeste SP",
    cnpj: "03.065.046/0001-87",
    ispb: "03065046",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "501",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Norte do Paran\xe1 e Sul de S\xe3o Paulo - Sicredi Norte Sul PR/SP",
    cnpj: "79.063.574/0001-69",
    ispb: "79063574",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "502",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Norte e Nordeste de Santa Catarina - Sicredi Norte SC",
    cnpj: "02.843.443/0001-70",
    ispb: "02843443",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "503",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Norte Mato-Grossense - Sicredi Norte MT/PA",
    cnpj: "37.442.605/0001-42",
    ispb: "37442605",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "504",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Planalto Central",
    cnpj: "10.736.214/0001-84",
    ispb: "10736214",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "505",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Rio de Janeiro - Sicredi Rio RJ",
    cnpj: "72.128.440/0001-30",
    ispb: "72128440",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "506",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento do Vale do Rio Pardo - Sicredi Vale do Rio Pardo RS",
    cnpj: "95.424.891/0001-10",
    ispb: "95424891",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "507",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento dos Integrantes da Magistratura e do Minist\xe9rio P\xfablico no Estado do Paran\xe1 - Sicredi Credjuris.",
    cnpj: "04.886.317/0001-28",
    ispb: "04886317",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "508",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento dos Ju\xedzes do Estado do Rio Grande do Sul - Sicredi Ajuris",
    cnpj: "03.750.034/0001-91",
    ispb: "03750034",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "509",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento dos M\xe9dicos e demais Profissionais da Sa\xfade e Livre Admiss\xe3o Minas - Esp\xedrito Santo Ltda. - Unicred Minas",
    cnpj: "01.110.032/0001-02",
    ispb: "01110032",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "510",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento dos Professores e Funcion\xe1rios da Universidade de Caxias do Sul - SICREDI COOPERUCS",
    cnpj: "04.525.997/0001-54",
    ispb: "04525997",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "511",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento dos Profissionais M\xe9dicos e da Sa\xfade de Curitiba e Regi\xe3o Metropolitana - Sicredi Medicred PR",
    cnpj: "02.924.977/0001-20",
    ispb: "02924977",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "512",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Empreendedores - Sicredi Empreendedores PR",
    cnpj: "07.070.495/0001-74",
    ispb: "07070495",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "513",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Encosta Superior do Nordeste RS  - Sicredi Nordeste",
    cnpj: "95.213.211/0001-19",
    ispb: "95213211",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "514",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Ess\xeancia RS/ES - Sicredi Ess\xeancia",
    cnpj: "87.733.077/0001-59",
    ispb: "87733077",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "515",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Fronteiras do Paran\xe1, Santa Catarina e S\xe3o Paulo - Sicredi Fronteiras PR/SC/SP",
    cnpj: "82.527.557/0001-40",
    ispb: "82527557",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "516",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Grandes Lagos do Paran\xe1 e Litoral Paulista -Sicredi Grandes Lagos PR/SP",
    cnpj: "81.115.149/0001-18",
    ispb: "81115149",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "517",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Igua\xe7u - Sicredi Igua\xe7u PR/SC/SP",
    cnpj: "84.974.278/0001-50",
    ispb: "84974278",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "518",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Integra\xe7\xe3o - Sicredi Integra\xe7\xe3o PR/SC",
    cnpj: "81.054.686/0001-03",
    ispb: "81054686",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "519",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Noroeste RS - Sicredi Noroeste RS",
    cnpj: "89.049.738/0001-57",
    ispb: "89049738",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "520",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Nossa Terra - Sicredi Nossa Terra PR/SP",
    cnpj: "81.192.106/0001-36",
    ispb: "81192106",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "521",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Novos Horizontes - Sicredi Novos Horizontes PR/SP",
    cnpj: "07.206.072/0001-39",
    ispb: "07206072",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "522",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Ouro Branco - Sicredi Ouro Branco RS",
    cnpj: "87.853.206/0001-42",
    ispb: "87853206",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "523",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Ouro Verde do Mato Grosso - SICREDI OURO VERde MT",
    cnpj: "26.529.420/0001-53",
    ispb: "26529420",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "524",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Pantanal do MS - Sicredi Pantanal MS",
    cnpj: "26.408.187/0001-50",
    ispb: "26408187",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "525",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Parque das Arauc\xe1rias - Sicredi Parque das Arauc\xe1rias PR/SC/SP",
    cnpj: "82.065.285/0001-03",
    ispb: "82065285",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "526",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Progresso - Sicredi Progresso PR/SP",
    cnpj: "76.059.997/0001-17",
    ispb: "76059997",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "527",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Regi\xe3o das Culturas - Sicredi das Culturas RS",
    cnpj: "90.729.369/0001-22",
    ispb: "90729369",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "528",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Rio Paran\xe1 - Sicredi Rio Paran\xe1 PR/SP",
    cnpj: "81.206.039/0001-61",
    ispb: "81206039",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "529",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Serro Azul - Sicredi Uni\xe3o RS.",
    cnpj: "88.894.548/0001-73",
    ispb: "88894548",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "530",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Sicredi Pioneira RS - Sicredi Pioneira RS",
    cnpj: "91.586.982/0001-09",
    ispb: "91586982",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "531",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Sorriso - Sicredi Celeiro do MT/RR",
    cnpj: "26.555.235/0001-33",
    ispb: "26555235",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "532",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Sul Riograndense - Sicredi Uni\xe3o Metropolitana RS",
    cnpj: "92.796.564/0001-09",
    ispb: "92796564",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "533",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Terra dos Pinheirais do Paran\xe1 e Noroeste Paulista - Sicredi Planalto das \xc1guas PR/SP.",
    cnpj: "77.984.870/0001-77",
    ispb: "77984870",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "534",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Uni\xe3o de Estados Rio Grande do Sul, Santa Catarina e Minas Gerais - Sicredi Uniestados",
    cnpj: "87.780.268/0001-71",
    ispb: "87780268",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "535",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Uni\xe3o dos Estados de Mato Grosso do Sul, Tocantins e Oeste da Bahia - Sicredi Uni\xe3o MS/TO",
    cnpj: "24.654.881/0001-22",
    ispb: "24654881",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "536",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Uni\xe3o Paran\xe1/S\xe3o Paulo - Sicredi Uni\xe3o PR/ SP",
    cnpj: "79.342.069/0001-53",
    ispb: "79342069",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "537",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Univales - Sicredi Univales MT/RO",
    cnpj: "70.431.630.0001-04",
    ispb: "70431630",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "538",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Vale do Jaguari e Zona da Mata - Sicredi Vale do Jaguari e Zona da Mata RS/MG",
    cnpj: "87.780.284/0001-64",
    ispb: "87780284",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "539",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Vale do Piquiri Abcd - Sicredi Vale do Piquiri Abcd PR/SP",
    cnpj: "81.099.491/0001-71",
    ispb: "81099491",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "540",
    label:
      "Cooperativa de Cr\xe9dito, Poupan\xe7a e Investimento Valor Sustent\xe1vel - Sicredi Valor Sustent\xe1vel PR/SP",
    cnpj: "81.706.616/0001-84",
    ispb: "81706616",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "541",
    label:
      "Cooperativa de Economia  e Cr\xe9dito M\xfatuo dos Colaboradores da Sg Industria E Comercio de Materiais de Construcao, Vidros e Afins",
    cnpj: "61.039.038/0001-62",
    ispb: "61039038",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "542",
    label:
      "Cooperativa de Economia  e Cr\xe9dito M\xfatuo dos Funcionarios da Owens Corning Fiberglas America do Sul",
    cnpj: "48.172.860/0001-39",
    ispb: "48172860",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "543",
    label:
      "Cooperativa de Economia Cr\xe9dito M\xfatuo \u2013 Sicoob Credsa\xfade",
    cnpj: "02.072.790/0001-46",
    ispb: "02072790",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "544",
    label:
      "Cooperativa de Economia e  Cr\xe9dito M\xfatuo dos Funcionarios da Cargill",
    cnpj: "68.228.006/0001-54",
    ispb: "68228006",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "545",
    label:
      "Cooperativa de Economia e  Cr\xe9dito M\xfatuo dos Funcionarios das Empresas de Ceramica",
    cnpj: "02.541.707/0001-30",
    ispb: "02541707",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "546",
    label:
      "Cooperativa de Economia e  Cr\xe9dito M\xfatuo dos Servidores da Unesp",
    cnpj: "69.136.075/0001-09",
    ispb: "69136075",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "547",
    label:
      "Cooperativa de Economia e Cr\xe9dito de Livre Admiss\xe3o dos Empregados dos Correios Ltda. - Sicoob Coopercorreios",
    cnpj: "03.862.898/0001-03",
    ispb: "03862898",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "548",
    label:
      "Cooperativa de Economia e Cr\xe9dito dos Empres\xe1rios, Profissionais do Mercado Imobili\xe1rio e da CMI/Secovi - Sicoob Secovicred MG",
    cnpj: "14.913.919/0001-80",
    ispb: "14913919",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "549",
    label:
      "Cooperativa de Economia e Cr\xe9dito dos Servidores Militares, Pol\xedcia Civil e da Secretaria da Educa\xe7\xe3o do Estado de Minas Gerais - Sicoob Coopemg",
    cnpj: "03.269.540/0001-63",
    ispb: "03269540",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "550",
    label: "Cooperativa de Economia e Cr\xe9dito M\xfatuo - Cooperserv",
    cnpj: "05.667.301/0001-97",
    ispb: "05667301",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "551",
    label:
      "Cooperativa de Economia e Cr\xe9dito Mutuo - SICOOB COOPERCREDI - SP",
    cnpj: "00.915.950/0001-46",
    ispb: "00915950",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "552",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Companhia Brasileira de Alum\xednio",
    cnpj: "54.335.401/0001-21",
    ispb: "54335401",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "553",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Empresa Supermercados Jau Serve - COOPERJS",
    cnpj: "03.400.651/0001-67",
    ispb: "03400651",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "554",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Johnson & Johnson",
    cnpj: "45.691.128/0001-87",
    ispb: "45691128",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "555",
    label:
      '"Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Merck Sharp & Dohme Farmac\xeautica \u2013',
  },
  {
    value: 'COOPERMSD"',
    label: "02.814.832/0001-77",
    cnpj: "02814832",
    ispb: "Consignado e Troca de Modalidade",
  },
  {
    value: "556",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da PROdaM/SP - CREDIPROdaM",
    cnpj: "67.031.757/0001-13",
    ispb: "67031757",
    area: "Consignado, Pessoal,Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "557",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Reckitt Benckiser",
    cnpj: "44.223.196/0001-59",
    ispb: "44223196",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "558",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados da Saint-Gobain do Brasil Produtos Industriais e para Constru\xe7\xe3o divis\xe3o vidro plano",
    cnpj: "48.140.925/0001-64",
    ispb: "48140925",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "559",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados das Centrais El\xe9tricas de Santa Catarina - CREdeLESC",
    cnpj: "08.850.613/0001-20",
    ispb: "08850613",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "560",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados das Empresas do Grupo Econ\xf4mico Rhodia - SICOOB CREDIRHODIA",
    cnpj: "57.563.728.0001.49",
    ispb: "57563728",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "561",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados das Empresas Metal\xfargicas de Mat\xe3o - METALCOOPERCRED",
    cnpj: "53.505.681.0001-06",
    ispb: "53505681",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "562",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados do Grupo Femsa Brasil - Cooperfemsa",
    cnpj: "43.488.782/0001-62",
    ispb: "43488782",
    area: "Consignado",
  },
  {
    value: "563",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados do Grupo Schaeffler",
    cnpj: "62.284.385/0001-13",
    ispb: "62284385",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "564",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empregados do Grupo Telef\xf4nica",
    cnpj: "57.598.120/0001-50",
    ispb: "57598120",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "565",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empres\xe1rios de Americana, Limeira e Regi\xe3o - SICOOB ACICRED",
    cnpj: "09.579.249.0001-78",
    ispb: "09579249",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "566",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empres\xe1rios de Sorocaba e Regi\xe3o - Sicoob Cooperaso",
    cnpj: "10.175.348/0001-73",
    ispb: "10175348",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "567",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Empres\xe1rios de Transportes dos Estados de Santa Catarina e Rio Grande do Sul - Transpocred",
    cnpj: "08.075.352/0001-18",
    ispb: "08075352",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "568",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Bombril",
    cnpj: "57.038.408/0001-70",
    ispb: "57038408",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "569",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Ceplac LTda - COOPEC",
    cnpj: "32.615.247/0001-09",
    ispb: "32615247",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "570",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Comigo - SICOOB CREDI COMIGO",
    cnpj: "01.062.439.0001-01",
    ispb: "01062439",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "571",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Elgin - ELGIN",
    cnpj: "45.045.671.0001-07",
    ispb: "45045671",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "572",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Ericsson - COOPERICSSON",
    cnpj: "48.718.183/0001-01",
    ispb: "48718183",
    area: "Consignado, Financiamento de Ve\xedculos e Troca de Modalidade.",
  },
  {
    value: "573",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios da Faculdade de Ci\xeancias Agr\xe1rias e Veterin\xe1rias Campus Jaboticabal/SP",
    cnpj: "57.259.525/0001-63",
    ispb: "57259525",
    area: "Consignado, Cr\xe9dito Pessoal e Troca de Modalidade",
  },
  {
    value: "574",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcionarios da International Industria Automotiva da America do Sul",
    cnpj: "59.620.708/0001-98",
    ispb: "59620708",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "575",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcionarios da Usina Santa Maria - Piloncred",
    cnpj: "01.107.759/0001-30",
    ispb: "01107759",
    area: "Consignado, Troca de Modalidade.",
  },
  {
    value: "576",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcionarios das Empresas Melhoramentos de Sao Paulo- Coopermel",
    cnpj: "01.504.952/0001-05",
    ispb: "01504952",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "577",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcion\xe1rios de Institui\xe7\xf5es Financeiras P\xfablicas Federais Ltda Cooperforte",
    cnpj: "01.658.426/0001-08",
    ispb: "01658426",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Cheque Especial e Troca de Modalidade",
  },
  {
    value: "578",
    label:
      "Cooperativa de Economia e Cr\xe9dito Mutuo dos Funcionarios do Grupo Owens-Illinois do Brasil",
    cnpj: "43.182.278/0001-30",
    ispb: "43182278",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "579",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Funcionarios Publicos Municipais de Itapira - Credita",
    cnpj: "02.115.870/0001-31",
    ispb: "02115870",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "580",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Integrantes da Brigada Militar Rs",
    cnpj: "03.212.823/0001-79",
    ispb: "03212823",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "581",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Integrantes do Minist\xe9rio P\xfablico do Rio Grande do Sul - SICREDI MP",
    cnpj: "03.662.047/0001-09",
    ispb: "03662047",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "582",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Integrantes do Minist\xe9rio P\xfablico e da defensoria P\xfablica no Estado do Rio de Janeiro Limitada - Sicoob Coomperj",
    cnpj: "04.694.278/0001-67",
    ispb: "04694278",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "583",
    label:
      '"Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Magistrados, Membros e Servidores do Poder Judici\xe1rio, do Minist\xe9rio P\xfablico, da defensoria P\xfablica, da Procuradoria Geral do',
  },
  {
    value:
      "Estado, da Procuradoria Geral do Munic\xedpio, da Pol\xedcia Judici\xe1ria e Oficiais Registradores no Estado do Cear\xe1",
  },
  {
    value: '\u2013 Sicredi Cooperjuris"',
    label: "08.041.950/0001-76",
    cnpj: "08041950",
    ispb: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "584",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos M\xe9dicos dos Vales do Taquari e Rio Pardo e Regi\xe3o da Produ\xe7\xe3o Ltda. - Unicred Premium",
    cnpj: "01.635.462/0001-48",
    ispb: "01635462",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "585",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos M\xe9dicos e Categorias Afins Unicred Niteroi LTda - Unicred Niter\xf3i",
    cnpj: "01.090.027/0001-85",
    ispb: "01090027",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "586",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos M\xe9dicos e demais Profissionais da Sa\xfade, Engenharia, Arquitetura, Contabilidade, Administra\xe7\xe3o, Economia e Empres\xe1rios de Erechim Ltda",
    cnpj: "01.572.667/0001-21",
    ispb: "01572667",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "587",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos M\xe9dicos e demais Profissionais de N\xedvel Superior da Sa\xfade de Sete Lagoas LTda - Unicred Sete Lagoas",
    cnpj: "71.163.315/0001-06",
    ispb: "71163315",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "588",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Militares Estaduais de Santa Catarina - CREDPOM",
    cnpj: "04.572.960/0001-87",
    ispb: "04572960",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "589",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Policiais Federais do Rio Grande do Sul - Sicredi Pol RS",
    cnpj: "03.000.142/0001-47",
    ispb: "03000142",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "590",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Profissionais da Sa\xfade da Regi\xe3o da Alta Mogiana  - SICOOB CREDIMOGIANA",
    cnpj: "69.346.856/0001-10",
    ispb: "69346856",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "591",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Profissionais do Crea dos Estados de Santa Catarina e Paran\xe1 - CREDCREA",
    cnpj: "05.979.692/0001-85",
    ispb: "05979692",
    area: "Consignado, Imobili\xe1rio, Pessoal e Ve\xedculos",
  },
  {
    value: "592",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores da Federacao do Comercio, Sesc e Senac de Sao Paulo",
    cnpj: "62.928.320/0001-63",
    ispb: "62928320",
    area: "Consignado, Pessoal, Troca de Modalidade.",
  },
  {
    value: "593",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores da Funda\xe7\xe3o Hospitalar e Empregados dos Estabelecimentos Hospitalares de Belo Horizonte, Regi\xe3o Metropolitana e Zona da Mata LTda - CECREF",
    cnpj: "19.402.130/0001-89",
    ispb: "19402130",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "594",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores das Institui\xe7\xf5es P\xfablicas de Ensino Superior do Estado da Para\xedba e das demais Institui\xe7\xf5es e \xd3rg\xe3os P\xfablicos no Estado da Para\xedba Ltda.  - Sicredi Creduni",
    cnpj: "03.428.338/0001-37",
    ispb: "03428338",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "595",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores do Poder Executivo Federal em Brasilia - Sicoob Executivo",
    cnpj: "00.694.877/0001-20",
    ispb: "00694877",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "596",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores do Poder Judici\xe1rio, Minist\xe9rio P\xfablico, Ensino Superior e dos Advogados P\xfablicos, defensores P\xfablicos e delegados da Pol\xedcia Federal no Distrito Federal - Sicoob Judici\xe1rio",
    cnpj: "37.076.205/0001-60",
    ispb: "37076205",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "597",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores do Poder Legislativo Federal e do DF",
    cnpj: "03.329.154/0001-10",
    ispb: "03329154",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "598",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores Municipais de Itabira LTda. - SICOOB COSEMI",
    cnpj: "16.651.002.0001-80",
    ispb: "16651002",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "599",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores Municipais de Po\xe7os de Caldas Ltda",
    cnpj: "41.791.005/0001-67",
    ispb: "41791005",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "600",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo dos Servidores P\xfablicos no Estado do Esp\xedrito Santo - Sicoob Servidores",
    cnpj: "01.330.295/0001-27",
    ispb: "01330295",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "601",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo Ltda  - Unicred Costa do Sol RJ",
    cnpj: "39.231.527/0001-62",
    ispb: "39231527",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "602",
    label:
      "Cooperativa de Economia e Cr\xe9dito M\xfatuo nos Estados de Alagoas, Sergipe e Bahia  - Sicoob Leste",
    cnpj: "02.493.000/0001-04",
    ispb: "02493000",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "603",
    label: "Cooperativa de Economia e Cr\xe9dito M\xfatuo Sicoob Cred-Acilpa",
    cnpj: "09.004.796/0001-25",
    ispb: "09004796",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "604",
    label: "Cooperativa de Economia e Cr\xe9dito M\xfatuo Sicoob Metalcred",
    cnpj: "04.833.655/0001-00",
    ispb: "04833655",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "605",
    label:
      "Cooperativa de Econonomia e Cr\xe9dito M\xfatuo dos M\xe9dicos de Porto Alegre LTda - Unicred Porto Alegre",
    cnpj: "94.433.109/0001-66",
    ispb: "94433109",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "606",
    label:
      "Cooperativa de Poupan\xe7a e Cr\xe9dito de Livre Admiss\xe3o do Vale do Rio doce LTda - SICOOB CREDIRIOdoCE",
    cnpj: "25.606.237/0001-41",
    ispb: "25606237",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "607",
    label:
      "Cooperativa de Poupan\xe7a e Cr\xe9dito Ouro Verde -  Sicoob Ouro Verde",
    cnpj: "05.582.619.0001-75",
    ispb: "05582619",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "608",
    label:
      "Cooperativa Sicoob Unimais Metropolitana - Cooperativa de Cr\xe9dito de Livre Admiss\xe3o - Unimais Metropolitana",
    cnpj: "00.259.231/0001-14",
    ispb: "00259231",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "609",
    label:
      "Cooperativade Cr\xe9dito de Livre Admiss\xe3o da Regi\xe3o de Tiros e Matutina LTda - Sicoob Creditiros",
    cnpj: "42.880.617/0001-99",
    ispb: "42880617",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "610",
    label: "CPCLA da Regi\xe3o de Maring\xe1 - Sicoob metropolitano",
    cnpj: "03.459.850/0001-40",
    ispb: "03459850",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "611",
    label:
      "CPCM dos Empres\xe1rios e Profissionais Liberais do Oeste Paulista - Sicoob Paulista",
    cnpj: "10.262.276/0001-00",
    ispb: "10262276",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "612",
    label:
      "CRCLA do Sudoeste Mineiro e Nordeste Paulista - Sicoob Nosso Credito",
    cnpj: "22.760.839/0001-60",
    ispb: "22760839",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "613",
    label: "Crediare S/A CFI",
    cnpj: "05.676.026/0001-78",
    ispb: "05676026",
    area: "Consignado, Pessoal, Ve\xedculos, Outros Cr\xe9ditos e Troca de Modalidade",
  },
  {
    value: "614",
    label: "Crefisa S.A Cr\xe9dito, Financiamento e Investimentos",
    cnpj: "60.779.196/0001-96",
    ispb: "60779196",
    area: "Consignado, Pessoal",
  },
  {
    value: "615",
    label:
      "Emcash Servi\xe7os Financeiros Sociedade de Empr\xe9stimo Entre Pessoas S.A",
    cnpj: "34.139.916/0001-49",
    ispb: "34139916",
    area: "Consignado, Pessoal, Ve\xedculos, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "617",
    label: "FC Financeira S/A - Cr\xe9dito, Financiamento e Investimento",
    cnpj: "36.583.700/0001-01",
    ispb: "36583700",
    area: "Consignado, Pessoal e Troca de Modalidade",
  },
  {
    value: "618",
    label: "Financeira Alfa S.A - Credito, Financiamento e Investimento",
    cnpj: "17.167.412/0001-13",
    ispb: "17167412",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "619",
    label:
      "GazinCred S.A. Sociedade de Cr\xe9dito, Financiamento e Investimento",
    cnpj: "11.760.553/0001-69",
    ispb: "11760553",
    area: "Consignado, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "620",
    label:
      "Independ\xeancia Cooperativa de Cr\xe9dito e Investimento - Independ\xeancia Cooperativa de Cr\xe9dito",
    cnpj: "04.306.351/0001-86",
    ispb: "04306351",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "621",
    label: "Kredilig S/A Cr\xe9dito Financiamento e Investimento",
    cnpj: "06.040.559/0001-21",
    ispb: "06040559",
    area: "Consignado, Pessoal, Cheque Especial e Troca de Modalidade",
  },
  {
    value: "622",
    label: "Lecca Credito Financiamento e Investimento S.A",
    cnpj: "07.652.226/0001-16",
    ispb: "07652226",
    area: "Consignado e Pessoal",
  },
  {
    value: "623",
    label: "Mercantil do Brasil Financeira S.A",
    cnpj: "33.040.601/0001-87",
    ispb: "33040601",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "624",
    label: "Midway S/A Cr\xe9dito, Financiamento e Investimento",
    cnpj: "09.464.032/0001-12",
    ispb: "09464032",
    area: "Pessoal",
  },
  {
    value: "625",
    label:
      "Nossa Terra Cooperativa de Cr\xe9dito dos Empregados das Empresas de Agroneg\xf3cios e Afins",
    cnpj: "49.204.605/0001-93",
    ispb: "49204605",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "626",
    label: "Novo Banco Continental S.A - Banco M\xfaltiplo",
    cnpj: "74.828.799/0001-45",
    ispb: "74828799",
    area: "Consignado",
  },
  {
    value: "627",
    label:
      "NU Financeira S.A - Sociedade de Cr\xe9dito, Financiamento e Investimento S.A",
    cnpj: "30.680.829/0001-43",
    ispb: "30680829",
    area: "Pessoal",
  },
  {
    value: "628",
    label: "OMNI Banco S.A",
    cnpj: "60.850.229/0001-47",
    ispb: "60850229",
    area: "Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "629",
    label: "OMNI S.A. Cr\xe9dito Financiamento e  Investimento - OMNI S.A.",
    cnpj: "92.228.410/0001-02",
    ispb: "92228410",
    area: "Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "630",
    label: "Parana Banco S.A",
    cnpj: "14.388.334/0001-99",
    ispb: "14388334",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Troca de Modalidade",
  },
  {
    value: "631",
    label: "Parati Cr\xe9dito Financiamento e Investimento S/A",
    cnpj: "03.311.443/0001-91",
    ispb: "03311443",
    area: "Consignado e Pessoal",
  },
  {
    value: "632",
    label:
      "Pefisa S.A. - Cr\xe9dito, Financiamento e Investimento - Pefisa S.A",
    cnpj: "43.180.355/0001-12",
    ispb: "43180355",
    area: "Pessoal e Outros Cr\xe9ditos",
  },
  {
    value: "633",
    label: "Pintos S/A Cr\xe9dito, Financiamento e Investimento",
    cnpj: "35.274.306/0001-10",
    ispb: "35274306",
    area: "Consignado e Troca de Modalidade",
  },
  {
    value: "634",
    label: "Portocred S.A Credito, Financiamento e Investimento",
    cnpj: "01.800.019/0001-85",
    ispb: "01800019",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "635",
    label: "Portoseg S.A - Cr\xe9dito, Financiamento e Investimento",
    cnpj: "04.862.600/0001-10",
    ispb: "04862600",
    area: "Consignado, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "636",
    label: "QI Sociedade de Cr\xe9dito Direto S.A",
    cnpj: "32.402.502/0001-35",
    ispb: "32402502",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "637",
    label: "Realize Credito, Financiamento e Investimento S.A",
    cnpj: "27.351.731/0001-38",
    ispb: "27351731",
    area: "Pessoal e Outros Cr\xe9ditos",
  },
  {
    value: "638",
    label: "Santinvest S.A Cr\xe9dito, Financiamento e Investimento",
    cnpj: "00.122.327/0001-36",
    ispb: "00122327",
    area: "Consignado",
  },
  {
    value: "639",
    label: "Sax S/A Cr\xe9dito, Financiamento e Investimento",
    cnpj: "07.747.410/0001-40",
    ispb: "07747410",
    area: "Pessoal",
  },
  {
    value: "640",
    label: "Sicoob Cocred Cooperativa de Credito",
    cnpj: "71.328.769/0001-81",
    ispb: "71328769",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "641",
    label:
      "Sicoob Unimais Mantiqueira Cooperativa de Cr\xe9dito de Libre Admiss\xe3o",
    cnpj: "71.698.674/0001-50",
    ispb: "71698674",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "642",
    label:
      "Sicredi Expans\xe3o - Cooperativa de Cr\xe9dito - Sicredi Expans\xe3o",
    cnpj: "41.180.092/0001-16",
    ispb: "41180092",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "643",
    label: "Sicredi Norte - Cooperativa de Cr\xe9dito",
    cnpj: "83.315.408/0001-80",
    ispb: "83315408",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "644",
    label: "Sociedade Cooperativa de Cr\xe9dito Coopere Ltda. - Sicoob Coopere",
    cnpj: "73.398.646.0001-42",
    ispb: "73398646",
    area: "Consignado, Imobi\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "645",
    label: "Socinal S/A Cr\xe9dito, Financiamento e Investimento",
    cnpj: "03.881.423/0001-56",
    ispb: "03881423",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "646",
    label: "Sorocred - Cr\xe9dito, Financiamento e Investimento S.A",
    cnpj: "04.814.563.0001-74",
    ispb: "04814563",
    area: "Consignado, Pessoal e Ve\xedculos",
  },
  {
    value: "647",
    label:
      "Unicred Regional Norte Lagos - Cooperativa de Economia e Cr\xe9dito M\xfatuo Regional Norte Lagos LTda - Unicred Regional Norte Lagos",
    cnpj: "04.445.917/0001-50",
    ispb: "04445917",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos, Outros Cr\xe9ditos, Cheque Especial, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "648",
    label:
      "Uniprime Central - Central Interestadual de Cooperativas de Cr\xe9dito LTda - Uniprime Central",
    cnpj: "03.046.391/0001-73",
    ispb: "03046391",
    area: "Consignado, Imobili\xe1rio, Pessoal, Ve\xedculos e Outros Cr\xe9ditos",
  },
  {
    value: "649",
    label: "Uniprime do Brasil - Cooperativa de Cr\xe9dito Ltda.",
    cnpj: "02.398.976/0001-90",
    ispb: "02398976",
    area: "Consignado, Imobili\xe1rio Pessoal e Ve\xedculos",
  },
  {
    value: "650",
    label: "UP.P Sociedade de Emprestimos Entre Pessoas - S.A",
    cnpj: "35.977.097/0001-71",
    ispb: "35977097",
    area: "Pessoal, Veiculos e Outros Cr\xe9ditoss",
  },
  {
    value: "651",
    label:
      "Via Certa Financiadora S.A. - Cr\xe9dito, Financiamento e Investimentos",
    cnpj: "05.192.316/0001-46",
    ispb: "05192316",
    area: "Consignado e Pessoal",
  },
  {
    value: "652",
    label: "Zema Cr\xe9dito, Financiamento e Investimento S/A",
    cnpj: "05.351.887/0001-86",
    ispb: "05351887",
    area: "Consignado, Pessoal, Veiculos, Outros Cr\xe9ditos, Troca de Modalidade e Capital de Giro",
  },
  {
    value: "653",
    codigo: "752",
    label: "Banco BNP Paribas Brasil S/A",
    cnpj: "01.522.368/0001-82",
    ispb: "01522368",
    area: "Consignado, Pessoal, Veiculos, Outros Cr\xe9ditos, Troca de Modalidade e Capital de Giro",
  },
];
