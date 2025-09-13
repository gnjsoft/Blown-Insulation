const projects = [
    {
        company: "Elmatics Engineers Pvt. Ltd.",
        po: "EEPL/BPCL/BISPL/28/2017-18",
        description: " Fire proofing system ON Cable Duct & Tratys and Fittings for Bharat Petroleum Corporation Limited ",
        client: "Bharat Petroleum Corporation Limited  Refinery, Mahul, Trombay, Mumbai, Maharashtra 400074",
    },
    {
        company: "Lloyd Insulations India Limited",
        po: "14/CE/RK/JI/(5917)",
        description: "Hot Insulation work  of DHDS  Unit for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
    },
    {
        company: "Murugappa Morgan Thermal Ceramics Ltd.",
        po: [
            "17001073/OS DATE 26.02.18",
            "118000154/OS DATE 24.05.18",
            "EEPL/BPCL/BISPL/28/2017-18"
        ],
        description: [
            "Fire proofing system ON Cable Duct & Tratys and Fittings for Oil and Natural Gas Corporation Limited.",
            "Hot Insulation work at Pipe Line for Megha Engineering and Infrastructures Ltd, solar thermal power plant",
            "Fire proofing system ON Cable Duct & Tratys and Fittings for Oil and Natural Gas Corporation Limited."
        ],
        client: [
            "1. Oil and Natural Gas Corporation Limited Ongc Odalarevu Onshore Terminal, Allavaram Mandal Near Amalapuram East Godavari, Andhra Pradesh, 533210",
            "2. Megha Engineering and Infrastructures Ltd, solar thermal power plant Tabjula 2, Nagalapuram district- Anantapur, Andhra Pradesh- 515871",
            "3. Malkapuram, Visakhapatnam, Andhra Pradesh, 530011"
        ],
    },
    {
        company: " Blue Star Ltd.",
        po: "3000443710 DATE 05.10.2018",
        description: "Hot Insulation work at  Pipe Line for Tata Steel Limited ",
        client: "Tata Steel Limited P.O. Bistupur Jamshedpur, Jharkhand, India- 831 001",
    },
    {
        company: "Sandip Nanavati",
        po: "SN/MTA/86/18-19",
        description: "Fire proofing system ON Cable & Duct Tratys and Fittings for Indian Oil Corporation Limited Gujarat Refinery",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
    },
    {
        company: "Onshore Construction Company Pvt Ltd",
        po: "OCCPL/18-19/WO-411",
        description: "Hot Insulation work for Indian Oil Corporation Limited Gujarat Refinery",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
    },
    {
        company: "Isgec Heavy Engineering LTD",
        po: [
            "P 81003508/JEI81",
            "P 81003853/ J31829",
            "P 81003852/JE1847",
            "P81005678",
            "9810001513-Date:09/06/2025",
        ],
        description: [
            " Hot Insulation work at CFBC Boiler for Welspun india limited",
            " Hot Insulation work at CFBC Boiler for GHCL Limited, Sutrapada",
            " Hot Insulation work at CFBC Boiler for DCM Shriram Nagar, Kota",
            " Hot Insulation work at CFBC Boiler for Sirpur Paper Mills,Hyderabad",
            " Hot Insulation work  at  CFBC Boiler for Indian Oil Corporation Limited P. O. Panipat Refinery ",
        ],

        client: [
            "1. Welspun india limited, Plant II. Welspun City,Village Versamedi, Tal. Anjar, District Kutch, Gujarat 370 110",
            "2. GHCL Limited, Sutrapada, Gir Somnath, Gujarat, 362275",
            "3. DCM Shriram Nagar, Kota, Rajasthan-324004",
            "4. Sirpur Paper Mills Limited 5-9-22/1/1, 1st Floor, Ashoka Chambers, Adarsh Nagar, Hyderabad, Telangana, 500063",
            "5. Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
        ],
    },
    {
        company: "L&T Power Limited",
        po: [
            " EPC/EM1/21000-95257/JBS",
            " EPC/E15/2100114545/SCP",
        ],
        description: [
            " Hot Insulation work at  2*660MW Boiler for NTPC LTD",
            " Hot Insulation work at  2*660MW Boiler for Rajasthan Rajya Vidyut Utpadan Nigam Limited",
        ],
        client: [
            "1. NTPC LTD,2*660MW Khargon,SuperThermal Project Selda village,Sonawad,Berwa,KhargoneMadhy Pradesh-451113",
            "2. Rajasthan Rajya Vidyut Utpadan Nigam Limited, 2 x 660 MW Chhabra Thermal Power Project,  Motipura Chouki,Distt- Baran, Rajasthan, 325220.",
        ],
    },
    {
        company: "Miraj Instrumentation Services (i) Pvt Ltd",
        po: "MISPL/BORL/383/18-19 ",
        description: "Fire proofing system ON Cable & Duct Tratys and Fittings for Bharat Oman Refinery Ltd Residential Complex",
        client: "Bharat Oman Refinery Ltd Residential Complex, Bina, District Sagar, Madhya Pradesh, India, PIN 470124",
    },
    {
        company: "Offshore Infrastructures Ltd",
        po: [
            " OIL/WO/3174/19-20/0015",
            " OIL/WO/3175/19-20/0015",
        ],
        description: [
            "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited",
            "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited Gujarat Refinery",
        ],
        client: [
            "1. Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
            "2. Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
        ],
    },
    {
        company: "Technip India Ltd",
        po: "C100008214 ",
        description: "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",

    },
    {
        company: "Thyssenkrupp Industries India Pvt Ltd.",
        po: [
            " 7000036554",
            " 7000037905",
            " 7000040411",
            " 7000041476",
        ],
        description: [
            " Hot Insulation work at CFBC Boiler for Deepak Phenolics ltd",
            " Hot Insulation work at CFBC Boiler for Aditya Birla Indian Rayon Compound, Veraval, Gujarat",
            " Hot Insulation work at CFBC Boiler for RCCPL Private Limited Post Mukutban, Taluka – Zari Jamani",
            " Hot Insulation work at CFBC Boiler for Tata Chemicals Limited Mithapur, Okhamandal, Dwarka",
        ],
        client: [
            "1. Deepak Phenolics ltd 12/B/1, GIDC Dahej Industries Estate Gujarat India - 392130",
            "2. Aditya Birla Indian Rayon Compound, Veraval, Gujarat 362 266",
            "3. RCCPL Private Limited Post Mukutban, Taluka – Zari Jamani, Dist.Yavatmal. Maharashtra. PIN-445 319",
            "4. Tata Chemicals Limited Mithapur, Okhamandal, Dwarka Dist.- 361345, Gujarat",
        ],

    },
    {
        company: "DCM Shriram Alkali & Chemicals Ltd",
        po: "SCA/B10/4260000750 ",
        description: "Hot Insulation work at CFBC Boiler for GIDC Industrial Estate",
        client: "749, GIDC Industrial Estate, Jhagadia, Dist. Bharuch, Gujarat - 393110",

    },
    {
        company: "Adani Ports and Special Economic Zone Limited",
        po: [
            "5702015177",
            "5702015454"
        ],
        description: [
            "Scaffolding Erection for Tal-Mundra",
            "Hot Insulation work at Tank for Tal-Mundra",
        ]
        ,
        client: [
            "1. Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",
            "2. Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",
        ]
    },
    {
        company: "Thermax Instrumentation Limited",
        po: "3000007050 ",
        description: "Manpower Supply for GNAL Limited",
        client: "GNAL Limited Plot No. DII/9, GIDC Dahej, PCPIR, Near GNFC-TDI Plant, Village: Rahiad, Taluka: Vagra, Dist.: Bharuch, Gujarat-392 130",

    },
    {
        company: "Adani LPG Terminal Pvt. Ltd.",
        po: "4802040122",
        description: "Hot Insulation Work at pipe line for Tal-Mundra",
        client: "Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",

    },
    {
        company: "Adani International Container Terminal Pvt. Ltd",
        po: "5702017126",
        description: "Scaffolding Erection for Tal-Mundra",
        client: "Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",

    },
    {
        company: "Kamlesh kumar singh Engneer Pvt. Ltd",
        po: "KKSEPL/PANIPAT/UIPL-P-25-EPCM-03/2024-25/0253",
        description: "Hot & Cold Insulation Work for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",

    },
    {
        company: "Aegis Logistics Limited",
        po: "5800012901",
        description: "Cold Insulation Work for Ucchaiya Amreli Gujarat",
        client: "Plot XZ Port of Pipavav, via Rajula, Ucchaiya Amreli Gujarat,India-365560",

    },

];

export default projects;