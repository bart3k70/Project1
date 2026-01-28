const translations = {
  en: {
    heroEyebrow: "Natural solutions for the wood industry",
    heroTitle: "We design and deliver modern systems for timber businesses.",
    heroLead:
      "We specialize in structures, vehicles, and transport solutions for raw materials, plus production facilities.",
    heroPrimary: "Explore the offer",
    heroGhost: "View projects",
    heroStatOne: "Years of experience",
    heroStatTwo: "Delivered projects",
    heroStatThree: "Countries served",
    heroTileOneTag: "Transport",
    heroTileOneTitle: "Log transport vehicles",
    heroTileTwoTag: "Technology",
    heroTileTwoTitle: "Lines and installations",
    heroTileThreeTag: "Design",
    heroTileThreeTitle: "Premium structures",
    homeIntroTitle: "Comprehensive support for the timber industry",
    homeIntroLead:
      "From concept to implementation and service. We deliver solutions for sawmills, prefabrication plants, and logistics firms.",
    homeFeatureOneTitle: "Advisory & design",
    homeFeatureOneCopy:
      "We analyze processes and design systems that increase production efficiency.",
    homeFeatureTwoTitle: "Manufacturing & rollout",
    homeFeatureTwoCopy:
      "We execute orders with full quality and logistics control.",
    homeFeatureThreeTitle: "Service & care",
    homeFeatureThreeCopy:
      "We provide after-sales support and line modernization.",
    homeValuesEyebrow: "Why us",
    homeValuesTitle: "Premium quality and natural materials",
    homeValuesCopy:
      "We combine modern technology with the aesthetics of wood. Each project highlights sustainability and durability.",
    homeValuesQuote:
      "“Our projects merge engineering precision with respect for nature.”",
    homeValuesAuthor: "Technical Director",
    homeCtaTitle: "Request a tailored estimate",
    homeCtaCopy: "We will prepare a project proposal, schedule, and budget.",
    homeCtaButton: "Get in touch",
    offerEyebrow: "Offer",
    offerTitle: "Solutions for timber industry and logistics",
    offerLead:
      "We provide full technology packages and infrastructure equipment for wood-sector companies.",
    offerServiceOneTitle: "Raw material transport vehicles",
    offerServiceOneCopy:
      "Trailers, bodies, and specialist solutions for heavy timber transport.",
    offerServiceTwoTitle: "Technology lines",
    offerServiceTwoCopy: "We design and implement sorting, storage, and cutting lines.",
    offerServiceThreeTitle: "Steel-wood structures",
    offerServiceThreeCopy:
      "Production halls, shelters, and warehouses with premium styling.",
    offerServiceFourTitle: "Automation & service",
    offerServiceFourCopy:
      "System integrations, production monitoring, and ongoing service support.",
    offerProcessTitle: "Collaboration process",
    offerProcessLead:
      "We work in stages to deliver solutions aligned with your scale and goals.",
    offerProcessStepOne: "Audit and needs analysis",
    offerProcessStepTwo: "Technology and visual design",
    offerProcessStepThree: "Manufacturing and installation",
    offerProcessStepFour: "Testing, training, and service",
    projectsEyebrow: "Projects",
    projectsTitle: "Implementations for timber industry leaders",
    projectsLead:
      "Selected technology lines, structures, and transport systems.",
    projectsOneTitle: "Timber sorting line",
    projectsOneCopy: "Complete raw material sorting setup at 120 m³/h.",
    projectsTwoTitle: "Long-log transport",
    projectsTwoCopy: "Fleet of vehicles with telemetry integration.",
    projectsThreeTitle: "Prefabrication hall",
    projectsThreeCopy: "Steel-wood structure with full logistics support.",
    projectsGalleryTitle: "Process gallery",
    projectsGalleryCopy:
      "Implementation photos showing construction details and assembly.",
    aboutEyebrow: "About us",
    aboutTitle: "Engineers and wood enthusiasts",
    aboutLead:
      "For over 20 years we have supported timber leaders across Europe.",
    aboutMissionTitle: "Mission and values",
    aboutMissionCopy:
      "We build solutions that blend functionality with aesthetics, answering the needs of modern sawmills and logistics firms.",
    aboutMissionQuote:
      "“We build trust through quality, transparency, and long-term relationships.”",
    aboutTimelineTitle: "History and growth",
    aboutTimelineCopy: "We continually invest in technology and expertise.",
    aboutTimelineOne: "First timber transport projects.",
    aboutTimelineTwo: "Expanded into hall and warehouse structures.",
    aboutTimelineThree: "Automation and production monitoring integration.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s talk about your project",
    contactLead: "Reach out to discuss details and receive a custom quote.",
    contactFormName: "Full name",
    contactFormEmail: "Email address",
    contactFormCompany: "Company",
    contactFormMessage: "Message",
    contactFormSubmit: "Send inquiry",
    contactInfoTitle: "Office & showroom",
    contactInfoCopy:
      "Visit our showroom in Gdańsk. Meetings by appointment only.",
    contactNewsletterTitle: "Timber industry newsletter",
    contactNewsletterCopy:
      "Get updates on new projects, trends, and technologies.",
    contactNewsletterButton: "Subscribe",
    footerTitle: "NordWood Atelier",
    footerCopy: "Premium solutions for timber industry and raw material transport.",
  },
};

const updateLanguage = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (translations[lang]?.[key]) {
      node.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem("preferredLang", lang);
};

document.querySelectorAll("[data-lang-switch]").forEach((switcher) => {
  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-lang]");
    if (button) {
      updateLanguage(button.dataset.lang);
    }
  });
});

const savedLang = localStorage.getItem("preferredLang");
if (savedLang && savedLang !== "pl") {
  updateLanguage(savedLang);
}
