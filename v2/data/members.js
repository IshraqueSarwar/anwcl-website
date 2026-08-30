/* ==========================================================================
   ANWCL — Lab members
   --------------------------------------------------------------------------
   HOW TO EDIT
   - Add a person: copy any block, give it a unique `id` (used in the URL as
     member.html?id=<id>), and drop their portrait in photos/.
   - `group` must be one of: director | faculty | phd | msc | undergrad | alumni
     Order of the groups on the page is set in data/lab.js → PEOPLE_GROUPS.
   - `links` takes { type, url }. Supported types are listed in js/icons.js:
     linkedin, scholar, orcid, researchgate, github, avesis, email, website.
     No more pasting SVG markup into this file.
   - Anything marked TODO is a real gap carried over from the old site.
     Fill it in and delete the marker.
   ========================================================================== */

const LAB_MEMBERS = [

  /* ---------------------------------------------------------------- DIRECTOR */
  {
    id: "shahen-shah",
    name: "A. F. M. Shahen Shah",
    title: "Assoc. Prof. Dr.",
    role: "Director",
    group: "director",
    photo: "photos/director.webp",
    tagline: "IEEE Senior Member · Editor-in-Chief, ICCK Transactions on Mobile and Wireless Intelligence",
    bio: [
      "A. F. M. Shahen Shah is an Associate Professor with the Department of Electronics and Communication Engineering, Yıldız Technical University, İstanbul, Türkiye, where he also serves as the Director of the AI and Next-Generation Wireless Communication Laboratory (ANWCL).",
      "He received the B.Sc. degree in Electronics and Telecommunication Engineering from Daffodil International University, Bangladesh, in 2009, the M.Sc. degree in Information Technology from the University of Dhaka, Bangladesh, in 2011, and the Ph.D. degree in Electronics and Communication Engineering from Yıldız Technical University, Türkiye, in 2020. For his doctoral research, Dr. Shahen received the Gold Medal at the 32nd International Invention, Innovation & Technology Exhibition (ITEX 2021).",
      "He is the author of a book and has published numerous research papers in reputed international journals and conferences. His current research interests include wireless communications, artificial intelligence, 6G networks, satellite communications, and the Internet of Things.",
      "Dr. Shahen has been a Senior Member of IEEE since 2019. He has served as a Technical Program Committee member for several international conferences and as a regular reviewer for many high-impact journals. He is currently the Editor-in-Chief of the ICCK Transactions on Mobile and Wireless Intelligence and the ICRRD Quality Index Research Journal, an Editor for The Open Transportation Journal (Bentham) and Discover Vehicles (Springer), and an Associate Editor for the Journal of Cyber Security Technology (Taylor & Francis)."
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2020" },
      { degree: "M.Sc. in Information Technology", institution: "University of Dhaka, Bangladesh", year: "2011" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "Daffodil International University, Bangladesh", year: "2009" }
    ],
    projects: ["tubitak-1001", "tubitak-3501"],
    links: [
      { type: "linkedin",      url: "https://www.linkedin.com/in/a-f-m-shahen-shah-phd-b9221a34/" },
      { type: "scholar",       url: "https://scholar.google.com/citations?user=TEi1jQ4AAAAJ&hl=en" },
      { type: "orcid",         url: "https://orcid.org/0000-0002-3133-6557" },
      { type: "researchgate",  url: "https://www.researchgate.net/profile/A-F-M-Shahen-Shah" },
      { type: "avesis",        url: "https://avesis.yildiz.edu.tr/shah" }
    ]
  },

  /* ------------------------------------------------------------ CO-DIRECTOR */
  {
    id: "ali-karabulut",
    name: "Muhammet Ali Karabulut",
    title: "Assoc. Prof. Dr.",
    role: "Co-Director",
    group: "director",
    photo: "photos/karabulat.webp",
    tagline: "Digital and cooperative communication, MAC protocols for VANETs",
    bio: [
      "Muhammet Ali Karabulut received his B.Sc. degree in Electrical and Electronics Engineering from Mustafa Kemal University, Hatay, Türkiye. He completed his M.Sc. and Ph.D. degrees in Electronics and Communication Engineering at Yıldız Technical University, İstanbul, Türkiye.",
      "Since 2013 he has been a research assistant in the Department of Electronics and Communication Engineering at Yıldız Technical University. His research areas include digital communication, cooperative communication, and MAC protocols for VANETs. He is a member of IEEE."
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2015–2021" },
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2013–2015" },
      { degree: "B.Sc. in Electrical and Electronics Engineering", institution: "Mustafa Kemal University, Hatay", year: "2006–2010" }
    ],
    projects: ["tubitak-3501", "tubitak-1001"],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/m-ali-karabulut/" },
      { type: "scholar",      url: "https://scholar.google.com/citations?user=9WPgnyEAAAAJ&hl=en" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/M-Ali-Karabulut" }
    ]
  },

  /* --------------------------------------------------------------------- PhD */
  {
    id: "anis-oukebdane",
    name: "Mohammed Anis Oukebdane",
    role: "Ph.D. Researcher",
    group: "phd",
    photo: "photos/anis.webp",
    tagline: "UAV systems · telecommunications engineering · AI for 6G and disaster technology",
    bio: [
      "Ph.D. candidate in Electronics and Communication Engineering at Yıldız Technical University, working on UAV systems, software development for airborne networks, and AI for 6G and disaster technology."
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2023–present" },
      { degree: "M.Sc. in Electronics and Telecommunication Engineering", institution: "Mustapha Stambouli University", year: "2018–2020" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "Mustapha Stambouli University", year: "2015–2018" }
    ],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/maoukebdane/" },
      { type: "scholar",      url: "https://scholar.google.com/citations?user=87mbsfoAAAAJ&hl=en" },
      { type: "orcid",        url: "https://orcid.org/0000-0001-9477-1655" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/Mohammed-Anis-Oukebdane" }
    ]
  },
  {
    id: "salah-uddin",
    name: "Salah Uddin",
    role: "Ph.D. Researcher",
    group: "phd",
    photo: "photos/salah.webp",
    tagline: "Cooperative communication · UAV ad hoc networks",
    bio: [
      "Salah Uddin received the B.Sc. degree in Electronic and Telecommunication Engineering from International Islamic University Chittagong, Bangladesh, in 2021, and the M.Sc. degree in Computer Science from Comilla University, Bangladesh, in 2023.",
      "He is currently working toward the Ph.D. degree in Electronics and Communication Engineering at Yıldız Technical University, İstanbul, Türkiye. His research interests include wireless communications, cooperative communication, UAV ad hoc networks, and artificial intelligence."
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2023–present" },
      { degree: "M.Sc. in Computer Science", institution: "Comilla University, Bangladesh", year: "2021–2023" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "International Islamic University Chittagong", year: "2016–2021" }
    ],
    projects: ["tubitak-3501"],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/132165werew654/" },
      { type: "scholar",      url: "https://scholar.google.com/citations?user=S-CXGu0AAAAJ&hl=en" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/Salah-Uddin-19" }
    ]
  },
  {
    id: "yalda-babaie",
    name: "Yalda Babaie",
    role: "Ph.D. Researcher",
    group: "phd",
    photo: "photos/yalda.webp",
    /* TODO — the old site gave Yalda the exact same tagline and bio as
       Mohammed Anis Oukebdane (copy-paste error). Replace with her own. */
    tagline: "",
    bio: [],
    needsBio: true,
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2025–present" },
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Amirkabir University of Technology", year: "2019–2021" },
      { degree: "B.Sc. in Electronics Engineering", institution: "Islamic Azad University, Iran", year: "2008–2012" }
    ],
    projects: ["tubitak-1001"],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/yalda-babaie-aaa112261/" }
    ]
  },
  {
    id: "osman-kaya",
    name: "Osman Kaya",
    role: "Ph.D. Researcher",
    group: "phd",
    photo: "photos/osman.webp",
    /* TODO — Osman had a card on the old homepage but no profile record, so
       "View Profile" led to an error page. Photo and publication are real;
       bio, education and links still needed. */
    tagline: "",
    bio: [],
    needsBio: true,
    education: [],
    links: []
  },

  /* --------------------------------------------------------------------- MSc */
  {
    id: "sumaiya-sultana",
    name: "Sumaiya Sultana",
    role: "M.Sc. Researcher",
    group: "msc",
    photo: "photos/sumaiya.webp",
    tagline: "Emergency communication architectures for UAVs in 5G and beyond",
    bio: [
      "Master's student in Communication Engineering at Yıldız Technical University and a Graduate Research Assistant in the AI and Next-Generation Wireless Communication Laboratory.",
      "She works on YTÜ-BAP and TÜBİTAK 3501 funded projects focused on the architecture of emergency communication systems using UAVs in 5G and beyond. Her research interests include wireless communication, cooperative communication, network optimisation, and AI."
    ],
    education: [
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2024–present" },
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2018–2024" }
    ],
    projects: ["tubitak-3501", "bap-emergency"],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/sumaiya-sultana-73841b20a/" },
      { type: "scholar",      url: "https://scholar.google.com/citations?user=Es8WqrMAAAAJ&hl=en" },
      /* TODO — this was a private "my-orcid" dashboard link on the old site.
         Public form below; confirm the iD is correct. */
      { type: "orcid",        url: "https://orcid.org/0009-0006-6683-5133" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/Sumaiya-Sultana-11" }
    ]
  },
  {
    id: "aynur-cetinkaya",
    name: "Aynur Sena Çetinkaya",
    role: "M.Sc. Researcher",
    group: "msc",
    photo: "photos/aynur.webp",
    tagline: "Wireless communications · signal processing · artificial intelligence",
    bio: [
      "Graduate student at Yıldız Technical University in Electronics and Communication Engineering, with a B.Sc. in Electrical and Electronics Engineering from İzmir Kâtip Çelebi University. Interested in wireless communications, signal processing, and artificial intelligence."
    ],
    education: [
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2025–present" },
      { degree: "B.Sc. in Electrical and Electronics Engineering", institution: "İzmir Kâtip Çelebi University", year: "2018–2024" }
    ],
    projects: ["tubitak-1001"],
    links: [
      /* Fixed: the old site stored this without a scheme, so it resolved as a
         relative path and 404'd. */
      { type: "linkedin", url: "https://www.linkedin.com/in/aynur-sena-cetinkaya" },
      { type: "scholar",  url: "https://scholar.google.com/citations?user=A2SINgQAAAAJ&hl=tr" }
    ]
  },
  {
    id: "abdulsamet-karli",
    name: "Abdülsamet Karlı",
    role: "M.Sc. Researcher",
    group: "msc",
    photo: "photos/abdulsamet.webp",
    tagline: "AI-assisted MIMO and reconfigurable intelligent surfaces for 6G",
    bio: [
      "M.Sc. student in Communication Engineering at Yıldız Technical University and researcher at the AI and Next-Generation Wireless Communication Laboratory."
    ],
    education: [
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2025–present" },
      { degree: "B.Sc. in Electrical and Electronics Engineering", institution: "Bursa Uludağ University", year: "2021–2025" }
    ],
    projects: ["tubitak-1001"],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/abdulsametkarli" },
      { type: "scholar",      url: "https://scholar.google.com/citations?user=4ITiUhoAAAAJ&hl=tr" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/Abduelsamet-Karli" }
    ]
  },
  {
    id: "hava-karabag",
    name: "Hava Karabağ",
    role: "M.Sc. Researcher",
    group: "msc",
    photo: "photos/hava.webp",
    /* TODO — same as Osman: card on the old homepage, no profile record.
       Listed as a scholarship student on TÜBİTAK 3501. Needs bio, education,
       links. Source spreadsheet exists at informations/HavaKarabag/. */
    tagline: "",
    bio: [],
    needsBio: true,
    education: [],
    projects: ["tubitak-3501"],
    links: []
  },

  /* ----------------------------------------------------------- UNDERGRADUATE */
  {
    id: "ishraque-sarwar",
    name: "Ishraque Sarwar Siam",
    role: "Undergraduate Researcher",
    group: "undergrad",
    photo: "photos/siam.webp",
    tagline: "FANET communication systems · swarm UAV missions",
    bio: [
      "Undergraduate research assistant at ANWCL. Built the FANET communication system and swarm-based mission stack for the lab's TEKNOFEST Swarm UAV entry."
    ],
    education: [
      { degree: "B.Sc. in Mechatronics Engineering", institution: "Yıldız Technical University", year: "2025–present" }
    ],
    links: [
      { type: "linkedin",     url: "https://www.linkedin.com/in/ishraque-sarwar-siam-52971a2aa/" },
      { type: "researchgate", url: "https://www.researchgate.net/profile/Ishraque-Sarwar-Siam" },
      { type: "github",       url: "https://github.com/IshraqueSarwar" }
    ]
  },

  /* ------------------------------------------------------------------ ALUMNI */
  {
    id: "ece-tan",
    name: "Ece Tan",
    role: "Former Undergraduate Researcher",
    group: "alumni",
    photo: "photos/ece.webp",
    tagline: "Electronics and Communication Engineering student, YTÜ",
    bio: [
      "Undergraduate student in Electronics and Communication Engineering at Yıldız Technical University and assistant researcher at ANWCL."
    ],
    /* TODO — now listed as alumni; the year she left the lab is still open. */
    education: [
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2022–present" }
    ],
    /* Fixed: the old site labelled her project TÜBİTAK 1001 but printed the
       3501 description. Corrected to 3501 — please confirm. */
    projects: ["tubitak-3501"],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/ece-tan" }
    ]
  },
  {
    id: "yigit-kucukkiratli",
    name: "Osman Yiğit Küçükkıratlı",
    role: "Former Undergraduate Researcher",
    group: "alumni",
    photo: "photos/yigit.webp",
    tagline: "AI-enabled MIMO and fluid antenna solutions for 6G",
    bio: [
      "Undergraduate research assistant at ANWCL, developing AI-enabled MIMO and fluid-antenna solutions for 6G communication systems."
    ],
    /* Now listed as alumni, which fits the transfer to Istanbul Technical
       University shown below. TODO — confirm the year he left the lab. */
    education: [
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Istanbul Technical University", year: "2025–present" },
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Yıldız Technical University", year: "2022–2025" }
    ],
    projects: ["tubitak-1001"],
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/yigitkucukkiratli" }
    ]
  },
  {
    id: "thouhidur-rahman",
    name: "Md. Thouhidur Rahman",
    role: "M.Sc., completed",
    group: "alumni",
    photo: "",
    tagline: "FANET-enabled cluster-based emergency communication",
    bio: [
      "Completed his M.Sc. at ANWCL as a scholarship student on the TÜBİTAK 3501 project, working on FANET-enabled cluster-based emergency communication with 3D mobility."
    ],
    /* TODO — no portrait on file, and no graduation year or current position
       recorded. Both would be worth adding. */
    education: [],
    projects: ["tubitak-3501"],
    links: []
  }
];

if (typeof module !== "undefined") { module.exports = { LAB_MEMBERS }; }
