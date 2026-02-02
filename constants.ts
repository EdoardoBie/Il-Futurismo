import { Artwork } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: "DYNAMISM OF A CYCLIST",
    year: "1913",
    artist: "UMBERTO BOCCIONI",
    imgUrl: "https://lh3.googleusercontent.com/d/10dOzZjP_fDVJ-q9IO00ORRubPN8G6uLp"
  },
  {
    id: 2,
    title: "SPEED OF AUTOMOBILE",
    year: "1913",
    artist: "GIACOMO BALLA",
    imgUrl: "https://lh3.googleusercontent.com/d/1bgafANoGPP41RWdoapDkjwHSVVlTOZ3Y"
  },
  {
    id: 3,
    title: "ARMORED TRAIN",
    year: "1915",
    artist: "GINO SEVERINI",
    imgUrl: "https://lh3.googleusercontent.com/d/1IN74xLLScf1kCQQz1PO4PATxBT5Rj2_P"
  },
  {
    id: 4,
    title: "THE CITY RISES",
    year: "1910",
    artist: "UMBERTO BOCCIONI",
    imgUrl: "https://lh3.googleusercontent.com/d/1sEckVnQqS0j_JbTTauf2Cw8t4XQFcDmx"
  }
];

export const TIMELINE_EVENTS = [
  { 
    year: "1909", 
    title: "MANIFESTO DEL FUTURISMO", 
    desc: "The explosion of modernity. Marinetti publishes the foundation of Futurism in Le Figaro, Paris. We affirm that the magnificence of the world has been enriched by a new beauty: the beauty of speed." 
  },
  { 
    year: "1910", 
    title: "TECHNICAL MANIFESTO", 
    desc: "Futurist Painting manifesto released. The gesture which we would reproduce on canvas shall no longer be a fixed moment in universal dynamism. It shall simply be the dynamic sensation itself." 
  },
  { 
    year: "1912", 
    title: "SCULPTURE", 
    desc: "Boccioni publishes his manifesto on sculpture. Let us open the figure like a window and enclose it in the environment. We proclaim the absolute and complete abolition of finite lines and the contained statue." 
  },
  { 
    year: "1913", 
    title: "WORDS IN FREEDOM", 
    desc: "Destruction of syntax. The adjective must be abolished. The verb must be used in the infinitive. Typography is revolutionized to express the visual power of sound and noise." 
  },
  { 
    year: "1914", 
    title: "ARCHITETTURA", 
    desc: "Sant'Elia envisions the city of the future. The Futurist house must be like a gigantic machine. The lifts must not hide like solitary worms in the stairwells, but swarm up the facades like serpents of glass and iron." 
  }
];

export const MANIFESTO_TEXTS = {
  header: "We want to sing the love of danger, the habit of energy and rashness.",
  col1: "Courage, audacity, and revolt will be essential elements of our poetry. Up to now literature has exalted a pensive immobility, ecstasy, and sleep. We intend to exalt aggressive action, a feverish insomnia, the racer’s stride, the mortal leap, the punch and the slap.",
  col2: "We affirm that the world’s magnificence has been enriched by a new beauty: the beauty of speed. A racing car whose hood is adorned with great pipes, like serpents of explosive breath—a roaring car that seems to ride on grapeshot is more beautiful than the Victory of Samothrace.",
  col3: "We want to hymn the man at the wheel, who hurls the lance of his spirit across the Earth, along the circle of its orbit. We stand on the last promontory of the centuries! Why should we look back, when what we want is to break down the mysterious doors of the Impossible?",
  highlight: "WAR IS THE ONLY HYGIENE OF THE WORLD."
};

export const HISTORY_CONTENT = {
  intro: {
    title: "IL FUTURISMO",
    subtitle: "Analisi Completa dell'Avanguardia Italiana",
    text: [
      "All'inizio del XX secolo, l'Italia e l'Europa furono attraversate da un'ondata di trasformazioni senza precedenti. Le nuove scoperte tecnologiche, l'impetuosa avanzata dell'industrializzazione e i profondi cambiamenti sociali crearono un clima culturale effervescente. In questo contesto, le nuove possibilità di comunicazione come il telegrafo senza fili e la radio cambiarono radicalmente la percezione delle distanze e del tempo, alimentando un'ossessione per la velocità che divenne il motore ideologico di un movimento di rottura radicale.",
      "Emerse così il Futurismo, la prima avanguardia storica italiana, un movimento che non si limitò a proporre un nuovo stile, ma che intese rivoluzionare dalle fondamenta l'intero rapporto tra l'arte, la cultura e la vita. Il Futurismo si propose come un movimento totale, con l'ambizione di esplorare e rinnovare ogni forma di espressione: dalla letteratura alla pittura, dalla scultura all'architettura, fino a toccare il teatro, la musica, il cinema e persino la gastronomia.",
      "La sua missione era quella di spazzare via il passato, considerato un fardello polveroso, per celebrare il dinamismo del presente e proiettarsi verso un futuro dominato dalla macchina e dalla velocità. Come proclamato nel suo manifesto fondativo, la nuova bellezza da venerare era incarnata dalla 'bellezza della velocità'."
    ]
  },
  sections: [
    {
      id: "marinetti",
      title: "01. L'ARTEFICE",
      subtitle: "Filippo Tommaso Marinetti",
      content: [
        "L'importanza di Filippo Tommaso Marinetti (1876-1944) trascende il suo ruolo di poeta e scrittore. Egli fu un vero e proprio imprenditore culturale, un profeta della modernità la cui biografia è inestricabilmente legata alla nascita, allo sviluppo e all'affermazione del Futurismo. La sua vita fu un'opera d'arte futurista essa stessa: dinamica, polemica e costantemente proiettata verso l'azione.",
        "Nato ad Alessandria d'Egitto da una famiglia italiana benestante, Marinetti ricevette una formazione cosmopolita. Studiò presso un collegio di gesuiti francesi, dove fondò la sua prima rivista, 'Papyrus', e si diplomò a Parigi, assorbendo l'influenza del Simbolismo francese. Questa educazione internazionale fu fondamentale per concepire un movimento che, pur nascendo in Italia, seppe da subito dialogare con le avanguardie europee.",
        "L'evento catalizzatore che segnò la svolta della sua vita e la nascita del Futurismo fu un banale incidente d'auto nel 1908. Uscito di strada con la sua Isotta Fraschini per evitare due ciclisti, Marinetti trasfigurò l'episodio in un'esperienza di rinascita simbolica: estratto dal fossato, si sentì un 'uomo nuovo', pronto a recidere ogni legame con l'estetica decadente e liberty.",
        "Da questa epifania nacque il Manifesto del Futurismo, pubblicato su 'Le Figaro' il 20 febbraio 1909. Marinetti divenne l'infaticabile promotore del Futurismo attraverso innumerevoli manifesti e le celebri 'serate futuriste'. Fervente interventista, si arruolò volontario nella Prima Guerra Mondiale, vedendo nel conflitto la 'sola igiene del mondo'. La sua adesione al Fascismo fu complessa: pur venendo nominato Accademico d'Italia, mantenne una certa autonomia intellettuale, opponendosi pubblicamente all'antisemitismo e alle leggi razziali del 1938."
      ]
    },
    {
      id: "ideology",
      title: "02. IDEOLOGIA",
      subtitle: "Principi di una Rivoluzione Totale",
      intro: "Lo strumento principale attraverso cui il Futurismo definì e diffuse la propria ideologia fu il manifesto. Questi testi delinearono un progetto di rottura radicale con la tradizione.",
      points: [
        { 
          title: "Il Rifiuto del Passatismo", 
          desc: "Guerra totale non tanto al passato in sé, quanto alla sua venerazione. Musei, biblioteche e accademie venivano definiti 'cimiteri'. Il 'Passatismo' era visto come una forza attiva di stagnazione; l'obiettivo era 'distruggere' la tradizione per liberare la creatività." 
        },
        { 
          title: "Il Culto della Modernità", 
          desc: "In opposizione all'estetica decadente, i futuristi elessero a nuovi canoni di bellezza la macchina, la velocità, la grande industria e la vita febbrile delle metropoli moderne. L'immaginario tecnologico divenne la nuova epica." 
        },
        { 
          title: "Estetica della Guerra", 
          desc: "Il movimento glorificò il conflitto come 'sola igiene del mondo'. La guerra era vista come forza purificatrice capace di rigenerare la società, spazzando via le istituzioni obsolete, nonché come motore di progresso tecnologico." 
        },
        { 
          title: "Disprezzo della Donna", 
          desc: "In una delle sue affermazioni più controverse, il manifesto esprimeva 'disprezzo della donna'. Questa posizione si inseriva in un più ampio culto della virilità e dell'aggressività, in opposizione al sentimentalismo romantico." 
        }
      ]
    },
    {
      id: "forms",
      title: "03. LE FORME",
      subtitle: "Ricostruire l'Universo",
      intro: "L'ambizione del Futurismo non era semplicemente quella di riformare l'arte, ma di estendere la sua rivoluzione estetica a ogni ambito della creatività.",
      items: [
        { 
          cat: "Letteratura", 
          title: "Parole in Libertà",
          desc: "Per esprimere la velocità moderna, era necessario frantumare le strutture linguistiche. Le regole: distruzione della sintassi, verbi all'infinito, abolizione di aggettivi e punteggiatura. Esempio celebre: 'Zang Tumb Tumb' di Marinetti." 
        },
        { 
          cat: "Pittura", 
          title: "Dinamismo Universale",
          desc: "I pittori (Boccioni, Balla, Severini) miravano a rappresentare non un istante, ma il movimento stesso. Concetti chiave: 'linee-forza' e 'simultaneità della visione', dove oggetti e ambiente si fondono in un vortice di energia." 
        },
        { 
          cat: "Architettura", 
          title: "La Città Nuova",
          desc: "Sant'Elia delineò la visione di una metropoli verticale, un organismo dinamico caratterizzato da grandi infrastrutture di trasporto. Edifici leggeri, effimeri e funzionali, progettati per una società in costante movimento." 
        },
        { 
          cat: "Musica e Cinema", 
          title: "Rumore e Deformazione",
          desc: "Nella musica, Russolo propose l'Arte dei Rumori per sostituire i suoni armonici con quelli industriali. Il cinema fu identificato come l'arte futurista per eccellenza grazie alla sua natura dinamica." 
        }
      ]
    }
  ],
  evolution: {
    title: "04. STORIA",
    subtitle: "Evoluzione e Declino",
    intro: "Il Futurismo non fu un blocco monolitico, ma un movimento vivo che si evolse attraverso fasi distinte, profondamente influenzato dagli eventi storici.",
    first: {
      name: "Primo Futurismo",
      years: "1909 — 1916",
      desc: "Corrisponde al periodo eroico e più rivoluzionario, dominato da figure come Marinetti e Boccioni. È caratterizzato da un'ideologia fortemente guerrafondaia e da una vena anarchica. Questa fase si chiude idealmente nel 1916 con la morte in guerra di Umberto Boccioni, che priva il gruppo di uno dei suoi talenti più originali."
    },
    second: {
      name: "Secondo Futurismo",
      years: "1918 — 1944",
      desc: "Questo periodo è segnato da un legame più stretto e istituzionale con il regime fascista. La carica eversiva si attenua e il movimento tende a frammentarsi, mostrando influenze dal post-cubismo e dal surrealismo. L'epilogo coincide con la morte di Marinetti nel 1944."
    },
    legacy: {
      title: "EREDITÀ",
      text: [
        "L'influenza del Futurismo sulle avanguardie del Novecento è stata profonda e duratura. Movimenti come il Costruttivismo russo, il Dadaismo e il Surrealismo ne assorbirono e rielaborarono molte delle innovazioni formali e concettuali.",
        "Tuttavia, la sua compromissione con il regime fascista ne segnò il destino nel secondo dopoguerra, portando a una sorta di 'damnatio memoriae' che ne mise in ombra per decenni la portata artistica. Solo a partire dalla seconda metà del Novecento, nuovi studi critici hanno iniziato un processo di rivalutazione.",
        "Oggi il Futurismo è riconosciuto come un movimento fondamentale per la modernità, capace di intuizioni geniali e portatore di profonde contraddizioni, la cui eredità continua a essere oggetto di studio e dibattito."
      ]
    }
  }
};