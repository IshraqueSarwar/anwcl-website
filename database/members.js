// This file acts as your mini-database.
// Each member has a unique 'id' that we will use in the URL.

const labMembers = [
  // Shah hoca
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
    // publications: [
    //   { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
    //   { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    // ]
  },

// BULAT hoca
  {
    id: "ali-karabulat",
    name: "Assoc. Prof. M Ali KARABULUT",
    role: "Co-director",
    image: "photos/karabulat.jpeg",
    bio: "M Ali KARABULUT received his B.Sc. degree in Electrical and Electronics Engineering from the Mustafa Kemal University, Hatay, Turkey. He completed his M.Sc. and Ph.D. degrees in Electronics and Communication Engineering from Yildiz Technical University, Istanbul, Turkey. Since 2013, he is a research assistant in Department of Electronics and Communication Engineering at Yildiz Technical University. His research areas include digital communication, cooperative communication, MAC protocols for VANETs. He is a member of IEEE.",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      { name: "ORCID", url: "https://orcid.org", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      { name: "ResearchGate", url: "https://researchgate.net", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2015-2021" },
      // { degree: "M.Sc. in ICT", institution: "Bangladesh University of Engineering & Technology", year: "2011-2013" },
      { degree: "M.Sc. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2013-2015" },
      { degree: "B.Sc. in Electrical and Electronics Engineering", institution: "Mustafa Kemal University, Hatay, Turkey", year: "2006-2010" }
    ],
    projects: [
      // { title: "Intelligent reflecting surface assisted Fluid Antenna Multiple Access with MIMO using artificial intelligence for 6G", description: "TUBITAK Project , 1001 - Program for Supporting Scientific and Technological Research Projects" },
      { title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAVs Communication in 5G and beyond through Artificial Intelligence", description: "TUBITAK Project , 3501 - National Young Researcher Career Development Program" }
    ],
    // publications: [
    //   { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
    //   { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    // ]
  },


  // Salah
  {
    id: "salah",
    name: "Salah Uddin",
    role: "PhD Researcher",
    image: "photos/salah.jpeg",
    bio: "Salah Uddin received the B.Sc. degree in electronic and telecommunication engineering from International Islamic University Chittagong, Bangladesh, in 2021, and the M.Sc. degree in computer science from Comilla University, Bangladesh, in 2023. He is currently working toward the Ph.D. degree in electronics and communication engineering with Yildiz Technical University, Istanbul, Türkiye. His research interests include wireless communications, cooperative communication, UAV ad hoc networks, and artificial intelligence.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/132165werew654/", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "GoogleScholar", url: "https://scholar.google.com/citations?user=S-CXGu0AAAAJ&hl=en", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      // { name: "ORCID", url: "https://orcid.org", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Salah-Uddin-19", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2023-present" },
      // { degree: "M.Sc. in ICT", institution: "Bangladesh University of Engineering & Technology", year: "2011-2013" },
      { degree: "M.Sc. in computer science", institution: "Comilla University, Bangladesh", year: "2021-2023" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "International Islamic University Chittagong, Bangladesh", year: "2018-2021" }
    ],
    projects: [
      // { title: "Intelligent reflecting surface assisted Fluid Antenna Multiple Access with MIMO using artificial intelligence for 6G", description: "TUBITAK Project , 1001 - Program for Supporting Scientific and Technological Research Projects" },
      { title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAVs Communication in 5G and beyond through Artificial Intelligence", description: "TUBITAK Project , 3501 - National Young Researcher Career Development Program" }
    ],
    // publications: [
    //   { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
    //   { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    // ]
  },



  // Anis
  {
    id: "anis",
    name: "Mohammed Anis Oukebdane",
    role: "PhD Researcher",
    image: "photos/anis.jpg",
    bio: "PhD candidate | UAV Systems Innovator | Software Developer | Telecommunications Engineer | AI for 6G & Disaster Tech",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/maoukebdane/", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "GoogleScholar", url: "https://scholar.google.com/citations?user=87mbsfoAAAAJ&hl=en&authuser=1", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      { name: "ORCID", url: "https://orcid.org/0000-0001-9477-1655", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Mohammed-Anis-Oukebdane?ev=hdr_xprf", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2023-present" },
      // { degree: "M.Sc. in ICT", institution: "Bangladesh University of Engineering & Technology", year: "2011-2013" },
      { degree: "M.Sc. in Electronics and Telecommunication Engineering", institution: "Comilla University, Bangladesh", year: "2018-2020" },
      { degree: "B.Sc. in Electronics and Telecommunication Engineering", institution: "Mustapha Stambouli University", year: "2015-2018" }
    ],
    // projects: [
    //   // { title: "Intelligent reflecting surface assisted Fluid Antenna Multiple Access with MIMO using artificial intelligence for 6G", description: "TUBITAK Project , 1001 - Program for Supporting Scientific and Technological Research Projects" },
    //   { title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAVs Communication in 5G and beyond through Artificial Intelligence", description: "TUBITAK Project , 3501 - National Young Researcher Career Development Program" }
    // ],
    // publications: [
    //   { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
    //   { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    // ]
  },



  // yalda
  {
    id: "yalda",
    name: "Yalda Babaie",
    role: "PhD Researcher",
    image: "photos/yalda.jpg",
    bio: "PhD candidate | UAV Systems Innovator | Software Developer | Telecommunications Engineer | AI for 6G & Disaster Tech",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yalda-babaie-aaa112261/", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      // { name: "GoogleScholar", url: "https://scholar.google.com/citations?user=87mbsfoAAAAJ&hl=en&authuser=1", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      // { name: "ORCID", url: "https://orcid.org/0000-0001-9477-1655", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      // { name: "ResearchGate", url: "https://www.researchgate.net/profile/Mohammed-Anis-Oukebdane?ev=hdr_xprf", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "Ph.D. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2025-present" },
      // { degree: "M.Sc. in ICT", institution: "Bangladesh University of Engineering & Technology", year: "2011-2013" },
      { degree: "M.Sc. in Electronics and communication Engineering", institution: "Amir Kabir University", year: "2019-2021" },
      { degree: "B.Sc. in Electronics Engineering", institution: "Azad University of Iran", year: "2008-2012" }
    ],
    // projects: [
    //   // { title: "Intelligent reflecting surface assisted Fluid Antenna Multiple Access with MIMO using artificial intelligence for 6G", description: "TUBITAK Project , 1001 - Program for Supporting Scientific and Technological Research Projects" },
    //   { title: "Designing Cluster-based Cooperative Massive MIMO enabled Hybrid MAC Protocol for Reliable and Efficient UAVs Communication in 5G and beyond through Artificial Intelligence", description: "TUBITAK Project , 3501 - National Young Researcher Career Development Program" }
    // ],
    // publications: [
    //   { title: "FANET-Enabled Cluster-Based Emergency Communication with 3D Mobility in 5G and Beyond:", authors: "Rahman M. T., Shah A. S., Karabulut M. A., Ilhan H" },
    //   { title: "Innovative Channel Estimation Methods for Massive MIMO Using GAN Architectures:", authors: "Monga S., Saluja N., Garg R., Shah A. S., Ekoru J., Madahana M." }
    // ]
  },




  // AYNUR
  {
    id: "aynur",
    name: "Aynur Sena Çetinkaya",
    role: "MSc Student & Researcher",
    image: "photos/aynur.jpeg",
    bio: "Graduate student at Yildiz Technical University in Electronics and Communication Engineering with a B.Sc. in Electrical and Electronics Engineering from Izmir Katip Celebi University. Interested in wireless communications, signal processing, and artificial intelligence.",
    socials: [
      { name: "LinkedIn", url: "www.linkedin.com/in/aynur-sena-cetinkaya", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com/citations?user=A2SINgQAAAAJ&hl=tr", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
    ],
    education: [
      { degree: "M.Sc. İn Electronics and Communication Engineering", institution: "Yıldız Teknik Üniversitesi", year: "2025-present" },
      { degree: "B.Sc. in Electrical and Electronics Engineering", institution: "zmir Katip Çelebi Üniversitesi", year: "2018-2024" }
    ],
    projects: [
      { title: "Intelligent Reflecting Surface-Assisted Fluid Antenna Multiple Access with MIMO Using Artificial Intelligence for 6G.", description: "TUBITAK Project, 1001 Program for Supporting Scientific and Technological Research Projects" },
      // { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    
  },



  // Sumaiya
  {
    id: "sumaiya",
    name: "Sumaiya Sultana",
    role: "MSc Student & Researcher",
    image: "photos/sumaiya.jpeg",
    bio: "I am a Master's student in Communication Engineering at Yıldız Technical University, currently working as a Graduate Research Assistant in the AI and Next Generation Wireless Communication Lab (ANWCL). I am involved in YTÜ-BAP and TÜBİTAK 3501 funded projects focused on the architecture of emergency communication systems using UAVs in 5G and beyond. My research interests include wireless communication, cooperative communication, network optimization, and AI.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sumaiya-sultana-73841b20a/", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=Es8WqrMAAAAJ", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      { name: "ORCID", url: "https://orcid.org/my-orcid?orcid=0009-0006-6683-5133", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.012-1.784-3.722-4.078-3.722h-2.297z"/></svg>` },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Sumaiya-Sultana-11?ev=hdr_xprf", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "M.Sc. in Electronics and communication Enginnering", institution: "Yildiz technical university", year: "2024-present" },
      { degree: "B.Sc. in Electronics and communication Enginnering", institution: "Yildiz technical university", year: "2018-2024" }
    ],
    projects: [
      { title: "YTÜ-BAP", description: "Projects focused on the architecture of emergency communication systems using UAVs in 5G and beyond. " },
      { title: "TÜBİTAK 3501", description: "Project focused on Design of a Cluster-Based Cooperative Hybrid MAC Protocol with Massive MIMO Features for Reliable and Efficient UAV Communication in 5G and Beyond through Artificial Intelligence." }
    ],
    
  },


  // abdul
  {
    id: "abdul",
    name: "Abdülsamet Karlı",
    role: "M.Sc. Student and Researcher",
    image: "photos/abdulsamet.jpg",
    bio: "M.Sc. Student in Communication Engineering, Yildiz Technical University Researcher at AI and Next-Generation Wireless Communication Laboratory (ANWCL)",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/abdulsametkarli", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "Google Scholar", url: "https://scholar.google.com/citations?user=4ITiUhoAAAAJ&hl=tr&authuser=2", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Abduelsamet-Karli?ev=hdr_xprf", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` }
    ],
    education: [
      { degree: "M.Sc. in Electronics and Communication Enginnering", institution: "Yildiz Technical University", year: "2025-present" },
      { degree: "B.Sc. in Electric and Electronics Engineering", institution: "Bursa Uludag University", year: "2021-2025" }
    ],
    projects: [
      { title: "AI-Assisted MIMO-Based Intelligent Reflecting Surface Enabled Fluid Antenna Multiple Access for 6G", description: "TÜBİTAK 1001 project focusing on the development of AI-assisted MIMO and reconfigurable intelligent surface (RIS) enabled fluid antenna multiple access for next-generation 6G communication systems." },
      // { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    
  },


  //ece
  {
    id: "ece",
    name: "Ece Tan",
    role: "Undergraduate Student and Assistant Researcher",
    image: "photos/ece.jpg",
    bio: "YTU Electronics and Communication Engineering Student",
    socials: [
      { name: "LinkedIn", url: "www.linkedin.com/in/ece-tan", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      // { name: "Google Scholar", url: "https://scholar.google.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
    ],
    education: [
      // { degree: "Ph.D. in Quantum Physics", institution: "MIT", year: "2018-2022" },
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2022-present" }
    ],
    projects: [
      { title: "TÜBİTAK 1001 Project", description: "Design of a Cluster-Based Collaborative Massive MIMO Feature Hybrid MAC Protocol for Reliable and Efficient UAV Communication via Artificial Intelligence for 5G and Beyond " },
      // { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    
  },



  //yigit
  {
    id: "yigit",
    name: "Osman Yiğit Küçükkıratlı",
    role: "Undergraduate Student and Assistant Researcher",
    image: "photos/yigit.jpg",
    bio: "Undergraduate research assistant at ANWCL, developing AI-enabled MIMO and fluid-antenna solutions for 6G communication systems.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/yigitkucukkiratli", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      // { name: "Google Scholar", url: "https://scholar.google.com", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>` },
    ],
    education: [
      // { degree: "Ph.D. in Quantum Physics", institution: "MIT", year: "2018-2022" },
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Istanbul Technical University", year: "2025-present" },
      { degree: "B.Sc. in Electronics and Communication Engineering", institution: "Yildiz Technical University", year: "2022-2025" }
    ],
    projects: [
      { title: "TÜBİTAK Project, 1001 - Program for Supporting Scientific and Technological Research Projects", description: "Intelligent Reflecting Surface Assisted Fluid Antenna Multiple Access with MIMO using Artificial Intelligence for 6G" },
      // { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    
  },


  //siam
  {
    id: "siam",
    name: "Ishraque Sarwar Siam",
    role: "Undergraduate Student and Assistant Researcher",
    image: "photos/siam.jpg",
    bio: "ANWCL research assistant.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ishraque-sarwar-siam-52971a2aa/", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Ishraque-Sarwar-Siam", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 00-.112.437 8.365 8.365 0 00-.078.53 9 9 0 00-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 000 1.448c.01.396.03.718.076 1.025.045.306.11.58.194.818.095.26.24.517.44.77.315.408.7.666 1.164.777.465.11.975.167 1.535.167.087 0 .176-.002.265-.005.04-.002.08-.003.118-.005a6.9 6.9 0 00.301-.019 6.6 6.6 0 00.281-.035 4.079 4.079 0 00.478-.105c.193-.056.374-.13.544-.224a3.5 3.5 0 00.86-.639c.26-.283.484-.604.672-.96.188-.358.34-.75.454-1.177.115-.427.186-.888.212-1.38.025-.494.025-1.02 0-1.578a9.901 9.901 0 00-.055-.64 4.2 4.2 0 00-.105-.545 3.005 3.005 0 00-.169-.5 2.44 2.44 0 00-.256-.447c-.335-.508-.83-.85-1.486-1.025a5.31 5.31 0 00-1.005-.17 5.67 5.67 0 00-.17-.015c-.09-.008-.18-.012-.27-.012zm-9.123.2c-.393 0-.73.21-.964.63-.234.419-.35.95-.35 1.595v.46c0 .354.023.656.07.9.046.245.117.454.21.627.095.174.215.31.36.41.146.098.316.147.51.147.177 0 .336-.038.477-.112.14-.073.263-.183.37-.33.105-.145.19-.322.255-.53.065-.207.107-.444.126-.71.02-.267.03-.57.03-.912v-.355c0-.433-.033-.804-.099-1.112a2.21 2.21 0 00-.3-.735 1.39 1.39 0 00-.523-.456 1.46 1.46 0 00-.706-.167c-.097 0-.19.01-.28.03a1.45 1.45 0 00-.256.077z"/></svg>` },
      { name: "GitHub", url: "https://github.com/IshraqueSarwar", svg: `<svg class="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` },
    ],
    education: [
      // { degree: "Ph.D. in Quantum Physics", institution: "MIT", year: "2018-2022" },
      { degree: "B.Sc. in Mechatronics Engineering", institution: "Yildiz Technical University", year: "2024-present" }
    ],
    projects: [
      { title: "Teknofest-25", description: "Finalist of İHA SÜRÜ competition. Built FANET communication system and swarm based mission." },
      // { title: "Machine Learning for Quantum State Tomography", description: "Using neural networks to efficiently characterize quantum states." }
    ],
    
  },
];
