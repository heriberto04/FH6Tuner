// Forza Horizon 6 - Complete Car Database (618 cars from official source)
const FH6_CARS = [
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "Abarth",
        "model":  "1968 Abarth 595 esseesse",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "399 D",
        "type":  "Classic Rally",
        "make":  "Abarth",
        "model":  "1980 Abarth Fiat 131",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "540 B",
        "type":  "Hot Hatch",
        "make":  "Abarth",
        "model":  "2016 Abarth 695 Biposto",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "471 C",
        "type":  "Retro Hot Hatch",
        "make":  "Acura",
        "model":  "2001 Acura Integra Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "462 C",
        "type":  "Retro Hot Hatch",
        "make":  "Acura",
        "model":  "2002 Acura RSX Type S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "734 S1",
        "type":  "Modern Supercars",
        "make":  "Acura",
        "model":  "2022 Acura NSX Type S",
        "collection":  "Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "484 C",
        "type":  "Hot Hatch",
        "make":  "Acura",
        "model":  "2023 Acura Integra A-Spec",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "379 D",
        "type":  "Rare Classics",
        "make":  "Alfa Romeo",
        "model":  "1965 Alfa Romeo Giulia Sprint GTA Stradale",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "532 B",
        "type":  "Classic Racers",
        "make":  "Alfa Romeo",
        "model":  "1965 Alfa Romeo Giulia TZ2",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "593 B",
        "type":  "Classic Racers",
        "make":  "Alfa Romeo",
        "model":  "1968 Alfa Romeo 33 Stradale",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "Italian Passion Car Pack",
        "class":  "978 R",
        "type":  "Retro Racers",
        "make":  "Alfa Romeo",
        "model":  "1990 Alfa Romeo SE 048SP",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "439 C",
        "type":  "Retro Super Saloons",
        "make":  "Alfa Romeo",
        "model":  "1992 Alfa Romeo 155 Q4",
        "collection":  "Autoshow",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "635 A",
        "type":  "GT Cars",
        "make":  "Alfa Romeo",
        "model":  "2007 Alfa Romeo 8C Competizione",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "644 A",
        "type":  "Modern Sports Cars",
        "make":  "Alfa Romeo",
        "model":  "2014 Alfa Romeo 4C",
        "collection":  "Autoshow",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "667 A",
        "type":  "Modern Super Saloons",
        "make":  "Alfa Romeo",
        "model":  "2017 Alfa Romeo Giulia Quadrifoglio",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "Italian Passion Car Pack",
        "class":  "717 S1",
        "type":  "Modern Super Saloons",
        "make":  "Alfa Romeo",
        "model":  "2021 Alfa Romeo Giulia GTAm",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "532 B",
        "type":  "Unlimited Buggies",
        "make":  "Alumicraft",
        "model":  "2015 Alumicraft Class 10 Race Car",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "571 B",
        "type":  "Unlimited Buggies",
        "make":  "Alumicraft",
        "model":  "2021 Alumicraft #122 Class 1 Buggy",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "485 C",
        "type":  "Unlimited Offroad",
        "make":  "Alumicraft",
        "model":  "2022 Alumicraft #6165 Trick Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "663 A",
        "type":  "Unlimited Offroad",
        "make":  "AMG Transport Dynamics",
        "model":  "2554 AMG Transport Dynamics M12S Warthog CST",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "916 R",
        "type":  "Extreme Track Toys",
        "make":  "Apollo",
        "model":  "2019 Apollo Intensa Emozione",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "825 S2",
        "type":  "Extreme Track Toys",
        "make":  "Ariel",
        "model":  "2013 Ariel Atom 500 V8",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "601 A",
        "type":  "Unlimited Buggies",
        "make":  "Ariel",
        "model":  "2016 Ariel Nomad",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "416 C",
        "type":  "Rare Classics",
        "make":  "Aston Martin",
        "model":  "1964 Aston Martin DB5",
        "collection":  "Autoshow",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "884 S2",
        "type":  "Extreme Track Toys",
        "make":  "Aston Martin",
        "model":  "2016 Aston Martin Vulcan",
        "collection":  "Autoshow, Wheelspin, Loyalty",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "679 A",
        "type":  "Super GT",
        "make":  "Aston Martin",
        "model":  "2017 Aston Martin DB11",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "898 S2",
        "type":  "Extreme Track Toys",
        "make":  "Aston Martin",
        "model":  "2017 Aston Martin Vulcan AMR Pro",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "736 S1",
        "type":  "Super GT",
        "make":  "Aston Martin",
        "model":  "2019 Aston Martin DBS Superleggera",
        "collection":  "Wheelspin, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "960 R",
        "type":  "Hypercars",
        "make":  "Aston Martin",
        "model":  "2019 Aston Martin Valhalla Concept Car",
        "collection":  "Wheelspin, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "696 A",
        "type":  "GT Cars",
        "make":  "Aston Martin",
        "model":  "2019 Aston Martin Vantage",
        "collection":  "Autoshow",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "618 A",
        "type":  "Sports Utility Heroes",
        "make":  "Aston Martin",
        "model":  "2021 Aston Martin DBX",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "989 R",
        "type":  "Extreme Track Toys",
        "make":  "Aston Martin",
        "model":  "2022 Aston Martin Valkyrie AMR Pro",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "924 R",
        "type":  "Hypercars",
        "make":  "Aston Martin",
        "model":  "2023 Aston Martin Valkyrie",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "526 B",
        "type":  "Retro Rally",
        "make":  "Audi",
        "model":  "1984 Audi Sport quattro",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "726 S1",
        "type":  "Rally Monsters",
        "make":  "Audi",
        "model":  "1986 Audi #2 Audi Sport quattro S1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "544 B",
        "type":  "Retro Super Saloons",
        "make":  "Audi",
        "model":  "2001 Audi RS 4 Avant",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "556 B",
        "type":  "Retro Super Saloons",
        "make":  "Audi",
        "model":  "2003 Audi RS 6",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "593 B",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2006 Audi RS 4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "810 S2",
        "type":  "Extreme Track Toys",
        "make":  "Audi",
        "model":  "2009 Audi R8 LMS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "598 B",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2009 Audi RS 6",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "593 B",
        "type":  "Modern Sports Cars",
        "make":  "Audi",
        "model":  "2010 Audi TT RS Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "565 B",
        "type":  "Super Hot Hatch",
        "make":  "Audi",
        "model":  "2011 Audi RS 3 Sportback",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "613 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2011 Audi RS 5 Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "694 A",
        "type":  "Modern Supercars",
        "make":  "Audi",
        "model":  "2013 Audi R8 Coupé V10 plus 5.2 FSI quattro",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "607 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2013 Audi RS 4 Avant",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "619 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2013 Audi RS 7 Sportback",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "640 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2015 Audi RS 6 Avant",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "527 B",
        "type":  "Hot Hatch",
        "make":  "Audi",
        "model":  "2015 Audi S1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "731 S1",
        "type":  "Modern Supercars",
        "make":  "Audi",
        "model":  "2016 Audi R8 V10 plus",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "637 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2018 Audi RS 4 Avant",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "738 S1",
        "type":  "Modern Supercars",
        "make":  "Audi",
        "model":  "2020 Audi R8 V10 performance",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "617 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2020 Audi RS 3 Sedan",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "650 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2021 Audi RS 6 Avant",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "655 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2021 Audi RS 7 Sportback",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "677 A",
        "type":  "Modern Super Saloons",
        "make":  "Audi",
        "model":  "2021 Audi RS e-tron GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "Car Pass",
        "class":  "769 S1",
        "type":  "Modern Supercars",
        "make":  "Audi",
        "model":  "2023 Audi R8 Coupé V10 GT RWD",
        "collection":  "Autoshow DLC",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "352 D",
        "type":  "Classic Sports Cars",
        "make":  "Austin-Healey",
        "model":  "1965 Austin-Healey 3000 MkIII",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "342 D",
        "type":  "Eclectic Domestics",
        "make":  "Autozam",
        "model":  "1993 Autozam AZ-1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "766 S1",
        "type":  "Track Toys",
        "make":  "BAC",
        "model":  "2014 BAC Mono",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "612 A",
        "type":  "Sports Utility Heroes",
        "make":  "Bentley",
        "model":  "2016 Bentley Bentayga",
        "collection":  "Wheelspin, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "649 A",
        "type":  "GT Cars",
        "make":  "Bentley",
        "model":  "2021 Bentley Continental GT Convertible",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "BMW",
        "model":  "1957 BMW Isetta 300 Export",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "424 C",
        "type":  "Classic Sports Cars",
        "make":  "BMW",
        "model":  "1973 BMW 2002 Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "510 B",
        "type":  "Retro Supercars",
        "make":  "BMW",
        "model":  "1981 BMW M1",
        "collection":  "Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "474 C",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "1988 BMW M3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "470 C",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "1988 BMW M5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "493 C",
        "type":  "Retro Sports Cars",
        "make":  "BMW",
        "model":  "1995 BMW 850CSi",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "516 B",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "1995 BMW M5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "549 B",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "1997 BMW M3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "580 B",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "2003 BMW M5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "554 B",
        "type":  "Retro Super Saloons",
        "make":  "BMW",
        "model":  "2005 BMW M3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "608 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2008 BMW M3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "579 B",
        "type":  "Modern Sports Cars",
        "make":  "BMW",
        "model":  "2008 BMW Z4 M Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "595 B",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2009 BMW M5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "678 A",
        "type":  "Track Toys",
        "make":  "BMW",
        "model":  "2010 BMW M3 GTS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "546 B",
        "type":  "Sports Utility Heroes",
        "make":  "BMW",
        "model":  "2011 BMW X5 M",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "652 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2012 BMW M5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "679 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2014 BMW M4 Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "665 A",
        "type":  "Modern Sports Cars",
        "make":  "BMW",
        "model":  "2015 BMW i8",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "711 S1",
        "type":  "Track Toys",
        "make":  "BMW",
        "model":  "2016 BMW M4 GTS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "634 A",
        "type":  "Modern Sports Cars",
        "make":  "BMW",
        "model":  "2019 BMW Z4 Roadster",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "656 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2020 BMW M2 Competition Coupé",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "684 A",
        "type":  "GT Cars",
        "make":  "BMW",
        "model":  "2020 BMW M8 Competition Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "666 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2021 BMW M4 Competition Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "Welcome Pack",
        "class":  "800 S1",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2021 BMW M4 Competition Coupé Welcome Pack",
        "collection":  "Autoshow DLC",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "595 B",
        "type":  "Sports Utility Heroes",
        "make":  "BMW",
        "model":  "2022 BMW iX xDrive50",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "731 S1",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2022 BMW M5 CS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "647 A",
        "type":  "Modern Super Saloons",
        "make":  "BMW",
        "model":  "2023 BMW M2",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Track Toys",
        "make":  "BMW",
        "model":  "2023 BMW M2 Forza Edition",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "672 A",
        "type":  "Sports Utility Heroes",
        "make":  "BMW",
        "model":  "2024 BMW X6 M Competition",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "454 C",
        "type":  "Retro Muscle",
        "make":  "Buick",
        "model":  "1987 Buick Regal GNX",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "381 D",
        "type":  "Modern Super Saloons",
        "make":  "Cadillac",
        "model":  "2013 Cadillac XTS Limousine",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "601 A",
        "type":  "Modern Muscle",
        "make":  "Cadillac",
        "model":  "2016 Cadillac ATS-V",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "648 A",
        "type":  "Modern Muscle",
        "make":  "Cadillac",
        "model":  "2016 Cadillac CTS-V Sedan",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "650 A",
        "type":  "Modern Muscle",
        "make":  "Cadillac",
        "model":  "2022 Cadillac CT4-V Blackwing",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "701 S1",
        "type":  "Modern Muscle",
        "make":  "Cadillac",
        "model":  "2022 Cadillac CT5-V Blackwing",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "568 B",
        "type":  "UTV\u0027s",
        "make":  "Can-Am",
        "model":  "2018 Can-Am Maverick X RS Turbo R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Canada"
    },
    {
        "addon":  "",
        "class":  "641 A",
        "type":  "Unlimited Offroad",
        "make":  "Casey Currie Motorsports",
        "model":  "2019 Casey Currie Motorsports #4402 Ultra 4 \u0027Trophy Jeep\u0027",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "270 D",
        "type":  "Classic Sports Cars",
        "make":  "Chevrolet",
        "model":  "1953 Chevrolet Corvette",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "221 D",
        "type":  "Rods and Customs",
        "make":  "Chevrolet",
        "model":  "1955 Chevrolet 150 Utility Sedan",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "320 D",
        "type":  "Rods and Customs",
        "make":  "Chevrolet",
        "model":  "1957 Chevrolet Bel Air",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "428 C",
        "type":  "Classic Sports Cars",
        "make":  "Chevrolet",
        "model":  "1960 Chevrolet Corvette",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "427 C",
        "type":  "Rods and Customs",
        "make":  "Chevrolet",
        "model":  "1964 Chevrolet Impala Super Sport 409",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "510 B",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1967 Chevrolet Corvette Stingray 427",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "471 C",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1969 Chevrolet Camaro Super Sport Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "431 C",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1969 Chevrolet Nova Super Sport 396",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "430 C",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1970 Chevrolet Camaro Z28",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "424 C",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1970 Chevrolet Chevelle Super Sport 454",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "497 C",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1970 Chevrolet Corvette ZR-1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "430 C",
        "type":  "Utility Heroes",
        "make":  "Chevrolet",
        "model":  "1970 Chevrolet El Camino Super Sport 454",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "268 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Chevrolet",
        "model":  "1972 Chevrolet K-10 Custom",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "364 D",
        "type":  "Classic Muscle",
        "make":  "Chevrolet",
        "model":  "1979 Chevrolet Camaro Z28",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "282 D",
        "type":  "Retro Muscle",
        "make":  "Chevrolet",
        "model":  "1988 Chevrolet Monte Carlo Super Sport",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "576 B",
        "type":  "Retro Muscle",
        "make":  "Chevrolet",
        "model":  "1995 Chevrolet Corvette ZR-1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "407 C",
        "type":  "Retro Muscle",
        "make":  "Chevrolet",
        "model":  "1996 Chevrolet Impala Super Sport",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "602 A",
        "type":  "Retro Muscle",
        "make":  "Chevrolet",
        "model":  "2002 Chevrolet Corvette Z06",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "712 S1",
        "type":  "Modern Muscle",
        "make":  "Chevrolet",
        "model":  "2009 Chevrolet Corvette ZR1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "695 A",
        "type":  "Track Toys",
        "make":  "Chevrolet",
        "model":  "2015 Chevrolet Camaro Z/28",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "755 S1",
        "type":  "Modern Muscle",
        "make":  "Chevrolet",
        "model":  "2015 Chevrolet Corvette Z06",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "727 S1",
        "type":  "Modern Muscle",
        "make":  "Chevrolet",
        "model":  "2017 Chevrolet Camaro ZL1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "728 S1",
        "type":  "Track Toys",
        "make":  "Chevrolet",
        "model":  "2018 Chevrolet Camaro ZL1 1LE",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "778 S1",
        "type":  "Track Toys",
        "make":  "Chevrolet",
        "model":  "2019 Chevrolet Corvette ZR1",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Modern Supercars",
        "make":  "Chevrolet",
        "model":  "2020 Chevrolet Corvette Stingray Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "449 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Chevrolet",
        "model":  "2020 Chevrolet Silverado LT Trail Boss",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "763 S1",
        "type":  "Track Toys",
        "make":  "Chevrolet",
        "model":  "2023 Chevrolet Corvette Z06",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "737 S1",
        "type":  "Modern Supercars",
        "make":  "Chevrolet",
        "model":  "2024 Chevrolet Corvette E-Ray",
        "collection":  "Autoshow, Wheelspin, Loyalty",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "323 D",
        "type":  "Classic Sports Cars",
        "make":  "Datsun",
        "model":  "1969 Datsun 2000 Roadster",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "143 D",
        "type":  "Classic Sports Cars",
        "make":  "Datsun",
        "model":  "1970 Datsun 510",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "951 R",
        "type":  "Extreme Track Toys",
        "make":  "Datsun",
        "model":  "1972 Datsun #269 Attacking the Clock Racing 240Z \u0027All Carbon Hill Climb Beast\u0027",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "645 A",
        "type":  "Unlimited Offroad",
        "make":  "DeBerti",
        "model":  "2013 DeBerti Jeep Wrangler Unlimited",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "707 S1",
        "type":  "Drift Cars",
        "make":  "DeBerti",
        "model":  "2018 DeBerti Chevrolet Silverado 1500 Drift Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "548 B",
        "type":  "Unlimited Offroad",
        "make":  "DeBerti",
        "model":  "2019 DeBerti Ford Super Duty F-250 Lariat \u0027Transformer\u0027",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "717 S1",
        "type":  "Drift Cars",
        "make":  "DeBerti",
        "model":  "2019 DeBerti Toyota Tacoma TRD ‘The Performance Truck’",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "357 D",
        "type":  "Retro Sports Cars",
        "make":  "DeLorean",
        "model":  "1982 DeLorean DMC-12",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "540 B",
        "type":  "Classic Muscle",
        "make":  "Dodge",
        "model":  "1968 Dodge Dart HEMI Super Stock",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "479 C",
        "type":  "Classic Muscle",
        "make":  "Dodge",
        "model":  "1969 Dodge Charger Daytona HEMI",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "417 C",
        "type":  "Classic Muscle",
        "make":  "Dodge",
        "model":  "1969 Dodge Charger R/T",
        "collection":  "Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "443 C",
        "type":  "Classic Muscle",
        "make":  "Dodge",
        "model":  "1970 Dodge Challenger R/T",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "455 C",
        "type":  "Classic Muscle",
        "make":  "Dodge",
        "model":  "1970 Dodge Coronet Super Bee",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "598 B",
        "type":  "Retro Muscle",
        "make":  "Dodge",
        "model":  "1999 Dodge Viper GTS ACR",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "VIP",
        "class":  "700 A",
        "type":  "Unlimited Offroad",
        "make":  "Dodge",
        "model":  "1999 Dodge Viper GTS ACR Forza Edition",
        "collection":  "Autoshow DLC",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "547 B",
        "type":  "Modern Muscle",
        "make":  "Dodge",
        "model":  "2006 Dodge Ram SRT-10",
        "collection":  "Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "735 S1",
        "type":  "Track Toys",
        "make":  "Dodge",
        "model":  "2008 Dodge Viper SRT-10 ACR",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "631 A",
        "type":  "Modern Muscle",
        "make":  "Dodge",
        "model":  "2015 Dodge Challenger SRT Hellcat",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "637 A",
        "type":  "Modern Muscle",
        "make":  "Dodge",
        "model":  "2015 Dodge Charger SRT Hellcat",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "786 S1",
        "type":  "Track Toys",
        "make":  "Dodge",
        "model":  "2016 Dodge Viper ACR",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "678 A",
        "type":  "Modern Muscle",
        "make":  "Dodge",
        "model":  "2018 Dodge Challenger SRT Demon",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "628 A",
        "type":  "Sports Utility Heroes",
        "make":  "Dodge",
        "model":  "2021 Dodge Durango SRT Hellcat",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "695 A",
        "type":  "Modern Muscle",
        "make":  "Dodge",
        "model":  "2022 Dodge Challenger SRT Super Stock",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "475 C",
        "type":  "Rare Classics",
        "make":  "Ferrari",
        "model":  "1962 Ferrari 250 GT Berlinetta Lusso",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "494 C",
        "type":  "Classic Racers",
        "make":  "Ferrari",
        "model":  "1962 Ferrari 250 GTO",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "684 A",
        "type":  "Classic Racers",
        "make":  "Ferrari",
        "model":  "1967 Ferrari #24 Ferrari Spa 330 P4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "Italian Passion Car Pack",
        "class":  "490 C",
        "type":  "Rare Classics",
        "make":  "Ferrari",
        "model":  "1967 Ferrari 275 GTB4 Spider",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "428 C",
        "type":  "Rare Classics",
        "make":  "Ferrari",
        "model":  "1969 Ferrari Dino 246 GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "774 S1",
        "type":  "Classic Racers",
        "make":  "Ferrari",
        "model":  "1970 Ferrari 512 S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "643 A",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "1984 Ferrari 288 GTO",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "678 A",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "1987 Ferrari F40",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "948 R",
        "type":  "Retro Racers",
        "make":  "Ferrari",
        "model":  "1989 Ferrari F40 Competizione",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "615 A",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "1992 Ferrari 512 TR",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "588 B",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "1994 Ferrari F355 Berlinetta",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "678 A",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "1995 Ferrari F50",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "949 R",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "1996 Ferrari F50 GT",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "755 S1",
        "type":  "Retro Supercars",
        "make":  "Ferrari",
        "model":  "2002 Ferrari Enzo Ferrari",
        "collection":  "Autoshow",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "900 S2",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2005 Ferrari FXX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "702 S1",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2007 Ferrari 430 Scuderia",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "721 S1",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2009 Ferrari 458 Italia",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "840 S2",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2010 Ferrari 599XX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "894 S2",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2012 Ferrari 599XX Evolution",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "768 S1",
        "type":  "Track Toys",
        "make":  "Ferrari",
        "model":  "2013 Ferrari 458 Speciale",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "857 S2",
        "type":  "Hypercars",
        "make":  "Ferrari",
        "model":  "2013 Ferrari LaFerrari",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "936 R",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2014 Ferrari FXX K",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "770 S1",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2015 Ferrari 488 GTB",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "788 S1",
        "type":  "Super GT",
        "make":  "Ferrari",
        "model":  "2015 Ferrari F12tdf",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "780 S1",
        "type":  "Super GT",
        "make":  "Ferrari",
        "model":  "2017 Ferrari 812 Superfast",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "772 S1",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2017 Ferrari J50",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "Preorder Bonus",
        "class":  "800 S1",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2017 Ferrari J50 Preorder Car",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "957 R",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2018 Ferrari FXX-K Evo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "Welcome Pack",
        "class":  "998 R",
        "type":  "Extreme Track Toys",
        "make":  "Ferrari",
        "model":  "2018 Ferrari FXX-K Evo Welcome Pack",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "714 S1",
        "type":  "Super GT",
        "make":  "Ferrari",
        "model":  "2018 Ferrari Portofino",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "803 S2",
        "type":  "Track Toys",
        "make":  "Ferrari",
        "model":  "2019 Ferrari 488 Pista",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "802 S2",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2019 Ferrari F8 Tributo",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "773 S1",
        "type":  "Super GT",
        "make":  "Ferrari",
        "model":  "2019 Ferrari Monza SP2",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "735 S1",
        "type":  "Super GT",
        "make":  "Ferrari",
        "model":  "2020 Ferrari Roma",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "851 S2",
        "type":  "Hypercars",
        "make":  "Ferrari",
        "model":  "2020 Ferrari SF90 Stradale",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "811 S2",
        "type":  "Modern Supercars",
        "make":  "Ferrari",
        "model":  "2022 Ferrari 296 GTB",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "Italian Passion Car Pack",
        "class":  "920 R",
        "type":  "Hypercars",
        "make":  "Ferrari",
        "model":  "2025 Ferrari F80",
        "collection":  "Autoshow DLC",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Rods and Customs",
        "make":  "Ford",
        "model":  "1932 Ford De Luxe Five-Window Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "388 D",
        "type":  "Classic Muscle",
        "make":  "Ford",
        "model":  "1965 Ford Mustang GT Coupe",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "666 A",
        "type":  "Classic Racers",
        "make":  "Ford",
        "model":  "1966 Ford #2 GT40 Mk II",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "394 D",
        "type":  "Classic Muscle",
        "make":  "Ford",
        "model":  "1968 Ford Mustang GT 2+2 Fastback",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Drift Cars",
        "make":  "Ford",
        "model":  "1968 Ford Mustang GT 2+2 Fastback Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "468 C",
        "type":  "Classic Muscle",
        "make":  "Ford",
        "model":  "1969 Ford Mustang Boss 302",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "394 D",
        "type":  "Classic Sports Cars",
        "make":  "Ford",
        "model":  "1973 Ford Capri RS3100",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "422 C",
        "type":  "Classic Muscle",
        "make":  "Ford",
        "model":  "1973 Ford XB Falcon GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "544 B",
        "type":  "Classic Rally",
        "make":  "Ford",
        "model":  "1977 Ford #5 Escort RS1800 MkII",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "710 S1",
        "type":  "Rally Monsters",
        "make":  "Ford",
        "model":  "1985 Ford RS200 Evolution",
        "collection":  "Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "263 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "1986 Ford F-150 XLT Lariat",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "850 S2",
        "type":  "Drift Cars",
        "make":  "Ford",
        "model":  "1986 Ford F-150 XLT Lariat Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "484 C",
        "type":  "Retro Super Saloons",
        "make":  "Ford",
        "model":  "1987 Ford Sierra Cosworth RS500",
        "collection":  "Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "456 C",
        "type":  "Retro Rally",
        "make":  "Ford",
        "model":  "1992 Ford Escort RS Cosworth",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "432 C",
        "type":  "Retro Muscle",
        "make":  "Ford",
        "model":  "1993 Ford Mustang SVT Cobra R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "740 S1",
        "type":  "Track Toys",
        "make":  "Ford",
        "model":  "1994 Ford Supervan 3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "401 C",
        "type":  "Retro Rally",
        "make":  "Ford",
        "model":  "1999 Ford Racing Puma",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "528 B",
        "type":  "Retro Muscle",
        "make":  "Ford",
        "model":  "2000 Ford Mustang SVT Cobra R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "639 A",
        "type":  "Rally Monsters",
        "make":  "Ford",
        "model":  "2001 Ford #4 Ford Focus RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "474 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2003 Ford F-150 SVT Lightning",
        "collection":  "Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "484 C",
        "type":  "Retro Hot Hatch",
        "make":  "Ford",
        "model":  "2003 Ford Focus RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "676 A",
        "type":  "Retro Supercars",
        "make":  "Ford",
        "model":  "2005 Ford GT",
        "collection":  "Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "551 B",
        "type":  "Super Hot Hatch",
        "make":  "Ford",
        "model":  "2009 Ford Focus RS",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "354 D",
        "type":  "Retro Muscle",
        "make":  "Ford",
        "model":  "2010 Ford Crown Victoria Police Interceptor",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "235 D",
        "type":  "Utility Heroes",
        "make":  "Ford",
        "model":  "2011 Ford Transit SuperSportVan",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "647 A",
        "type":  "Modern Muscle",
        "make":  "Ford",
        "model":  "2013 Ford Mustang Shelby GT500",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "613 A",
        "type":  "Unlimited Offroad",
        "make":  "Ford",
        "model":  "2014 Ford #11 Rockstar F-150 Trophy Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "563 B",
        "type":  "Utility Heroes",
        "make":  "Ford",
        "model":  "2014 Ford FPV Limited Edition Pursuit Ute",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "530 B",
        "type":  "Offroad",
        "make":  "Ford",
        "model":  "2014 Ford Ranger T6 Rally Raid",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "721 S1",
        "type":  "Track Toys",
        "make":  "Ford",
        "model":  "2016 Ford Mustang Shelby GT350R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "772 S1",
        "type":  "Rally Monsters",
        "make":  "Ford",
        "model":  "2017 Ford #14 Rahal Letterman Lanigan Racing Fiesta",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "644 A",
        "type":  "Unlimited Offroad",
        "make":  "Ford",
        "model":  "2017 Ford #25 \u0027Brocky\u0027 Ultra4 Bronco RTR",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "588 B",
        "type":  "Super Hot Hatch",
        "make":  "Ford",
        "model":  "2017 Ford Focus RS",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "757 S1",
        "type":  "Modern Supercars",
        "make":  "Ford",
        "model":  "2017 Ford GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "707 S1",
        "type":  "Rally Monsters",
        "make":  "Ford",
        "model":  "2017 Ford M-Sport Fiesta RS",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "648 A",
        "type":  "Modern Muscle",
        "make":  "Ford",
        "model":  "2018 Ford Mustang RTR Spec 5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "441 C",
        "type":  "Offroad",
        "make":  "Ford",
        "model":  "2020 Ford #2069 Ford Performance Bronco R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "734 S1",
        "type":  "Modern Muscle",
        "make":  "Ford",
        "model":  "2020 Ford Mustang Shelby GT500",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "379 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2020 Ford Super Duty F-450 DRW PLATINUM",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2020 Ford Super Duty F-450 DRW PLATINUM Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "473 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2022 Ford Bronco Raptor",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "500 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2022 Ford F-150 Lightning",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "594 B",
        "type":  "Hot Hatch",
        "make":  "Ford",
        "model":  "2022 Ford Focus ST",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "919 R",
        "type":  "Extreme Track Toys",
        "make":  "Ford",
        "model":  "2022 Ford Supervan 4",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "536 B",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2023 Ford F-150 Raptor R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "Welcome Pack",
        "class":  "600 B",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ford",
        "model":  "2023 Ford F-150 Raptor R Welcome Pack",
        "collection":  "Autoshow DLC",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "500 C",
        "type":  "Hot Hatch",
        "make":  "Ford",
        "model":  "2023 Ford Fiesta ST",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "669 A",
        "type":  "Modern Muscle",
        "make":  "Ford",
        "model":  "2024 Ford Mustang Dark Horse",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "628 A",
        "type":  "Modern Muscle",
        "make":  "Ford",
        "model":  "2024 Ford Mustang GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "726 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "1989 Formula Drift #98 BMW 325i",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "759 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "1995 Formula Drift #34 Toyota Supra MkIV",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "748 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "1997 Formula Drift #777 Nissan 240SX",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "748 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2006 Formula Drift #43 Dodge Viper SRT-10 ACR",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "767 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2007 Formula Drift #117 599 GTB Fiorano",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "737 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2009 Formula Drift #99 Mazda RX-8",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "760 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2013 Formula Drift #777 Chevrolet Corvette",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "739 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2015 Formula Drift #13 Ford Mustang",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "710 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2016 Formula Drift #530 HSV Maloo GEN-F",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "754 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2019 Formula Drift #411 Toyota Corolla Hatchback",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "779 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2020 Formula Drift #151 Toyota GR Supra",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "748 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2020 Formula Drift #91 BMW M2",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "783 S1",
        "type":  "Drift Cars",
        "make":  "Formula Drift",
        "model":  "2023 Formula Drift #64 Forsberg Racing Nissan Z",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "752 S1",
        "type":  "Unlimited Buggies",
        "make":  "Funco Motorsports",
        "model":  "2018 Funco Motorsports F9",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "416 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "GMC",
        "model":  "1970 GMC Jimmy",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "446 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "GMC",
        "model":  "1991 GMC Syclone",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "435 C",
        "type":  "Sports Utility Heroes",
        "make":  "GMC",
        "model":  "1992 GMC Typhoon",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "610 A",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "GMC",
        "model":  "2022 GMC HUMMER EV Pickup",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "871 S2",
        "type":  "Hypercars",
        "make":  "Gordon Murray Automotive",
        "model":  "2020 Gordon Murray Automotive T.50",
        "collection":  "Autoshow, Collection Journal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "771 S1",
        "type":  "Super GT",
        "make":  "GR",
        "model":  "2025 GR GT Prototype",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "845 S2",
        "type":  "Hypercars",
        "make":  "Hennessey",
        "model":  "2012 Hennessey Venom GT",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "520 B",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Hennessey",
        "model":  "2019 Hennessey Ford F-150 VelociRaptor 6X6",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "870 S2",
        "type":  "Hypercars",
        "make":  "Hennessey",
        "model":  "2021 Hennessey Venom F5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "413 C",
        "type":  "Classic Muscle",
        "make":  "Holden",
        "model":  "1977 Holden Torana A9X",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Australia"
    },
    {
        "addon":  "",
        "class":  "134 D",
        "type":  "Cult Cars",
        "make":  "Honda",
        "model":  "1970 Honda S800",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "254 D",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "1974 Honda Civic RS",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "203 D",
        "type":  "Eclectic Domestics",
        "make":  "Honda",
        "model":  "1984 Honda City E II",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "390 D",
        "type":  "Retro Sports Cars",
        "make":  "Honda",
        "model":  "1984 Honda Civic CRX Mugen",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "253 D",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "1986 Honda Civic Si",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "877 S2",
        "type":  "Extreme Track Toys",
        "make":  "Honda",
        "model":  "1990 Honda #19 101 Motorsport CRX WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "283 D",
        "type":  "Eclectic Domestics",
        "make":  "Honda",
        "model":  "1991 Honda Beat",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "465 C",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "1991 Honda CR-X SiR",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "913 R",
        "type":  "Extreme Track Toys",
        "make":  "Honda",
        "model":  "1992 Honda #21 Hardrace/JDMYard Civic WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "572 B",
        "type":  "Retro Sports Cars",
        "make":  "Honda",
        "model":  "1992 Honda NSX-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Eclectic Domestics",
        "make":  "Honda",
        "model":  "1994 Honda Acty",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "410 C",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "1994 Honda Prelude Si",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "430 C",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "1997 Honda Civic Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "860 S2",
        "type":  "Extreme Track Toys",
        "make":  "Honda",
        "model":  "2001 Honda #33 Integra WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "503 B",
        "type":  "Modern Sports Cars",
        "make":  "Honda",
        "model":  "2003 Honda S2000",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "888 S2",
        "type":  "Extreme Track Toys",
        "make":  "Honda",
        "model":  "2004 Honda #52 Evasive Motorsports S2000 WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "480 C",
        "type":  "Retro Hot Hatch",
        "make":  "Honda",
        "model":  "2004 Honda Civic Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "570 B",
        "type":  "Retro Sports Cars",
        "make":  "Honda",
        "model":  "2005 Honda NSX-R",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "608 A",
        "type":  "Retro Sports Cars",
        "make":  "Honda",
        "model":  "2005 Honda NSX-R GT",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "454 C",
        "type":  "Hot Hatch",
        "make":  "Honda",
        "model":  "2007 Honda Civic Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "514 B",
        "type":  "Retro Super Saloons",
        "make":  "Honda",
        "model":  "2008 Honda Civic Type R (FD2)",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "585 B",
        "type":  "Super Hot Hatch",
        "make":  "Honda",
        "model":  "2015 Honda Civic Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "580 B",
        "type":  "Unlimited Offroad",
        "make":  "Honda",
        "model":  "2015 Honda Ridgeline Baja Trophy Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "608 A",
        "type":  "Super Hot Hatch",
        "make":  "Honda",
        "model":  "2018 Honda Civic Type R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "398 D",
        "type":  "Hot Hatch",
        "make":  "Honda",
        "model":  "2022 Honda e",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "620 A",
        "type":  "Super Hot Hatch",
        "make":  "Honda",
        "model":  "2023 Honda Civic Type R",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "601 A",
        "type":  "Modern Muscle",
        "make":  "HSV",
        "model":  "2014 HSV GEN-F GTS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Australia"
    },
    {
        "addon":  "",
        "class":  "629 A",
        "type":  "Utility Heroes",
        "make":  "HSV",
        "model":  "2014 HSV Limited Edition GEN-F GTS Maloo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Australia"
    },
    {
        "addon":  "",
        "class":  "532 B",
        "type":  "Super Hot Hatch",
        "make":  "Hyundai",
        "model":  "2019 Hyundai Veloster N",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Korea"
    },
    {
        "addon":  "",
        "class":  "553 B",
        "type":  "Super Hot Hatch",
        "make":  "Hyundai",
        "model":  "2020 Hyundai i30 N",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Korea"
    },
    {
        "addon":  "",
        "class":  "564 B",
        "type":  "Hot Hatch",
        "make":  "Hyundai",
        "model":  "2021 Hyundai i20 N",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Korea"
    },
    {
        "addon":  "",
        "class":  "692 A",
        "type":  "Track Toys",
        "make":  "Hyundai",
        "model":  "2022 Hyundai N Vision 74",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Korea"
    },
    {
        "addon":  "",
        "class":  "657 A",
        "type":  "Sports Utility Heroes",
        "make":  "Hyundai",
        "model":  "2023 Hyundai IONIQ 5 N",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Korea"
    },
    {
        "addon":  "",
        "class":  "506 B",
        "type":  "Classic Racers",
        "make":  "Jaguar",
        "model":  "1956 Jaguar D-Type",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "414 C",
        "type":  "Rare Classics",
        "make":  "Jaguar",
        "model":  "1961 Jaguar E-type",
        "collection":  "Wheelspin, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "568 B",
        "type":  "Classic Racers",
        "make":  "Jaguar",
        "model":  "1964 Jaguar Lightweight E-Type",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "716 S1",
        "type":  "Retro Supercars",
        "make":  "Jaguar",
        "model":  "1991 Jaguar Sport XJR-15",
        "collection":  "Autoshow, Collection Journal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "676 A",
        "type":  "Retro Supercars",
        "make":  "Jaguar",
        "model":  "1993 Jaguar XJ220",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "750 S1",
        "type":  "Retro Supercars",
        "make":  "Jaguar",
        "model":  "1993 Jaguar XJ220S TWR",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "810 S2",
        "type":  "Modern Supercars",
        "make":  "Jaguar",
        "model":  "2010 Jaguar C-X75",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "350 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Jeep",
        "model":  "2012 Jeep Wrangler Rubicon",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "635 A",
        "type":  "Unlimited Offroad",
        "make":  "Jeep",
        "model":  "2016 Jeep Trailcat",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "631 A",
        "type":  "Sports Utility Heroes",
        "make":  "Jeep",
        "model":  "2018 Jeep Grand Cherokee Trackhawk",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "336 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Jeep",
        "model":  "2020 Jeep JT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "511 B",
        "type":  "Unlimited Offroad",
        "make":  "Jimco",
        "model":  "2019 Jimco #240 Fastball Racing Class 6100 Spec Trophy Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "652 A",
        "type":  "Unlimited Buggies",
        "make":  "Jimco",
        "model":  "2020 Jimco #179 Hammerhead Class 1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "900 S2",
        "type":  "Extreme Track Toys",
        "make":  "Koenigsegg",
        "model":  "2008 Koenigsegg CCGT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "810 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2011 Koenigsegg Agera",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "890 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2015 Koenigsegg One:1",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "886 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2016 Koenigsegg Regera",
        "collection":  "Autoshow",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "890 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2017 Koenigsegg Agera RS",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "899 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2020 Koenigsegg Jesko",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Sweden"
    },
    {
        "addon":  "Car Pass",
        "class":  "900 S2",
        "type":  "Hypercars",
        "make":  "Koenigsegg",
        "model":  "2024 Koenigsegg Gemera",
        "collection":  "Autoshow DLC",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "749 S1",
        "type":  "Extreme Track Toys",
        "make":  "KTM",
        "model":  "2018 KTM X-Bow GT4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Austria"
    },
    {
        "addon":  "",
        "class":  "505 B",
        "type":  "Rare Classics",
        "make":  "Lamborghini",
        "model":  "1967 Lamborghini Miura P400",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "622 A",
        "type":  "Retro Supercars",
        "make":  "Lamborghini",
        "model":  "1988 Lamborghini Countach LP5000 QV",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "649 A",
        "type":  "Retro Supercars",
        "make":  "Lamborghini",
        "model":  "1997 Lamborghini Diablo SV",
        "collection":  "Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "823 S2",
        "type":  "Extreme Track Toys",
        "make":  "Lamborghini",
        "model":  "1999 Lamborghini Diablo GTR",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "707 S1",
        "type":  "Modern Supercars",
        "make":  "Lamborghini",
        "model":  "2010 Lamborghini Murciélago LP 670-4 SV",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "871 S2",
        "type":  "Extreme Track Toys",
        "make":  "Lamborghini",
        "model":  "2011 Lamborghini Sesto Elemento",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "753 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2012 Lamborghini Aventador LP700-4",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "685 A",
        "type":  "Modern Supercars",
        "make":  "Lamborghini",
        "model":  "2012 Lamborghini Gallardo LP570-4 Spyder Performante",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "834 S2",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2013 Lamborghini Veneno",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "738 S1",
        "type":  "Modern Supercars",
        "make":  "Lamborghini",
        "model":  "2014 Lamborghini Huracán LP 610-4",
        "collection":  "Autoshow, Wheelspin, Loyalty",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "792 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2016 Lamborghini Centenario LP 770-4",
        "collection":  "Autoshow, Wheelspin, Loyalty",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "794 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2018 Lamborghini Aventador SVJ",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "659 A",
        "type":  "Sports Utility Heroes",
        "make":  "Lamborghini",
        "model":  "2019 Lamborghini Urus",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "911 R",
        "type":  "Extreme Track Toys",
        "make":  "Lamborghini",
        "model":  "2020 Lamborghini Essenza SCV12",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "761 S1",
        "type":  "Modern Supercars",
        "make":  "Lamborghini",
        "model":  "2020 Lamborghini Huracán EVO",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "783 S1",
        "type":  "Track Toys",
        "make":  "Lamborghini",
        "model":  "2020 Lamborghini Huracán STO",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "797 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2020 Lamborghini Sián Roadster",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "773 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2021 Lamborghini Countach LPI 800-4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "794 S1",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2022 Lamborghini Aventador LP 780-4 Ultimae",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "738 S1",
        "type":  "Rally Monsters",
        "make":  "Lamborghini",
        "model":  "2022 Lamborghini Huracán Sterrato",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "747 S1",
        "type":  "Modern Supercars",
        "make":  "Lamborghini",
        "model":  "2022 Lamborghini Huracán Tecnica",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "829 S2",
        "type":  "Hypercars",
        "make":  "Lamborghini",
        "model":  "2024 Lamborghini Revuelto",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "483 C",
        "type":  "Classic Rally",
        "make":  "Lancia",
        "model":  "1974 Lancia Stratos HF Stradale",
        "collection":  "Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "564 B",
        "type":  "Retro Rally",
        "make":  "Lancia",
        "model":  "1986 Lancia Delta S4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "489 C",
        "type":  "Retro Rally",
        "make":  "Lancia",
        "model":  "1992 Lancia Delta HF Integrale EVO",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "604 A",
        "type":  "Sports Utility Heroes",
        "make":  "Land Rover",
        "model":  "2015 Land Rover Range Rover Sport SVR",
        "collection":  "Autoshow, Collection Journal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "427 C",
        "type":  "Sports Utility Heroes",
        "make":  "Land Rover",
        "model":  "2020 Land Rover Defender 110 X",
        "collection":  "Autoshow",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "699 A",
        "type":  "Modern Supercars",
        "make":  "Lexus",
        "model":  "2010 Lexus LFA",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "900 S2",
        "type":  "Extreme Track Toys",
        "make":  "Lexus",
        "model":  "2010 Lexus LFA Forza Edition",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "623 A",
        "type":  "Modern Super Saloons",
        "make":  "Lexus",
        "model":  "2015 Lexus RC F",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "592 B",
        "type":  "GT Cars",
        "make":  "Lexus",
        "model":  "2021 Lexus LC 500",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "267 D",
        "type":  "Rods and Customs",
        "make":  "Lincoln",
        "model":  "1962 Lincoln Continental",
        "collection":  "Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "709 S1",
        "type":  "Retro Supercars",
        "make":  "Lotus",
        "model":  "1997 Lotus Elise GT1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "589 B",
        "type":  "Retro Sports Cars",
        "make":  "Lotus",
        "model":  "1999 Lotus Elise Series 1 Sport 190",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "732 S1",
        "type":  "Track Toys",
        "make":  "Lotus",
        "model":  "2018 Lotus Exige Cup 430",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "998 R",
        "type":  "Extreme Track Toys",
        "make":  "Lotus",
        "model":  "2018 Lotus Scura Motorsports Exige WTAC",
        "collection":  "Collection Journal, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "937 R",
        "type":  "Hypercars",
        "make":  "Lotus",
        "model":  "2020 Lotus Evija",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "VIP",
        "class":  "900 S2",
        "type":  "Drift Cars",
        "make":  "Lotus",
        "model":  "2020 Lotus Evija Forza Edition",
        "collection":  "Autoshow DLC",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "656 A",
        "type":  "Modern Sports Cars",
        "make":  "Lotus",
        "model":  "2023 Lotus Emira",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "820 S2",
        "type":  "Modern Super Saloons",
        "make":  "Lucid",
        "model":  "2024 Lucid Air Sapphire",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "591 B",
        "type":  "Retro Sports Cars",
        "make":  "Maserati",
        "model":  "1997 Maserati Ghibli Cup",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "751 S1",
        "type":  "Retro Supercars",
        "make":  "Maserati",
        "model":  "2004 Maserati MC12",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "912 R",
        "type":  "Extreme Track Toys",
        "make":  "Maserati",
        "model":  "2008 Maserati MC12 Versione Corsa",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "753 S1",
        "type":  "Modern Supercars",
        "make":  "Maserati",
        "model":  "2022 Maserati MC20",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "394 D",
        "type":  "Classic Sports Cars",
        "make":  "Mazda",
        "model":  "1972 Mazda Cosmo 110S Series II",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "328 D",
        "type":  "Classic Sports Cars",
        "make":  "Mazda",
        "model":  "1973 Mazda RX-3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "600 B",
        "type":  "Classic Sports Cars",
        "make":  "Mazda",
        "model":  "1973 Mazda RX-3 Forza Edition",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "702 S1",
        "type":  "Drift Cars",
        "make":  "Mazda",
        "model":  "1974 Mazda #123 Mad Mike 808 Wagon \u0027FURSTY\u0027",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "357 D",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "1985 Mazda RX-7 GSL-SE",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "451 C",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "1990 Mazda Savanna RX-7",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "988 R",
        "type":  "Retro Racers",
        "make":  "Mazda",
        "model":  "1991 Mazda #55 Mazda 787B",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "548 B",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "1992 Mazda RX-7 Type R",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "329 D",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "1994 Mazda MX-5 Miata",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "850 S2",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "1994 Mazda MX-5 Miata Forza Edition",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "469 C",
        "type":  "Retro Sports Cars",
        "make":  "Mazda",
        "model":  "2005 Mazda Mazdaspeed MX-5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "926 R",
        "type":  "Extreme Track Toys",
        "make":  "Mazda",
        "model":  "2008 Mazda Furai",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "536 B",
        "type":  "Hot Hatch",
        "make":  "Mazda",
        "model":  "2010 Mazda Mazdaspeed 3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "508 B",
        "type":  "Modern Sports Cars",
        "make":  "Mazda",
        "model":  "2011 Mazda RX-8 R3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "432 C",
        "type":  "Modern Sports Cars",
        "make":  "Mazda",
        "model":  "2013 Mazda MX-5",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "499 C",
        "type":  "Modern Sports Cars",
        "make":  "Mazda",
        "model":  "2016 Mazda MX-5",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "586 B",
        "type":  "Track Toys",
        "make":  "Mazda",
        "model":  "2017 Mazda MX-5 Cup",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "509 B",
        "type":  "Modern Sports Cars",
        "make":  "Mazda",
        "model":  "2022 Mazda MX-5 Miata RF",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "713 S1",
        "type":  "Retro Supercars",
        "make":  "McLaren",
        "model":  "1993 McLaren F1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "769 S1",
        "type":  "Retro Supercars",
        "make":  "McLaren",
        "model":  "1997 McLaren F1 GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "727 S1",
        "type":  "Modern Supercars",
        "make":  "McLaren",
        "model":  "2011 McLaren 12C Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "848 S2",
        "type":  "Hypercars",
        "make":  "McLaren",
        "model":  "2013 McLaren P1",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "765 S1",
        "type":  "Modern Supercars",
        "make":  "McLaren",
        "model":  "2014 McLaren 650S Spider",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "721 S1",
        "type":  "Modern Supercars",
        "make":  "McLaren",
        "model":  "2015 McLaren 570S Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "780 S1",
        "type":  "Track Toys",
        "make":  "McLaren",
        "model":  "2018 McLaren 600LT Coupé",
        "collection":  "Autoshow",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "835 S2",
        "type":  "Hypercars",
        "make":  "McLaren",
        "model":  "2019 McLaren Speedtail",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "773 S1",
        "type":  "Track Toys",
        "make":  "McLaren",
        "model":  "2021 McLaren 620R",
        "collection":  "Wheelspin, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "829 S2",
        "type":  "Track Toys",
        "make":  "McLaren",
        "model":  "2021 McLaren 765LT Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "787 S1",
        "type":  "Hypercars",
        "make":  "McLaren",
        "model":  "2021 McLaren Sabre",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "766 S1",
        "type":  "Modern Supercars",
        "make":  "McLaren",
        "model":  "2023 McLaren Artura",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "691 A",
        "type":  "Super GT",
        "make":  "Mercedes-AMG",
        "model":  "2015 Mercedes-AMG GT S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "645 A",
        "type":  "Modern Super Saloons",
        "make":  "Mercedes-AMG",
        "model":  "2016 Mercedes-AMG C 63 S Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "764 S1",
        "type":  "Super GT",
        "make":  "Mercedes-AMG",
        "model":  "2017 Mercedes-AMG GT R",
        "collection":  "Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "674 A",
        "type":  "Modern Super Saloons",
        "make":  "Mercedes-AMG",
        "model":  "2018 Mercedes-AMG E 63 S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "664 A",
        "type":  "Modern Super Saloons",
        "make":  "Mercedes-AMG",
        "model":  "2018 Mercedes-AMG GT 4-Door Coupé",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "782 S1",
        "type":  "Track Toys",
        "make":  "Mercedes-AMG",
        "model":  "2020 Mercedes-AMG GT Black Series",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "Welcome Pack",
        "class":  "900 S2",
        "type":  "Track Toys",
        "make":  "Mercedes-AMG",
        "model":  "2020 Mercedes-AMG GT Black Series Welcome Pack",
        "collection":  "Autoshow DLC",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "620 A",
        "type":  "Modern Sports Cars",
        "make":  "Mercedes-AMG",
        "model":  "2020 Mercedes-AMG SLC 43 Final Edition",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "900 S2",
        "type":  "Hypercars",
        "make":  "Mercedes-AMG",
        "model":  "2021 Mercedes-AMG Mercedes-AMG ONE",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "690 A",
        "type":  "GT Cars",
        "make":  "Mercedes-AMG",
        "model":  "2021 Mercedes-AMG SL 63",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "388 D",
        "type":  "Rare Classics",
        "make":  "Mercedes-Benz",
        "model":  "1954 Mercedes-Benz 300 SL Coupé",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "599 B",
        "type":  "Classic Racers",
        "make":  "Mercedes-Benz",
        "model":  "1955 Mercedes-Benz 300 SLR",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "565 B",
        "type":  "Retro Super Saloons",
        "make":  "Mercedes-Benz",
        "model":  "1987 Mercedes-Benz AMG Hammer Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "460 C",
        "type":  "Retro Super Saloons",
        "make":  "Mercedes-Benz",
        "model":  "1990 Mercedes-Benz 190 E 2.5-16 Evolution II",
        "collection":  "Autoshow",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Track Toys",
        "make":  "Mercedes-Benz",
        "model":  "1990 Mercedes-Benz 190 E 2.5-16 Evolution II Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "713 S1",
        "type":  "Retro Supercars",
        "make":  "Mercedes-Benz",
        "model":  "1998 Mercedes-Benz AMG CLK GTR",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "699 A",
        "type":  "Super GT",
        "make":  "Mercedes-Benz",
        "model":  "2009 Mercedes-Benz SL 65 AMG Black Series",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "654 A",
        "type":  "Modern Super Saloons",
        "make":  "Mercedes-Benz",
        "model":  "2012 Mercedes-Benz C 63 AMG Coupé Black Series",
        "collection":  "Autoshow",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "582 B",
        "type":  "Super Hot Hatch",
        "make":  "Mercedes-Benz",
        "model":  "2013 Mercedes-Benz A 45 AMG",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "530 B",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Mercedes-Benz",
        "model":  "2013 Mercedes-Benz G 65 AMG",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "489 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Mercedes-Benz",
        "model":  "2014 Mercedes-Benz G 63 AMG 6x6",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Offroad",
        "make":  "Mercedes-Benz",
        "model":  "2014 Mercedes-Benz Unimog U5023",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "258 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Mercedes-Benz",
        "model":  "2018 Mercedes-Benz X-Class",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "201 D",
        "type":  "Buggies",
        "make":  "Meyers",
        "model":  "1971 Meyers Manx",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "540 B",
        "type":  "Buggies",
        "make":  "Meyers",
        "model":  "2023 Meyers Manx 2.0",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "627 A",
        "type":  "Rally Monsters",
        "make":  "MG",
        "model":  "1986 MG Metro 6R4",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "158 D",
        "type":  "Classic Rally",
        "make":  "MINI",
        "model":  "1965 MINI Cooper S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "509 B",
        "type":  "Hot Hatch",
        "make":  "MINI",
        "model":  "2012 MINI John Cooper Works GP",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "523 B",
        "type":  "Offroad",
        "make":  "MINI",
        "model":  "2013 MINI X-Raid All4 Racing Countryman",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "514 B",
        "type":  "Offroad",
        "make":  "MINI",
        "model":  "2018 MINI X-raid John Cooper Works Buggy",
        "collection":  "Collection Journal, Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "599 B",
        "type":  "Super Hot Hatch",
        "make":  "MINI",
        "model":  "2021 MINI John Cooper Works GP",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "166 D",
        "type":  "Track Toys",
        "make":  "Mitsubishi",
        "model":  "1990 Mitsubishi #269 Attacking the Clock Racing Minicab Time Attack",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "431 C",
        "type":  "Retro Rally",
        "make":  "Mitsubishi",
        "model":  "1992 Mitsubishi Galant VR-4",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "436 C",
        "type":  "Retro Sports Cars",
        "make":  "Mitsubishi",
        "model":  "1995 Mitsubishi Eclipse GSX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "518 B",
        "type":  "Retro Rally",
        "make":  "Mitsubishi",
        "model":  "1995 Mitsubishi Lancer Evolution III GSR",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "190 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Mitsubishi",
        "model":  "1995 Mitsubishi Montero Exceed 2800 TD",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "495 C",
        "type":  "Retro Sports Cars",
        "make":  "Mitsubishi",
        "model":  "1997 Mitsubishi GTO",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "346 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Mitsubishi",
        "model":  "1997 Mitsubishi Montero Evolution",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "574 B",
        "type":  "Retro Rally",
        "make":  "Mitsubishi",
        "model":  "2001 Mitsubishi Lancer Evolution VI GSR TM Edition",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "555 B",
        "type":  "Modern Rally",
        "make":  "Mitsubishi",
        "model":  "2004 Mitsubishi Lancer Evolution VIII MR",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Welcome Pack",
        "class":  "700 A",
        "type":  "Modern Rally",
        "make":  "Mitsubishi",
        "model":  "2004 Mitsubishi Lancer Evolution VIII MR Welcome Pack",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "962 R",
        "type":  "Extreme Track Toys",
        "make":  "Mitsubishi",
        "model":  "2005 Mitsubishi #1 Sierra Sierra Enterprises Lancer Evolution Time Attack",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "521 B",
        "type":  "Modern Rally",
        "make":  "Mitsubishi",
        "model":  "2006 Mitsubishi Lancer Evolution IX MR",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "534 B",
        "type":  "Modern Rally",
        "make":  "Mitsubishi",
        "model":  "2008 Mitsubishi Lancer Evolution X GSR",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "369 D",
        "type":  "Classic Sports Cars",
        "make":  "Nissan",
        "model":  "1969 Nissan Fairlady Z 432",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "380 D",
        "type":  "Classic Sports Cars",
        "make":  "Nissan",
        "model":  "1971 Nissan Skyline 2000GT-R",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "407 C",
        "type":  "Classic Sports Cars",
        "make":  "Nissan",
        "model":  "1973 Nissan Skyline H/T 2000GT-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "847 S2",
        "type":  "Retro Racers",
        "make":  "Nissan",
        "model":  "1983 Nissan #11 Tomica Skyline Turbo Super Silhouette",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "123 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Nissan",
        "model":  "1985 Nissan Safari Turbo",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "175 D",
        "type":  "Eclectic Domestics",
        "make":  "Nissan",
        "model":  "1987 Nissan Be-1",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "432 C",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1987 Nissan Skyline GTS-R",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "145 D",
        "type":  "Eclectic Domestics",
        "make":  "Nissan",
        "model":  "1989 Nissan PAO",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "131 D",
        "type":  "Eclectic Domestics",
        "make":  "Nissan",
        "model":  "1989 Nissan S-Cargo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "800 S1",
        "type":  "Track Toys",
        "make":  "Nissan",
        "model":  "1989 Nissan S-Cargo Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "455 C",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1989 Nissan Silvia K\u0027s",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "858 S2",
        "type":  "Retro Racers",
        "make":  "Nissan",
        "model":  "1990 Nissan #12 Skyline GT-R (BNR32 Gr.A) JTC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "486 C",
        "type":  "Retro Rally",
        "make":  "Nissan",
        "model":  "1990 Nissan Pulsar GTI-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "234 D",
        "type":  "Eclectic Domestics",
        "make":  "Nissan",
        "model":  "1991 Nissan Figaro",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "541 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1992 Nissan Skyline GT-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "923 R",
        "type":  "Extreme Track Toys",
        "make":  "Nissan",
        "model":  "1993 Nissan #32 Skyline WTAC \u0027Xtreme GTR\u0027",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "339 D",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1993 Nissan 240SX",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "497 C",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1994 Nissan Fairlady Z Version S Twin Turbo",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "499 C",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1994 Nissan Silvia K\u0027s",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "498 C",
        "type":  "Retro Super Saloons",
        "make":  "Nissan",
        "model":  "1995 Nissan Gloria Gran Turismo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "545 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1995 Nissan NISMO GT-R LM",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "555 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1997 Nissan Skyline GT-R V-Spec",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "439 C",
        "type":  "Retro Super Saloons",
        "make":  "Nissan",
        "model":  "1997 Nissan Stagea RS Four V",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "848 S2",
        "type":  "Retro Racers",
        "make":  "Nissan",
        "model":  "1998 Nissan #23 Pennzoil NISMO Skyline GT-R",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "774 S1",
        "type":  "Retro Supercars",
        "make":  "Nissan",
        "model":  "1998 Nissan R390 (GT1)",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "494 C",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1998 Nissan Silvia K\u0027s Aero",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "547 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "1998 Nissan Skyline GT-R 40th Anniversary",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "996 R",
        "type":  "Extreme Track Toys",
        "make":  "Nissan",
        "model":  "2000 Nissan #36 Dream Project S15 Silvia WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "590 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "2000 Nissan Skyline GT-R V Spec II",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "551 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "2002 Nissan Silvia Spec-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "534 B",
        "type":  "Retro Sports Cars",
        "make":  "Nissan",
        "model":  "2003 Nissan Fairlady Z",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "568 B",
        "type":  "Modern Sports Cars",
        "make":  "Nissan",
        "model":  "2010 Nissan 370Z",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "703 S1",
        "type":  "Modern Supercars",
        "make":  "Nissan",
        "model":  "2012 Nissan GT-R Black Edition (R35)",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "850 S2",
        "type":  "Extreme Track Toys",
        "make":  "Nissan",
        "model":  "2012 Nissan GT-R Black Edition (R35) Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "709 S1",
        "type":  "Modern Supercars",
        "make":  "Nissan",
        "model":  "2017 Nissan GT-R (R35)",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "603 A",
        "type":  "Modern Sports Cars",
        "make":  "Nissan",
        "model":  "2019 Nissan 370Z Nismo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "736 S1",
        "type":  "Track Toys",
        "make":  "Nissan",
        "model":  "2020 Nissan GT-R NISMO (R35)",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "741 S1",
        "type":  "Track Toys",
        "make":  "Nissan",
        "model":  "2024 Nissan GT-R Nismo",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "652 A",
        "type":  "Modern Sports Cars",
        "make":  "Nissan",
        "model":  "2024 Nissan Z NISMO",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "793 S1",
        "type":  "Modern Supercars",
        "make":  "Noble",
        "model":  "2010 Noble M600",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "576 B",
        "type":  "Rally Monsters",
        "make":  "Opel",
        "model":  "1984 Opel Manta 400",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "918 R",
        "type":  "Extreme Track Toys",
        "make":  "Pagani",
        "model":  "2009 Pagani Zonda R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "812 S2",
        "type":  "Hypercars",
        "make":  "Pagani",
        "model":  "2010 Pagani Zonda Cinque Roadster",
        "collection":  "Autoshow",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "851 S2",
        "type":  "Hypercars",
        "make":  "Pagani",
        "model":  "2016 Pagani Huayra BC Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "954 R",
        "type":  "Extreme Track Toys",
        "make":  "Pagani",
        "model":  "2021 Pagani Huayra R",
        "collection":  "Seasonal",
        "country":  "Italy"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "Peel",
        "model":  "1962 Peel P50",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "Partnership DLC",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "Peel",
        "model":  "1962 Peel P50 Trolli Edition",
        "collection":  "Autoshow DLC",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "541 B",
        "type":  "Unlimited Buggies",
        "make":  "Penhall",
        "model":  "2011 Penhall The Cholla",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "500 C",
        "type":  "Retro Rally",
        "make":  "Peugeot",
        "model":  "1984 Peugeot 205 Turbo 16",
        "collection":  "Collection Journal",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "350 D",
        "type":  "Retro Hot Hatch",
        "make":  "Peugeot",
        "model":  "1991 Peugeot 205 Rallye",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "632 A",
        "type":  "Rally Monsters",
        "make":  "Peugeot",
        "model":  "2007 Peugeot 207 Super 2000",
        "collection":  "Seasonal",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "361 D",
        "type":  "Rods and Customs",
        "make":  "Plymouth",
        "model":  "1958 Plymouth Fury",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "445 C",
        "type":  "Classic Muscle",
        "make":  "Plymouth",
        "model":  "1968 Plymouth Barracuda Formula S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "441 C",
        "type":  "Classic Muscle",
        "make":  "Plymouth",
        "model":  "1971 Plymouth Cuda 426 HEMI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "439 C",
        "type":  "UTV\u0027s",
        "make":  "Polaris",
        "model":  "2021 Polaris RZR Pro XP Factory Racing Limited Edition",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "496 C",
        "type":  "UTV\u0027s",
        "make":  "Polaris",
        "model":  "2021 Polaris RZR Pro XP Ultimate",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "312 D",
        "type":  "Classic Muscle",
        "make":  "Pontiac",
        "model":  "1977 Pontiac Firebird Trans Am",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "382 D",
        "type":  "Retro Muscle",
        "make":  "Pontiac",
        "model":  "1987 Pontiac Firebird Trans Am GTA",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "777 S1",
        "type":  "Classic Racers",
        "make":  "Porsche",
        "model":  "1970 Porsche #3 917 LH",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "998 R",
        "type":  "Extreme Track Toys",
        "make":  "Porsche",
        "model":  "1970 Porsche #3 917 LH Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "490 C",
        "type":  "Rare Classics",
        "make":  "Porsche",
        "model":  "1973 Porsche 911 Carrera RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "550 B",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "1982 Porsche 911 Turbo 3.3",
        "collection":  "Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "623 A",
        "type":  "Rally Monsters",
        "make":  "Porsche",
        "model":  "1985 Porsche #185 959 Prodrive Rally Raid",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "661 A",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "1987 Porsche 959",
        "collection":  "Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "539 B",
        "type":  "Retro Sports Cars",
        "make":  "Porsche",
        "model":  "1989 Porsche 944 Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "652 A",
        "type":  "Retro Sports Cars",
        "make":  "Porsche",
        "model":  "1993 Porsche 911 Turbo S Leichtbau",
        "collection":  "Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "563 B",
        "type":  "Retro Sports Cars",
        "make":  "Porsche",
        "model":  "1993 Porsche 928 GTS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "594 B",
        "type":  "Retro Sports Cars",
        "make":  "Porsche",
        "model":  "1993 Porsche 968 Turbo S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "644 A",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "1995 Porsche 911 GT2",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "746 S1",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "1997 Porsche 911 GT1 Strassenversion",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "758 S1",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "2003 Porsche Carrera GT",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "674 A",
        "type":  "Retro Supercars",
        "make":  "Porsche",
        "model":  "2004 Porsche 911 GT3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "856 S2",
        "type":  "Extreme Track Toys",
        "make":  "Porsche",
        "model":  "2005 Porsche Cayman GT3 WTAC",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "726 S1",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2012 Porsche 911 GT3 RS 4.0",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "858 S2",
        "type":  "Hypercars",
        "make":  "Porsche",
        "model":  "2014 Porsche 918 Spyder",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "675 A",
        "type":  "Modern Sports Cars",
        "make":  "Porsche",
        "model":  "2018 Porsche 718 Cayman GTS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "803 S2",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2018 Porsche 911 GT2 RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "638 A",
        "type":  "Sports Utility Heroes",
        "make":  "Porsche",
        "model":  "2018 Porsche Cayenne Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "528 B",
        "type":  "Offroad",
        "make":  "Porsche",
        "model":  "2018 Porsche Macan LPR Rally Raid",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "853 S2",
        "type":  "Extreme Track Toys",
        "make":  "Porsche",
        "model":  "2019 Porsche #70 Porsche Motorsport 935",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "714 S1",
        "type":  "Modern Sports Cars",
        "make":  "Porsche",
        "model":  "2019 Porsche 911 Carrera S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "760 S1",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2019 Porsche 911 GT3 RS",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "725 S1",
        "type":  "Modern Super Saloons",
        "make":  "Porsche",
        "model":  "2020 Porsche Taycan Turbo S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "752 S1",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2021 Porsche 911 GT3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "865 S2",
        "type":  "Extreme Track Toys",
        "make":  "Porsche",
        "model":  "2021 Porsche Mission R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "737 S1",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2022 Porsche 718 Cayman GT4 RS",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "758 S1",
        "type":  "Track Toys",
        "make":  "Porsche",
        "model":  "2023 Porsche 911 GT3 RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Rally Monsters",
        "make":  "Porsche",
        "model":  "2023 Porsche 911 Rallye",
        "collection":  "Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "774 S1",
        "type":  "Modern Supercars",
        "make":  "Porsche",
        "model":  "2023 Porsche 911 Turbo S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "842 S2",
        "type":  "Extreme Track Toys",
        "make":  "Radical",
        "model":  "2015 Radical RXC Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "514 B",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Ram",
        "model":  "2024 Ram 1500 TRX",
        "collection":  "Autoshow",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Utility Heroes",
        "make":  "Reliant",
        "model":  "1972 Reliant Supervan III",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "322 D",
        "type":  "Classic Rally",
        "make":  "Renault",
        "model":  "1967 Renault 8 Gordini",
        "collection":  "Seasonal",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "417 C",
        "type":  "Retro Rally",
        "make":  "Renault",
        "model":  "1980 Renault 5 Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "400 D",
        "type":  "Retro Hot Hatch",
        "make":  "Renault",
        "model":  "1993 Renault Clio Williams",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "561 B",
        "type":  "Hot Hatch",
        "make":  "Renault",
        "model":  "2008 Renault Mégane R26.R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "538 B",
        "type":  "Super Hot Hatch",
        "make":  "Renault",
        "model":  "2010 Renault Megane RS 250",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "547 B",
        "type":  "Super Hot Hatch",
        "make":  "Renault",
        "model":  "2018 Renault Megane R.S.",
        "collection":  "Autoshow, Wheelspin",
        "country":  "France"
    },
    {
        "addon":  "",
        "class":  "913 R",
        "type":  "Hypercars",
        "make":  "Rimac",
        "model":  "2021 Rimac Nevera",
        "collection":  "Wheelspin, Seasonal",
        "country":  "Croatia"
    },
    {
        "addon":  "",
        "class":  "607 A",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Rivian",
        "model":  "2022 Rivian R1T",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "674 A",
        "type":  "Unlimited Offroad",
        "make":  "RJ Anderson",
        "model":  "2016 RJ Anderson #37 Polaris RZR Pro 2 Truck",
        "collection":  "Autoshow, Collection Journal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "677 A",
        "type":  "Unlimited Offroad",
        "make":  "RJ Anderson",
        "model":  "2021 RJ Anderson #37 Polaris RZR Pro 4 Truck",
        "collection":  "Wheelspin, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "835 S2",
        "type":  "Extreme Track Toys",
        "make":  "Saleen",
        "model":  "2017 Saleen S7 LM",
        "collection":  "Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "764 S1",
        "type":  "Retro Supercars",
        "make":  "Schuppan",
        "model":  "1993 Schuppan 962CR",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "582 B",
        "type":  "Rare Classics",
        "make":  "Shelby",
        "model":  "1965 Shelby Cobra 427 S/C",
        "collection":  "Collection Journal, Seasonal",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "515 B",
        "type":  "Classic Racers",
        "make":  "Shelby",
        "model":  "1965 Shelby Cobra Daytona Coupe",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "926 R",
        "type":  "Extreme Track Toys",
        "make":  "SIERRA Cars",
        "model":  "2020 SIERRA Cars #23 Yokohama ALPHA",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "346 D",
        "type":  "UTV\u0027s",
        "make":  "SIERRA Cars",
        "model":  "2021 SIERRA Cars 700R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "635 A",
        "type":  "UTV\u0027s",
        "make":  "SIERRA Cars",
        "model":  "2021 SIERRA Cars RX3",
        "collection":  "Autoshow, Wheelspin",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "707 S1",
        "type":  "Modern Muscle",
        "make":  "SRT",
        "model":  "2013 SRT Viper GTS",
        "collection":  "Autoshow, Wheelspin, Loyalty",
        "country":  "USA"
    },
    {
        "addon":  "",
        "class":  "159 D",
        "type":  "Utility Heroes",
        "make":  "Subaru",
        "model":  "1980 Subaru BRAT GL",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "406 C",
        "type":  "Retro Rally",
        "make":  "Subaru",
        "model":  "1990 Subaru LEGACY RS",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "281 D",
        "type":  "Eclectic Domestics",
        "make":  "Subaru",
        "model":  "1994 Subaru Vivio RX-R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "900 S2",
        "type":  "Extreme Track Toys",
        "make":  "Subaru",
        "model":  "1994 Subaru Vivio RX-R Forza Edition",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "466 C",
        "type":  "Retro Sports Cars",
        "make":  "Subaru",
        "model":  "1996 Subaru SVX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "600 B",
        "type":  "Retro Rally",
        "make":  "Subaru",
        "model":  "1998 Subaru Impreza 22B-STi Version",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "552 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2004 Subaru IMPREZA WRX STI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "570 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2005 Subaru IMPREZA WRX STI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "549 B",
        "type":  "Retro Super Saloons",
        "make":  "Subaru",
        "model":  "2005 Subaru LEGACY B4 2.0 GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "539 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2008 Subaru IMPREZA WRX STI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "547 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2011 Subaru WRX STI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "463 C",
        "type":  "Modern Sports Cars",
        "make":  "Subaru",
        "model":  "2013 Subaru BRZ",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "555 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2015 Subaru WRX STI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "757 S1",
        "type":  "Rally Monsters",
        "make":  "Subaru",
        "model":  "2018 Subaru WRX STI ARX Supercar",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "574 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2019 Subaru STI S209",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "551 B",
        "type":  "Modern Sports Cars",
        "make":  "Subaru",
        "model":  "2022 Subaru BRZ",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "700 A",
        "type":  "Unlimited Offroad",
        "make":  "Subaru",
        "model":  "2022 Subaru BRZ Forza Edition",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "538 B",
        "type":  "Modern Rally",
        "make":  "Subaru",
        "model":  "2022 Subaru WRX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "141 D",
        "type":  "Classic Sports Cars",
        "make":  "Toyota",
        "model":  "1965 Toyota Sports 800",
        "collection":  "Collection Journal, Wheelspin, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "Partnership DLC",
        "class":  "141 D",
        "type":  "Classic Sports Cars",
        "make":  "Toyota",
        "model":  "1965 Toyota Sports 800 Fanta Edition",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "377 D",
        "type":  "Rare Classics",
        "make":  "Toyota",
        "model":  "1969 Toyota 2000GT",
        "collection":  "Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "197 D",
        "type":  "Classic Sports Cars",
        "make":  "Toyota",
        "model":  "1974 Toyota Corolla SR5",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "157 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Toyota",
        "model":  "1979 Toyota FJ40",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "376 D",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1985 Toyota Sprinter Trueno GT Apex",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "600 B",
        "type":  "Track Toys",
        "make":  "Toyota",
        "model":  "1985 Toyota Sprinter Trueno GT Apex Forza Edition",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "397 D",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1989 Toyota MR2 SC",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "484 C",
        "type":  "Retro Super Saloons",
        "make":  "Toyota",
        "model":  "1991 Toyota Chaser GT Twin Turbo",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "344 D",
        "type":  "Eclectic Domestics",
        "make":  "Toyota",
        "model":  "1991 Toyota Sera",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "438 C",
        "type":  "Retro Rally",
        "make":  "Toyota",
        "model":  "1992 Toyota Celica GT-Four RC ST185",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "453 C",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1992 Toyota Supra 2.0 GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "584 B",
        "type":  "Unlimited Offroad",
        "make":  "Toyota",
        "model":  "1993 Toyota #1 T100 Baja Truck",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "479 C",
        "type":  "Retro Rally",
        "make":  "Toyota",
        "model":  "1994 Toyota Celica GT-Four ST205",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "Time Attack Car Pack",
        "class":  "828 S2",
        "type":  "Extreme Track Toys",
        "make":  "Toyota",
        "model":  "1995 Toyota J\u0026J Motorsport Supra WTAC",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "522 B",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1995 Toyota MR2 GT",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "435 C",
        "type":  "Retro Hot Hatch",
        "make":  "Toyota",
        "model":  "1996 Toyota Starlet Glanza V",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "504 B",
        "type":  "Retro Super Saloons",
        "make":  "Toyota",
        "model":  "1997 Toyota Chaser 2.5 Tourer V",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "491 C",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1997 Toyota Soarer 2.5 GT-T",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "529 B",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "1998 Toyota Supra RZ",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "461 C",
        "type":  "Retro Super Saloons",
        "make":  "Toyota",
        "model":  "1999 Toyota Altezza RS200 Z EDITION",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "433 C",
        "type":  "Retro Sports Cars",
        "make":  "Toyota",
        "model":  "2003 Toyota Celica Sport Specialty II",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "181 D",
        "type":  "Retro Super Saloons",
        "make":  "Toyota",
        "model":  "2005 Toyota Crown Super Deluxe Taxi",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "460 C",
        "type":  "Modern Sports Cars",
        "make":  "Toyota",
        "model":  "2013 Toyota 86",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "685 A",
        "type":  "Track Toys",
        "make":  "Toyota",
        "model":  "2013 Toyota 86 Stories",
        "collection":  "Collection Journal, Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "332 D",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Toyota",
        "model":  "2016 Toyota Land Cruiser Arctic Trucks AT37",
        "collection":  "Seasonal",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "248 D",
        "type":  "Eclectic Domestics",
        "make":  "Toyota",
        "model":  "2017 Toyota JPN Taxi",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "421 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Toyota",
        "model":  "2019 Toyota 4Runner TRD Pro",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "409 C",
        "type":  "Pickups \u0026 4x4\u0027s",
        "make":  "Toyota",
        "model":  "2019 Toyota Tacoma TRD Pro",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "VIP",
        "class":  "998 R",
        "type":  "Extreme Track Toys",
        "make":  "Toyota",
        "model":  "2019 Toyota Tacoma TRD Pro Forza Edition",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "616 A",
        "type":  "Modern Sports Cars",
        "make":  "Toyota",
        "model":  "2020 Toyota GR Supra",
        "collection":  "Autoshow, Collection Journal, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "558 B",
        "type":  "Modern Rally",
        "make":  "Toyota",
        "model":  "2021 Toyota GR Yaris",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "556 B",
        "type":  "Modern Sports Cars",
        "make":  "Toyota",
        "model":  "2022 Toyota GR86",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "525 B",
        "type":  "Modern Super Saloons",
        "make":  "Toyota",
        "model":  "2023 Toyota Camry TRD",
        "collection":  "Autoshow",
        "country":  "Japan"
    },
    {
        "addon":  "Car Pass",
        "class":  "596 B",
        "type":  "Super Hot Hatch",
        "make":  "Toyota",
        "model":  "2023 Toyota GR Corolla",
        "collection":  "Autoshow DLC",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "456 C",
        "type":  "Sports Utility Heroes",
        "make":  "Toyota",
        "model":  "2025 Toyota Land Cruiser",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Japan"
    },
    {
        "addon":  "",
        "class":  "770 S1",
        "type":  "Retro Supercars",
        "make":  "TVR",
        "model":  "1998 TVR Cerbera Speed 12",
        "collection":  "Seasonal",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "672 A",
        "type":  "Retro Sports Cars",
        "make":  "TVR",
        "model":  "2005 TVR Sagaris",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "729 S1",
        "type":  "Modern Sports Cars",
        "make":  "TVR",
        "model":  "2018 TVR Griffith",
        "collection":  "Autoshow",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "925 R",
        "type":  "Extreme Track Toys",
        "make":  "Ultima",
        "model":  "2015 Ultima Evolution Coupe 1020",
        "collection":  "Autoshow, Wheelspin",
        "country":  "UK"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "Volkswagen",
        "model":  "1963 Volkswagen Beetle",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Cult Cars",
        "make":  "Volkswagen",
        "model":  "1963 Volkswagen Type 2 De Luxe",
        "collection":  "Autoshow, Collection Journal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "260 D",
        "type":  "Buggies",
        "make":  "Volkswagen",
        "model":  "1969 Volkswagen Class 5/1600 Baja Bug",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Utility Heroes",
        "make":  "Volkswagen",
        "model":  "1982 Volkswagen Pickup LX",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "314 D",
        "type":  "Retro Hot Hatch",
        "make":  "Volkswagen",
        "model":  "1983 Volkswagen Golf GTI",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "440 C",
        "type":  "Retro Rally",
        "make":  "Volkswagen",
        "model":  "1989 Volkswagen Rallye Golf",
        "collection":  "Seasonal",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "308 D",
        "type":  "Retro Hot Hatch",
        "make":  "Volkswagen",
        "model":  "1992 Volkswagen Golf Gti 16v Mk2",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "426 C",
        "type":  "Retro Hot Hatch",
        "make":  "Volkswagen",
        "model":  "1995 Volkswagen Corrado VR6",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "526 B",
        "type":  "Super Hot Hatch",
        "make":  "Volkswagen",
        "model":  "2010 Volkswagen Golf R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "548 B",
        "type":  "Hot Hatch",
        "make":  "Volkswagen",
        "model":  "2011 Volkswagen Scirocco R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "536 B",
        "type":  "Super Hot Hatch",
        "make":  "Volkswagen",
        "model":  "2014 Volkswagen Golf R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "764 S1",
        "type":  "Rally Monsters",
        "make":  "Volkswagen",
        "model":  "2017 Volkswagen #34 Andretti Rally Cross Beetle",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "546 B",
        "type":  "Super Hot Hatch",
        "make":  "Volkswagen",
        "model":  "2021 Volkswagen Golf R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "548 B",
        "type":  "Super Hot Hatch",
        "make":  "Volkswagen",
        "model":  "2022 Volkswagen Golf R",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Germany"
    },
    {
        "addon":  "",
        "class":  "435 C",
        "type":  "Classic Rally",
        "make":  "Volvo",
        "model":  "1983 Volvo 242 Turbo Evolution",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Sweden"
    },
    {
        "addon":  "",
        "class":  "107 D",
        "type":  "Utility Heroes",
        "make":  "Wuling",
        "model":  "2013 Wuling Sunshine S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "China"
    },
    {
        "addon":  "",
        "class":  "800 S1",
        "type":  "Track Toys",
        "make":  "Wuling",
        "model":  "2013 Wuling Sunshine S Forza Edition",
        "collection":  "Wheelspin, Seasonal",
        "country":  "China"
    },
    {
        "addon":  "",
        "class":  "100 D",
        "type":  "Hot Hatch",
        "make":  "Wuling",
        "model":  "2022 Wuling Hongguang Mini EV",
        "collection":  "Autoshow, Wheelspin",
        "country":  "China"
    },
    {
        "addon":  "",
        "class":  "906 R",
        "type":  "Hypercars",
        "make":  "Zenvo",
        "model":  "2019 Zenvo TSR-S",
        "collection":  "Autoshow, Wheelspin",
        "country":  "Denmark"
    }
];
