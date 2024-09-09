let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "ISRAEL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "ITÁLIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "ÍNDIA",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "IRÃ",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "IRAQUE",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "ISLANDIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "JAPÃO",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "JORDÂNIA",
        categoria: "LUGARES"
    },
    palavra012 = {
        nome: "KAZAKISTÃO",
        categoria: "LUGARES"
    },
    palavra013 = {
        nome: "KENIA",
        categoria: "LUGARES"
    },
    palavra014 = {
        nome: "QUIRGUISTÃO",
        categoria: "LUGARES"
    },
    palavra015 = {
        nome: "LAOS",
        categoria: "LUGARES"
    },
    palavra016 = {
        nome: "LETÔNIA",
        categoria: "LUGARES"
    },
    palavra017 = {
        nome: "LÍBANO",
        categoria: "LUGARES"
    },
    palavra018 = {
        nome: "RIO DE JANEIRO",
        categoria: "LUGARES"
    },
    palavra019 = {
        nome: "TÓQUIO",
        categoria: "CIDADES"
    },
    palavra020 = {
        nome: "PARIS",
        categoria: "CIDADES"
    },
    palavra021 = {
        nome: "BERLIM",
        categoria: "CIDADES"
    },
    palavra022 = {
        nome: "NOVA YORK",
        categoria: "CIDADES"
    },
    palavra023 = {
        nome: "LONDRES",
        categoria: "CIDADES"
    },
    palavra024 = {
        nome: "MOSCOU",
        categoria: "CIDADES"
    },
    palavra025 = {
        nome: "RIO DE JANEIRO",
        categoria: "CIDADES"
    },
    palavra026 = {
        nome: "SÃO PAULO",
        categoria: "CIDADES"
    },
    
    // Países
    palavra027 = {
        nome: "BRASIL",
        categoria: "PAÍSES"
    },
    palavra028 = {
        nome: "ARGENTINA",
        categoria: "PAÍSES"
    },
    palavra029 = {
        nome: "ESPANHA",
        categoria: "PAÍSES"
    },
    palavra030 = {
        nome: "PORTUGAL",
        categoria: "PAÍSES"
    },
    palavra031 = {
        nome: "CHINA",
        categoria: "PAÍSES"
    },
    palavra032 = {
        nome: "ÍNDIA",
        categoria: "PAÍSES"
    },
    palavra033 = {
        nome: "EGITO",
        categoria: "PAÍSES"
    },
    palavra034 = {
        nome: "GRÉCIA",
        categoria: "PAÍSES"
    },
    palavra035 = {
        nome: "RUSSIA",
        categoria: "PAÍSES"
    },
    
    // Monumentos
    palavra036 = {
        nome: "EIFFEL",
        categoria: "MONUMENTOS"
    },
    palavra037 = {
        nome: "ESTÁTUA DA LIBERDADE",
        categoria: "MONUMENTOS"
    },
    palavra038 = {
        nome: "MURALHA DA CHINA",
        categoria: "MONUMENTOS"
    },
    palavra039 = {
        nome: "COLOSSEO",
        categoria: "MONUMENTOS"
    },
    palavra040 = {
        nome: "CRISTO REDENTOR",
        categoria: "MONUMENTOS"
    },
    palavra041 = {
        nome: "LIVRO",
        categoria: "OBJETOS"
    },
    palavra042 = {
        nome: "CARRO",
        categoria: "OBJETOS"
    },
    palavra043 = {
        nome: "MESA",
        categoria: "OBJETOS"
    },
    palavra044 = {
        nome: "CADEIRA",
        categoria: "OBJETOS"
    },
    palavra045 = {
        nome: "TELEFONE",
        categoria: "OBJETOS"
    },
    palavra046 = {
        nome: "COMPUTADOR",
        categoria: "OBJETOS"
    },
    palavra047 = {
        nome: "RELOJIO",
        categoria: "OBJETOS"
    },
    palavra048 = {
        nome: "RESTAURANTE",
        categoria: "LUGARES"
    },
    palavra049 = {
        nome: "ESCOLA",
        categoria: "LUGARES"
    },
    palavra050 = {
        nome: "HOSPITAL",
        categoria: "LUGARES"
    },
    palavra051 = {
        nome: "PARQUE",
        categoria: "LUGARES"
    },
    palavra052 = {
        nome: "BANCO",
        categoria: "LUGARES"
    },
    palavra053 = {
        nome: "IGREJA",
        categoria: "LUGARES"
    },
    palavra054 = {
        nome: "MUSEU",
        categoria: "LUGARES"
    },
    palavra055 = {
        nome: "SHOPPING",
        categoria: "LUGARES"
    },
    palavra056 = {
        nome: "SOM",
        categoria: "SONS"
    },
    palavra057 = {
        nome: "MÚSICA",
        categoria: "SONS"
    },
    palavra058 = {
        nome: "ALARMES",
        categoria: "SONS"
    },
    palavra059 = {
        nome: "VOZ",
        categoria: "SONS"
    },
    palavra060 = {
        nome: "TROVÃO",
        categoria: "SONS"
    },
    palavra061 = {
        nome: "RUÍDO",
        categoria: "SONS"
    },
    palavra062 = {
        nome: "SILÊNCIO",
        categoria: "SONS"
    },
    palavra063 = {
        nome: "TRILHA",
        categoria: "NATUREZA"
    },
    palavra064 = {
        nome: "MONTANHA",
        categoria: "NATUREZA"
    },
    palavra065 = {
        nome: "RIO",
        categoria: "NATUREZA"
    },
    palavra066 = {
        nome: "MAR",
        categoria: "NATUREZA"
    },
    palavra067 = {
        nome: "FLOR",
        categoria: "NATUREZA"
    },
    palavra068 = {
        nome: "ÁRVORE",
        categoria: "NATUREZA"
    },
    palavra069 = {
        nome: "LAGO",
        categoria: "NATUREZA"
    },
    palavra070 = {
        nome: "DESERTO",
        categoria: "NATUREZA"
    },
    palavra071 = {
        nome: "SOL",
        categoria: "NATUREZA"
    },
    palavra072 = {
        nome: "CHUVA",
        categoria: "NATUREZA"
    },
    palavra073 = {
        nome: "NEVE",
        categoria: "NATUREZA"
    },
    palavra074 = {
        nome: "VENTO",
        categoria: "NATUREZA"
    },
    palavra075 = {
        nome: "LUNA",
        categoria: "NATUREZA"
    },
    palavra076 = {
        nome: "PLANETA",
        categoria: "NATUREZA"
    },
    palavra077 = {
        nome: "ESTRELA",
        categoria: "NATUREZA"
    },
    palavra078 = {
        nome: "GALÁXIA",
        categoria: "NATUREZA"
    },
    palavra079 = {
        nome: "CONTINENTE",
        categoria: "NATUREZA"
    },
    palavra080 = {
        nome: "PAÍS",
        categoria: "LUGARES"
    },
    palavra081 = {
        nome: "ESTADO",
        categoria: "LUGARES"
    },
    palavra082 = {
        nome: "CIDADE",
        categoria: "LUGARES"
    },
    palavra083 = {
        nome: "VILA",
        categoria: "LUGARES"
    },
    palavra084 = {
        nome: "BAIRRO",
        categoria: "LUGARES"
    },
    palavra085 = {
        nome: "RUA",
        categoria: "LUGARES"
    },
    palavra086 = {
        nome: "AVENIDA",
        categoria: "LUGARES"
    },
    palavra087 = {
        nome: "ALDEIA",
        categoria: "LUGARES"
    },
    palavra088 = {
        nome: "REGIÃO",
        categoria: "LUGARES"
    },
    palavra089 = {
        nome: "MUNDO",
        categoria: "LUGARES"
    },
    palavra090 = {
        nome: "PAISAGEM",
        categoria: "NATUREZA"
    },
    palavra091 = {
        nome: "ECOSSISTEMA",
        categoria: "NATUREZA"
    },
    palavra092 = {
        nome: "BIOMA",
        categoria: "NATUREZA"
    },
    palavra093 = {
        nome: "FLORA",
        categoria: "NATUREZA"
    },
    palavra094 = {
        nome: "FAUNA",
        categoria: "NATUREZA"
    },
    palavra095 = {
        nome: "VEGETAÇÃO",
        categoria: "NATUREZA"
    },
    palavra096 = {
        nome: "CLIMA",
        categoria: "NATUREZA"
    },
    palavra097 = {
        nome: "HORIZONTE",
        categoria: "NATUREZA"
    },
    palavra098 = {
        nome: "RAPOSA",
        categoria: "ANIMAIS"
    },
    palavra099 = {
        nome: "TIGRE",
        categoria: "ANIMAIS"
    },
    palavra100 = {
        nome: "ÁGUIA",
        categoria: "ANIMAIS"
    },
    palavra101 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra102 = {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra103 = {
        nome: "CAVALO",
        categoria: "ANIMAIS"
    },
    palavra104 = {
        nome: "LEÃO",
        categoria: "ANIMAIS"
    },
    palavra105 = {
        nome: "ELEFANTE",
        categoria: "ANIMAIS"
    },
    palavra106 = {
        nome: "PÁSSARO",
        categoria: "ANIMAIS"
    },
    palavra107 = {
        nome: "PEIXE",
        categoria: "ANIMAIS"
    },
    palavra108 = {
        nome: "ARANHA",
        categoria: "ANIMAIS"
    },
    palavra109 = {
        nome: "ABELHA",
        categoria: "ANIMAIS"
    },
    palavra110 = {
        nome: "CACHOEIRA",
        categoria: "NATUREZA"
    },
    palavra111 = {
        nome: "ILHA",
        categoria: "NATUREZA"
    },
    palavra112 = {
        nome: "PRAIA",
        categoria: "NATUREZA"
    },
    palavra113 = {
        nome: "CANION",
        categoria: "NATUREZA"
    },
    palavra114 = {
        nome: "CAVERNA",
        categoria: "NATUREZA"
    },
    palavra115 = {
        nome: "FUMAÇA",
        categoria: "SONS"
    },
    palavra116 = {
        nome: "VIBRAÇÃO",
        categoria: "SONS"
    },
    palavra117 = {
        nome: "ECO",
        categoria: "SONS"
    },
    palavra118 = {
        nome: "BATIDA",
        categoria: "SONS"
    },
    palavra119 = {
        nome: "RUMOR",
        categoria: "SONS"
    },
    palavra120 = {
        nome: "RANGIDO",
        categoria: "SONS"
    },
    palavra121 = {
        nome: "MURMÚRIO",
        categoria: "SONS"
    },
    palavra122 = {
        nome: "RISADA",
        categoria: "SONS"
    },
    palavra123 = {
        nome: "CHORO",
        categoria: "SONS"
    },
    palavra124 = {
        nome: "SUSURRO",
        categoria: "SONS"
    },
    palavra125 = {
        nome: "BRISA",
        categoria: "NATUREZA"
    },
    palavra126 = {
        nome: "NEBLINA",
        categoria: "NATUREZA"
    },
    palavra127 = {
        nome: "TERRA",
        categoria: "NATUREZA"
    },
    palavra128 = {
        nome: "FLORESTA",
        categoria: "NATUREZA"
    },
    palavra129 = {
        nome: "CAMPO",
        categoria: "NATUREZA"
    },
    palavra130 = {
        nome: "CEU",
        categoria: "NATUREZA"
    },
    palavra131 = {
        nome: "ROCHA",
        categoria: "NATUREZA"
    },
    palavra132 = {
        nome: "AREIA",
        categoria: "NATUREZA"
    },
    palavra133 = {
        nome: "FOGO",
        categoria: "NATUREZA"
    },
    palavra134 = {
        nome: "NEVE",
        categoria: "NATUREZA"
    },
    palavra135 ={
        nome: "CÉU",
        categoria: "NATUREZA"
    },
    palavra136 = {
        nome: "HOSPITAL",
        categoria: "LUGARES"
    },
    palavra137 = {
        nome: "POSTO",
        categoria: "LUGARES"
    },
    palavra138 = {
        nome: "SUPERMERCADO",
        categoria: "LUGARES"
    },
    palavra139 = {
        nome: "CINEMA",
        categoria: "LUGARES"
    },
    palavra140 = {
        nome: "TEATRO",
        categoria: "LUGARES"
    },
    palavra141 = {
        nome: "ESTÁDIO",
        categoria: "LUGARES"
    },
    palavra142 = {
        nome: "DORMITÓRIO",
        categoria: "LUGARES"
    },
    palavra143 = {
        nome: "JARDIM",
        categoria: "LUGARES"
    },
    palavra144 = {
        nome: "BIBLIOTECA",
        categoria: "LUGARES"
    },
    palavra145 = {
        nome: "OFICINA",
        categoria: "LUGARES"
    },
    palavra146 = {
        nome: "CAVERNA",
        categoria: "NATUREZA"
    },
    palavra147 = {
        nome: "GROTTA",
        categoria: "NATUREZA"
    },
    palavra148 = {
        nome: "PONTE",
        categoria: "NATUREZA"
    },
    palavra149 = {
        nome: "RAVINA",
        categoria: "NATUREZA"
    },
    palavra150 = {
        nome: "VALE",
        categoria: "NATUREZA"
    },
    palavra151 = {
        nome: "ÁGUA",
        categoria: "NATUREZA"
    },
    palavra152 = {
        nome: "TUFÃO",
        categoria: "NATUREZA"
    },
    palavra153 = {
        nome: "TREMOR",
        categoria: "NATUREZA"
    },
    palavra154 = {
        nome: "ESTAÇÃO",
        categoria: "LUGARES"
    },
    palavra155 = {
        nome: "PRAÇA",
        categoria: "LUGARES"
    },
    palavra156 = {
        nome: "TRILHA",
        categoria: "NATUREZA"
    },
    palavra157 = {
        nome: "MARGEM",
        categoria: "NATUREZA"
    },
    palavra158 = {
        nome: "DUNA",
        categoria: "NATUREZA"
    },
    palavra159 = {
        nome: "LITORAL",
        categoria: "NATUREZA"
    },
    palavra160 = {
        nome: "PLANÍCIE",
        categoria: "NATUREZA"
    },
    palavra161 = {
        nome: "CÓRREGO",
        categoria: "NATUREZA"
    },
    palavra162 = {
        nome: "FONTES",
        categoria: "NATUREZA"
    },
    palavra163 = {
        nome: "TERMO",
        categoria: "OBJETOS"
    },
    palavra164 = {
        nome: "BALANÇA",
        categoria: "OBJETOS"
    },
    palavra165 = {
        nome: "TESOURA",
        categoria: "OBJETOS"
    },
    palavra166 = {
        nome: "PINCEL",
        categoria: "OBJETOS"
    },
    palavra167 = {
        nome: "RÉGUA",
        categoria: "OBJETOS"
    },
    palavra168 = {
        nome: "CANETA",
        categoria: "OBJETOS"
    },
    palavra169 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra170 = {
        nome: "BORRACHA",
        categoria: "OBJETOS"
    },
    palavra171 = {
        nome: "MÁQUINA",
        categoria: "OBJETOS"
    },
    palavra172 = {
        nome: "MANTEIGA",
        categoria: "ALIMENTOS"
    },
    palavra173 = {
        nome: "PÃO",
        categoria: "ALIMENTOS"
    },
    palavra174 = {
        nome: "QUEIJO",
        categoria: "ALIMENTOS"
    },
    palavra175 = {
        nome: "FRUTA",
        categoria: "ALIMENTOS"
    },
    palavra176 = {
        nome: "VERDURA",
        categoria: "ALIMENTOS"
    },
    palavra177 = {
        nome: "CARNE",
        categoria: "ALIMENTOS"
    },
    palavra178 = {
        nome: "PEIXE",
        categoria: "ALIMENTOS"
    },
    palavra179 = {
        nome: "LEITE",
        categoria: "ALIMENTOS"
    },
    palavra180 = {
        nome: "CAFÉ",
        categoria: "ALIMENTOS"
    },
    palavra181 = {
        nome: "CHÁ",
        categoria: "ALIMENTOS"
    },
    palavra182 = {
        nome: "BEBIDA",
        categoria: "ALIMENTOS"
    },
    palavra183 = {
        nome: "REFEIÇÃO",
        categoria: "ALIMENTOS"
    },
    palavra184 = {
        nome: "SORVETE",
        categoria: "ALIMENTOS"
    },
    palavra185 = {
        nome: "BISCOITO",
        categoria: "ALIMENTOS"
    },
    palavra186 = {
        nome: "BOLINHO",
        categoria: "ALIMENTOS"
    },
    palavra187 = {
        nome: "CREME",
        categoria: "ALIMENTOS"
    },
    palavra188 = {
        nome: "FRANGO",
        categoria: "ALIMENTOS"
    },
    palavra189 = {
        nome: "ARROZ",
        categoria: "ALIMENTOS"
    },
    palavra190 = {
        nome: "MACARRÃO",
        categoria: "ALIMENTOS"
    },
    palavra191 = {
        nome: "SALADA",
        categoria: "ALIMENTOS"
    },
    palavra192 = {
        nome: "SUCO",
        categoria: "ALIMENTOS"
    },
    palavra193 = {
        nome: "RECEITA",
        categoria: "ALIMENTOS"
    },
    palavra194 = {
        nome: "JOGO",
        categoria: "ENTRETENIMENTO"
    },
    palavra195 = {
        nome: "FILME",
        categoria: "ENTRETENIMENTO"
    },
    palavra196 = {
        nome: "MÚSICA",
        categoria: "ENTRETENIMENTO"
    },
    palavra197 = {
        nome: "LIVRO",
        categoria: "ENTRETENIMENTO"
    },
    palavra198 = {
        nome: "JOGOS",
        categoria: "ENTRETENIMENTO"
    },
    palavra199 = {
        nome: "TEATRO",
        categoria: "ENTRETENIMENTO"
    },
    palavra200 = {
        nome: "DANÇA",
        categoria: "ENTRETENIMENTO"
    },
    palavra201 = {
        nome: "ESPORTE",
        categoria: "ENTRETENIMENTO"
    },
    palavra202 = {
        nome: "PINTURA",
        categoria: "ENTRETENIMENTO"
    },
    palavra203 = {
        nome: "ALMOÇO DE TRABALHO",
        categoria: "ALIMENTOS"
    },
    palavra204 = {
        nome: "JANTAR ROMÂNTICO",
        categoria: "ALIMENTOS"
    },
    palavra205 = {
        nome: "LANCHINHO RÁPIDO",
        categoria: "ALIMENTOS"
    },
    palavra206 = {
        nome: "SANDUÍCHE NATURAL",
        categoria: "ALIMENTOS"
    },
    palavra207 = {
        nome: "DOCES ARTESANAIS",
        categoria: "ALIMENTOS"
    },
    palavra208 = {
        nome: "PIZZA MARGHERITA",
        categoria: "ALIMENTOS"
    },
    palavra209 = {
        nome: "HAMBÚRGUER GOURMET",
        categoria: "ALIMENTOS"
    },
    palavra210 = {
        nome: "SORVETE CASEIRO",
        categoria: "ALIMENTOS"
    },
    palavra211 = {
        nome: "BATATA FRITA",
        categoria: "ALIMENTOS"
    },
    palavra212 = {
        nome: "CACHORRO-QUENTE",
        categoria: "ALIMENTOS"
    },
    palavra213 = {
        nome: "FEIJÃO TROPEIRO",
        categoria: "ALIMENTOS"
    },
    palavra214 = {
        nome: "SALADA DE FRUTAS",
        categoria: "ALIMENTOS"
    },
    palavra215 = {
        nome: "CREME DE LEITE",
        categoria: "ALIMENTOS"
    },
    palavra216 = {
        nome: "MASSA DE PIZZA",
        categoria: "ALIMENTOS"
    },
    palavra217 = {
        nome: "FRANGO ASSADO",
        categoria: "ALIMENTOS"
    },
    palavra218 = {
        nome: "MILHO VERDE",
        categoria: "ALIMENTOS"
    },
    palavra219 = {
        nome: "BOMBA DE GASOLINA",
        categoria: "OBJETOS"
    },
    palavra220 = {
        nome: "PAPEL HIGIÊNICO",
        categoria: "OBJETOS"
    },
    palavra221 = {
        nome: "MÁQUINA DE LAVAR",
        categoria: "OBJETOS"
    },
    palavra222 = {
        nome: "EXAUSTOR DE COZINHA",
        categoria: "OBJETOS"
    },
    palavra223 = {
        nome: "LUMINÁRIA DE SALA",
        categoria: "OBJETOS"
    },
    palavra224 = {
        nome: "VARAL DE ROUPA",
        categoria: "OBJETOS"
    },
    palavra225 = {
        nome: "CANETA ESFEROGRÁFICA",
        categoria: "OBJETOS"
    },
    palavra226 = {
        nome: "RELÓGIO DE PAREDE",
        categoria: "OBJETOS"
    },
    palavra227 = {
        nome: "CADEIRA DE ESCRITÓRIO",
        categoria: "OBJETOS"
    },
    palavra228 = {
        nome: "APARELHO DE SOM",
        categoria: "OBJETOS"
    },
    palavra229 = {
        nome: "FLORESTA AMAZÔNICA",
        categoria: "NATUREZA"
    },
    palavra230 = {
        nome: "RIBEIRÃO PEQUENO",
        categoria: "NATUREZA"
    },
    palavra231 = {
        nome: "PRAIA DO FORTE",
        categoria: "NATUREZA"
    },
    palavra232 = {
        nome: "SERENO DA MANHÃ",
        categoria: "NATUREZA"
    },
    palavra233 = {
        nome: "NÉVOA MATINAL",
        categoria: "NATUREZA"
    },
    palavra234 = {
        nome: "JUNGLA TROPICAL",
        categoria: "NATUREZA"
    },
    palavra235 = {
        nome: "DUNA DE AREIA",
        categoria: "NATUREZA"
    },
    palavra236 = {
        nome: "PRADO VERDEJANTE",
        categoria: "NATUREZA"
    },
    palavra237 = {
        nome: "CORAL DE RECIFE",
        categoria: "NATUREZA"
    },
    palavra238 = {
        nome: "INVERNO RIGOROSO",
        categoria: "NATUREZA"
    },
    palavra239 = {
        nome: "FORMIGA CORREDEIRA",
        categoria: "ANIMAIS"
    },
    palavra240 = {
        nome: "ÁGUIA REAL",
        categoria: "ANIMAIS"
    },
    palavra241 = {
        nome: "GIRAFA",
        categoria: "ANIMAIS"
    },
    palavra242 = {
        nome: "TARTARUGA MARINHA",
        categoria: "ANIMAIS"
    },
    palavra243 = {
        nome: "PANTERA NEGRA",
        categoria: "ANIMAIS"
    },
    palavra244 = {
        nome: "MACACO-PREGUIÇA",
        categoria: "ANIMAIS"
    },
    palavra245 = {
        nome: "LOBO GUARÁ",
        categoria: "ANIMAIS"
    },
    palavra246 = {
        nome: "CACHORRO-DE-PRESINHA",
        categoria: "ANIMAIS"
    },
    palavra247 = {
        nome: "PAVÃO",
        categoria: "ANIMAIS"
    },
    palavra248 = {
        nome: "GATO-DE-BENGALA",
        categoria: "ANIMAIS"
    },
    palavra249 = {
        nome: "EXPOSIÇÃO DE ARTE",
        categoria: "ENTRETENIMENTO"
    },
    palavra250 = {
        nome: "SHOW DE MÚSICA",
        categoria: "ENTRETENIMENTO"
    },
    palavra251 = {
        nome: "FEIRA DE LIVROS",
        categoria: "ENTRETENIMENTO"
    },
    palavra252 = {
        nome: "FESTIVAL DE CINEMA",
        categoria: "ENTRETENIMENTO"
    },
    palavra253 = {
        nome: "CIRCO",
        categoria: "ENTRETENIMENTO"
    },
    palavra254 = {
        nome: "EXPOSIÇÃO FOTOGRÁFICA",
        categoria: "ENTRETENIMENTO"
    },
    palavra255 = {
        nome: "JOGO DE TABULEIRO",
        categoria: "ENTRETENIMENTO"
    },
    palavra256 = {
        nome: "CONCURSO DE BELEZA",
        categoria: "ENTRETENIMENTO"
    },
    palavra257 = {
        nome: "COMPETIÇÃO ESPORTIVA",
        categoria: "ENTRETENIMENTO"
    },
    palavra258 = {
        nome: "PALESTRA MOTIVACIONAL",
        categoria: "ENTRETENIMENTO"
    },
    palavra259 = {
        nome: "VÍDEO GAME",
        categoria: "ENTRETENIMENTO"
    },
    palavra260 = {
        nome: "BRINQUEDO INFANTIL",
        categoria: "OBJETOS"
    },
    palavra261 = {
        nome: "CADEIRA RECLINÁVEL",
        categoria: "OBJETOS"
    },
    palavra262 = {
        nome: "MÁQUINA DE CAFÉ",
        categoria: "OBJETOS"
    },
    palavra263 = {
        nome: "APARELHO DE JANTAR",
        categoria: "OBJETOS"
    },
    palavra264 = {
        nome: "CABINE TELEFÔNICA",
        categoria: "OBJETOS"
    },
    palavra265 = {
        nome: "TÁBUA DE PASSAR",
        categoria: "OBJETOS"
    },
    palavra266 = {
        nome: "DESENTUPIDOR",
        categoria: "OBJETOS"
    },
    palavra267 = {
        nome: "ESCOVA DE DENTES",
        categoria: "OBJETOS"
    },
    palavra268 = {
        nome: "CADERNO DE ANOTAÇÕES",
        categoria: "OBJETOS"
    },
    palavra269 = {
        nome: "CARTEIRA DE HABILITAÇÃO",
        categoria: "OBJETOS"
    },
    palavra270 = {
        nome: "FLORESTA DE PINHEIROS",
        categoria: "NATUREZA"
    },
    palavra271 = {
        nome: "RIBEIRÃO PEQUENO",
        categoria: "NATUREZA"
    },
    palavra272 = {
        nome: "PRAIA DO FORTE",
        categoria: "NATUREZA"
    },
    palavra273 = {
        nome: "SERENO DA MANHÃ",
        categoria: "NATUREZA"
    },
    palavra274 = {
        nome: "NÉVOA MATINAL",
        categoria: "NATUREZA"
    },
    palavra275 = {
        nome: "JUNGLA TROPICAL",
        categoria: "NATUREZA"
    },
    palavra276 = {
        nome: "DUNA DE AREIA",
        categoria: "NATUREZA"
    },
    palavra277 = {
        nome: "PRADO VERDEJANTE",
        categoria: "NATUREZA"
    },
    palavra278 = {
        nome: "CORAL DE RECIFE",
        categoria: "NATUREZA"
    },
    palavra279 = {
        nome: "INVERNO RIGOROSO",
        categoria: "NATUREZA"
    },
    palavra280 = {
        nome: "FOGO DE ARTIFÍCIO",
        categoria: "SONS"
    },
    palavra281 = {
        nome: "SONHO DE VERÃO",
        categoria: "ENTRETENIMENTO"
    },
    palavra282 = {
        nome: "RISO FACIAL",
        categoria: "SENTIMENTOS"
    },
    palavra283 = {
        nome: "VIDRO TEMPERADO",
        categoria: "OBJETOS"
    },
    palavra284 = {
        nome: "LIVRO DIDÁTICO",
        categoria: "OBJETOS"
    },
    palavra285 = {
        nome: "TV LED",
        categoria: "OBJETOS"
    },
    palavra286 = {
        nome: "ALMOFADA DECORATIVA",
        categoria: "OBJETOS"
    },
    palavra287 = {
        nome: "CAMA BOX",
        categoria: "OBJETOS"
    },
    palavra288 = {
        nome: "CADEIRA DE REFEITÓRIO",
        categoria: "OBJETOS"
    },
    palavra289 = {
        nome: "CARRINHO DE BEBÊ",
        categoria: "OBJETOS"
    },
    palavra290 = {
        nome: "DESUMIDIFICADOR DE AR",
        categoria: "OBJETOS"
    },
    palavra291 = {
        nome: "FÓRMULA MATEMÁTICA",
        categoria: "EDUCAÇÃO"
    },
    palavra292 = {
        nome: "RECEITA DE BOLO",
        categoria: "ALIMENTOS"
    },
    palavra293 = {
        nome: "RUA TRANQUILA",
        categoria: "LOCALIZAÇÃO"
    },
    palavra294 = {
        nome: "VILA HISTÓRICA",
        categoria: "LOCALIZAÇÃO"
    },
    palavra295 = {
        nome: "JARDIM BOTÂNICO",
        categoria: "LOCALIZAÇÃO"
    },
    palavra296 = {
        nome: "MUSEU DE ARTE",
        categoria: "LOCALIZAÇÃO"
    },
    palavra297 = {
        nome: "LABORATÓRIO DE QUÍMICA",
        categoria: "EDUCAÇÃO"
    },
    palavra298 = {
        nome: "ESTÁDIO DE FUTEBOL",
        categoria: "LOCALIZAÇÃO"
    },
    palavra299 = {
        nome: "FEIRA DE ARTESANATO",
        categoria: "LOCALIZAÇÃO"
    },
    palavra300 = {
        nome: "MERCADO MUNICIPAL",
        categoria: "LOCALIZAÇÃO"
    },
    palavra301 = {
        nome: "CINECLUBE LOCAL",
        categoria: "ENTRETENIMENTO"
    },
    palavra302 = {
        nome: "CAFÉ CONVERSA",
        categoria: "ALIMENTOS"
    },
    palavra303 = {
        nome: "BIBLIOTECA UNIVERSITÁRIA",
        categoria: "LOCALIZAÇÃO"
    },
    palavra304 = {
        nome: "TRANSMISSÃO AO VIVO",
        categoria: "ENTRETENIMENTO"
    },
    palavra305 = {
        nome: "ENCONTRO SOCIAL",
        categoria: "ENTRETENIMENTO"
    },
    palavra306 = {
        nome: "SHOW DE TALENTOS",
        categoria: "ENTRETENIMENTO"
    },
    palavra307 = {
        nome: "ATELIÊ DE ARTE",
        categoria: "ENTRETENIMENTO"
    },
    palavra308 = {
        nome: "CENTRO ESPORTIVO",
        categoria: "LOCALIZAÇÃO"
    },
    palavra309 = {
        nome: "CLUBE DE LEITURA",
        categoria: "ENTRETENIMENTO"
    },
    palavra310 = {
        nome: "EXPOSIÇÃO DE ESCULTURAS",
        categoria: "ENTRETENIMENTO"
    },
    palavra311 = {
        nome: "CINEMA AO AR LIVRE",
        categoria: "ENTRETENIMENTO"
    },
    palavra312 = {
        nome: "TEATRO MUNICIPAL",
        categoria: "ENTRETENIMENTO"
    },
    palavra313 = {
        nome: "PARQUE NACIONAL",
        categoria: "NATUREZA"
    },
    palavra314 = {
        nome: "CAMPO DE FUTEBOL",
        categoria: "LOCALIZAÇÃO"
    },
    palavra315 = {
        nome: "BOATE EXCLUSIVA",
        categoria: "ENTRETENIMENTO"
    },
    palavra316 = {
        nome: "EXPOSIÇÃO INTERATIVA",
        categoria: "ENTRETENIMENTO"
    },
    palavra317 = {
        nome: "LOJA DE ARTIGOS ESPORTIVOS",
        categoria: "OBJETOS"
    },
    palavra318 = {
        nome: "ESTAÇÃO DE METRÔ",
        categoria: "LOCALIZAÇÃO"
    },
    palavra319 = {
        nome: "COLEÇÃO DE DISCOS",
        categoria: "OBJETOS"
    },
    palavra320 = {
        nome: "CAMPING NA MONTANHA",
        categoria: "NATUREZA"
    },
    palavra321 = {
        nome: "SALA DE CONFERÊNCIAS",
        categoria: "LOCALIZAÇÃO"
    },
    palavra322 = {
        nome: "ACAMPAMENTO DE VERÃO",
        categoria: "ENTRETENIMENTO"
    },
    palavra323 = {
        nome: "PISCINA COBERTA",
        categoria: "LOCALIZAÇÃO"
    },
    palavra324 = {
        nome: "LOJA DE ROUPAS",
        categoria: "OBJETOS"
    },
    palavra325 = {
        nome: "RESTAURANTE FAMILIAR",
        categoria: "ALIMENTOS"
    },
    palavra326 = {
        nome: "CINEMA 3D",
        categoria: "ENTRETENIMENTO"
    },
    palavra327 = {
        nome: "FESTIVAL GAStronômico",
        categoria: "ALIMENTOS"
    },
    palavra328 = {
        nome: "PAISAGEM NATURAL",
        categoria: "NATUREZA"
    },
    palavra329 = {
        nome: "RECITAL DE MÚSICA",
        categoria: "ENTRETENIMENTO"
    },
    palavra330 = {
        nome: "PARKING LOT",
        categoria: "LOCALIZAÇÃO"
    },
    palavra331 = {
        nome: "JARDIM DE INFÂNCIA",
        categoria: "EDUCAÇÃO"
    },
    palavra332 = {
        nome: "SALÃO DE FESTAS",
        categoria: "LOCALIZAÇÃO"
    },
    palavra333 = {
        nome: "PROJETO ESCOLAR",
        categoria: "EDUCAÇÃO"
    },
    palavra334 = {
        nome: "EXPOSIÇÃO DE MOTOS",
        categoria: "ENTRETENIMENTO"
    },
    palavra335 = {
        nome: "CAMINHADA NO PARQUE",
        categoria: "NATUREZA"
    },
    palavra336 = {
        nome: "MUSEU INTERATIVO",
        categoria: "ENTRETENIMENTO"
    },
    palavra337 = {
        nome: "CLUBE DE LEITURA",
        categoria: "EDUCAÇÃO"
    },
    palavra338 = {
        nome: "CARNAVAL DE RUA",
        categoria: "ENTRETENIMENTO"
    },
    palavra339 = {
        nome: "CENTRO CULTURAL",
        categoria: "LOCALIZAÇÃO"
    },
    palavra340 = {
        nome: "ACADÊMIA DE DANÇA",
        categoria: "ENTRETENIMENTO"
    },
    palavra341 = {
        nome: "SALÃO DE BELEZA",
        categoria: "OBJETOS"
    },
    palavra342 = {
        nome: "DANÇA CONTEMPORÂNEA",
        categoria: "ENTRETENIMENTO"
    },
    palavra343 = {
        nome: "LOJA DE ELETRÔNICOS",
        categoria: "OBJETOS"
    },
    palavra344 = {
        nome: "ESTÁGIO DE TREINAMENTO",
        categoria: "EDUCAÇÃO"
    },
    palavra345 = {
        nome: "VIAGEM DE GRUPO",
        categoria: "ENTRETENIMENTO"
    },
    palavra346 = {
        nome: "OFICINA DE ARTES",
        categoria: "ENTRETENIMENTO"
    },
    palavra347 = {
        nome: "EXPOSIÇÃO DE FOTOGRAFIA",
        categoria: "ENTRETENIMENTO"
    },
    palavra348 = {
        nome: "CAIXA DE SOM",
        categoria: "OBJETOS"
    },
    palavra349 = {
        nome: "EXPOSIÇÃO DE ARTES PLÁSTICAS",
        categoria: "ENTRETENIMENTO"
    },
    palavra350 = {
        nome: "RESTAURANTE CHIQUE",
        categoria: "ALIMENTOS"
    },
    palavra351 = {
        nome: "CAFÉ DA MANHÃ",
        categoria: "ALIMENTOS"
    }
]

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada);
}

function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = " ";

    

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " "){
                listaDinamica[i]= " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
            
        }
        else {
            if (palavraSecretaSorteada[i] == " "){
                listaDinamica[i]= " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }            
        }
    }
}



function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao) {
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "rgb(164, 18, 128)";
        document.getElementById(tecla).style.color = "#ffffff";  
    }
    else{
        document.getElementById(tecla).style.background = "green";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}

function comparaListas(letra) {
    const letraNormalizada = normalizarTexto(letra);
    const palavraNormalizada = normalizarTexto(palavraSecretaSorteada);
    
    const pos = palavraNormalizada.indexOf(letraNormalizada);
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (normalizarTexto(palavraSecretaSorteada[i]) === letraNormalizada) {
                listaDinamica[i] = palavraSecretaSorteada[i];
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("Parabéns!", "Você venceu!!! xD");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal( titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
}
)