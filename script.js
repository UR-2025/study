// script.js

// Objeto que contiene toda la información de estudio extraída del PDF
const studyData = {
    "introduccion": {
        title: "Introducción a la Fitoterapia",
        icon: "🌿", // Icono para el tema
        summary: `La Fitoterapia es el uso de plantas con fines terapéuticos y forma parte de la Medicina Tradicional y Complementaria. El estudio abarca el concepto, antecedentes históricos, exponentes principales, las plantas medicinales, metabolitos secundarios, su efecto terapéutico, prescripción, modo de acción, preparación, dosis, indicaciones, contraindicaciones y efectos colaterales.`,
        questions: [
            {
                question: "¿Qué es la Fitoterapia?",
                answer: "Es el uso de plantas con fines terapéuticos.",
                type: "multiple-choice",
                options: [
                    "Es el estudio de los animales.",
                    "Es el uso de plantas con fines terapéuticos.",
                    "Es la ciencia de los minerales.",
                    "Es la práctica de la cirugía."
                ]
            },
            {
                question: "¿A qué tipo de medicina pertenece la Fitoterapia según el documento?",
                answer: "Medicina Tradicional y Complementaria.",
                type: "multiple-choice",
                options: [
                    "Medicina Moderna.",
                    "Medicina Quirúrgica.",
                    "Medicina Tradicional y Complementaria.",
                    "Medicina Avanzada."
                ]
            },
            {
                question: "¿Qué aspectos del estudio de la fitoterapia abarca el documento?",
                answer: "Concepto, antecedentes, exponentes, plantas medicinales, metabolitos secundarios, efecto terapéutico, prescripción, modo de acción, preparación, dosis, indicaciones, contraindicaciones y efectos colaterales.",
                type: "multiple-choice",
                options: [
                    "Solo el concepto y la historia.",
                    "Únicamente la preparación de las plantas.",
                    "Concepto, antecedentes, exponentes, plantas medicinales, metabolitos secundarios, efecto terapéutico, prescripción, modo de acción, preparación, dosis, indicaciones, contraindicaciones y efectos colaterales.",
                    "Solo los efectos colaterales."
                ]
            }
        ],
        examples: [],
        explanation: `La Fitoterapia se basa en el conocimiento ancestral y científico de las propiedades de las plantas para prevenir, aliviar o curar enfermedades. Es un campo amplio que requiere entender no solo las plantas en sí, sino también cómo sus componentes actúan en el cuerpo.`
    },
    "metabolismo-plantas": {
        title: "Metabolismo de las Plantas",
        icon: "🌱",
        summary: `Las plantas realizan Metabolismo Primario (Fotosíntesis) para su supervivencia, crecimiento y reproducción, produciendo alimentos. También realizan Metabolismo Secundario, que produce principios activos útiles en fitoterapia.`,
        questions: [
            {
                question: "¿Cuál es el propósito principal del Metabolismo Primario en las plantas?",
                answer: "Producir alimentos para la supervivencia, crecimiento y reproducción de la planta.",
                type: "multiple-choice",
                options: [
                    "Producir toxinas.",
                    "Producir alimentos para la supervivencia, crecimiento y reproducción de la planta.",
                    "Producir oxígeno para la atmósfera.",
                    "Producir flores de colores."
                ]
            },
            {
                question: "¿Qué tipo de metabolitos son útiles en fitoterapia?",
                answer: "Metabolitos secundarios.",
                type: "multiple-choice",
                options: [
                    "Metabolitos primarios.",
                    "Metabolitos terciarios.",
                    "Metabolitos secundarios.",
                    "Metabolitos inorgánicos."
                ]
            },
            {
                question: "¿Qué proceso fundamental se menciona como parte del Metabolismo Primario?",
                answer: "Fotosíntesis.",
                type: "multiple-choice",
                options: [
                    "Respiración.",
                    "Fermentación.",
                    "Fotosíntesis.",
                    "Transpiración."
                ]
            }
        ],
        examples: [],
        explanation: `El Metabolismo Primario es esencial para la vida de la planta, como la fotosíntesis que genera azúcares. El Metabolismo Secundario produce una vasta gama de compuestos (principios activos) que no son directamente necesarios para la supervivencia básica de la planta, pero que cumplen funciones ecológicas (defensa, atracción de polinizadores) y, lo más importante para la fitoterapia, tienen propiedades medicinales.`
    },
    "principios-activos": {
        title: "Los Principios Activos",
        icon: "🧪",
        summary: `Los principios activos son los compuestos a los que se les atribuye acción terapéutica. Pueden estar presentes uno solo (ej. ácido salicílico en Sauce) o varios actuando en sinergia. Se producen en diferentes situaciones de la planta (día/noche, cambios de estaciones, tipo de suelo, altitud) y generalmente ofrecen mezclas complejas de acción similar.`,
        questions: [
            {
                question: "¿Qué son los principios activos en el contexto de la fitoterapia?",
                answer: "Son los compuestos a los que se les atribuye acción terapéutica.",
                type: "multiple-choice",
                options: [
                    "Son los componentes inertes de la planta.",
                    "Son los compuestos a los que se les atribuye acción terapéutica.",
                    "Son los pigmentos de la planta.",
                    "Son las estructuras de soporte de la planta."
                ]
            },
            {
                question: "¿Cómo pueden actuar los principios activos en las plantas?",
                answer: "Pueden actuar individualmente o varios en sinergia.",
                type: "multiple-choice",
                options: [
                    "Solo actúan individualmente.",
                    "Solo actúan en sinergia.",
                    "No tienen acción.",
                    "Pueden actuar individualmente o varios en sinergia."
                ]
            },
            {
                question: "¿Qué factores influyen en la producción de principios activos en las plantas?",
                answer: "Día/noche, cambios de estaciones, tipo de suelo, altitud, entre otros.",
                type: "multiple-choice",
                options: [
                    "Solo la cantidad de agua.",
                    "Únicamente la luz solar.",
                    "Día/noche, cambios de estaciones, tipo de suelo, altitud, entre otros.",
                    "Solo la presencia de insectos."
                ]
            }
        ],
        examples: [
            "Ácido salicílico en Sauce (actúa solo)",
            "Mezclas complejas de acción similar (ej. en la producción de principios activos)."
        ],
        explanation: `La sinergia es un concepto clave en fitoterapia: significa que la combinación de varios compuestos de una planta puede tener un efecto terapéutico mayor o más equilibrado que el de un solo compuesto aislado. La producción de estos compuestos varía según factores ambientales, lo que influye en la concentración y potencia de las plantas medicinales.`
    },
    "glucosidos": {
        title: "Glúcidos (Azúcares)",
        icon: "🍬",
        summary: `Los glúcidos son un grupo de gran importancia en fitoterapia, tanto en cantidad como en acción medicinal. Incluyen sustancias de reserva como harinas, almidones y azúcares. Se dividen en Holósidos (solo azúcares) y Heterósidos (azúcares más otros componentes).`,
        questions: [
            {
                question: "¿Cuál es la diferencia entre Holósidos y Heterósidos?",
                answer: "Holósidos son solo azúcares, mientras que Heterósidos son azúcares más otros componentes.",
                type: "multiple-choice",
                options: [
                    "Holósidos son grasas, Heterósidos son proteínas.",
                    "Holósidos son solo azúcares, mientras que Heterósidos son azúcares más otros componentes.",
                    "Holósidos son tóxicos, Heterósidos no.",
                    "No hay diferencia."
                ]
            },
            {
                question: "¿Qué tipo de sustancias de reserva incluyen los glúcidos?",
                answer: "Harinas, almidones y azúcares.",
                type: "multiple-choice",
                options: [
                    "Lípidos y proteínas.",
                    "Vitaminas y minerales.",
                    "Harinas, almidones y azúcares.",
                    "Solo agua."
                ]
            },
            {
                question: "¿Qué glúcido es útil en la diabetes por retardar la acción de los azúcares?",
                answer: "Salvado de avena.",
                type: "multiple-choice",
                options: [
                    "Pectina de las frutas.",
                    "Mucílago de Agar.",
                    "Salvado de avena.",
                    "Semilla de lino."
                ]
            },
            {
                question: "¿Qué glúcido tiene acción antidiarreica y regula el estreñimiento?",
                answer: "Semilla de lino.",
                type: "multiple-choice",
                options: [
                    "Salvado de cereales.",
                    "Pectina de las frutas.",
                    "Mucílago de Agar.",
                    "Semilla de lino."
                ]
            }
        ],
        examples: [
            "Holósidos de interés fitoterápico: Gomas, Mucílagos, Celulosa.",
            "Usos de glúcidos: Laxantes (Salvado de cereales, plantago), Calman irritación digestiva (mucílago de Agar), Provocan saciedad (pectina de frutas), Retardan acción de azúcares (salvado de avena, útil en diabetes), Acción antidiarreica y regulan estreñimiento (semilla de lino)."
        ],
        explanation: `Los glúcidos son fundamentales en la dieta y también ofrecen propiedades medicinales diversas. Los mucílagos, por ejemplo, son polisacáridos que forman geles en contacto con el agua, lo que les confiere propiedades demulcentes (calman y protegen las mucosas) y laxantes formadoras de volumen.`
    },
    "heterosidos": {
        title: "Heterósidos: Tipos y Acciones",
        icon: "💊",
        summary: `Los heterósidos son compuestos muy extendidos en el reino vegetal y constituyen la mayoría de los principios activos de las plantas. Incluyen varios grupos con acciones terapéuticas específicas.`,
        questions: [
            {
                question: "¿Qué tipo de heterósidos protegen los vasos sanguíneos y son antioxidantes?",
                answer: "Flavonoides.",
                type: "multiple-choice",
                options: [
                    "Saponósidos.",
                    "Iridoides.",
                    "Flavonoides.",
                    "Antraquinonas."
                ]
            },
            {
                question: "¿Qué heterósidos tienen acción laxante y purgante, y regulan la bilis?",
                answer: "Antraquinonas.",
                type: "multiple-choice",
                options: [
                    "Cumarinas.",
                    "Antraquinonas.",
                    "Salicilatos.",
                    "Hidroquinona."
                ]
            },
            {
                question: "¿Qué heterósidos son conocidos por su acción cardíaca, aumentando la energía contráctil del corazón?",
                answer: "Cardenólidos y Bufadienólidos.",
                type: "multiple-choice",
                options: [
                    "Taninos.",
                    "Alcaloides.",
                    "Cardenólidos y Bufadienólidos.",
                    "Principios amargos."
                ]
            },
            {
                question: "¿Qué heterósidos se caracterizan por formar espuma y estimular la circulación venosa?",
                answer: "Saponósidos.",
                type: "multiple-choice",
                options: [
                    "Flavonoides.",
                    "Iridoides.",
                    "Saponósidos.",
                    "Cianuratos."
                ]
            },
            {
                question: "¿Qué heterósidos son útiles como antibióticos frente a bacterias y hongos, y son antiinflamatorios?",
                answer: "Iridoides.",
                type: "multiple-choice",
                options: [
                    "Azufre.",
                    "Salicilatos.",
                    "Iridoides.",
                    "Hidroquinona."
                ]
            },
            {
                question: "¿Qué heterósidos se encuentran en la gayuba y tienen acción antibiótica sobre el sistema urinario?",
                answer: "Hidroquinona.",
                type: "multiple-choice",
                options: [
                    "Antraquinonas.",
                    "Cumarinas.",
                    "Hidroquinona.",
                    "Flavonoides."
                ]
            },
            {
                question: "¿Qué heterósidos, extraídos del haba tonka, son potentes anticoagulantes?",
                answer: "Cumarinas.",
                type: "multiple-choice",
                options: [
                    "Cardenólidos.",
                    "Cianuratos.",
                    "Cumarinas.",
                    "Salicilatos."
                ]
            }
        ],
        examples: [
            "**Flavonoides:** Protectores de vasos sanguíneos, antioxidantes, antiespasmódicos, antialérgicos, diuréticos. Isoflavonas de soya (estimulan estrógenos femeninos, útiles en menopausia).",
            "**Antocianidinas:** (Incluidas en flavonoides) Pigmento azul, violeta o rojo. Protegen la pared de los vasos sanguíneos (várices), regeneran la púrpura de la retina (protectores visuales en diabetes).",
            "**Saponósidos:** Disminuyen la tensión superficial (forman espuma). Irritantes a la mucosa. Estimulan la circulación venosa y edemas, expectorantes y calmantes de la tos. Ejemplos: Zarzaparrilla, digital, regaliz.",
            "**Iridoides:** Sabor amargo. Antibióticos (bacterias, hongos, parásitos, tenias), antiinflamatorios, cicatrizantes, sedantes en artritis. Ejemplos: Llantén, ajenjo, valeriana, diente de león, ortiga, hojas de olivo, cardo bendito.",
            "**Cianuratos:** Liberan cianuro al descomponerse. Estimulan la respiración (en dosis elevadas son venenos celulares). Ejemplos: Almendras amargas, semillas de albaricoque.",
            "**Azufre:** Eliminan mal olor (col, mostaza, ajo, cebolla). Antibacterianas, antifúngicas, antiagregantes plaquetarias, reductoras del colesterol. Ejemplos: Cebolla, ajo.",
            "**Salicilatos:** (Del sauce) Antiinflamatorios, antifebriles, antirreumáticos, diuréticos, sudoríficos. Externamente irritantes descamativos. Ejemplos: Ulmaria, abedul.",
            "**Antraquinonas:** Acción laxante y purgante, reguladora biliar (actúan sobre el colon). Frescos son irritantes, secos suaves. Ejemplos: Frángula, sen, aloe, ruibarbo.",
            "**Hidroquinona:** Acción antibiótica sobre el sistema urinario y genital. Ricos en arbutósidos. Ejemplos: Gayuba, madroño, hoja de frambueso, hoja de arándanos.",
            "**Cardenólidos y Bufadienólidos:** Acción cardíaca (aumentan energía contráctil, reducen ritmo, mejoran conducción del impulso). Ejemplos: Adelfa, digital.",
            "**Cumarinas:** Potente anticoagulante, tónico venoso, vasodilatador coronario. Ejemplos: Haba tonka, castaño de indias, meliloto, angélica."
        ],
        explanation: `Los heterósidos son una clase muy diversa de compuestos vegetales. Su estructura consiste en una parte azucarada (glicona) y una parte no azucarada (aglicona o genina). La aglicona es a menudo la responsable de la actividad biológica, mientras que la glicona influye en la solubilidad y transporte del compuesto en la planta y en el organismo.`
    },
    "grasas-proteinas": {
        title: "Grasas y Proteínas",
        icon: "🥑",
        summary: `Las grasas en las plantas pueden ser revestimiento, estructura íntima (como la lecitina de soya) o grasa de reserva (aceites y mantecas como cacao, karité). Las proteínas incluyen enzimas (ej. proteasas útiles en trastornos digestivos) y lectinas (de interés antitumoral por ser inmunoestimulantes, aunque algunas son tóxicas como la ricina del ricino).`,
        questions: [
            {
                question: "¿Qué tipo de grasas son la lecitina de soya y el cacao?",
                answer: "Lecitina de soya es una grasa de estructura íntima, y el cacao es una grasa de reserva (manteca).",
                type: "multiple-choice",
                options: [
                    "Grasas de revestimiento.",
                    "Grasas de reserva.",
                    "Lecitina de soya es una grasa de estructura íntima, y el cacao es una grasa de reserva (manteca).",
                    "Grasas estructurales."
                ]
            },
            {
                question: "¿Qué enzimas proteicas son útiles en trastornos digestivos?",
                answer: "Proteasas, como la papaína (papaya verde) y la bromelina (piña).",
                type: "multiple-choice",
                options: [
                    "Amilasas.",
                    "Lipasas.",
                    "Proteasas, como la papaína (papaya verde) y la bromelina (piña).",
                    "Celulasas."
                ]
            },
            {
                question: "¿Qué lectina se menciona con elevada toxicidad?",
                answer: "La ricina del ricino.",
                type: "multiple-choice",
                options: [
                    "La lectina del muérdago.",
                    "La ricina del ricino.",
                    "La papaína.",
                    "La bromelina."
                ]
            }
        ],
        examples: [
            "Grasas: Lecitina de soya (estructura íntima), Cacao, Karité (grasas de reserva).",
            "Enzimas: Papaína (papaya verde), Bromelina (piña).",
            "Lectinas: Muérdago (inmunoestimulante antitumoral), Ricina del ricino (elevada toxicidad)."
        ],
        explanation: `Aunque no siempre se asocian directamente con la "acción terapéutica" de la misma manera que los principios activos secundarios, las grasas y proteínas de las plantas juegan roles importantes. Las enzimas pueden ayudar en la digestión, y ciertas lectinas están siendo investigadas por sus propiedades inmunomoduladoras y antitumorales, aunque su uso debe ser muy cauteloso debido a la toxicidad potencial de algunas.`
    },
    "alcaloides": {
        title: "Alcaloides",
        icon: "⚗️",
        summary: `Los alcaloides son compuestos nitrogenados con potentes actividades farmacológicas. Históricamente, se aislaron muchos alcaloides importantes como la morfina (1803), quinina y emetina (1820), cafeína (1818), codeína (1832), atropina, colchicina e hiociamina (1833). Hoy se conocen más de 3000.`,
        questions: [
            {
                question: "¿Qué tipo de compuestos son los alcaloides?",
                answer: "Compuestos nitrogenados.",
                type: "multiple-choice",
                options: [
                    "Compuestos de carbono.",
                    "Compuestos de oxígeno.",
                    "Compuestos nitrogenados.",
                    "Compuestos de azufre."
                ]
            },
            {
                question: "¿Qué alcaloide fue aislado de la amapola (opio) por Friedrich S. en 1803?",
                answer: "Morfina.",
                type: "multiple-choice",
                options: [
                    "Cafeína.",
                    "Quinina.",
                    "Morfina.",
                    "Atropina."
                ]
            },
            {
                question: "¿Qué alcaloides tienen acción depresora en el SNC?",
                answer: "Morfina y Codeína.",
                type: "multiple-choice",
                options: [
                    "Cafeína y Cocaína.",
                    "Atropina y Tubocurarina.",
                    "Morfina y Codeína.",
                    "Papaverina y Quinina."
                ]
            },
            {
                question: "¿Qué alcaloide se menciona como hipertensor?",
                answer: "Efedrina.",
                type: "multiple-choice",
                options: [
                    "Ajmalina.",
                    "Quinidina.",
                    "Efedrina.",
                    "Yohimbina."
                ]
            },
            {
                question: "¿Qué alcaloide se usa como antiprotozoario para el paludismo?",
                answer: "Quinina.",
                type: "multiple-choice",
                options: [
                    "Arecolina.",
                    "Vincaleucoblastina.",
                    "Boldina.",
                    "Quinina."
                ]
            }
        ],
        examples: [
            "**Actividad en el SNC:**",
            "Deprimen: Morfina, Codeína.",
            "Excitan: Cafeína (café, té, cacao), Cocaína.",
            "Paralizan: Atropina, Tubocurarina.",
            "Anestésicos locales: Cocaína.",
            "Antiespasmódicos: Papaverina.",
            "**Acción en el sistema circulatorio y el corazón:**",
            "Antiarritmicos: Ajmalina, Quinidina.",
            "Depresores: Quinina.",
            "Hipertensores: Efedrina.",
            "Hipotensores: Yohimbina, alcaloides de la rawolfia.",
            "**Otros:**",
            "Antiprotozoarios: Quinina (paludismo).",
            "Antihelmínticos: Arecolina.",
            "Antitumorales: Vincaleucoblastina.",
            "Digestivos: Boldina."
        ],
        explanation: `Los alcaloides son una clase muy diversa de metabolitos secundarios. Se caracterizan por contener al menos un átomo de nitrógeno en un anillo heterocíclico y suelen tener una potente actividad fisiológica, incluso a dosis bajas. Muchos medicamentos importantes derivan de alcaloides vegetales, lo que subraya su relevancia en la farmacología.`
    },
    "principios-amargos": {
        title: "Principios Amargos",
        icon: "🍋",
        summary: `Los principios amargos son grupos variados de sustancias con sabor amargo que estimulan la secreción de bilis y jugos del estómago, abriendo el apetito.`,
        questions: [
            {
                question: "¿Qué efecto principal tienen los principios amargos en el sistema digestivo?",
                answer: "Estimulan la secreción de bilis y jugos del estómago, abriendo el apetito.",
                type: "multiple-choice",
                options: [
                    "Inhiben la digestión.",
                    "Estimulan la secreción de bilis y jugos del estómago, abriendo el apetito.",
                    "Reducen el apetito.",
                    "No tienen efecto digestivo."
                ]
            },
            {
                question: "¿Qué ejemplos de principios amargos se mencionan en el documento?",
                answer: "Ésteres de la cinarina de la alcachofa, alcaloides de la quinina, o amargos del ajenjo.",
                type: "multiple-choice",
                options: [
                    "Ácido tartárico y succínico.",
                    "Taninos y saponósidos.",
                    "Ésteres de la cinarina de la alcachofa, alcaloides de la quinina, o amargos del ajenjo.",
                    "Flavonoides y cumarinas."
                ]
            }
        ],
        examples: [
            "Ésteres de la cinarina de la alcachofa.",
            "Alcaloides de la quinina.",
            "Amargos del ajenjo (presentes en vinos quinados, vermut con ajenjo)."
        ],
        explanation: `El sabor amargo es a menudo una señal de la presencia de compuestos con propiedades digestivas. Al estimular las secreciones digestivas, los principios amargos preparan el sistema para la digestión, lo que puede ser útil en casos de inapetencia o digestión lenta.`
    },
    "acidos-organicos": {
        title: "Ácidos Orgánicos",
        icon: "🍎",
        summary: `Los ácidos orgánicos como el tartárico, succínico o fumárico están presentes en uva, tomate, acedera, ruibarbo o espinaca. Tienen acción laxante, refrescante, estimulan la respiración celular y poseen un elevado poder antioxidante, siendo útiles en la prevención del cáncer y procesos degenerativos. Se encuentran en frutas y algunas verduras.`,
        questions: [
            {
                question: "¿Qué acción principal tienen los ácidos orgánicos en el cuerpo?",
                answer: "Acción laxante, refrescante, estimulan la respiración celular y son antioxidantes.",
                type: "multiple-choice",
                options: [
                    "Acción sedante.",
                    "Acción laxante, refrescante, estimulan la respiración celular y son antioxidantes.",
                    "Acción estimulante cardíaca.",
                    "Acción antiinflamatoria."
                ]
            },
            {
                question: "¿En qué tipo de alimentos se encuentran principalmente los ácidos orgánicos?",
                answer: "En frutas y algunas verduras.",
                type: "multiple-choice",
                options: [
                    "En carnes y lácteos.",
                    "En cereales y granos.",
                    "En frutas y algunas verduras.",
                    "En pescados y mariscos."
                ]
            },
            {
                question: "¿Qué poder tienen los ácidos orgánicos que los hace útiles en la prevención del cáncer?",
                answer: "Elevado poder antioxidante.",
                type: "multiple-choice",
                options: [
                    "Poder antibiótico.",
                    "Poder antiinflamatorio.",
                    "Elevado poder antioxidante.",
                    "Poder laxante."
                ]
            }
        ],
        examples: [
            "Ácido tartárico (uva)",
            "Ácido succínico (tomate)",
            "Ácido fumárico (acedera, ruibarbo, espinaca)"
        ],
        explanation: `Los ácidos orgánicos son compuestos naturales que contribuyen al sabor ácido de muchos alimentos. Además de su papel en el metabolismo energético celular, su capacidad antioxidante es muy valiosa, ya que ayudan a neutralizar los radicales libres que pueden dañar las células y contribuir al envejecimiento y enfermedades crónicas.`
    },
    "taninos": {
        title: "Taninos",
        icon: "🍂",
        summary: `Los taninos tienen un sabor característico, áspero, y precipitan muchos metales y medicamentos, dificultando la absorción. Poseen acción astringente, por lo que se utilizan en diarreas, úlceras húmedas y quemaduras. Son antisépticos y antiinflamatorios del intestino, calmantes de la tos, y útiles en conjuntivitis y como antioxidantes.`,
        questions: [
            {
                question: "¿Cuál es la acción principal de los taninos que los hace útiles en diarreas y úlceras?",
                answer: "Acción astringente.",
                type: "multiple-choice",
                options: [
                    "Acción laxante.",
                    "Acción estimulante.",
                    "Acción astringente.",
                    "Acción analgésica."
                ]
            },
            {
                question: "¿Qué efecto tienen los taninos sobre la absorción de metales y medicamentos?",
                answer: "Dificultan la absorción al precipitarlos.",
                type: "multiple-choice",
                options: [
                    "Facilitan la absorción.",
                    "No tienen efecto.",
                    "Aumentan la absorción.",
                    "Dificultan la absorción al precipitarlos."
                ]
            },
            {
                question: "¿Además de su acción astringente, qué otras propiedades tienen los taninos?",
                answer: "Antisépticos, antiinflamatorios del intestino, calmantes de la tos, útiles en conjuntivitis y como antioxidantes.",
                type: "multiple-choice",
                options: [
                    "Solo son laxantes.",
                    "Solo son estimulantes.",
                    "Antisépticos, antiinflamatorios del intestino, calmantes de la tos, útiles en conjuntivitis y como antioxidantes.",
                    "Solo son analgésicos."
                ]
            },
            {
                question: "¿Qué plantas se mencionan como fuentes de taninos?",
                answer: "Hamamelis, castaño de indias, roble, encina, eucalipto, ciprés, té, fresno o quina.",
                type: "multiple-choice",
                options: [
                    "Uva, tomate, espinaca.",
                    "Sauce, aloe, ruibarbo.",
                    "Hamamelis, castaño de indias, roble, encina, eucalipto, ciprés, té, fresno o quina.",
                    "Papaína, bromelina."
                ]
            }
        ],
        examples: [
            "Hamamelis",
            "Castaño de Indias",
            "Roble",
            "Encina",
            "Eucalipto",
            "Ciprés",
            "Té",
            "Fresno",
            "Quina"
        ],
        explanation: `La acción astringente de los taninos se debe a su capacidad para precipitar proteínas. En las mucosas, esto forma una capa protectora que reduce la secreción y la inflamación, lo que explica su uso en diarreas y para cicatrizar heridas. Sin embargo, esta misma propiedad puede interferir con la absorción de nutrientes y medicamentos, por lo que su consumo debe ser considerado.`
    }
};

const topicNavigation = document.getElementById('topic-navigation');
const studyArea = document.getElementById('study-area');
let currentTopicId = null;

/**
 * Inicializa la navegación de temas en la barra lateral.
 */
function initializeNavigation() {
    for (const id in studyData) {
        const topic = studyData[id];
        const button = document.createElement('button');
        button.className = 'topic-button block w-full text-left py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200 ease-in-out';
        button.dataset.topicId = id;
        button.innerHTML = `<span>${topic.icon || '🍃'}</span> ${topic.title}`; // Añadir icono
        button.addEventListener('click', () => loadTopic(id));
        topicNavigation.appendChild(button);
    }
}

/**
 * Carga y muestra el contenido de un tema específico.
 * @param {string} topicId - El ID del tema a cargar.
 */
function loadTopic(topicId) {
    currentTopicId = topicId;
    const topic = studyData[topicId];
    if (!topic) {
        studyArea.innerHTML = `<div class="card"><h3 class="text-2xl font-semibold text-gray-700 mb-4">Tema no encontrado.</h3><p class="text-gray-600">Por favor, selecciona un tema válido.</p></div>`;
        return;
    }

    // Actualizar el estado activo del botón de navegación
    document.querySelectorAll('.topic-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.topicId === topicId) {
            btn.classList.add('active');
        }
    });

    // Construir el HTML del contenido del tema
    let contentHtml = `<div class="card">
                        <h3 class="text-2xl font-semibold text-gray-700 mb-4">${topic.title}</h3>
                        <h4 class="text-xl font-medium text-gray-600 mb-3">📖 Resumen:</h4>
                        <p class="text-gray-700 leading-relaxed">${topic.summary}</p>
                    </div>`;

    // Sección de Preguntas y Respuestas
    if (topic.questions && topic.questions.length > 0) {
        contentHtml += `<div class="card">
                        <h4 class="text-xl font-medium text-gray-600 mb-3">❓ Preguntas y Respuestas:</h4>
                        <div id="question-container"></div>
                        <button id="next-question-btn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-200 ease-in-out">Siguiente Pregunta</button>
                    </div>`;
    }

    // Sección de Ejemplos Prácticos
    if (topic.examples && topic.examples.length > 0) {
        contentHtml += `<div class="card">
                        <h4 class="text-xl font-medium text-gray-600 mb-3">🌱 Ejemplos Prácticos:</h4>
                        <ul class="example-list text-gray-700">`;
        topic.examples.forEach(example => {
            contentHtml += `<li>${example}</li>`;
        });
        contentHtml += `</ul></div>`;
    }

    // Sección de Explicaciones Detalladas
    if (topic.explanation) {
        contentHtml += `<div class="card">
                        <h4 class="text-xl font-medium text-gray-600 mb-3">💡 Explicación Detallada:</h4>
                        <button id="show-explanation-btn" class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out">Mostrar Explicación</button>
                        <div id="explanation-content" class="explanation-box hidden mt-4">
                            <p class="text-gray-800 leading-relaxed">${topic.explanation}</p>
                        </div>
                    </div>`;
    }

    studyArea.innerHTML = contentHtml;

    // Inicializar la lógica de preguntas si existen
    if (topic.questions && topic.questions.length > 0) {
        initializeQuestions(topic.questions);
    }

    // Añadir listener para mostrar explicación
    const showExplanationBtn = document.getElementById('show-explanation-btn');
    if (showExplanationBtn) {
        showExplanationBtn.addEventListener('click', () => {
            const explanationContent = document.getElementById('explanation-content');
            explanationContent.classList.toggle('hidden');
            showExplanationBtn.textContent = explanationContent.classList.contains('hidden') ? 'Mostrar Explicación' : 'Ocultar Explicación';
        });
    }
}

let currentQuestionIndex = 0;
let currentQuestions = [];

/**
 * Inicializa el sistema de preguntas para un tema dado.
 * @param {Array} questions - Array de objetos de preguntas.
 */
function initializeQuestions(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    displayQuestion();

    const nextQuestionBtn = document.getElementById('next-question-btn');
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                displayQuestion();
            } else {
                const questionContainer = document.getElementById('question-container');
                questionContainer.innerHTML = `<p class="text-green-700 font-semibold">¡Has completado todas las preguntas de este tema! 🎉</p>`;
                nextQuestionBtn.style.display = 'none';
            }
        });
    }
}

/**
 * Muestra la pregunta actual en el contenedor.
 */
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    if (!questionContainer) return;

    const questionData = currentQuestions[currentQuestionIndex];
    if (!questionData) return;

    let questionHtml = `<p class="text-lg text-gray-800 mb-3">${currentQuestionIndex + 1}. ${questionData.question}</p>`;

    if (questionData.type === "multiple-choice") {
        questionHtml += `<div class="options-container space-y-2 mb-4">`;
        questionData.options.forEach((option, index) => {
            const optionId = `option-${currentQuestionIndex}-${index}`;
            questionHtml += `
                <div class="flex items-center">
                    <input type="radio" id="${optionId}" name="question-${currentQuestionIndex}" value="${option}" class="form-radio h-4 w-4 text-blue-600">
                    <label for="${optionId}" class="ml-2 text-gray-700">${option}</label>
                </div>
            `;
        });
        questionHtml += `</div>
                         <button id="check-answer-btn" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-3 transition duration-200 ease-in-out">Comprobar Respuesta</button>
                         <div id="feedback-message" class="question-feedback hidden"></div>`;
    }

    questionContainer.innerHTML = questionHtml;

    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const feedbackMessage = document.getElementById('feedback-message');

    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
            const userAnswer = selectedOption ? selectedOption.value.trim() : '';
            const correctAnswer = questionData.answer.trim();

            feedbackMessage.classList.remove('hidden', 'correct', 'incorrect');
            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                feedbackMessage.classList.add('correct');
                feedbackMessage.textContent = "¡Correcto! 🎉";
                // Deshabilitar opciones una vez que la respuesta es correcta
                document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]`).forEach(input => input.disabled = true);
            } else {
                feedbackMessage.classList.add('incorrect');
                feedbackMessage.textContent = `Incorrecto. La respuesta correcta era: "${correctAnswer}"`;
            }
        });
    }
}

// Inicializar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    // Cargar el primer tema por defecto o mostrar la bienvenida
    // loadTopic("introduccion"); // Descomentar para cargar el primer tema automáticamente
});
