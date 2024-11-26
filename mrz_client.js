const countryListAlpha3 = {
    "AFG": "Afganistán",
    "ALB": "Albania",
    "DZA": "Argelia",
    "ASM": "Samoa Americana",
    "AND": "Andorra",
    "AGO": "Angola",
    "AIA": "Anguila",
    "ATA": "Antártida",
    "ATG": "Antigua y Barbuda",
    "ARG": "Argentina",
    "ARM": "Armenia",
    "ABW": "Aruba",
    "AUS": "Australia",
    "AUT": "Austria",
    "AZE": "Azerbaiyán",
    "BHS": "Las Bahamas",
    "BHR": "Baréin",
    "BGD": "Bangladesh",
    "BRB": "Barbados",
    "BLR": "Bielorrusia",
    "BEL": "Bélgica",
    "BLZ": "Belice",
    "BEN": "Benín",
    "BMU": "Bermudas",
    "BTN": "Bután",
    "BOL": "Bolivia (Estado Plurinacional de)",
    "BES": "Bonaire, San Eustaquio y Saba",
    "BIH": "Bosnia y Herzegovina",
    "BWA": "Botsuana",
    "BVT": "Isla Bouvet",
    "BRA": "Brasil",
    "IOT": "Territorio Británico del Océano Índico",
    "BRN": "Brunéi Darussalam",
    "BGR": "Bulgaria",
    "BFA": "Burkina Faso",
    "BDI": "Burundi",
    "CPV": "Cabo Verde",
    "KHM": "Camboya",
    "CMR": "Camerún",
    "CAN": "Canadá",
    "CYM": "Islas Caimán",
    "CAF": "República Centroafricana",
    "TCD": "Chad",
    "CHL": "Chile",
    "CHN": "China",
    "CXR": "Isla Christmas",
    "CCK": "Islas Cocos (Keeling)",
    "COL": "Colombia",
    "COM": "Comoras",
    "COD": "Congo (República Democrática del)",
    "COG": "Congo",
    "COK": "Islas Cook",
    "CRI": "Costa Rica",
    "HRV": "Croacia",
    "CUB": "Cuba",
    "CUW": "Curaçao",
    "CYP": "Chipre",
    "CZE": "Chequia",
    "CIV": "Côte d'Ivoire",
    "DNK": "Dinamarca",
    "DJI": "Yibuti",
    "DMA": "Dominica",
    "DOM": "República Dominicana",
    "ECU": "Ecuador",
    "EGY": "Egipto",
    "SLV": "El Salvador",
    "GNQ": "Guinea Ecuatorial",
    "ERI": "Eritrea",
    "EST": "Estonia",
    "SWZ": "Esuatini",
    "ETH": "Etiopía",
    "FLK": "Islas Malvinas",
    "FRO": "Islas Feroe",
    "FJI": "Fiyi",
    "FIN": "Finlandia",
    "FRA": "Francia",
    "GUF": "Guayana Francesa",
    "PYF": "Polinesia Francesa",
    "ATF": "Territorios Australes Franceses",
    "GAB": "Gabón",
    "GMB": "Gambia",
    "GEO": "Georgia",
    "DEU": "Alemania",
    "GHA": "Ghana",
    "GIB": "Gibraltar",
    "GRC": "Grecia",
    "GRL": "Groenlandia",
    "GRD": "Granada",
    "GLP": "Guadalupe",
    "GUM": "Guam",
    "GTM": "Guatemala",
    "GGY": "Guernsey",
    "GIN": "Guinea",
    "GNB": "Guinea-Bisáu",
    "GUY": "Guyana",
    "HTI": "Haití",
    "HMD": "Islas Heard y McDonald",
    "VAT": "Santa Sede (La)",
    "HND": "Honduras",
    "HKG": "Hong Kong",
    "HUN": "Hungría",
    "ISL": "Islandia",
    "IND": "India",
    "IDN": "Indonesia",
    "IRN": "Irán (República Islámica de)",
    "IRQ": "Irak",
    "IRL": "Irlanda",
    "IMN": "Isla de Man",
    "ISR": "Israel",
    "ITA": "Italia",
    "JAM": "Jamaica",
    "JPN": "Japón",
    "JEY": "Jersey",
    "JOR": "Jordania",
    "KAZ": "Kazajistán",
    "KEN": "Kenia",
    "KIR": "Kiribati",
    "PRK": "Corea (República Popular Democrática de)",
    "KOR": "Corea (República de)",
    "KWT": "Kuwait",
    "KGZ": "Kirguistán",
    "LAO": "República Democrática Popular Lao",
    "LVA": "Letonia",
    "LBN": "Líbano",
    "LSO": "Lesoto",
    "LBR": "Liberia",
    "LBY": "Libia",
    "LIE": "Liechtenstein",
    "LTU": "Lituania",
    "LUX": "Luxemburgo",
    "MAC": "Macao",
    "MDG": "Madagascar",
    "MWI": "Malawi",
    "MYS": "Malasia",
    "MDV": "Maldivas",
    "MLI": "Mali",
    "MLT": "Malta",
    "MHL": "Islas Marshall",
    "MTQ": "Martinica",
    "MRT": "Mauritania",
    "MUS": "Mauricio",
    "MYT": "Mayotte",
    "MEX": "México",
    "FSM": "Estados Federados de Micronesia",
    "MDA": "Moldavia (República de)",
    "MCO": "Mónaco",
    "MNG": "Mongolia",
    "MNE": "Montenegro",
    "MSR": "Montserrat",
    "MAR": "Marruecos",
    "MOZ": "Mozambique",
    "MMR": "Myanmar",
    "NAM": "Namibia",
    "NRU": "Nauru",
    "NPL": "Nepal",
    "NLD": "Países Bajos",
    "NCL": "Nueva Caledonia",
    "NZL": "Nueva Zelanda",
    "NIC": "Nicaragua",
    "NER": "Níger",
    "NGA": "Nigeria",
    "NIU": "Niue",
    "NFK": "Isla Norfolk",
    "MNP": "Islas Marianas del Norte",
    "NOR": "Noruega",
    "OMN": "Omán",
    "PAK": "Pakistán",
    "PLW": "Palaos",
    "PSE": "Palestina (Estado de)",
    "PAN": "Panamá",
    "PNG": "Papúa Nueva Guinea",
    "PRY": "Paraguay",
    "PER": "Perú",
    "PHL": "Filipinas",
    "PCN": "Pitcairn",
    "POL": "Polonia",
    "PRT": "Portugal",
    "PRI": "Puerto Rico",
    "QAT": "Catar",
    "MKD": "República de Macedonia del Norte",
    "ROU": "Rumanía",
    "RUS": "Federación Rusa",
    "RWA": "Ruanda",
    "REU": "Reunión",
    "BLM": "San Bartolomé",
    "SHN": "Santa Elena, Ascensión y Tristán de Acuña",
    "KNA": "San Cristóbal y Nieves",
    "LCA": "Santa Lucía",
    "MAF": "San Martín (parte francesa)",
    "SPM": "San Pedro y Miquelón",
    "VCT": "San Vicente y las Granadinas",
    "WSM": "Samoa",
    "SMR": "San Marino",
    "STP": "Santo Tomé y Príncipe",
    "SAU": "Arabia Saudita",
    "SEN": "Senegal",
    "SRB": "Serbia",
    "SYC": "Seychelles",
    "SLE": "Sierra Leona",
    "SGP": "Singapur",
    "SXM": "Sint Maarten (parte neerlandesa)",
    "SVK": "Eslovaquia",
    "SVN": "Eslovenia",
    "SLB": "Islas Salomón",
    "SOM": "Somalia",
    "ZAF": "Sudáfrica",
    "SGS": "Islas Georgias del Sur y Sandwich del Sur",
    "SSD": "Sudán del Sur",
    "ESP": "España",
    "LKA": "Sri Lanka",
    "SDN": "Sudán",
    "SUR": "Surinam",
    "SJM": "Svalbard y Jan Mayen",
    "SWE": "Suecia",
    "CHE": "Suiza",
    "SYR": "Siria",
    "TWN": "Taiwán",
    "TJK": "Tayikistán",
    "TZA": "Tanzania (República Unida de)",
    "THA": "Tailandia",
    "TLS": "Timor-Leste",
    "TGO": "Togo",
    "TKL": "Tokelau",
    "TON": "Tonga",
    "TTO": "Trinidad y Tobago",
    "TUN": "Túnez",
    "TUR": "Turquía",
    "TKM": "Turkmenistán",
    "TCA": "Islas Turcas y Caicos",
    "TUV": "Tuvalu",
    "UGA": "Uganda",
    "UKR": "Ucrania",
    "ARE": "Emiratos Árabes Unidos",
    "GBR": "Reino Unido",
    "UMI": "Islas Ultramarinas Menores de los Estados Unidos",
    "USA": "Estados Unidos de América",
    "URY": "Uruguay",
    "UZB": "Uzbekistán",
    "VUT": "Vanuatu",
    "VEN": "Venezuela (República Bolivariana de)",
    "VNM": "Vietnam",
    "VGB": "Islas Vírgenes Británicas",
    "VIR": "Islas Vírgenes de los Estados Unidos",
    "WLF": "Wallis y Futuna",
    "ESH": "Sahara Occidental",
    "YEM": "Yemen",
    "ZMB": "Zambia",
    "ZWE": "Zimbabue",
    "ALA": "Islas Åland",
};

const passportValidityPeriods = {
    // Default is 10 if not specified
    "GBR": 10, // UK
    "USA": 10,
    "FRA": 10, // France
    "ESP": 10, // Spain
    "DEU": 10, // Germany
    "ITA": 10, // Italy
    "CAN": 5, // Canada (using 5 as default though they offer both 5 and 10)
    "AUS": 10, // Australia
    "JPN": 10, // Japan
    "CHN": 10, // China
    // Add more countries as needed
};

function getPassportValidityYears(countryCode, birthDate, expiryDate) {
    // Get the default validity period for the country, or default to 10 years
    let validityYears = passportValidityPeriods[countryCode] || 10;

    // Calculate age at time of issuance
    const expiryYear = parseInt("20" + expiryDate.substring(0, 2));
    const birthYear = parseInt(birthDate.split("/")[2]);
    const approximateAgeAtExpiry = expiryYear - birthYear;

    // Adjust validity period for minors in certain countries
    switch (countryCode) {
        case "ESP":
            // Spanish ID validity rules
            if (approximateAgeAtExpiry - 2 < 5) {
                validityYears = 2; // Under 5 years old
            } else if (approximateAgeAtExpiry - 5 < 30) {
                validityYears = 5; // Between 5 and 30 years old
            } else if (approximateAgeAtExpiry - 10 < 70) {
                validityYears = 10; // Between 30 and 70 years old
            } else {
                validityYears = 99; // Over 70 years old (permanent) - using 99 to indicate permanent
            }
            break;
        case "GBR":
        case "USA":
            if (approximateAgeAtExpiry - validityYears < 16) {
                validityYears = 5;
            }
            break;
        case "AUS":
            if (approximateAgeAtExpiry - validityYears < 18) {
                validityYears = 5;
            }
            break;
        case "JPN":
            if (approximateAgeAtExpiry - validityYears < 20) {
                validityYears = 5;
            }
            break;
            // Add more special cases as needed
    }

    return validityYears;
}

function parseMRZ(mrzString) {
    mrzString = mrzString.replaceAll(";", "<");
    mrzString = mrzString.replace(/\s/g, "");
    // 2. Detectar el tipo de MRZ
    let mrzType = getMRZType(mrzString);

    // 1. Normalizar la cadena MRZ
    // mrzString = mrzString.replace(/\s/g, '');
    console.log(mrzString);

    // 3. Extraer los campos usando expresiones regulares
    let data = {};
    switch (mrzType) {
        case "TD1":
            data = parseMRZWithRegex(mrzString, TD1_REGEX);
            break;
        case "TD2":
            data = parseMRZWithRegex(mrzString, TD2_REGEX);
            break;
        case "TD3":
            data = parseMRZWithRegex(mrzString, TD3_REGEX);
            break;
        default:
            throw new Error("Tipo de MRZ no válido");
    }

    // 4. Validar los campos (checksum, fechas, etc.)

    // 5. Devolver los datos extraídos
    return data;
}

// Expresiones regulares para cada tipo de MRZ (obtenidas de Doubango)
const TD1_REGEX =
    /([A|C|I][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{9})([0-9<]{1})([A-Z0-9<]{15})([0-9]{6})([0-9]{1})([M|F|X|<]{1})([0-9]{6})([0-9]{1})([A-Z]{3})([A-Z0-9<]{11})([0-9]{1})([A-Z0-9<]{30})/;
const TD2_REGEX =
    /([A|C|I][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{31})([A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([M|F|X|<]{1})([0-9]{6})([0-9]{1})([A-Z0-9<]{7})([0-9]{1})/;
const TD3_REGEX =
    /(P[A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{39})((?:[A-Z]{2})?[A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([M|F|X|<]{1})([0-9]{6})([0-9]{1})([A-Z0-9<]{14})([0-9<]{1})([0-9<]{1})/;

function getMRZType(mrzString) {
    if (mrzString.length === 30 * 3) {
        return "TD1";
    } else if (mrzString.length === 44 * 2) {
        return mrzString[0] === "P" ? "TD3" : "MRZ_DOCUMENT_TYPE_MRVA";
    } else if (mrzString.length === 36 * 2) {
        return mrzString[0] === "V" ? "MRZ_DOCUMENT_TYPE_MRVB" : "TD2";
    } else if (mrzString[0] === "P" && mrzString.includes("FIN")) {
        return "TD3";
    } else {
        return "MRZ_DOCUMENT_TYPE_UNKNOWN";
    }
}

function mrzDateToStandardDate(date, isBirthDate) {
    const year = date.substring(0, 2);
    const month = date.substring(2, 4);
    const day = date.substring(4, 6);

    if (isBirthDate) {
        return day + "/" + month + "/" +
            (new Date().getFullYear() - 2000 < year ? "19" : "20") + year;
    } else {
        return day + "/" + month + "/" + "20" + year;
    }
}

function mrzExpireDateToIssueDateStandard(date, countryCode, birthDate) {
    const year = date.substring(0, 2);
    const month = date.substring(2, 4);
    const day = date.substring(4, 6);

    // Get the appropriate validity period
    const validityYears = getPassportValidityYears(
        countryCode,
        birthDate,
        date,
    );

    if (validityYears === 99) {
        return day + "/" + month + "/" + "20" +
            (parseInt(year) - 10).toString(); // Just for reference
    }

    // Calculate issue date by subtracting the validity period
    return day + "/" + month + "/" + "20" +
        (parseInt(year) - validityYears).toString();
}

function TD1Spanish(match, data) {
    data.documentType = data.countryCode === match[11] ? "D" : "N";
    data.documentNumber = match[5].replace(/</g, "");
    data.birthDate = mrzDateToStandardDate(match[6], true);
    data.sex = match[8];
    data.issueDate = mrzExpireDateToIssueDateStandard(
        match[9],
        match[2],
        data.birthDate,
    );
    data.nationality = countryListAlpha3[match[11]];
    const surname = match[14].split("<<")[0].replace(/</g, " ").trim();
    const lastSpaceIndex = surname.lastIndexOf(" ");
    data.surname = surname.substring(0, lastSpaceIndex).trim();
    data.surname2 = surname.substring(lastSpaceIndex + 1, surname.length)
        .trim();
    data.name = match[14].split("<<")[1].replace(/</g, " ");
    return data;
}

function TD1Belgian(match, data) {
    data.documentType = "I";
    data.documentNumber = match[3].replace(/</g, "") +
        match[5].replace(/</g, "").substring(0, 3);
    data.birthDate = mrzDateToStandardDate(match[6], true);
    data.sex = match[8];
    data.issueDate = mrzExpireDateToIssueDateStandard(
        match[9],
        match[2],
        data.birthDate,
    );
    data.nationality = countryListAlpha3[match[11]];

    // Belgian specific name parsing
    const nameParts = match[14].split("<<").filter((part) => part !== "");
    data.surname = nameParts[0].replace(/</g, " ").trim();
    data.name = nameParts.slice(1).join(" ").replace(/</g, " ").trim();

    return data;
}

function TD1Data(match, data) {
    switch (data.countryCode) {
        case "ESP":
            data = TD1Spanish(match, data);
            break;
        case "BEL":
            data = TD1Belgian(match, data);
            break;
        default:
            data.documentType = "I";
            data.optionalData1 = match[5].replace(/</g, "");
            data.birthDate = mrzDateToStandardDate(match[6], true);
            data.sex = match[8];
            data.issueDate = mrzExpireDateToIssueDateStandard(
                match[9],
                match[2],
                data.birthDate,
            );
            data.nationality = countryListAlpha3[match[11]];
            data.optionalData2 = match[12].replace(/</g, "");
            data.compositeCheckDigit = match[13];
            data.surname = match[14].split("<<")[0].replace(/</g, " ");
            data.name = match[14].split("<<")[1].replace(/</g, " ");
    }
    return data;
}

function TD2Data(match, data) {
    data.optionalData1 = match[5].replace(/</g, "");
    data.birthDate = match[6];
    data.birthDateCheckDigit = match[7];
    data.sex = match[8];
    data.expiryDate = match[9];
    data.expiryDateCheckDigit = match[10];
    data.nationality = match[11];
    data.optionalData2 = match[12].replace(/</g, "");
    data.compositeCheckDigit = match[13];
    return data;
}

function TD3Finnish(match, data) {
    data.documentType = "P"; // Passport
    data.countryCode = "Finlandia"; // Finland
    data.surname = match[3].split("<<")[0].replace(/</g, " ");
    data.name = match[3].split("<<")[1].replace(/</g, " ");
    data.documentNumber = match[4].replace(/</g, "");
    data.nationality = countryListAlpha3[match[6]];
    data.birthDate = mrzDateToStandardDate(match[7], true);
    data.sex = match[9];
    data.issueDate = mrzExpireDateToIssueDateStandard(
        match[10],
        "FIN",
        data.birthDate,
    );

    return data;
}

function TD3Data(match, data) {
    if (data.countryCode === "ESP") {
        const surname = match[3].split("<<")[0].replace(/</g, " ").trim();
        const lastSpaceIndex = surname.lastIndexOf(" ");
        data.surname = surname.substring(0, lastSpaceIndex).trim();
        data.surname2 = surname.substring(lastSpaceIndex + 1, surname.length)
            .trim();
    } else {
        data.surname = match[3].split("<<")[0].replace(/</g, " ");
    }

    data.name = match[3].split("<<")[1].replace(/</g, " ");
    data.documentNumber = match[4];
    data.nationality = countryListAlpha3[match[6]];
    data.birthDate = mrzDateToStandardDate(match[7], true);
    data.sex = match[9];
    data.issueDate = mrzExpireDateToIssueDateStandard(
        match[10],
        match[2],
        data.birthDate,
    );
    return data;
}

function parseMRZWithRegex(mrzString, regex) {
    let match = mrzString.match(regex);
    if (match) {
        let data = {};
        console.log(match);

        // Asignar los grupos capturados a las propiedades del objeto data
        data.documentType = match[1].replace(/</g, "");
        data.countryCode = match[2];
        data.documentNumber = match[3].replace(/</g, "");

        if (regex === TD1_REGEX) {
            data = TD1Data(match, data);
        } else if (regex === TD2_REGEX) {
            data = TD2Data(match, data);
        } else if (regex === TD3_REGEX) {
            data = TD3Data(match, data);
        }

        data.countryCode = countryListAlpha3[data.countryCode];

        return data;
    } else {
        throw new Error("Formato de MRZ inválido");
    }
}

function validateMRZData(data, mrzType) {
    // Validar fechas
    validateDate(data.birthDate);
    validateDate(data.expiryDate);

    // Validar checksums
    if (
        !validateCheckDigit(data.documentNumber + data.documentNumberCheckDigit)
    ) {
        throw new Error("Número de documento inválido (checksum)");
    }
    if (!validateCheckDigit(data.birthDate + data.birthDateCheckDigit)) {
        throw new Error("Fecha de nacimiento inválida (checksum)");
    }
    if (!validateCheckDigit(data.expiryDate + data.expiryDateCheckDigit)) {
        throw new Error("Fecha de expiración inválida (checksum)");
    }

    // Validar checksum compuesto (solo para TD1 y TD2)
    if (mrzType === "TD1" || mrzType === "TD2") {
        let compositeString = "";
        for (let key in data) {
            if (data.hasOwnProperty(key) && key !== "compositeCheckDigit") {
                compositeString += data[key];
            }
        }
        if (!validateCheckDigit(compositeString + data.compositeCheckDigit)) {
            throw new Error("Checksum compuesto inválido");
        }
    }
}

function validateDate(dateString) {
    const year = parseInt(dateString.substring(0, 2));
    const month = parseInt(dateString.substring(2, 4));
    const day = parseInt(dateString.substring(4, 6));
    const date = new Date(year + 2000, month - 1, day); // Asumiendo que el año es posterior al 2000
    if (isNaN(date.getTime())) {
        throw new Error("Fecha inválida");
    }
}

function validateCheckDigit(str) {
    const weights = [7, 3, 1];
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let value = char >= "0" && char <= "9"
            ? parseInt(char)
            : char.charCodeAt(0) - 55;
        sum += value * weights[i % 3];
    }
    return sum % 10 === 0;
}

function simulateTyping(inputElement, text, simulateEnter = false) {
    inputElement.value = text;

    const inputEvent = new Event("input", { bubbles: true });
    inputElement.dispatchEvent(inputEvent);

    const changeEvent = new Event("change", { bubbles: true });
    inputElement.dispatchEvent(changeEvent);

    // Simulate Enter key press if required
    if (simulateEnter) {
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
        });
        inputElement.dispatchEvent(enterEvent);
    }

    console.log(`Texto simulado en "${inputElement}": "${text}"`);
}

function writeToFields(
    {
        documentNumber,
        documentType,
        nationality,
        countryCode,
        surname2,
        surname,
        name,
        issueDate,
        birthDate,
        sex,
    },
) {
    const idNumberInput = document.querySelector(
        "#general > div:nth-child(2) > div:nth-child(1) > div > input",
    );
    const idTypeInput = document.querySelector("#TipoDocumentoIdentificativo");
    const nameInput = document.querySelector(
        "#general > div:nth-child(3) > div:nth-child(2) > div > input",
    );
    const apellidosInput = document.querySelector(
        "#general > div:nth-child(2) > div:nth-child(2) > div > input",
    );
    const apellidos2Input = document.querySelector(
        "#general > div:nth-child(3) > div:nth-child(1) > div > input",
    );
    const issueDateInput = document.querySelector(
        "#general > div:nth-child(8) > div.col-md-6.margin-bottom > div > ofi-datepicker > div > div > div > input",
    );
    const birthDateInput = document.querySelector(
        "#general > fieldset > div:nth-child(1) > div:nth-child(1) > div > ofi-datepicker > div > div > div > input",
    );
    const sexInput = document.querySelector("#ClienteDatosIdentificativosSexo");
    const nationalityInput = document.querySelector(
        "#general > div:nth-child(5) > div:nth-child(1) > div > input",
    );
    const countryInput = document.querySelector(
        "#general > div.ng-scope > div > div:nth-child(3) > div > div > input",
    );

    simulateTyping(idNumberInput, documentNumber);
    simulateTyping(idTypeInput, documentType);
    simulateTyping(apellidosInput, surname);
    simulateTyping(apellidos2Input, surname2 == null ? "" : surname2);
    simulateTyping(nameInput, name);
    simulateTyping(nationalityInput, nationality, true);
    simulateTyping(countryInput, countryCode, true);
    simulateTyping(issueDateInput, issueDate);
    simulateTyping(birthDateInput, birthDate);
    simulateTyping(sexInput, sex);
}

function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector(selector)) {
            callback(); // Ejecutar la función deseada
        }
    });

    // Configurar el observador para observar cambios en todo el DOM
    observer.observe(document.body, { childList: true, subtree: true });
}

function setup() {
    waitForElement("#tabGeneral", () => {
        if (!document.getElementById("mrzinput")) {
            const tabsElement = document.querySelector(
                "body > div:nth-child(1) > div > div > div > form > div > div.panel-heading > ul",
            );
            const inputBox = document.createElement("input");
            inputBox.id = "mrzinput";
            inputBox.type = "text";
            inputBox.placeholder = "Clicame y escanea con la pistola";
            //inputBox.style.position = 'fixed';
            inputBox.style.bottom = "10px";
            inputBox.style.left = "10px";
            inputBox.style.zIndex = "10000";
            inputBox.style.padding = "5px";
            inputBox.style.border = "1px solid #ccc";
            inputBox.style.borderRadius = "4px";
            inputBox.style.width = "300px";
            inputBox.style.height = "60px";
            inputBox.style.marginTop = "6px";
            inputBox.style.marginLeft = "545px";

            inputBox.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    const inputValue = inputBox.value;
                    if (inputValue.trim() === "") {
                        console.log("El campo de texto está vacío.");
                        return;
                    }

                    console.log(`Texto ingresado: ${inputValue}`);

                    // Procesar el texto ingresado
                    const document = parseMRZ(inputValue);

                    // Simular escritura en el campo de destino
                    writeToFields(document); // Cambia el selector aquí
                }
            });

            tabsElement.append(inputBox);
        }
    });
}
