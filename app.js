const WHATSAPP = "https://wa.me/5519992303971";
const INSTAGRAM = "https://www.instagram.com/nonnacarmelaelore/";
const LINKTREE = "https://linktr.ee/Cantinanonnacarmelaelore";
const ADDRESS = "Rua José Fonseca, 70, Serra Negra, SP";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + MAP_QUERY;
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=" + MAP_QUERY;

const MENU = [
  {id:"antipasto-uno",name:"Antipasto Uno",category:"Antipasti",price:"R$ 67,00",description:"Azeitonas Azapa pretas e verdes, manteiga, alho confitado e escabeche de berinjela. Acompanha seis fatias de pão italiano.",image:"antipasto",featured:true},
  {id:"antipasto-due",name:"Antipasto Due",category:"Antipasti",price:"R$ 76,00",description:"Azeitonas Azapa pretas e verdes, manteiga, alho confitado e sardela. Acompanha seis fatias de pão italiano.",image:"antipasto"},
  {id:"bruschetta-raddusa",name:"Bruschetta Raddusa",category:"Bruschette",price:"R$ 73,90",description:"Seis unidades de pão italiano com alho e azeite, mozzarella, parmesão Tulha, tomate e orégano.",image:"antipasto",featured:true},
  {id:"bruschetta-parma",name:"Bruschetta di Parma",category:"Bruschette",price:"R$ 77,90",description:"Seis unidades com pão italiano, alho e azeite, Catupiry Original, tomate-cereja confitado, presunto Parma e manjericão."},
  {id:"bruschetta-agridoce",name:"Bruschetta agridoce",category:"Bruschette",price:"R$ 78,80",description:"Seis unidades com pão italiano, tomate-cereja, gorgonzola, parmesão Tulha, figo ou pêssego conforme disponibilidade e manjericão. Fios de ovos: + R$ 18,00."},
  {id:"insalata-rucola",name:"Insalata di rucola",category:"Insalate",price:"R$ 39,90",description:"Rúcula, tomate seco e parmesão Tulha. Salada individual, temperada com azeite e vinagre italiano."},
  {id:"insalata-fichi",name:"Insalata di fichi",category:"Insalate",price:"R$ 48,90",description:"Alface roxa, figo ou pêssego conforme disponibilidade, tomate-cereja, gorgonzola e nozes. Individual, temperada com azeite e vinagre italiano.",featured:true,image:"antipasto"},
  {id:"cesta-4",name:"Cesta de pão italiano · 4 fatias",category:"Antipasti",price:"R$ 18,00",description:"Pão italiano para acompanhar a refeição."},
  {id:"cesta-6",name:"Cesta de pão italiano · 6 fatias",category:"Antipasti",price:"R$ 25,00",description:"Pão italiano para acompanhar a refeição."},
  {id:"pasta-tradicional-sugo",name:"Pasta ao sugo",category:"Pastas",price:"R$ 69,80",description:"Escolha entre spaghetti, fettuccine branco ou verde, penne ou rigatoni; molho ao sugo."},
  {id:"pasta-tradicional-bolonhesa",name:"Pasta à bolonhesa",category:"Pastas",price:"R$ 74,90",description:"Escolha entre spaghetti, fettuccine branco ou verde, penne ou rigatoni; molho à bolonhesa."},
  {id:"pasta-tradicional-branco",name:"Pasta ao molho branco",category:"Pastas",price:"R$ 73,90",description:"Escolha entre spaghetti, fettuccine branco ou verde, penne ou rigatoni; molho branco."},
  {id:"pasta-tradicional-rose",name:"Pasta ao molho rosé",category:"Pastas",price:"R$ 69,90",description:"Escolha entre spaghetti, fettuccine branco ou verde, penne ou rigatoni; molho rosé."},
  {id:"pasta-gorgonzola-pera",name:"Molho branco com gorgonzola e pera",category:"Pastas",price:"R$ 84,90",description:"Escolha a massa: spaghetti, fettuccine branco ou verde, penne ou rigatoni.",image:"hero"},
  {id:"pasta-rustico",name:"Molho rústico da Nonna Carmela",category:"Pastas",price:"R$ 94,90",description:"Receita da Nonna Carmela. Escolha a massa: spaghetti, fettuccine branco ou verde, penne ou rigatoni.",featured:true,image:"hero"},
  {id:"pasta-pesto",name:"Molho pesto",category:"Pastas",price:"R$ 95,80",description:"Escolha a massa: spaghetti, fettuccine branco ou verde, penne ou rigatoni."},
  {id:"pasta-alfredo",name:"Molho Alfredo",category:"Pastas",price:"R$ 85,90",description:"Escolha a massa: spaghetti, fettuccine branco ou verde, penne ou rigatoni."},
  {id:"pasta-quatro-queijos",name:"Molho branco aos quatro queijos",category:"Pastas",price:"R$ 86,80",description:"Mozzarella, parmesão Tulha, gorgonzola e Catupiry Original. Escolha a massa."},
  {id:"pasta-gorgonzola-champignon",name:"Gorgonzola e champignon gigante",category:"Pastas",price:"R$ 92,80",description:"Novidade: molho branco com gorgonzola e champignon gigante. Escolha a massa."},
  {id:"pasta-catupiry-palmito",name:"Catupiry e palmito gigante",category:"Pastas",price:"R$ 92,80",description:"Novidade: molho branco com Catupiry Original e palmito gigante. Escolha a massa."},
  {id:"manicaretti-4-queijos",name:"Manicaretti de quatro queijos",category:"Massas recheadas",price:"R$ 97,90",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"rondelli-presunto",name:"Rondelli de queijo e presunto",category:"Massas recheadas",price:"R$ 97,90",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"lasanha-presunto",name:"Lasanha de queijo e presunto",category:"Massas recheadas",price:"R$ 97,50",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"rondelli-ricota",name:"Rondelli de tomate seco, ricota e espinafre",category:"Massas recheadas",price:"R$ 98,90",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"manicaretti-shiitake",name:"Manicaretti de búfala com shiitake",category:"Massas recheadas",price:"R$ 99,70",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"sorrentino-limao",name:"Sorrentino de limão-siciliano",category:"Massas recheadas",price:"R$ 98,90",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"agnolotti-nozes",name:"Agnolotti de uva-passa, ricota e nozes",category:"Massas recheadas",price:"R$ 96,90",description:"Massa fresca recheada. Molhos disponíveis: ao sugo, à bolonhesa, rosé ou branco."},
  {id:"add-file",name:"Escalope de filé mignon · 150 g",category:"Adicionais",price:"R$ 53,60",description:"Adicional para a sua massa."},
  {id:"add-guanciale",name:"Guanciale",category:"Adicionais",price:"R$ 19,80",description:"Adicional para a sua massa."},
  {id:"add-nozes",name:"Nozes",category:"Adicionais",price:"R$ 14,00",description:"Adicional para a sua massa."},
  {id:"add-azeitona-azapa",name:"Azeitona preta Azapa",category:"Adicionais",price:"R$ 16,00",description:"Adicional para a sua massa."},
  {id:"add-amendoas",name:"Amêndoas",category:"Adicionais",price:"R$ 14,00",description:"Adicional para a sua massa."},
  {id:"add-manjericao",name:"Manjericão",category:"Adicionais",price:"R$ 9,00",description:"Adicional para a sua massa."},
  {id:"add-azeitona-verde",name:"Azeitona verde",category:"Adicionais",price:"R$ 13,00",description:"Adicional para a sua massa."},
  {id:"nhoque-sugo",name:"Nhoque artesanal · ao sugo",category:"Nhoques & especiais",price:"R$ 76,90",description:"Nhoque artesanal de batata."},
  {id:"nhoque-bolonhesa",name:"Nhoque artesanal · à bolonhesa",category:"Nhoques & especiais",price:"R$ 79,80",description:"Nhoque artesanal de batata."},
  {id:"nhoque-rose",name:"Nhoque artesanal · rosé",category:"Nhoques & especiais",price:"R$ 76,90",description:"Nhoque artesanal de batata."},
  {id:"nhoque-branco",name:"Nhoque artesanal · molho branco",category:"Nhoques & especiais",price:"R$ 76,90",description:"Nhoque artesanal de batata."},
  {id:"nhoque-recheado",name:"Nhoque recheado",category:"Nhoques & especiais",price:"R$ 79,90 / R$ 89,90",description:"Recheio de quatro queijos ou frango com Catupiry. Ao sugo, rosé ou branco por R$ 79,90; à bolonhesa por R$ 89,90.",featured:true,image:"polenta"},
  {id:"nero-camarao",name:"Spaghetti nero di seppia · camarão",category:"Nhoques & especiais",price:"R$ 108,90",description:"Spaghetti negro (tinta de lula), molho branco, queijo Brie e camarão."},
  {id:"nero-pinhao",name:"Spaghetti nero di seppia · pinhão",category:"Nhoques & especiais",price:"R$ 107,80",description:"Spaghetti negro (tinta de lula), molho branco, queijo Brie e pinhão."},
  {id:"polpetone",name:"Polpetone · aprox. 300 g",category:"Carne & polenta",price:"R$ 46,90",description:"Prato de carne; peso aproximado de 300 g."},
  {id:"ancho",name:"Bife ancho premium · aprox. 300 g",category:"Carne & polenta",price:"R$ 72,80",description:"Grelhado ao azeite e azeitonas pretas."},
  {id:"escalope-file",name:"Escalope de filé mignon · aprox. 150 g",category:"Carne & polenta",price:"R$ 53,90",description:"Peso aproximado de 150 g."},
  {id:"tbone",name:"T-bone · aprox. 600 g",category:"Carne & polenta",price:"R$ 118,99",description:"Corte servido com peso aproximado de 600 g."},
  {id:"polenta-nonna",name:"Polenta da Nonna Carmela",category:"Carne & polenta",price:"R$ 98,90",description:"Polenta com parmesão Tulha, molho de tomate rústico da Nonna Carmela, dois ovos pochê, azeite e queijo.",featured:true,image:"polenta"},
  {id:"kids-file",name:"Filé mignon e chips",category:"Bambini",price:"R$ 76,90",description:"Arroz, feijão, escalope de filé mignon (100 g) e batata chips. Pratos infantis para crianças de até 8 anos."},
  {id:"kids-nuggets",name:"Nuggets e chips",category:"Bambini",price:"R$ 68,90",description:"Arroz, feijão, nuggets e batata chips. Pratos infantis para crianças de até 8 anos."},
  {id:"kids-massa",name:"Macarrão kids",category:"Bambini",price:"50% do prato escolhido",description:"Qualquer tipo de massa com molho; servido apenas para crianças de até 8 anos."},
  {id:"cannoli-laranja",name:"Cannoli tradicional · laranja",category:"Dolci",price:"R$ 26,80",description:"Cannoli tradicional com laranja.",featured:true,image:"cannoli"},
  {id:"cannoli-pistache",name:"Cannoli de pistache",category:"Dolci",price:"R$ 28,80",description:"Cannoli com pistache.",image:"cannoli"},
  {id:"cannoli-doce-leite",name:"Cannoli de doce de leite",category:"Dolci",price:"R$ 28,90",description:"Doce de leite argentino com nozes ou doce de leite com café.",image:"cannoli"},
  {id:"abobora-calda",name:"Abóbora em pedaços",category:"Dolci",price:"R$ 21,50",description:"Doce em calda acompanhado de queijo fresco."},
  {id:"figo-calda",name:"Figo Rami em calda",category:"Dolci",price:"R$ 21,50",description:"Doce em calda acompanhado de queijo fresco."},
  {id:"quindim-colher",name:"Creme de ovos com coco",category:"Dolci",price:"R$ 24,50",description:"Quindim de colher; os doces em calda são acompanhados de queijo fresco."},
  {id:"romeu-julieta",name:"Romeu e Julieta",category:"Dolci",price:"R$ 21,50",description:"Goiabada cascão e queijo fresco."},
  {id:"veg-antipasto-uno",name:"Antipasto vegano Uno",category:"Vegano",price:"R$ 72,80",description:"Azeitonas Azapa pretas e verdes, manteiga de castanha de caju, alho confitado e escabeche de berinjela. Acompanha cinco fatias de pão de fermentação natural.",vegan:true},
  {id:"veg-antipasto-due",name:"Antipasto vegano Due",category:"Vegano",price:"R$ 82,90",description:"Azeitonas Azapa pretas e verdes, manteiga de castanha de caju, alho confitado e queijo fresco de caju. Acompanha cinco fatias de pão de fermentação natural.",vegan:true},
  {id:"veg-bruschetta-queijo",name:"Bruschetta de queijo fresco",category:"Vegano",price:"R$ 78,90",description:"Seis unidades de pão italiano de fermentação natural, alho e azeite, queijo fresco de castanha de caju, tomate-cereja confitado e manjericão.",vegan:true},
  {id:"veg-bruschetta-agridoce",name:"Bruschetta vegana agridoce",category:"Vegano",price:"R$ 82,90",description:"Seis unidades de pão italiano de fermentação natural, alho e azeite, queijo fresco de castanha de caju, tomate-cereja confitado e figo ou pêssego.",vegan:true},
  {id:"veg-insalata-rucola",name:"Insalata di rucola vegana",category:"Vegano",price:"R$ 43,80",description:"Rúcula, tomate seco e mozzarella de castanha de caju ralada. Salada individual, temperada com azeite e vinagre italiano.",vegan:true},
  {id:"veg-insalata-viola",name:"Insalata Viola",category:"Vegano",price:"R$ 52,90",description:"Alface roxa, figo conforme disponibilidade, tomate-cereja, damasco e nozes. Salada individual, temperada com azeite e vinagre italiano.",vegan:true},
  {id:"veg-cesta-4",name:"Cesta de pão vegana · 4 fatias",category:"Vegano",price:"R$ 18,00",description:"Pão italiano de fermentação natural.",vegan:true},
  {id:"veg-cesta-6",name:"Cesta de pão vegana · 6 fatias",category:"Vegano",price:"R$ 25,00",description:"Pão italiano de fermentação natural.",vegan:true},
  {id:"veg-pasta-sugo",name:"Pasta vegana ao sugo",category:"Vegano",price:"R$ 72,90",description:"Penne ou parafuso à base de arroz com molho ao sugo.",vegan:true},
  {id:"veg-pasta-almondega",name:"Pasta ao sugo com almôndegas de soja",category:"Vegano",price:"R$ 79,90",description:"Penne ou parafuso à base de arroz.",vegan:true},
  {id:"veg-pasta-alho",name:"Pasta vegana de alho e óleo",category:"Vegano",price:"R$ 65,90",description:"Penne ou parafuso à base de arroz com alho e óleo.",vegan:true},
  {id:"veg-pasta-queijo",name:"Alho e óleo com queijo de castanha",category:"Vegano",price:"R$ 72,90",description:"Penne ou parafuso à base de arroz com queijo curado de castanha de caju.",vegan:true},
  {id:"veg-pasta-rucula",name:"Alho, azeite, tomate seco e rúcula",category:"Vegano",price:"R$ 79,80",description:"Penne ou parafuso à base de arroz.",vegan:true},
  {id:"veg-doce-abobora",name:"Abóbora em calda vegana",category:"Vegano",price:"R$ 21,50",description:"Doce em calda; consulte a equipe sobre acompanhamento.",vegan:true},
  {id:"veg-doce-figo",name:"Figo Rami em calda vegano",category:"Vegano",price:"R$ 21,50",description:"Doce em calda; consulte a equipe sobre acompanhamento.",vegan:true},
  {id:"agua-sem-gas",name:"Água sem gás",category:"Bevande",price:"R$ 7,80",description:"Água mineral."},
  {id:"agua-com-gas",name:"Água com gás",category:"Bevande",price:"R$ 8,80",description:"Água mineral."},
  {id:"tonica",name:"Água tônica",category:"Bevande",price:"R$ 9,80",description:"Água tônica."},
  {id:"tonica-zero",name:"Água tônica zero",category:"Bevande",price:"R$ 9,80",description:"Água tônica sem açúcar."},
  {id:"agua-premium",name:"Panna Tuscany, Source ou Perrier",category:"Bevande",price:"R$ 15,60",description:"Opções de água natural premium."},
  {id:"cha-pitaia",name:"Chá branco com pitaia e amora",category:"Bevande",price:"R$ 16,20",description:"Chá gelado, zero açúcar."},
  {id:"cha-lichia",name:"Chá branco sabor lichia",category:"Bevande",price:"R$ 16,20",description:"Chá gelado."},
  {id:"cha-hibisco",name:"Chá de hibisco Roma",category:"Bevande",price:"R$ 16,20",description:"Chá gelado."},
  {id:"cha-verde",name:"Chá verde com laranja e gengibre",category:"Bevande",price:"R$ 16,20",description:"Chá gelado."},
  {id:"suco-natural",name:"Sucos naturais sem açúcar",category:"Bevande",price:"R$ 17,80",description:"Abacaxi, maracujá, uva roxa ou uva verde."},
  {id:"refrigerante",name:"Refrigerante em lata",category:"Bevande",price:"R$ 9,80",description:"Coca-Cola normal ou diet; Guaraná normal ou diet."},
  {id:"vinho-taca",name:"Vinho da casa · taça",category:"Bevande",price:"R$ 58,90",description:"Consulte a equipe sobre os rótulos disponíveis."},
  {id:"vinho-rolha",name:"Taxa de rolha",category:"Bevande",price:"R$ 75,00",description:"Valor indicado no menu enviado."},
  {id:"heineken",name:"Heineken · long neck",category:"Bevande",price:"R$ 14,80",description:"Cerveja long neck."},
  {id:"budweiser",name:"Budweiser · long neck",category:"Bevande",price:"R$ 13,90",description:"Cerveja long neck."},
  {id:"corona",name:"Corona · long neck",category:"Bevande",price:"R$ 13,90",description:"Cerveja long neck."},
  {id:"cerpa",name:"Cerpa Export · long neck",category:"Bevande",price:"R$ 17,90",description:"Cerveja long neck."},
  {id:"baden-baden",name:"Baden Baden Golden · 600 ml",category:"Bevande",price:"R$ 38,99",description:"Cerveja."},
  {id:"aperol",name:"Aperol Spritz Brut",category:"Bevande",price:"R$ 38,80",description:"Drink."},
  {id:"caipi-velho-taiti",name:"Caipirinha · Velho Barreiro e limão Taiti",category:"Bevande",price:"R$ 28,89",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"caipi-velho-siciliano",name:"Caipirinha · Velho Barreiro e limão-siciliano",category:"Bevande",price:"R$ 30,89",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"caipi-absolut-taiti",name:"Caipirinha · Absolut e limão Taiti",category:"Bevande",price:"R$ 42,99",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"caipi-absolut-siciliano",name:"Caipirinha · Absolut e limão-siciliano",category:"Bevande",price:"R$ 44,99",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"caipi-smirnoff-taiti",name:"Caipirinha · Smirnoff e limão Taiti",category:"Bevande",price:"R$ 39,99",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"caipi-smirnoff-siciliano",name:"Caipirinha · Smirnoff e limão-siciliano",category:"Bevande",price:"R$ 41,99",description:"Caipirinha ou caipiroska, conforme menu."},
  {id:"saque-taiti",name:"Saquê de limão Taiti",category:"Bevande",price:"R$ 29,99",description:"Drink."},
  {id:"saque-siciliano",name:"Saquê de limão-siciliano",category:"Bevande",price:"R$ 31,99",description:"Drink."},
  {id:"limoncello",name:"Limoncello · dose",category:"Bevande",price:"R$ 14,30",description:"Licor servido em dose."},
  {id:"cafe-coado",name:"Café coado",category:"Bevande",price:"R$ 8,90",description:"Café."},
  {id:"cafe-espresso",name:"Café espresso",category:"Bevande",price:"R$ 9,90",description:"Café."}
];

const CATEGORY_ORDER = ["Antipasti","Bruschette","Insalate","Pastas","Massas recheadas","Adicionais","Nhoques & especiais","Carne & polenta","Bambini","Dolci","Vegano","Bevande"];
const CATEGORY_LABELS = {
  "Antipasti":"Entradas",
  "Bruschette":"Bruschettas",
  "Insalate":"Saladas",
  "Pastas":"Pastas",
  "Massas recheadas":"Massas recheadas",
  "Adicionais":"Adicionais",
  "Nhoques & especiais":"Nhoques e especiais",
  "Carne & polenta":"Carnes e polenta",
  "Bambini":"Infantil",
  "Dolci":"Sobremesas",
  "Vegano":"Vegano",
  "Bevande":"Bebidas"
};

const state = {design:"tavola", category:"Todos", query:""};
const siteRoot = document.getElementById("site-root");
const dialog = document.getElementById("dish-dialog");
const dialogContent = document.getElementById("dialog-content");
const announcement = document.getElementById("announcement");
const toast = document.getElementById("toast");

function waLink(message) {
  return WHATSAPP + "?text=" + encodeURIComponent(message);
}

function filteredItems() {
  const query = state.query.trim().toLocaleLowerCase("pt-BR");
  return MENU.filter(function(item) {
    const categoryMatch = state.category === "Todos" || item.category === state.category;
    const haystack = (item.name + " " + item.description + " " + item.category).toLocaleLowerCase("pt-BR");
    return categoryMatch && (!query || haystack.includes(query));
  });
}

function categoryControls() {
  const list = ["Todos"].concat(CATEGORY_ORDER);
  return list.map(function(category) {
    const label = category === "Todos" ? "Tudo" : CATEGORY_LABELS[category];
    const pressed = state.category === category ? "true" : "false";
    return '<button class="filter-chip' + (pressed === "true" ? ' is-selected' : '') + '" type="button" data-category="' + category + '" aria-pressed="' + pressed + '">' + label + '</button>';
  }).join("");
}

function menuItem(item, layout) {
  const image = item.image ? '<div class="dish-image"><img src="assets/' + item.image + '.webp" alt="" loading="lazy" width="720" height="540"></div>' : "";
  const tags = (item.vegan ? '<span class="item-tag">Vegano</span>' : "") + (item.featured ? '<span class="item-tag item-tag--accent">Da casa</span>' : "");
  const detail = '<button class="detail-link" type="button" data-dish="' + item.id + '" aria-label="Ver detalhes de ' + item.name + '">Ver detalhes <span aria-hidden="true">↗</span></button>';
  const price = '<span class="item-price">' + item.price + '</span>';
  const body = '<div class="dish-copy"><div class="dish-tags">' + tags + '</div><h3>' + item.name + '</h3><p>' + item.description + '</p><div class="dish-meta">' + price + detail + '</div></div>';
  if (layout === "list") {
    return '<article class="dish-card dish-card--list">' + image + body + '</article>';
  }
  if (layout === "ledger") {
    return '<article class="dish-card dish-card--ledger"><div class="ledger-category">' + (CATEGORY_LABELS[item.category] || item.category) + '</div><div class="dish-copy"><div class="dish-tags">' + tags + '</div><h3>' + item.name + '</h3><p>' + item.description + '</p></div><div class="ledger-end">' + price + detail + '</div></article>';
  }
  return '<article class="dish-card">' + image + body + '</article>';
}

function catalogMarkup(layout) {
  const items = filteredItems();
  if (!items.length) {
    return '<div class="empty-state"><span class="empty-mark" aria-hidden="true">—</span><h3>Não encontramos esse prato</h3><p>Tente outro nome ou escolha uma categoria diferente.</p><button class="text-button" type="button" data-reset-filters>Limpar filtros</button></div>';
  }
  return '<div class="catalog-' + layout + '">' + items.map(function(item){ return menuItem(item, layout); }).join("") + '</div>';
}

function filterPanel(layout) {
  return '<div class="menu-tools menu-tools--' + layout + '"><div class="filter-list" role="group" aria-label="Filtrar cardápio por categoria">' + categoryControls() + '</div><label class="search-field"><span class="sr-only">Buscar no cardápio</span><span class="search-icon" aria-hidden="true">⌕</span><input type="search" id="menu-search" placeholder="Buscar prato ou ingrediente" value="' + state.query.replaceAll('"',"&quot;") + '" autocomplete="off"><kbd>↵</kbd></label></div><p class="result-count" aria-live="polite">' + filteredItems().length + (filteredItems().length === 1 ? ' opção' : ' opções') + ' no cardápio</p><div id="catalog-items">' + catalogMarkup(layout) + '</div>';
}

function commonContactBlock(theme) {
  return '<section class="visit-section visit-section--' + theme + '" id="visita"><div class="visit-copy"><span class="section-marker">Passa da noi</span><h2>Uma mesa em Serra Negra.<br><em>O caminho é simples.</em></h2><p>Estamos na Rua José Fonseca, 70. Abra a rota no Maps e fale com a equipe para consultar horários ou reservas.</p><div class="visit-actions"><a class="button button--primary" href="' + DIRECTIONS + '" target="_blank" rel="noreferrer">Traçar rota <span aria-hidden="true">↗</span></a><a class="button button--quiet" href="' + waLink("Olá! Gostaria de consultar os horários e fazer uma reserva na Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Consultar pelo WhatsApp</a></div><p class="address-line">' + ADDRESS + '</p></div><div class="map-frame"><iframe title="Mapa da Cantina Nonna Carmela & Lo Re em Serra Negra" src="https://maps.google.com/maps?q=' + MAP_QUERY + '&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a class="map-open" href="' + MAPS + '" target="_blank" rel="noreferrer">Abrir no Google Maps <span aria-hidden="true">↗</span></a></div></section>';
}

function footerMarkup(theme) {
  return '<footer class="site-footer site-footer--' + theme + '"><a class="footer-brand" href="#inicio">Nonna Carmela <span>&</span> Lo Re</a><p>Cucina rustica italiana · Serra Negra, SP</p><nav aria-label="Links externos"><a href="' + INSTAGRAM + '" target="_blank" rel="noreferrer">Instagram</a><a href="' + LINKTREE + '" target="_blank" rel="noreferrer">Linktree · menu e carta de vinhos</a></nav><small>Protótipo conceitual. Fotos ilustrativas; preços e informações precisam ser confirmados antes da publicação final.</small></footer>';
}

function catalogSection(layout, theme) {
  return '<section class="menu-section menu-section--' + theme + '" id="menu"><div class="menu-heading"><div><span class="section-marker">Il menù</span><h2>O cardápio <em>da casa.</em></h2><p>Escolha uma categoria, procure por um prato ou veja tudo com calma.</p></div><a class="menu-contact" href="' + waLink("Olá! Gostaria de tirar uma dúvida sobre o cardápio da Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Tem uma dúvida? Fale com a casa <span aria-hidden="true">↗</span></a></div>' + filterPanel(layout) + '<p class="menu-footnote">Todos os pratos são preparados na hora do pedido e podem levar de 30 a 40 minutos. Disponibilidade sujeita à confirmação da equipe.</p></section>';
}

function templateTavola() {
  const picks = MENU.filter(function(item){ return ["antipasto-uno","pasta-rustico","polenta-nonna","cannoli-laranja"].includes(item.id); });
  return '<div class="site-page site-page--tavola"><header class="site-header"><a class="wordmark" href="#inicio"><span class="wordmark-main">Nonna Carmela</span><span class="wordmark-sub">& Lo Re · Serra Negra</span></a><nav class="site-nav" aria-label="Navegação principal"><a href="#menu">Cardápio</a><a href="#casa">A casa</a><a href="#visita">Como chegar</a></nav><a class="header-action" href="' + waLink("Olá! Gostaria de falar com a Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Fale com a casa <span aria-hidden="true">↗</span></a></header><section class="hero hero--tavola" id="inicio"><div class="hero-copy"><span class="hero-note">Serra Negra · Cucina rustica italiana</span><h1>Receitas de família.<br><em>Tempo à mesa.</em></h1><p>Massas, sabores da Nonna e uma mesa para compartilhar. Conheça o cardápio da casa.</p><div class="hero-actions"><a class="button button--primary" href="#menu">Explorar cardápio <span aria-hidden="true">↓</span></a><a class="hero-secondary" href="' + DIRECTIONS + '" target="_blank" rel="noreferrer">Estamos em Serra Negra <span aria-hidden="true">↗</span></a></div><div class="hero-signature"><span class="signature-rule"></span><span>Una cucina di famiglia</span></div></div><figure class="hero-photo"><img src="assets/hero.webp" alt="Pasta artesanal ao molho servido em mesa de cantina italiana" fetchpriority="high" width="1536" height="1024"><figcaption>Uma refeição feita para desacelerar.</figcaption></figure></section><div class="info-ribbon"><span>Massas artesanais</span><i></i><span>Opções veganas</span><i></i><span>Pratos preparados na hora</span><i></i><span>Serra Negra, SP</span></div><section class="house-section house-section--tavola" id="casa"><div class="house-image"><img src="assets/antipasto.webp" alt="Antepastos italianos e pão para compartilhar" loading="lazy" width="1448" height="1086"><span class="photo-caption">Antipasti · La tavola è pronta</span></div><div class="house-copy"><span class="section-marker">La casa</span><h2>O primeiro gesto é <em>sentar à mesa.</em></h2><p>Da entrada ao cannoli, o menu percorre receitas italianas, massas, ingredientes selecionados e preparos feitos na hora. A cozinha também tem uma seção vegana própria.</p><p>Fique à vontade para conhecer os pratos, escolher o que combina com você e conversar com a equipe sobre disponibilidade.</p><a class="text-button" href="#menu">Ver as opções da casa <span aria-hidden="true">↗</span></a></div></section><section class="selection-section"><div class="selection-heading"><span class="section-marker">Da cucina</span><h2>Algumas escolhas para <em>começar.</em></h2></div><div class="selection-grid">' + picks.map(function(item,index){ return '<article class="selection-card selection-card--' + (index+1) + '"><img src="assets/' + item.image + '.webp" alt="" loading="lazy" width="720" height="540"><div class="selection-copy"><span>' + (CATEGORY_LABELS[item.category] || item.category) + '</span><h3>' + item.name + '</h3><p>' + item.price + '</p><button type="button" data-dish="' + item.id + '">Ver detalhes <span aria-hidden="true">↗</span></button></div></article>'; }).join("") + '</div></section>' + catalogSection("cards","tavola") + '<section class="slow-note"><span class="slow-mark" aria-hidden="true">30—40</span><div><span class="section-marker">Con calma</span><h2>Feito na hora <em>tem o seu tempo.</em></h2><p>Os pratos são preparados após o pedido e podem levar entre 30 e 40 minutos. Um bom momento à mesa merece esse cuidado.</p></div><img src="assets/polenta.webp" alt="Polenta da Nonna Carmela com molho rústico, queijo e ovos pochê" loading="lazy" width="1448" height="1086"></section>' + commonContactBlock("tavola") + footerMarkup("tavola") + '</div>';
}

function templateCantina() {
  return '<div class="site-page site-page--cantina"><header class="site-header"><a class="wordmark" href="#inicio"><span class="wordmark-main">Nonna Carmela</span><span class="wordmark-sub">& Lo Re · Serra Negra</span></a><nav class="site-nav" aria-label="Navegação principal"><a href="#menu">Il menù</a><a href="#casa">Origini</a><a href="#visita">Dove siamo</a></nav><a class="header-action" href="' + waLink("Olá! Gostaria de falar com a Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Fale com a casa <span aria-hidden="true">↗</span></a></header><section class="hero hero--cantina" id="inicio"><img class="hero-background" src="assets/polenta.webp" alt="" fetchpriority="high" width="1448" height="1086"><div class="hero-shade"></div><div class="cantina-seal"><span>Serra Negra</span><b>N.C.</b><span>Cucina di famiglia</span></div><div class="hero-copy hero-copy--cantina"><span class="hero-note">La tavola della famiglia Lo Re</span><h1>Il gusto<br>delle <em>origini.</em></h1><p>Pastas, polenta da Nonna Carmela e receitas para compartilhar.</p><a class="button button--light" href="#menu">Entre no cardápio <span aria-hidden="true">↓</span></a></div><a class="hero-coordinate" href="' + DIRECTIONS + '" target="_blank" rel="noreferrer">Rua José Fonseca, 70 · Serra Negra <span aria-hidden="true">↗</span></a></section><section class="cantina-intro" id="casa"><div class="cantina-intro-title"><span class="section-marker">Una tavola per tutti</span><h2>A escolha começa<br>pelo <em>seu apetite.</em></h2></div><div class="cantina-intro-copy"><p>Veja o menu de um jeito simples: entre pelos antipasti, descubra as massas, encontre as opções veganas ou procure direto pelo prato.</p><p>A cozinha prepara os pratos na hora; a equipe confirma disponibilidade, ingredientes e detalhes do pedido.</p><a class="text-button" href="#menu">Explorar o menu <span aria-hidden="true">↓</span></a></div></section><section class="menu-section menu-section--cantina" id="menu"><div class="menu-heading menu-heading--cantina"><div><span class="section-marker">Il menù · Serra Negra</span><h2>Escolha a sua <em>tavola.</em></h2><p>Pratos da casa, receitas veganas e sabores para terminar com dolci.</p></div><span class="menu-stamp">Fatto<br>con cura</span></div><div class="cantina-catalog-layout"><aside class="category-rail"><span>Sezioni</span><div class="filter-list filter-list--rail" role="group" aria-label="Filtrar cardápio por categoria">' + categoryControls() + '</div><div class="rail-note">Cerca qualcosa?<br>Procure pelo nome ou ingrediente.</div></aside><div class="cantina-results"><label class="search-field search-field--cantina"><span class="sr-only">Buscar no cardápio</span><span class="search-icon" aria-hidden="true">⌕</span><input type="search" id="menu-search" placeholder="Buscar prato ou ingrediente" value="' + state.query.replaceAll('"',"&quot;") + '" autocomplete="off"><kbd>↵</kbd></label><p class="result-count" aria-live="polite">' + filteredItems().length + (filteredItems().length===1?' opção':' opções') + ' no cardápio</p><div id="catalog-items">' + catalogMarkup("list") + '</div></div></div><p class="menu-footnote">Todos os pratos são preparados na hora do pedido e podem levar de 30 a 40 minutos. Disponibilidade sujeita à confirmação da equipe.</p></section><section class="cantina-photo-break"><div class="photo-break-copy"><span class="section-marker">Lo spirito della casa</span><h2>A mesa fica melhor <em>quando é compartilhada.</em></h2><p>Peça uma entrada para começar, escolha a sua massa e deixe espaço para um cannoli.</p></div><img src="assets/cannoli.webp" alt="Cannoli tradicional e de pistache" loading="lazy" width="1448" height="1086"></section>' + commonContactBlock("cantina") + footerMarkup("cantina") + '</div>';
}

function templateCarta() {
  const picks = MENU.filter(function(item){ return ["bruschetta-raddusa","pasta-rustico","insalata-fichi","cannoli-pistache"].includes(item.id); });
  return '<div class="site-page site-page--carta"><header class="site-header"><a class="wordmark" href="#inicio"><span class="wordmark-main">N. Carmela <i>×</i> Lo Re</span><span class="wordmark-sub">Cucina rustica italiana · Serra Negra</span></a><nav class="site-nav" aria-label="Navegação principal"><a href="#menu">Menu</a><a href="#casa">A casa</a><a href="#visita">Localização</a></nav><a class="header-action" href="' + waLink("Olá! Gostaria de falar com a Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Contato <span aria-hidden="true">↗</span></a></header><section class="editorial-hero" id="inicio"><div class="editorial-head"><span>Una cucina di famiglia</span><span>Serra Negra, SP · Cucina italiana</span></div><h1>Il menù<br><em>di Nonna.</em></h1><div class="editorial-hero-bottom"><p>Receitas italianas, pratos preparados na hora e sabores para descobrir sem pressa.</p><a href="#menu" class="circle-link" aria-label="Ir ao cardápio">↓</a><figure><img src="assets/hero.webp" alt="Pasta artesanal servida em mesa de cantina" fetchpriority="high" width="1536" height="1024"><figcaption>La tavola · Serra Negra</figcaption></figure></div></section><section class="editorial-note" id="casa"><span class="section-marker">Da casa</span><p>Um menu que passeia por <em>antepasti, pastas, pratos da Nonna, dolci</em> e uma seção vegana. Use os filtros para encontrar uma ideia, consultar o preço e chamar a equipe se quiser confirmar algum detalhe.</p></section><section class="menu-section menu-section--carta" id="menu"><div class="menu-heading menu-heading--carta"><div><span class="section-marker">A carta</span><h2>Um prato de cada <em>história.</em></h2></div><div class="menu-aside-copy"><p>Os itens e preços abaixo foram organizados a partir do menu enviado pela cantina.</p><a href="' + LINKTREE + '" target="_blank" rel="noreferrer">Carta de vinhos e links da casa <span aria-hidden="true">↗</span></a></div></div>' + filterPanel("ledger") + '<p class="menu-footnote">Todos os pratos são preparados na hora do pedido e podem levar de 30 a 40 minutos. Disponibilidade sujeita à confirmação da equipe.</p></section><section class="editorial-picks"><div class="editorial-picks-title"><span class="section-marker">Da cucina</span><h2>Para deixar a mesa <em>completa.</em></h2></div><div class="editorial-picks-grid">' + picks.map(function(item,index){ return '<article class="editorial-pick editorial-pick--' + (index+1) + '"><img src="assets/' + item.image + '.webp" alt="" loading="lazy" width="720" height="540"><div><span>' + (CATEGORY_LABELS[item.category] || item.category) + '</span><h3>' + item.name + '</h3><p>' + item.price + '</p><button type="button" data-dish="' + item.id + '">Ler sobre o prato <span aria-hidden="true">↗</span></button></div></article>'; }).join("") + '</div></section>' + commonContactBlock("carta") + footerMarkup("carta") + '</div>';
}

function render() {
  document.body.dataset.design = state.design;
  document.querySelectorAll("[data-design-choice]").forEach(function(button) {
    const selected = button.dataset.designChoice === state.design;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (state.design === "cantina") siteRoot.innerHTML = templateCantina();
  else if (state.design === "carta") siteRoot.innerHTML = templateCarta();
  else siteRoot.innerHTML = templateTavola();
  announcement.textContent = "Direção " + (state.design === "tavola" ? "Tavola" : state.design === "cantina" ? "Cantina" : "Carta") + " selecionada.";
  observeReveals();
}

function updateCatalog() {
  const itemsContainer = document.getElementById("catalog-items");
  if (!itemsContainer) return;
  const layout = state.design === "cantina" ? "list" : state.design === "carta" ? "ledger" : "cards";
  itemsContainer.innerHTML = catalogMarkup(layout);
  document.querySelectorAll(".result-count").forEach(function(el){
    const count = filteredItems().length;
    el.textContent = count + (count === 1 ? " opção no cardápio" : " opções no cardápio");
  });
  observeReveals();
}

function showDish(id) {
  const item = MENU.find(function(entry){ return entry.id === id; });
  if (!item) return;
  const image = item.image ? '<img class="dialog-image" src="assets/' + item.image + '.webp" alt="" width="720" height="540">' : "";
  const vegan = item.vegan ? '<span class="item-tag">Vegano</span>' : "";
  dialogContent.innerHTML = image + '<div class="dialog-copy"><div class="dish-tags">' + vegan + '<span class="item-tag">' + (CATEGORY_LABELS[item.category] || item.category) + '</span></div><span class="dialog-kicker">Nonna Carmela & Lo Re</span><h2 id="dialog-title">' + item.name + '</h2><p>' + item.description + '</p><strong class="dialog-price">' + item.price + '</strong><a class="button button--primary" href="' + waLink("Olá! Gostaria de saber mais sobre " + item.name + " no menu da Nonna Carmela & Lo Re.") + '" target="_blank" rel="noreferrer">Consultar este prato pelo WhatsApp <span aria-hidden="true">↗</span></a><small>Valores e disponibilidade podem mudar. Confirme com a equipe.</small></div>';
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open","");
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(function(){ toast.classList.remove("is-visible"); }, 2500);
}

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(function(el){ el.classList.add("is-visible"); });
    return;
  }
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12,rootMargin:"0px 0px -20px 0px"});
  elements.forEach(function(el){ observer.observe(el); });
}

document.addEventListener("click", function(event) {
  const designButton = event.target.closest("[data-design-choice]");
  if (designButton) {
    state.design = designButton.dataset.designChoice;
    render();
    window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
    return;
  }
  const filterButton = event.target.closest("[data-category]");
  if (filterButton) {
    state.category = filterButton.dataset.category;
    updateCatalog();
    document.querySelectorAll("[data-category]").forEach(function(button){
      const selected = button.dataset.category === state.category;
      button.classList.toggle("is-selected",selected);
      button.setAttribute("aria-pressed",String(selected));
    });
    return;
  }
  const dishButton = event.target.closest("[data-dish]");
  if (dishButton) { showDish(dishButton.dataset.dish); return; }
  if (event.target.closest("[data-close-dialog]")) { dialog.close(); return; }
  if (event.target.closest("[data-reset-filters]")) {
    state.query = "";
    state.category = "Todos";
    render();
    document.getElementById("menu-search")?.focus();
  }
});

document.addEventListener("input", function(event) {
  if (event.target.id === "menu-search") {
    state.query = event.target.value;
    updateCatalog();
    const field = document.getElementById("menu-search");
    field?.focus();
    if (field) field.setSelectionRange(state.query.length,state.query.length);
  }
});

dialog.addEventListener("click", function(event) {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) dialog.close();
});
dialog.addEventListener("close", function(){ dialogContent.innerHTML = ""; });

render();

