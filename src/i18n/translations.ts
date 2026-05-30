export type Lang = "en" | "fr";

export const translations = {
  en: {
    role: "Photographer · Videographer",
    city: "Montreal",

    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      services: "Services",
      contact: "Contact",
    },

    cta: {
      bookEvent: "Book your event",
      bookSession: "Book your session",
      discussVideo: "Discuss your video project",
      moreAboutMe: "More about me",
      viewProjects: "View projects",
      viewPortfolio: "View portfolio",
      sendMessage: "Send message",
    },

    home: {
      eyebrow: ["Event & Music Photographer", "based in Montréal"],
      title: ["Capturing", "Real Energy.", "Raw Moments."],
      lead: ["I shoot concerts, nightlife and events with a", "focus on emotion, atmosphere and authenticity."],
    },

    sections: {
      recentWork: { label: "Recent work",  title: "Latest moments" },
      whatIShoot: { label: "My services",  title: "What I shoot" },
      keyNumbers: { label: "Key numbers",  title: "Track record" },
    },

    trust: { label: "Artists & events covered at" },

    services: {
      sectionTitle: ["Coverage built", "around the moment."],
      sectionLead: "Three focused offers. One approach: stay close, stay quiet, capture what's actually happening — then deliver fast, useful files your team can run with.",
      whatsIncluded: "What's included",
      bestFor: "Best for",
      items: {
        "live-nightlife-coverage": {
          title: "Live & Nightlife Coverage",
          description: "Live performances, DJs, festivals and club events.",
          longDescription: "I move with the energy of the room — from the pit to the crowd, from the stage to the booth. My approach is instinctive, atmospheric and human: real frames that capture what the night actually felt like.",
          deliverables: [
            "Color and B&W edits",
            "High-res edited files",
            "Web-ready set for socials",
            "Promo usage rights included",
            "Fast delivery upon request",
          ],
          bestFor: "Artists, festivals, venues, agencies, clubs",
        },
        "portraits-editorial": {
          title: "Portraits & Editorial",
          description: "Studio sessions, corporate portraits and editorial imagery.",
          longDescription: "Whether it's for an artist, a founder, a team or a personal project, I create portraits shaped by mood, light and presence. Clean when needed, cinematic when preferred — always made to feel like you.",
          deliverables: [
            "Studio or on-location session",
            "Creative direction before the shoot",
            "Color and B&W edits",
            "High-res edited files",
            "Web-ready set for socials",
            "Flexible turnaround based on your needs",
          ],
          bestFor: "Artists, creatives, entrepreneurs, teams, press, personal branding, companies",
        },
        "event-coverage": {
          title: "Event Coverage",
          description: "Cultural, corporate and private events.",
          longDescription: "I document events with a discreet and intentional eye — capturing the people, the atmosphere, the details and the moments that make the experience feel alive.",
          deliverables: [
            "Event photo coverage",
            "Candid moments and key highlights",
            "Detail shots and atmosphere",
            "High-res edited files",
            "Web-ready set for socials",
            "Flexible turnaround based on your needs",
          ],
          bestFor: "Launches, private events, cultural events, conferences, brand activations",
        },
        "video-content": {
          title: "Video Content",
          description: "Custom video content for artists, events and brands.",
          longDescription: "From DJ set recaps to promotional films, behind-the-scenes content, interviews or cinematic social media pieces, each video project is built around the client's vision. The idea is to discuss the concept, format, filming setup and final deliverables before the shoot, so the video can be adapted to the project and its audience. Depending on the needs, production can include drone footage, multicam recording, vertical content for socials, event highlights, promotional edits or more cinematic storytelling.",
          deliverables: [
            "Creative direction discussion",
            "Video concept adapted to the project",
            "Filming setup based on the client's needs",
            "Multicam option available",
            "Drone footage option available",
            "Short-form or promotional video edits",
            "Vertical exports for socials if needed",
            "Light color correction",
            "Web-ready exports",
            "Flexible turnaround based on your needs",
          ],
          bestFor: "Artists, DJs, festivals, brands, event organizers, creative projects, promotional campaigns",
        },
      },
    },

    work: {
      title: ["The room,", "the energy,", "the night."],
      lead: "A selection of recent work — from main-stage festivals to underground rooms, brand activations and editorial sets. Browse all, or filter by what you need.",
      categories: {
        "all":                 "Selected Work",
        "live-stage":          "Live & Stage",
        "nightlife":           "Nightlife",
        "portraits-editorial": "Portraits & Editorial",
      },
      categoryLeads: {
        "all":                 "A curated selection of my strongest images across live, nightlife and portrait work.",
        "live-stage":          "Concerts, festivals, live performances, stage shows and cultural performances.",
        "nightlife":           "DJ sets, clubs, crowds, dance floors and after-dark atmospheres.",
        "portraits-editorial": "Studio sessions, corporate portraits, artist portraits, editorial imagery and personal branding.",
      },
      eyebrow: "Portfolio",
    },

    about: {
      eyebrow: "About me",
      title: "I'm Ambre",
      paragraphs: [
        "An event & music photographer based in Montréal.",
        "I document what people feel — not just what they see.",
        "My approach is instinctive and immersive. I stay close to the moment, capturing energy as it unfolds — without staging or forcing anything.",
      ],
      workedWithLabel: "Worked with",
      workedWithSuffix: "and many others.",
    },

    approach: {
      label: "Approach",
      quote: ["No staging.", "No posing.", "Just real moments."],
    },

    keyNumbers: [
      { value: "100+", label: "Events covered" },
      { value: "7+",   label: "Years behind the camera" },
      { value: "5K+",  label: "Photos delivered" },
    ],

    contact: {
      eyebrow: "Contact",
      title: ["Let's", "work", "together."],
      lead: "Tell me about your event or project — venue, date, mood, anything useful. I usually reply within 24 hours.",
      directLabels: { email: "Email", instagram: "Instagram", basedIn: "Based in" },
      basedInValue: "Montréal, Canada — available worldwide",
      successMessage: "Thanks — your message is in. I'll be back shortly.",
      form: {
        name: "Your name",
        namePlaceholder: "Full name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        eventType: "Type of event",
        eventTypePlaceholder: "Choose a category",
        eventTypes: {
          concert: "Concert / Live performance",
          nightlife: "Nightlife / Club / Festival",
          brand: "Brand event / Activation",
          corporate: "Corporate event",
          private: "Private event / Wedding",
          other: "Other",
        },
        date: "Date",
        message: "Message",
        messagePlaceholder: "Tell me about your project — venue, scope, anything useful.",
      },
    },

    finalCta: {
      title: "Let's work together",
      lead: "Tell me about your event or project.",
    },

    instagram: {
      eyebrow: "Behind the scenes",
      title: "Follow the work as it happens.",
      lead: "New shoots, raw frames, and the moments between events — all on Instagram.",
      cta: "Follow on Instagram",
      handleLine: "Latest from",
    },

    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms",
    },
  },

  fr: {
    role: "Photographe · Vidéaste",
    city: "Montréal",

    nav: {
      home: "Accueil",
      about: "À propos",
      work: "Projets",
      services: "Services",
      contact: "Contact",
    },

    cta: {
      bookEvent: "Réservez votre événement",
      bookSession: "Réservez votre séance",
      discussVideo: "Parlons de votre projet vidéo",
      moreAboutMe: "En savoir plus",
      viewProjects: "Voir les projets",
      viewPortfolio: "Voir le portfolio",
      sendMessage: "Envoyer",
    },

    home: {
      eyebrow: ["Photographe événementiel & musical", "basée à Montréal"],
      title: ["Capter", "L'énergie réelle.", "Les moments bruts."],
      lead: ["Je photographie concerts, soirées et événements avec un", "focus sur l'émotion, l'atmosphère et l'authenticité."],
    },

    sections: {
      recentWork: { label: "Projets récents", title: "Derniers moments" },
      whatIShoot: { label: "Mes services",    title: "Ce que je photographie" },
      keyNumbers: { label: "Chiffres clés",   title: "En quelques chiffres" },
    },

    trust: { label: "Artistes & événements couverts à" },

    services: {
      sectionTitle: ["Une couverture pensée", "autour du moment."],
      sectionLead: "Trois offres ciblées. Une seule approche : rester proche, rester discrète, capter ce qui se passe vraiment — puis livrer rapidement des fichiers exploitables.",
      whatsIncluded: "Ce qui est inclus",
      bestFor: "Idéal pour",
      items: {
        "live-nightlife-coverage": {
          title: "Couverture Live & Nightlife",
          description: "Concerts live, DJ sets, festivals et soirées en club.",
          longDescription: "Je bouge avec l'énergie de la salle — de la fosse à la foule, de la scène à la régie. Mon approche est instinctive, atmosphérique et humaine : des images vraies qui captent ce que la nuit a vraiment été.",
          deliverables: [
            "Édition couleur et N&B",
            "Fichiers haute définition édités",
            "Set web prêt pour les réseaux",
            "Droits d'usage promo inclus",
            "Livraison rapide sur demande",
          ],
          bestFor: "Artistes, festivals, salles, agences, clubs",
        },
        "portraits-editorial": {
          title: "Portraits & Éditorial",
          description: "Séances studio, portraits corporate et photographie éditoriale.",
          longDescription: "Pour un artiste, un fondateur, une équipe ou un projet personnel, je crée des portraits façonnés par l'atmosphère, la lumière et la présence. Clean quand il le faut, cinématographique quand il le faut — toujours fait pour vous ressembler.",
          deliverables: [
            "Séance en studio ou en extérieur",
            "Direction créative en amont",
            "Édition couleur et N&B",
            "Fichiers haute définition édités",
            "Set web prêt pour les réseaux",
            "Délais flexibles selon vos besoins",
          ],
          bestFor: "Artistes, créatifs, entrepreneurs, équipes, presse, image personnelle, entreprises",
        },
        "event-coverage": {
          title: "Couverture d'événement",
          description: "Événements culturels, corporate et privés.",
          longDescription: "Je documente les événements avec un œil discret et intentionnel — captant les gens, l'atmosphère, les détails et les moments qui rendent l'expérience vivante.",
          deliverables: [
            "Couverture photo de l'événement",
            "Moments candides et temps forts",
            "Détails et atmosphère",
            "Fichiers haute définition édités",
            "Set web prêt pour les réseaux",
            "Délais flexibles selon vos besoins",
          ],
          bestFor: "Lancements, événements privés, événements culturels, conférences, activations de marque",
        },
        "video-content": {
          title: "Contenu vidéo",
          description: "Contenu vidéo sur-mesure pour artistes, événements et marques.",
          longDescription: "Du recap de DJ set au film promotionnel, du behind-the-scenes aux interviews ou contenus cinématographiques pour les réseaux, chaque projet vidéo est construit autour de la vision du client. L'idée est de discuter du concept, du format, du dispositif de tournage et des livrables finaux avant le shoot, pour adapter la vidéo au projet et à son audience. Selon les besoins, la production peut inclure prises de vue par drone, multicam, contenu vertical pour les réseaux, recaps d'événements, montages promotionnels ou narration plus cinématographique.",
          deliverables: [
            "Discussion sur la direction créative",
            "Concept vidéo adapté au projet",
            "Dispositif de tournage selon vos besoins",
            "Option multicam disponible",
            "Option drone disponible",
            "Montages courts ou promotionnels",
            "Exports verticaux pour les réseaux si besoin",
            "Étalonnage léger",
            "Exports prêts pour le web",
            "Délais flexibles selon vos besoins",
          ],
          bestFor: "Artistes, DJ, festivals, marques, organisateurs d'événements, projets créatifs, campagnes promotionnelles",
        },
      },
    },

    work: {
      title: ["La salle,", "l'énergie,", "la nuit."],
      lead: "Une sélection de projets récents — des grandes scènes de festival aux salles plus intimes, des portraits aux séries éditoriales. Tout ou filtré par catégorie.",
      categories: {
        "all":                 "Sélection",
        "live-stage":          "Live & Scène",
        "nightlife":           "Nightlife",
        "portraits-editorial": "Portraits & Éditorial",
      },
      categoryLeads: {
        "all":                 "Une sélection rigoureuse de mes plus belles images : live, nightlife et portraits.",
        "live-stage":          "Concerts, festivals, performances live, scènes et événements culturels.",
        "nightlife":           "DJ sets, clubs, foules, dancefloors et ambiances de fin de nuit.",
        "portraits-editorial": "Séances studio, portraits corporate, portraits d'artistes, photographies éditoriales et image de marque.",
      },
      eyebrow: "Portfolio",
    },

    about: {
      eyebrow: "À propos",
      title: "Je suis Ambre",
      paragraphs: [
        "Photographe événementielle & musicale basée à Montréal.",
        "Je documente ce que les gens ressentent — pas seulement ce qu'ils voient.",
        "Mon approche est instinctive et immersive. Je reste proche du moment, captant l'énergie telle qu'elle se déploie — sans mise en scène, sans rien forcer.",
      ],
      workedWithLabel: "Ils m'ont fait confiance",
      workedWithSuffix: "et beaucoup d'autres.",
    },

    approach: {
      label: "Approche",
      quote: ["Pas de mise en scène.", "Pas de pose.", "Juste les vrais moments."],
    },

    keyNumbers: [
      { value: "100+", label: "Événements couverts" },
      { value: "7+",   label: "Années derrière l'objectif" },
      { value: "5K+",  label: "Photos livrées" },
    ],

    contact: {
      eyebrow: "Contact",
      title: ["Travaillons", "ensemble."],
      lead: "Parlez-moi de votre événement ou projet — lieu, date, ambiance, tout ce qui peut être utile. Je réponds généralement sous 24 h.",
      directLabels: { email: "Email", instagram: "Instagram", basedIn: "Basée à" },
      basedInValue: "Montréal, Canada — disponible partout dans le monde",
      successMessage: "Merci — votre message est bien arrivé. Je reviens vers vous très vite.",
      form: {
        name: "Votre nom",
        namePlaceholder: "Nom complet",
        email: "Email",
        emailPlaceholder: "vous@email.com",
        eventType: "Type d'événement",
        eventTypePlaceholder: "Choisissez une catégorie",
        eventTypes: {
          concert: "Concert / Live",
          nightlife: "Nightlife / Club / Festival",
          brand: "Événement de marque / Activation",
          corporate: "Événement corporate",
          private: "Événement privé / Mariage",
          other: "Autre",
        },
        date: "Date",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet — lieu, ampleur, tout ce qui peut être utile.",
      },
    },

    finalCta: {
      title: "Travaillons ensemble",
      lead: "Parlez-moi de votre événement ou projet.",
    },

    instagram: {
      eyebrow: "Dans les coulisses",
      title: "Suivez le travail au fil des événements.",
      lead: "Nouveaux shoots, images brutes, et les instants entre deux scènes — tout est sur Instagram.",
      cta: "Suivre sur Instagram",
      handleLine: "À voir sur",
    },

    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions",
    },
  },
} as const;

export type Translations = typeof translations.en;
