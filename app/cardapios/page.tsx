const whatsapp = "https://wa.me/5519974066045?text=Olá!%20Vi%20as%20opções%20de%20cardápios%20do%20Sonho%20de%20Criança%20e%20gostaria%20de%20saber%20mais.";
function InstagramIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill" /></svg>; }

const menus = [
  { name: "Legal", note: "Clássicos que agradam crianças e adultos", image: "/media/cardapios/oficiais/legal.jpeg", alt: "Mini-hambúrguer do cardápio Legal", sections: [
    ["Entradas", "Salgados fritos e assados, creme de milho e focaccia com patê."],
    ["Coquetel", "Salada, mini-hambúrguer ou hot dog, batata frita, frango ao molho bechamel, massa e polenta à bolonhesa."],
    ["Sobremesas", "Bolo, mini churros e doces variados."],
    ["Para as crianças", "Pipoca, pão de queijo e gelatina colorida."],
  ]},
  { name: "Divertida", note: "Mais variedade para uma comemoração leve e saborosa", image: "/media/cardapios/oficiais/divertida.jpeg", alt: "Salgados do cardápio Divertida", sections: [
    ["Entradas", "Salgados fritos e assados, mini batata com catupiry e bacon e focaccia com patê."],
    ["Coquetel", "Salada com rosbife, mini-hambúrguer ou hot dog, batata frita, frango ao bechamel ou mini pastel, risoto e massa."],
    ["Sobremesas", "Bolo com sorvete, mini churros ou picolé, doces simples e um doce especial."],
    ["Para as crianças", "Pipoca, pão de queijo e gelatina colorida."],
  ]},
  { name: "Super Sonho", note: "Petiscos especiais e um coquetel mais completo", image: "/media/cardapios/oficiais/super-sonho.jpeg", alt: "Batata frita do cardápio Super Sonho", sections: [
    ["Entradas", "Batata com cheddar e bacon, salgados fritos e assados e dadinho de tapioca com geleia de pimenta."],
    ["Coquetel", "Salada com rosbife, mini lanche, mini pastel, bobó de camarão, canelone, risoto e purê com ragú de fraldinha."],
    ["Sobremesas", "Bolo com sorvete, mini churros ou picolé, doces variados e cascata de chocolate com frutas."],
    ["Para as crianças", "Pipoca, pão de queijo e gelatina colorida."],
  ]},
  { name: "Sonhar", note: "Uma ilha de almoço ou jantar para reunir toda a família", image: "/media/cardapios/oficiais/sonhar.jpeg", alt: "Dadinho de tapioca do cardápio Sonhar", sections: [
    ["Entradas", "Dadinho de tapioca, mini batata com catupiry e bacon, salgados fritos e focaccia com patê."],
    ["Ilha de almoço ou jantar", "Maionese, couve-flor gratinada, arroz, saladas, frutas, canelone, frango ao bechamel e lagarto ao molho madeira."],
    ["Sobremesas", "Bolo com sorvete, doces variados e salada de frutas."],
    ["Para as crianças", "Pipoca, pão de queijo, hot dog e gelatina colorida."],
  ]},
  { name: "Churrasco", note: "Sabores da brasa em uma ilha completa", image: "/media/cardapios/oficiais/churrasco.jpeg", alt: "Carnes servidas no cardápio Churrasco", sections: [
    ["Entradas", "Mini batata com catupiry e bacon, salgados fritos e choripan."],
    ["Ilha de churrasco", "Carne premium, frango, linguiça, franbacon, queijo coalho, acompanhamentos, saladas, frutas e abacaxi grelhado."],
    ["Sobremesas", "Bolo com sorvete, doces variados e salada de frutas."],
    ["Para as crianças", "Pipoca, pão de queijo, hot dog e gelatina colorida."],
  ]},
  { name: "Imperial", note: "Ilhas gastronômicas com uma seleção sofisticada", image: "/media/cardapios/oficiais/imperial.jpeg", alt: "Entrada do cardápio Imperial", sections: [
    ["Ilha gastronômica", "Terrine, canapés, tábua de frios e frutas, brie folhado, burrata, guacamole, quiche, esfiha e kibe cru."],
    ["Ilha de almoço ou jantar", "Saladas e frutas, massas com molhos variados, arroz e lagarto ao molho madeira."],
    ["Volante e sobremesas", "Salgados e batata frita, bolo com sorvete, doces e mini churros."],
    ["Para as crianças", "Pipoca, pão de queijo, hot dog e gelatina colorida."],
  ]},
  { name: "Premium", note: "Uma experiência gastronômica elaborada para celebrar", image: "/media/cardapios/oficiais/premium.jpeg", alt: "Tábua de frios e frutas do cardápio Premium", sections: [
    ["Ilha gastronômica", "Terrine, canapés, tábua de frios e frutas, brie folhado, burrata, guacamole, quiche, esfiha e kibe cru."],
    ["Coquetel", "Salada com rosbife, focaccia, risoto de filé mignon e gorgonzola, massa, bobó de camarão, salgados e batata frita."],
    ["Sobremesas", "Bolo com sorvete, doces variados e mini churros com doce de leite."],
    ["Para as crianças", "Pipoca, pão de queijo, hot dog e gelatina colorida."],
  ]},
  { name: "Rodízio de Pizza", note: "Uma experiência descontraída, com sabores doces e salgados", image: "/media/cardapios/oficiais/rodizio-pizza.jpeg", alt: "Pizza servida no Rodízio de Pizza", sections: [
    ["Entradas", "Salgados fritos, salada e focaccia com patê."],
    ["Rodízio", "Pizzas como mussarela, portuguesa, calabresa, bacon, frango com catupiry, palmito, rúcula, chocolate e banana."],
    ["Massas e sobremesas", "Penne e nhoque, bolo com sorvete, brigadeiro e beijinho."],
    ["Para as crianças", "Pipoca, pão de queijo e gelatina colorida."],
  ]},
];

export default function Cardapios() {
  return <main className="menu-page">
    <header className="topbar menu-topbar">
      <a className="brand" href="/" aria-label="Sonho de Criança — início"><img src="/media/logo.png" alt="Sonho de Criança" /></a>
      <nav aria-label="Navegação principal"><a href="/#experiencia">A experiência</a><a href="/#estrutura">O espaço</a><a className="active" href="/cardapios">Cardápios</a><a href="/#contato">Contato</a></nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Pedir orçamento <span>↗</span></a>
    </header>

    <section className="menu-hero">
      <div className="menu-hero-copy"><p className="eyebrow light">Sabores para cada celebração</p><h1>Uma festa também<br /><em>fica na memória pelo sabor.</em></h1><p>Oito experiências para combinar o cardápio com o estilo da comemoração - das escolhas descontraídas às ilhas gastronômicas mais elaboradas.</p></div>
      <div className="menu-hero-image"><img src="/media/cardapios/oficiais/imperial.jpeg" alt="Entrada servida no Sonho de Criança" /></div>
    </section>

    <section className="menu-intro"><p className="eyebrow">Conheça as opções</p><h2>Escolha o clima da festa.<br /><em>O sabor acompanha.</em></h2><p>Todos os cardápios incluem água mineral, suco de laranja e refrigerantes normal e zero. Os itens podem variar conforme as escolhas feitas com a equipe.</p></section>

    <section className="menu-grid menu-grid-detailed">
      {menus.map((item, index) => <article className="menu-card menu-card-detailed" key={item.name}>
        <div className="menu-card-image"><img src={item.image} alt={item.alt} /></div>
        <div className="menu-card-copy">
          <span>{String(index + 1).padStart(2, "0")}</span><h2>{item.name}</h2><p>{item.note}</p>
          <details className="menu-details"><summary>Ver o que está incluso <b>+</b></summary><div className="menu-details-content">
            {item.sections.map(([title, content]) => <div key={title}><h3>{title}</h3><p>{content}</p></div>)}
            <p className="menu-drinks">Bebidas inclusas: água mineral, suco de laranja e refrigerantes.</p>
          </div></details>
        </div>
      </article>)}
    </section>

    <section className="menu-variety"><p className="eyebrow light">Uma escolha para cada festa</p><h2>Do coquetel à ilha gastronômica.<br /><em>Do clássico ao inesquecível.</em></h2><div className="menu-tags"><span>Coquetel</span><span>Almoço & jantar</span><span>Churrasco</span><span>Rodízio de pizza</span><span>Sobremesas</span><span>Opções infantis</span></div></section>

    <section className="menu-cta"><p className="eyebrow">Vamos encontrar a opção ideal?</p><h2>Conte como você imagina a festa.</h2><p>A equipe apresenta as combinações disponíveis e ajuda você a escolher a experiência que mais combina com a sua comemoração.</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero conhecer os cardápios <span>↗</span></a></section>

    <footer><a href="/"><img src="/media/logo.png" alt="Sonho de Criança" /></a><p>Buffet infantil · Piracicaba/SP</p><a href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer">@sonhodecriancabuffet</a></footer>
    <a className="instagram-float" href="https://instagram.com/sonhodecriancabuffet" target="_blank" rel="noreferrer" aria-label="Acessar o Instagram do Sonho de Criança"><InstagramIcon /></a>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><span>WhatsApp</span><b>↗</b></a>
  </main>;
}
