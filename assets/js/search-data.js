// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by Pangmiaomiao Zhang in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research projects spanning single-molecule biophysics, fluorescence sensing, and organic catalysis.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of Pangmiaomiao Zhang, Chemistry Ph.D. candidate at the University of Texas at Austin (expected May 2027).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-received-the-outstanding-m-sc-thesis-award-and-was-named-outstanding-master-graduate-of-2022-at-tsinghua-university-tada",
          title: 'Received the Outstanding M.Sc. Thesis Award and was named Outstanding Master Graduate of...',
          description: "",
          section: "News",},{id: "news-started-my-phd-in-chemistry-at-the-university-of-texas-at-austin-joining-prof-yi-chih-lin-s-lab-sparkles",
          title: 'Started my PhD in Chemistry at the University of Texas at Austin, joining...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-real-time-visualization-of-sars-cov-2-spike-protein-and-ntd-binding-antibody-interactions-using-hs-afm-at-the-biophysical-society-annual-meeting-2024",
          title: 'Presented a poster on real-time visualization of SARS-CoV-2 spike protein and NTD-binding antibody...',
          description: "",
          section: "News",},{id: "news-my-first-author-study-on-g2l4-reverse-transcriptase-mediated-dna-repair-has-been-accepted-in-nature-communications-the-preprint-is-available-on-biorxiv-i-also-received-the-2026-chemistry-department-research-fellowship-at-ut-austin",
          title: 'My first-author study on G2L4 reverse transcriptase-mediated DNA repair has been accepted in...',
          description: "",
          section: "News",},{id: "projects-viral-glycosylation-and-sars-cov-2-spike-antibody-interactions",
          title: 'Viral Glycosylation and SARS-CoV-2 Spike-Antibody Interactions',
          description: "Bioanalytical study of N- and O-linked glycosylation and antibody binding (manuscript in preparation)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_spike_protein/";
            },},{id: "projects-g2l4-reverse-transcriptase-in-dna-repair-by-mmej",
          title: 'G2L4 Reverse Transcriptase in DNA Repair by MMEJ',
          description: "Biochemical and single-molecule assays for G2L4-mediated DNA repair; manuscript accepted in Nature Communications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_g2l4_dna_repair/";
            },},{id: "projects-sars-cov-2-membrane-protein-structure-amp-function",
          title: 'SARS-CoV-2 Membrane Protein Structure &amp;amp; Function',
          description: "Full-length membrane protein purification, liposome reconstitution, and structural characterization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_membrane_protein/";
            },},{id: "projects-fluorescence-sensor-array-for-amyloid-beta-aggregates",
          title: 'Fluorescence Sensor Array for Amyloid Beta Aggregates',
          description: "Cross-reactive sensor array for discriminating Aβ42 aggregation states (Jan 2021 – Apr 2022)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_amyloid_beta/";
            },},{id: "projects-detection-of-histone-acetylation-enzymes",
          title: 'Detection of Histone Acetylation Enzymes',
          description: "Using conjugated polyelectrolytes for enzyme activity detection (Nov 2019 – Jan 2021)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_histone_acetylation/";
            },},{id: "projects-fluorescence-sensor-array-for-urine-disease-diagnosis",
          title: 'Fluorescence Sensor Array for Urine Disease Diagnosis',
          description: "Differentiation diagnosis of urinary system diseases (Nov 2018 – May 2019)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_urine_proteins/";
            },},{id: "projects-phosphine-catalyzed-enantioselective-1-4-annulation",
          title: 'Phosphine-Catalyzed Enantioselective [1+4] Annulation',
          description: "Asymmetric catalysis for chiral 2-pyrroline synthesis (Mar 2018 – Sep 2018)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_phosphine_catalysis/";
            },},{id: "projects-catalyst-free-cycloaddition-for-spiro-scaffolds",
          title: 'Catalyst-Free Cycloaddition for Spiro Scaffolds',
          description: "Facile synthesis of biologically active spiro compounds (Mar 2017 – Oct 2017)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_spiro_scaffolds/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%61%6F%6D%69%61%6F%32%32@%75%74%65%78%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Pangmiaomiao_Zhang_CV_2026.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xpUU-9gAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pangmiaomiaozhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
