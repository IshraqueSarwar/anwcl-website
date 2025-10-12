// This file acts as your mini-database.
// Each member has a unique 'id' that we will use in the URL.

const labMembers = [
  {
    id: "shahen-shah",
    name: "Assoc. Prof. A. F. M. Shahen Shah",
    role: "Director",
    image: "photos/director.jpeg",
    bio: "Associate Professor at Yildiz Technical University, IEEE Senior Member, World’s Top 1% Scientists (Stanford University and Elsevier), Director of the AI and Next-generation Wireless Communication Laboratory (ANWCL).",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      { name: "ORCID", url: "https://orcid.org", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      { name: "ResearchGate", url: "https://researchgate.net", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2015-2020" },
      { degree: "M.Sc. in ICT", institution: "Bangladesh University of Engineering & Technology", year: "2011-2013" },
      { degree: "M.Sc. in Information Technology", institution: "Dhaka University", year: "2010-2011" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "Daffodil International University-DIU", year: "2006-2009" }
    ],
    projects: [
      { title: "Intelligent reflecting surface assisted Fluid Antenna Multiple Access with MIMO using artificial intelligence for 6G", description: "TUBITAK Project , 1001 - Program for Supporting Scientific and Technological Research Projects" },
      { title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAVs Communication in 5G and beyond through Artificial Intelligence", description: "TUBITAK Project , 3501 - National Young Researcher Career Development Program" }
    ],
    publications: [
      { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
      { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    ]
  },
  {
    id: "jane-doe",
    name: "Dr. Jane Doe",
    role: "Postdoctoral Researcher",
    image: "https://placehold.co/600x800/764ba2/ffffff?text=Dr.+Doe",
    bio: "A passionate researcher focused on quantum computing and its intersection with machine learning. Dr. Doe's work aims to unlock new computational paradigms for complex problem-solving.",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
    ],
    education: [
      { degree: "Ph.D. in Quantum Physics", institution: "MIT", year: "2018-2022" },
      { degree: "B.Sc. in Computer Science", institution: "Stanford University", year: "2014-2018" }
    ],
    projects: [
      { title: "Quantum Error Correction Codes", description: "Developing novel codes to improve the stability of quantum bits (qubits)." },
      { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    publications: [
      { title: "A Novel Approach to Stabilizer Codes:", authors: "Doe, J., Smith, A." },
      { title: "Deep Learning for Quantum System Identification:", authors: "Doe, J., Johnson, C." }
    ]
  }
];
