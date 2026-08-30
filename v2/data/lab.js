/* ==========================================================================
   ANWCL — Site content
   --------------------------------------------------------------------------
   Everything that isn't a person lives here. Edit this file to change the
   words on the page; no HTML edits needed for content changes.

   All text below is carried over from the previous site (index.html, the two
   project pages, and database/members.js). Nothing has been invented. Where
   the old site had no content, you'll find a TODO note instead of filler.
   ========================================================================== */

/* Canonical lab name. The old site spelled this three different ways
   ("Next-generation Wireless Communications", "Next-Generation Wireless
   Communication", ...). Pick one here and it propagates everywhere. */
const LAB = {
  abbr: "ANWCL",
  name: "AI and Next-Generation Wireless Communication Laboratory",
  department: "Department of Electronics and Communication Engineering",
  university: "Yıldız Technical University",
  city: "İstanbul, Türkiye",
  motto: "Innovate. Integrate. Communicate.",
  lede: "A research laboratory working on AI-enabled wireless communication for beyond-5G and 6G networks — from UAV and satellite links to the protocols and antennas underneath them.",

  overview: [
    "The AI and Next-Generation Wireless Communication Laboratory (ANWCL) is a research laboratory within the Department of Electronics and Communication Engineering at Yıldız Technical University, İstanbul, Türkiye.",
    "ANWCL is dedicated to advancing AI-enabled wireless communication systems, with a strong focus on beyond-5G and 6G technologies. The laboratory conducts both theoretical and applied research, addressing real-world challenges in modern communication networks and contributing to the development of intelligent, sustainable and resilient communication infrastructures.",
    "Through nationally and internationally funded projects, ANWCL contributes to scientific innovation and technology transfer. Full-time B.Sc., M.Sc. and Ph.D. students work together in a research environment built around publishing high-impact work, developing novel algorithms and prototypes, and participating in international conferences and collaborations."
  ]
};

/* Director's Message — reproduced verbatim from the previous site.
   `flagCounts` marks the one paragraph containing hard-coded totals that no
   longer match the project and member lists. Update the sentence and remove
   the flag; the facts strip on the homepage counts from the data instead. */
const DIRECTOR_MESSAGE = {
  memberId: "shahen-shah",
  standing: "Director · World's Top 1% Scientists (Stanford University & Elsevier)",
  paragraphs: [
    { text: "Welcome to the AI and Next-Generation Wireless Communication Laboratory (ANWCL)." },
    { text: "It is my pleasure to introduce ANWCL as a hub of innovation at the intersection of artificial intelligence and advanced wireless communication technologies within the Department of Electronics and Communication Engineering at Yıldız Technical University. Guided by our slogan — Innovate. Integrate. Communicate. — we strive to transform visionary ideas into impactful technologies." },
    { text: "ANWCL is actively engaged in high-impact research, currently hosting five funded research projects, including TÜBİTAK 1001, TÜBİTAK 3501, TÜBİTAK 1005, and YTÜ-BAP projects. These projects bring together a strong and diverse research team consisting of 4 Ph.D., 6 M.Sc., and 4 B.Sc. students, working collaboratively in a dynamic and intellectually stimulating environment.", flagCounts: true },
    { text: "Our research focuses on AI-enabled wireless communication systems, with the goal of developing intelligent, efficient and future-ready communication solutions for beyond-5G and 6G networks. By combining rigorous theoretical foundations with practical system design, we aim to address real-world challenges and contribute to the next era of global connectivity.", extra: true },
    { text: "At ANWCL, our mission is to drive innovation, foster interdisciplinary collaboration, and contribute to transformative advancements in wireless technologies. We are committed not only to producing high-quality scientific research, but also to educating and mentoring the next generation of engineers and researchers.", extra: true },
    { text: "We warmly welcome students, researchers and industry partners who share our vision to collaborate with us and be part of a journey toward a smarter, more connected world.", extra: true },
    { text: "Thank you for visiting, and welcome to ANWCL.", extra: true }
  ]
};

/* --------------------------------------------------------------------------
   Homepage gallery
   Add a photo by adding a line.

   Photos are shown whole — nothing is cropped, portrait shots included. Space
   left over at the sides is filled with a blurred, veiled copy of the same
   image. Set fit: "cover" on a slide to make it bleed edge to edge instead
   (only sensible for photos already wider than --gallery-ratio), and `focus`
   then decides which part survives: any CSS object-position value.

   TODO — captions are placeholders; the old site carried none.
   -------------------------------------------------------------------------- */
const GALLERY = [
  { src: "photos/1.webp", alt: "The ANWCL research group", caption: "The ANWCL group", focus: "center" },
  { src: "photos/2.webp", alt: "ANWCL laboratory",         caption: "",               focus: "center", needsCaption: true },
  { src: "photos/3.webp", alt: "ANWCL laboratory",         caption: "",               focus: "center", needsCaption: true },
  { src: "photos/4.webp", alt: "ANWCL laboratory",         caption: "",               focus: "center", needsCaption: true },
  { src: "photos/5.webp", alt: "ANWCL laboratory",         caption: "",               focus: "center", needsCaption: true },
  { src: "photos/6.webp", alt: "ANWCL laboratory",         caption: "",               focus: "center", needsCaption: true }
];

/* Ordered display of the people section. Groups with no members are skipped. */
const PEOPLE_GROUPS = [
  { key: "director",  label: "Direction",                  layout: "lead" },
  { key: "faculty",   label: "Faculty",                    layout: "grid" },
  { key: "phd",       label: "Ph.D. Researchers",          layout: "grid" },
  { key: "msc",       label: "M.Sc. Researchers",          layout: "grid" },
  { key: "undergrad", label: "Undergraduate Researchers",  layout: "grid" },
  { key: "alumni",    label: "Alumni",                     layout: "grid" }
];

/* --------------------------------------------------------------------------
   Research areas
   Assembled from the lab's own About text and project abstracts — no new
   claims. TODO: review the wording with the group; each area should also
   eventually name the people who work on it.
   -------------------------------------------------------------------------- */
const RESEARCH_AREAS = [
  {
    id: "uav-fanet",
    title: "UAV and FANET communications",
    body: "Flying ad hoc networks for situations where terrestrial infrastructure is unavailable or has failed. The work covers relay selection, 3D mobility, cluster formation and emergency network architectures for disaster response.",
    tags: ["FANET", "UAV ad hoc networks", "Emergency communication", "Relay selection"],
    projects: ["tubitak-3501", "bap-uav-iot", "bap-emergency"]
  },
  {
    id: "ai-6g-phy",
    title: "AI for the 6G physical layer",
    body: "Machine learning applied to the antenna and channel side of next-generation systems: intelligent reflecting surfaces, fluid antenna multiple access, and massive MIMO, combined into mechanisms intended for 6G.",
    tags: ["IRS", "Fluid antenna multiple access", "Massive MIMO", "Channel estimation"],
    projects: ["tubitak-1001"]
  },
  {
    id: "mac-protocols",
    title: "MAC protocols and channel access",
    body: "Medium access control for mobile, high-density and highly mobile networks — cooperative and hybrid MAC designs, channel access mechanisms, and cluster-based schemes for vehicular and airborne networks.",
    tags: ["Hybrid MAC", "Cooperative MAC", "VANETs", "Cluster-based access"],
    projects: ["tubitak-3501", "bap-hybrid-mac", "tubitak-1002"]
  },
  {
    id: "ntn-satellite",
    title: "Non-terrestrial and satellite networks",
    body: "Next-generation mobile networks that extend beyond ground infrastructure, including non-terrestrial networks and satellite communications as part of the beyond-5G and 6G coverage picture.",
    tags: ["NTN", "Satellite communications", "Beyond-5G", "6G"],
    projects: []
  },
  {
    id: "iot-applied-ai",
    title: "IoT and applied intelligent systems",
    body: "Internet of Things platforms and applied deep learning, from UAV-based IoT for disaster management to wearable tracking devices and real-time recognition systems.",
    tags: ["IoT", "Deep learning", "Wearables", "Signal processing"],
    projects: ["bap-uav-iot", "tubitak-1005", "bap-sign-language"]
  }
];

/* --------------------------------------------------------------------------
   Projects
   `page: true` means a detail page exists at project.html?id=<id>.
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "tubitak-1001",
    funder: "TÜBİTAK 1001",
    programme: "Program for Supporting Scientific and Technological Research Projects",
    years: "2025–2027",
    status: "ongoing",
    featured: true,
    page: true,
    title: "Intelligent Reflecting Surface assisted Fluid Antenna Multiple Access with MIMO using Artificial Intelligence for 6G",
    summary: "Integrating FAMA, IRS and MIMO with AI to meet the rate, latency, capacity and coverage requirements expected of 6G networks.",
    description: "While 5G communications are being rolled out around the world, 6G communications have attracted much attention from both industry and academia. Compared with 5G, 6G will have a higher transmission rate, spectrum efficiency, greater connection capacity, shorter delay, wider coverage and stronger anti-interference capability, so as to meet the various network requirements for industries. Considering the aforementioned aspects, a mechanism will be developed integrating the emerging technologies FAMA, IRS and MIMO with AI for 6G in this project.",
    images: { hero: "photos/1001_1.webp", team: "photos/1001.webp" },
    team: {
      manager: ["Assoc. Prof. Dr. A. F. M. Shahen Shah"],
      researchers: ["Assoc. Prof. Dr. Muhammet Ali Karabulut"],
      students: [
        { name: "Yalda Babaie", note: "Ph.D. Researcher" },
        { name: "Aynur Sena Çetinkaya", note: "M.Sc. Researcher" },
        { name: "Abdülsamet Karlı", note: "M.Sc. Researcher" }
      ]
    }
  },
  {
    id: "tubitak-3501",
    funder: "TÜBİTAK 3501",
    programme: "National Young Researcher Career Development Program",
    years: "2023–2026",
    status: "ongoing",
    featured: true,
    page: true,
    title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAV Communication in 5G and Beyond through Artificial Intelligence",
    summary: "Designing an efficient FANET so UAV-assisted emergency networks can carry disaster traffic when terrestrial infrastructure is down.",
    description: "Recently, increases have been observed in the frequency and negative effects of natural disasters such as earthquakes and floods with climate change. Solutions are sought for the evaluation of these disasters, reacting quickly and effectively against damage, and healing mechanisms. On the other hand, deficiencies in communication and situational awareness reduce the effectiveness of the proposed solutions. For this purpose, the use of UAVs in disaster management is of great importance in the evaluation and reaction stages, due to advantages such as cost, time, size and safety for a durable communication network. In this context, the aim of this project is to utilise UAVs and design an efficient FANET in order to manage UAV-assisted emergency networks in disasters. Emergency networks will help to set up communication and meet data traffic in disasters, and will save people's lives through disaster assistance.",
    images: { hero: "photos/3501_1.webp", team: "photos/3501.webp" },
    team: {
      manager: ["Assoc. Prof. Dr. A. F. M. Shahen Shah"],
      researchers: ["Assoc. Prof. Dr. Muhammet Ali Karabulut"],
      advisors: ["Prof. Dr. Hacı İlhan"],
      students: [
        { name: "Salah Uddin", note: "Ph.D. Researcher" },
        { name: "Sumaiya Sultana", note: "M.Sc. Researcher" },
        { name: "Hava Karabağ", note: "M.Sc. Researcher" },
        { name: "Md. Thouhidur Rahman", note: "M.Sc., completed — lab alumni" }
      ]
    }
  },
  {
    id: "tubitak-1005",
    funder: "TÜBİTAK 1005",
    years: "2025–2026",
    status: "ongoing",
    title: "Impact-resistant product group providing location detection and basic health data tracking for pre-school use",
    summary: "Funded by the Scientific and Technological Research Council of Türkiye."
  },
  {
    id: "bap-uav-iot",
    funder: "YTÜ-BAP",
    years: "2025–2027",
    status: "ongoing",
    title: "Development of an Unmanned Aerial Vehicle IoT Platform for Disaster Management",
    summary: "Funded by the Scientific Research Projects unit of Yıldız Technical University."
  },
  {
    id: "bap-hybrid-mac",
    funder: "YTÜ-BAP",
    years: "2025–2027",
    status: "ongoing",
    title: "Designing a Hybrid MAC Protocol and Channel Access Mechanism for UAV Communication in 5G and Beyond using Artificial Intelligence",
    summary: "Funded by the Scientific Research Projects unit of Yıldız Technical University."
  },
  {
    id: "bap-emergency",
    funder: "YTÜ-BAP",
    years: "2024–2026",
    status: "ongoing",
    title: "Emergency Communication Systems in Natural Disasters via UAVs in 5G and Beyond",
    summary: "Funded by the Scientific Research Projects unit of Yıldız Technical University."
  },
  {
    id: "bap-sign-language",
    funder: "YTÜ-BAP",
    years: "2023–2025",
    status: "completed",
    title: "Real-Time Turkish Sign Language Recognition System Based on Deep Learning",
    summary: "Funded by the Scientific Research Projects unit of Yıldız Technical University."
  },
  {
    id: "tubitak-1002",
    funder: "TÜBİTAK 1002",
    years: "2019–2020",
    status: "completed",
    title: "An Efficient and Reliable Cooperative MAC Protocol for Mobility-Aware Cluster-based VANETs",
    summary: "Funded by the Scientific and Technological Research Council of Türkiye."
  }
];

/* --------------------------------------------------------------------------
   Publications
   TODO — only these five were on the old site. The lab's full list appears to
   live in informations/update files/Publications.DOCX; add the rest here and
   the page will render and count them automatically.
   -------------------------------------------------------------------------- */
const PUBLICATIONS = [
  {
    year: 2025,
    title: "Cooperative MAC Protocol with Optimal Relay Selection Algorithm for UAV Ad Hoc Networks in Disasters",
    authors: "S. Uddin, A. F. M. S. Shah, M. A. Karabulut and H. İlhan",
    venue: "IEEE Transactions on Vehicular Technology, vol. 74, no. 9, pp. 14445–14456, Sept. 2025",
    doi: "10.1109/TVT.2025.3558455",
    type: "Journal"
  },
  {
    year: 2025,
    title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond",
    authors: "Md. Thouhidur Rahman, A. F. M. Shahen Shah, Muhammet Ali Karabulut and Hacı İlhan",
    venue: "Elsevier Vehicular Communications, vol. 56, no. 100971, pp. 1–12, Dec. 2025",
    doi: "10.1016/j.vehcom.2025.100971",
    type: "Journal"
  },
  {
    year: 2025,
    title: "Unveiling the Potential of Fluid Antenna Multiple Access for 6G: A Performance Study",
    authors: "Muhammet Ali Karabulut and A. F. M. Shahen Shah",
    venue: "Journal of the Faculty of Engineering and Architecture of Gazi University, vol. 40, no. 4, pp. 2797–2806, Dec. 2025",
    doi: "10.17341/gazimmfd.1551313",
    type: "Journal"
  },
  {
    year: 2025,
    title: "AI-Enhanced Channel Identification in 5G and Future Wireless Systems",
    authors: "Osman Kaya and A. F. M. Shahen Shah",
    venue: "Springer Wireless Personal Communications, pp. 1–18, Dec. 2025",
    doi: "10.1007/s11277-025-11883-4",
    type: "Journal"
  },
  {
    year: 2023,
    title: "Architecture of Emergency Communication Systems in Disasters through UAVs in 5G and Beyond",
    authors: "A. F. M. Shahen Shah",
    venue: "Drones (MDPI), vol. 7, no. 1, pp. 1–16, Jan. 2023",
    doi: "",
    type: "Journal"
  }
];

/* Author names highlighted in publication lists. */
const LAB_AUTHOR_KEYS = ["Shah", "Karabulut", "Uddin", "Sultana", "Rahman", "Kaya", "Karabağ", "Çetinkaya", "Karlı", "Babaie", "Oukebdane"];

/* --------------------------------------------------------------------------
   News, media and achievements
   TODO — the old site had two unlabelled YouTube embeds with no titles or
   dates. Titles below are placeholders; replace them and add real dates.
   -------------------------------------------------------------------------- */
const VIDEOS = [
  { youtube: "IkLyksyX1sU", title: "Laboratory video", caption: "", needsTitle: true },
  { youtube: "4dE22jVCWnQ", title: "Laboratory video", caption: "", needsTitle: true }
];

const NEWS = [
  {
    date: "2025",
    needsDate: true,
    title: "Finalists in the TEKNOFEST Swarm UAV competition",
    body: "The lab's team reached the finals of the TEKNOFEST Sürü İHA (Swarm UAV) competition, fielding a FANET communication system and a swarm-based mission stack."
  },
  {
    date: "2024",
    needsDate: true,
    title: "Finalists in the TEKNOFEST Swarm UAV competition",
    body: "A second consecutive finals appearance in the TEKNOFEST Sürü İHA competition."
  }
];

/* --------------------------------------------------------------------------
   Contact
   TODO — the previous site carried no contact details at all: no email, no
   room, no phone, no map. These are the highest-value gap on the site.
   -------------------------------------------------------------------------- */
const CONTACT = {
  email: "",          // e.g. anwcl@yildiz.edu.tr
  phone: "",
  building: "",       // building and room number
  address: [
    "Department of Electronics and Communication Engineering",
    "Yıldız Technical University",
    "İstanbul, Türkiye"
  ],
  mapUrl: "",
  socials: [
    { type: "instagram", url: "https://www.instagram.com/anwc_lab/" },
    { type: "facebook",  url: "https://www.facebook.com/profile.php?id=61570871978970" },
    { type: "linkedin",  url: "https://www.linkedin.com/company/anwclab/" },
    { type: "youtube",   url: "https://www.youtube.com/@ANWCL" }
  ],
  universityUrl: "https://www.yildiz.edu.tr/",
  departmentUrl: "https://ehm.yildiz.edu.tr/"   // TODO: confirm department URL
};

if (typeof module !== "undefined") {
  module.exports = { LAB, GALLERY, PEOPLE_GROUPS, RESEARCH_AREAS, PROJECTS, PUBLICATIONS, LAB_AUTHOR_KEYS, VIDEOS, NEWS, CONTACT, DIRECTOR_MESSAGE };
}
