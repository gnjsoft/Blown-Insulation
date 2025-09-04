const projects = [
    {
        company: "Elmatics Engineers Pvt. Ltd.",
        description: "Fire proofing system ON Cable Duct & Tratys and Fittings for Bharat Petroleum Corporation Limited ",
        client: "Bharat Petroleum Corporation Limited  Refinery, Mahul, Trombay, Mumbai, Maharashtra 400074",
        actual: "Jan-18",
        year: "2017-2018"
    },
    {
        company: "Lloyd Insulations India Limited",
        description: " Hot Insulation work  of DHDS  Unit for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
        actual: "Aug-18",
        year: "2017-2018"
    },
    {
        company: "Murugappa Morgan Thermal Ceramics Ltd.",
        description: [
            "1. Fire proofing system ON Cable Duct & Tratys and Fittings for Oil and Natural Gas Corporation Limited.",
            "2. Hot Insulation work at Pipe Line for Megha Engineering and Infrastructures Ltd, solar thermal power plant",
            "3. Fire proofing system ON Cable Duct & Tratys and Fittings for Oil and Natural Gas Corporation Limited."
        ],
        client: [
            "1. Oil and Natural Gas Corporation Limited Ongc Odalarevu Onshore Terminal, Allavaram Mandal Near Amalapuram East Godavari, Andhra Pradesh, 533210",
            "2. Megha Engineering and Infrastructures Ltd, solar thermal power plant Tabjula 2, Nagalapuram district- Anantapur, Andhra Pradesh- 515871",
            "3. Malkapuram, Visakhapatnam, Andhra Pradesh, 530011"
        ],
        actual: [
            "1. Feb-18",
            "2. May-18",
            // "Feb-18" // Uncomment if needed
        ],
        year: [
            "1. 2017-2018",
            "2. 2017-2018",
            // "2017-2018" // Uncomment if needed
        ]
    },
    {
        company: " Blue star ltd.",
        description: "Hot Insulation work at  Pipe Line for Tata Steel Limited ",
        client: "Tata Steel Limited P.O. Bistupur Jamshedpur, Jharkhand, India- 831 001",
        actual: "May-18",
        year: "2017-2018"
    },
    {
        company: "Sandip Nanavati",
        description: "Fire proofing system ON Cable & Duct Tratys and Fittings for Indian Oil Corporation Limited Gujarat Refinery",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
        actual: "Nov-18",
        year: "2018-2019"
    },
    {
        company: "Onshore Construction Company Pvt Ltd",
        description: "Hot Insulation work for Indian Oil Corporation Limited Gujarat Refinery",
        client: "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
        actual: "Jan-19",
        year: "2019-2020"
    },
    {
        company: "Isgec Heavy Engineering LTD",
        description: [
            "1. Hot Insulation work at CFBC Boiler for Welspun india limited",
            "2. Hot Insulation work at CFBC Boiler for GHCL Limited, Sutrapada",
            "3. Hot Insulation work at CFBC Boiler for DCM Shriram Nagar, Kota",
            "4. Hot Insulation work at CFBC Boiler for Sirpur Paper Mills,Hyderabad",
            "5. Hot Insulation work  at  CFBC Boiler for Indian Oil Corporation Limited P. O. Panipat Refinery ",
        ],

        client: [
            "1. Welspun india limited, Plant II. Welspun City,Village Versamedi, Tal. Anjar, District Kutch, Gujarat 370 110",
            "2. GHCL Limited, Sutrapada, Gir Somnath, Gujarat, 362275",
            "3. DCM Shriram Nagar, Kota, Rajasthan-324004",
            "4. Sirpur Paper Mills Limited 5-9-22/1/1, 1st Floor, Ashoka Chambers, Adarsh Nagar, Hyderabad, Telangana, 500063",
            "5. Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
        ],
        actual: [
            "1. Feb-19",
            "2. Apr-19",
        ],
        year: [
            "1. 2019-2020",
            "2. 2019-2020",
        ],
    },
    {
        company: "L&T Power limited",
        description: [
            "1. Hot Insulation work at  2*660MW Boiler for NTPC LTD",
            "2. Hot Insulation work at  2*660MW Boiler for Rajasthan Rajya Vidyut Utpadan Nigam Limited",
        ],
        client: [
            "1. NTPC LTD,2*660MW Khargon,SuperThermal Project Selda village,Sonawad,Berwa,KhargoneMadhy Pradesh-451113",
            "2. Rajasthan Rajya Vidyut Utpadan Nigam Limited, 2 x 660 MW Chhabra Thermal Power Project,  Motipura Chouki,Distt- Baran, Rajasthan, 325220.",

        ],
        actual:
            ["Nov-19",],
        year:
            ["2019-2020",],
    },
    {
        company: "Miraj Instrumentation services (i) pvt ltd",
        description: "Fire proofing system ON Cable & Duct Tratys and Fittings for Bharat Oman Refinery Ltd Residential Complex",
        client: "Bharat Oman Refinery Ltd Residential Complex, Bina, District Sagar, Madhya Pradesh, India, PIN 470124",
        actual: "Nov-19",
        year: "2019-2020"
    },
    {
        company: "Offshore Infrastructures Ltd",
        description: [
            "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited",
            "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited Gujarat Refinery",
        ],
        client: [
            "Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
            "Indian Oil Corporation Limited Gujarat Refinery, Koyali , Jawahar Nagar, Vadodara -391320",
        ],
        actual: "",
        year: "2019-2020"
    },
    {
        company: "Technip India Ltd",
        description: "Fire proofing system ON Cable Duct &Tratys and Fittings for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
        actual: "",
        year: ""
    },
    {
        company: "Thyssenkrupp Industries India Pvt Ltd.",
        description: [
            "1. Hot Insulation work at CFBC Boiler for Deepak Phenolics ltd",
            "2. Hot Insulation work at CFBC Boiler for Aditya Birla Indian Rayon Compound, Veraval, Gujarat",
            "3. Hot Insulation work  at  CFBC Boiler for RCCPL Private Limited Post Mukutban, Taluka – Zari Jamani",
            "4. Hot Insulation work  at  CFBC Boiler for Tata Chemicals Limited Mithapur, Okhamandal, Dwarka",
        ],
        client: [
            "1. Deepak Phenolics ltd 12/B/1, GIDC Dahej Industries Estate Gujarat India - 392130",
            "2. Aditya Birla Indian Rayon Compound, Veraval, Gujarat 362 266",
            "3. RCCPL Private Limited Post Mukutban, Taluka – Zari Jamani, Dist.Yavatmal. Maharashtra. PIN-445 319",
            "4. Tata Chemicals Limited Mithapur, Okhamandal, Dwarka Dist.- 361345, Gujarat",
        ],
        actual: "",
        year: ""
    },
    {
        company: "DCM Shriram Alkali & Chemicals Ltd",
        description: "Hot Insulation work at CFBC Boiler for GIDC Industrial Estate",
        client: "749, GIDC Industrial Estate, Jhagadia, Dist. Bharuch, Gujarat - 393110",
        actual: "",
        year: ""
    },
    {
        company: "Adani Ports and Special Economic Zone Limited",
        description: "Scaffolding Erection for Tal-Mundra",
        client: "Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",
        actual: "",
        year: ""
    },
    {
        company: "Thermax Instrumentation Limited",
        description: "Manpower Supply for GNAL Limited",
        client: "GNAL Limited Plot No. DII/9, GIDC Dahej, PCPIR, Near GNFC-TDI Plant, Village: Rahiad, Taluka: Vagra, Dist.: Bharuch, Gujarat-392 130",
        actual: "",
        year: ""
    },
    {
        company: "Adani LPG Terminal Pvt. Ltd.",
        description: "Hot Insulation Work at pipe line for Tal-Mundra",
        client: "Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",
        actual: "",
        year: ""
    },
    {
        company: "Adani International Container Terminal Pvt. Ltd",
        description: "Scaffolding Erection for Tal-Mundra",
        client: "Post Bag No:1, Village Dhrub, Tal-Mundra, Kutch,Gujrat-370421",
        actual: "",
        year: ""
    },
    {
        company: "Kamlesh kumar singh Engneer Pvt. Ltd",
        description: "Hot & Cold Insulation Work for Indian Oil Corporation Limited",
        client: "Indian Oil Corporation Limited P. O. Panipat Refinery, Panipat - 132 140, Haryana",
        actual: "",
        year: ""
    },
    {
        company: "Aegis Logistics Limited",
        description: "Cold Insulation Work for Ucchaiya Amreli Gujarat",
        client: "Plot XZ Port of Pipavav, via Rajula, Ucchaiya Amreli Gujarat,India-365560",
        actual: "",
        year: ""
    },

];

export default projects;