import eduInam from "../../public/images/teachingstaff/eduinam4.jpg";
import profInam from "../../public/images/teachingstaff/prof-inam.jpg";
import shaibu from "../../public/images/teachingstaff/shaibuSE.jpg";
import emmanuelEssien from "../../public/images/teachingstaff/EmmanEssien.jpg";
import helenEtuk from "../../public/images/teachingstaff/HelenEtuk.jpg"
import iniUmoren from "../../public/images/teachingstaff/Dr.IniUmoren.jpg";
import iniUmoren2 from "../../public/images/teachingstaff/iniUmoren1.jpg";
import boEkom from "../../public/images/staff1.webp";
import imaobong from "../../public/images/teachingstaff/Dr.Imaobong.jpg"
import imaobong2 from "../../public/images/teachingstaff/imaobong2.jpg"
import imaobong3 from "../../public/images/teachingstaff/imaobong3.jpg"
import itoroUdoh from "../../public/images/teachingstaff/Dr.itoro.jpg"
import itoroUdoh2 from "../../public/images/teachingstaff/itoro1.jpg"
import nSimon from "../../public/images/teachingstaff/Dr. Simon.jpg"
import atimJohnson from "../../public/images/teachingstaff/Dr. Johnson.jpg"
import godwinEbong from "../../public/images/teachingstaff/Dr. Ebong.jpg"
import profEnoMoses from "../../public/images/teachingstaff/prof_eno-moses.jpg"
import imaUdousoro from "../../public/images/teachingstaff/Dr. ImaobongUdousoro.jpg"
import { StaticImageData } from "next/image";
export interface Experience {
  title: string;
  year: string;
}

export interface Award {
  type: string;
  awarder: string;
  year: string;
}

export interface ResearchCollaborator {
  title: string;
  collaborator: string;
}

export interface Publication {
  title: string;
}

export interface Lecturer {
  image: StaticImageData[] | StaticImageData;
  title: string;
  fullName: string;
  email: string[] | string;
  googleScholar: string;
  scopus: string;
  orcid: string;
  website: string;
  linkedIn: string;
  unit: string;
  officeNo: string;
  profile: string;
  experience: Experience[];
  awards: Award[];
  researchAreas: string[];
  researchCollaborators: ResearchCollaborator[];
  publications: Publication[];
}

const staffData: Lecturer[] = [
  {
    image: [profInam, eduInam],
    title: "Professor",
    fullName: "edu inam",
    email: ["eduinam@uniuyo.edu.ng", "iceesr@uniuyo.edu.ng"],
    googleScholar:
      "https://scholar.google.com/citations?user=6FeL-4YAAAAJ&hl=en",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=8682379200",
    orcid: "https://orcid.org/0000-0002-2799-6560",
    website: "http://www.iceesr.org.ng/",
    linkedIn: "https://www.linkedin.com/in/edu-inam-bb15b68b/",
    unit: "Environmental / Analytical Chemistry",
    officeNo: "Room 152",
    profile:
      "Edu Inam is an experienced and ambitious academic of the rank of a professor in analytical and environmental chemistry, with over 20 years in the university system across Africa, Europe and Asia. Edu Inam is very passionate about STEM education and the advancement of research and innovation in her country. She has championed and participated in several key research and innovation projects focused on environmental sustainability issues including water resources management, waste valorisation, and renewable energy. Edu Inam has extensive experience in environmental monitoring and analysis, pollution, ecological and human health risk, environmental projects design, data interpretation and compliance-related issues. She has clarity in communications, strong leadership qualities honed by experiences gathered from the various leadership roles undertaken during her academic career. Edu Inam is also passionate about developing young talents – She has over the years consistently inspired her students to reach their potentials",
    experience: [
      {
        title: "Head, Department of Chemistry, University of Uyo",
        year: "2022 - present",
      },
      {
        title:
          "Director, International Centre for Energy and Environmental Sustainability Research",
        year: "2018 - present",
      },
      {
        title:
          "Full Professor of Chemistry, Department of Chemistry, University of Uyo",
        year: "2021 - present",
      },
      {
        title:
          "Director, Center for Research and Development, University of Uyo",
        year: "2015 - 2018",
      },
      {
        title:
          "Associate Professor of Chemistry, Department of Chemistry, University of Uyo",
        year: "2015 - 2021",
      },
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2010 - 2015",
      },
      {
        title:
          "Programme Officer/Post-Doctoral Fellow, International Environmental Research Centre, Gwangju Institute of Science and Technology, South Korea",
        year: "2007 - 2010",
      },

      {
        title: "Lecturer 1, Department of Chemistry, University of Uyo",
        year: "2005 - 2007",
      },

      {
        title:
          "PhD. Chemistry (specializing in Analytical and   Radiochemistry), Loughborough University, United Kingdom",
        year: "2001 - 2005",
      },
      {
        title: "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "1998 - 2001",
      },

      {
        title:
          "MSc Chemistry (Specializing in Analytical Chemistry), Univeristy of Uyo, Nigeria",
        year: "1998",
      },

      {
        title: "B.Sc. Chemistry, University of Uyo, Nigeria",
        year: "1988",
      },
    ],
    awards: [
      {
        type: "Research grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2022",
      },
      {
        type: "Research grant",
        awarder: "Ministry of Science and Technology, South Korea",
        year: "2018",
      },
      {
        type: "Research grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2017",
      },
      {
        type: "Global innovative imperative grant",
        awarder: "American Chemical Society",
        year: "2015",
      },
      {
        type: "Research grant",
        awarder: "Ministry of Science and Technology South Korea",
        year: "2014",
      },
      {
        type: "Research grant",
        awarder: "chlumberger Faculty for the Future Foundation",
        year: "2008",
      },
      {
        type: "Postdoctoral fellowship award",
        awarder:
          "United Nations University and Gwangju Institute of Science and Technology Joint Programme",
        year: "2007",
      },
    ],
    researchAreas: [
      "Monitoring of toxic chemicals in the aquatic environment",
      "Human health risks assessments",
      "Development of novel products for water purification",
      "Waste to energy technologies",
    ],
    researchCollaborators: [
      {
        title: "Africa Research and Innovation Partnership (“ARIP”) - 2023",
        collaborator:
          "Prof Kirk Semple Lancaster Environment Centre, Lancaster University, United Kingdom",
      },
      {
        title:
          "Nature Based Solution for Improved Climate Resilience (NICE): Equitable water retention and treatment solutions in Sub-Saharan Africa - 2023",
        collaborator:
          "Dr. Tim Marjoribanks Loughborough University,United Kingdom",
      },
      {
        title: "Nanomaterials and Biogas deployment",
        collaborator:
          "Dr. Chika Ezeanyanaso. Deputy Director, National Agency for Science and Engineering Infrastructure (NASENI), Abuja",
      },
      {
        title:
          "Promoting Renewable Energy for Research, Education and Development (PRERED)(2022)",
        collaborator: "Mr Juan Pablo Maureira ENERGIQA Belgium",
      },
    ],
    publications: [
      {
        title:
          "Offiong, N.O., Udo, G.J., Inam, E.J., Ekanem, A.N., Awaka-ama, J.J., Uwanta, E.J., Dong, J. (2023). Screening bio-derived surfactants for soil washing of PAHs: effects of substrate sources and trace metals distribution. Environmental Engineering Research, 28(2): 210502.  DOI: https://doi.org/10.4491/eer.2021.502",
      },
      {
        title:
          "Offiong, N. O., Inam, E. J., Fatunla, O. K., Ofon, U. A., Abraham, N. A., & Essien, J. P. (2022). Metagenomic signature and total petroleum hydrocarbons distribution in a crude oil contaminated ultisol remediated with biochar–humus sediment slurry. Remediation, 32(4), 299–308. https://doi.org/10.1002/rem.21734",
      },

      {
        title:
          "Okon, O. E., Inam, E. J., Offiong, N.-A.O., Akpabio, U. D. (2022). Aqueous adsorptive removal of bisphenol a using tripartite magnetic montmorillonite composites. Pollutants, 2, 363–387. DOI: 10.3390/pollutants2030025 (Switzerland)",
      },
      {
        title:
          "Shaibu, S.E., Inam, E.J, Eno A. Moses. (2022). Biogenic silver-kaolinite nanocomposite for the sequestration of lead and cadmium in simulated produced water. Journal of Materials & Environmental Sustainability Research, 2(1): 19-38 (Nigeria). DOI: 10.55455/jmesr.2022.002",
      },
      {
        title:
          "Okon E. O., Inam, E. J., Ukana D. Akpabio. (2022). Non-catalytic and catalytic pyrolysis of low-density polyethylene (LDPE) plastic waste into fuel-ranged hydrocarbons using Nigerian local clay composites. Journal of Materials & Environmental Sustainability Research,(2022), 2(2): 11-21 (Nigeria). DOI: 10.55455/jmesr.2022.005",
      },
      {
        title:
          "Offiong, N. O. Offiong, Udo, G. J., Inam, E. J, Ekanem, A. N., Awaka-ama, J.J., Uwanta, E. J. , Dong, J., (2022). Screening of bio-derived surfactants for soil washing of PAHs: effects of substrate sources and trace metals distribution. Environmental Engineering Research.28(2): 210502. https://doi.org/10.4491/eer.2021.502 (South Korea)",
      },

      {
        title:
          "Okon E. O, Inam, E. J., Akpabio, U. D., (2022). Non-catalytic and catalytic pyrolysis of low-density polyethylene (LDPE) plastic waste into fuel-ranged hydrocarbons using Nigerian local clay composites. Journal of Materials & Environmental Sustainability Research, 2(2): 11-21. DOI: https://doi.org/10.55455/jmesr.2022.005",
      },
      {
        title:
          "Inam, E., Ekpenyong, R., Offiong, N., Udotong, U., Benjamin, M., & William, N., (2021). Climate variability, land cover change and soil erosion risk implications for water quality of a humid tropical river basin in sub-Saharan Africa. Water Practice and Technology, 16 (1), 263 (Canada). DOI: 10.2166/WPT.2020.116 ",
      },
      {
        title:
          "Offiong, N.O., Inam, E., Etuk, H. S., Essien, J. P., Ofon, U. A., & Una, C.C. (2020). Biochar and humus sediment mixture attenuates crude oil-derived PAHs in a simulated tropical ultisol. SN Applied Sciences, 2, 1930. (Switzerland)",
      },
      {
        title:
          "Inam, E. J., Edet, J. B., Akpan, P. E., & Ite, K. E. (2020). Characterization and equilibrium studies for the removal of methylene blue from aqueous solution using activated bone char. Journal of Material and Environmental Science, 11(10), 1667 - 1675. (Morocco).",
      },
    ],
  },
  {
    image: shaibu,
    title: "Dr.",
    fullName: "solomon shaibu",
    email: "shaibusolomon@uniuyo.edu.ng",
    googleScholar:
      "https://scholar.google.com/citations?user=EvhkVpYAAAAJ&hl=en&oi=ao",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=56208782400",
    orcid: "https://orcid.org/0000-0002-5845-4238",
    website: "",
    linkedIn: "https://www.linkedin.com/in/solomon-s-3971b290/",
    unit: "Environmental / Analytical Chemistry",
    officeNo: "Room 30",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2022 - present",
      },

      {
        title: "Lecturer 1, Department of Chemistry, University of Uyo",
        year: "2020 - 2022",
      },

      {
        title: "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "2014 - 2020",
      },
      {
        title:
          "PhD. Chemistry (specializing in Environmental Chemistry), University of Uyo, Nigeria",
        year: "2016 - 2021",
      },

      {
        title: "M.Sc. Chemistry, Univeristy of Illorin, Nigeria",
        year: "2014",
      },

      {
        title:
          "B.Sc. (Hons) Chemistry, Second Class Upper Division, University of Illorin, Nigeria",
        year: "2010",
      },
    ],
    awards: [
      {
        type: "Research grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2023",
      },
    ],
    researchAreas: [
      "Nanomaterials",
      "Nanotechnology",
      "Nanochemistry",
      "Material Science",
    ],
    researchCollaborators: [
      {
        title: "Africa Research and Innovation Partnership (“ARIP”) - 2023",
        collaborator:
          "Prof Kirk Semple Lancaster Environment Centre, Lancaster University, United Kingdom",
      },
    ],
    publications: [
      {
        title:
          "Offiong, N. A. O., Edet, J. B., Shaibu, S. E., Akan, N. E., Atakpa, E. O., Sanganyado, E., Okop, I. J., Benson, I. U. and Okoh, A. (2023). Metagenomics: an emerging tool for the chemistry of environmental remediation. Frontiers in Environmental Chemistry, 4 (74):1052697",
      },
      {
        title:
          "Shaibu, S., Inam, E., Moses, E., Ofon, U., Fatunla, O., Obadimu, C., Ibuotenang, N., Offiong, N.A., Ekpo, V., Adeoye, T. and Udokang, E. (2023). Prospects of nanosorption and photocatalysis in remediation of oil spills. Journal of the Nigerian Society of Physical Sciences, 5(1): 1043",
      },

      {
        title:
          "Moses, E. A., Akpan, D. J., and Shaibu, S. E. (2022). Risk assessment of pesticide residues in water samples from Nwaniba river, Akwa Ibom state, Nigeria. Journal of Chemical Society of Nigeria, 47(6): 1321 – 1334.",
      },
      {
        title:
          "Shaibu, S. E., Inam, E. J., Moses, E. A. (2022). Biogenic Silver Kaolinite Nanocomposite for the Sequestration of Lead and Cadmium in Simulated Produced Water. Journal of Material and Environmental Sustainability Research, 1(2): 13 – 25.",
      },
      {
        title:
          "Divine-Anthony, O., Asamudo, N. U. and Shaibu, S. E. (2022). Phytochemical and antifungal properties of Gongronema latifolium and Heinsia crinita leaf extracts against fungal pathogens associated with post-harvest rot of selected fruits. World Journal of Applied Science and Technology, 14 (2): 53-59.",
      },

      {
        title:
          "Moses, E. A., Akpan, D., Shaibu, S. E., & Ekpo, V. F. (2022). Risk assessment of pesticide residues in fish samples from Nwaniba River, Akwa Ibom state, Nigeria. World Journal of Applied Science and Technology, 14(2): 35-41.",
      },
      {
        title:
          "Ofon, U. A., Ndubuisi-Nnaji, U. U., Shaibu, S. E., Fatunla, O. K. and Offiong, N. A. O. (2021). Recycling anaerobic digestate enhances the co-digestion potential of agroindustrial residues: influence of different digestates as sources of microbial inoculum. Environmental Technology, 1-12.",
      },
      {
        title:
          "Fatunla, O. K, Essien, E. J., Ofon, U. O., Shaibu, S. E. and Dan, E. U. (2021). Microbial diversity of Nigerian sludge and its potential for use as biofertilizer. Biotechnology Journal International, 25(1): 14-22.",
      },
      {
        title:
          "Shaibu, S. E., Inam, E. J., Moses, E. A., Fatunla, O. K., Enin, G. A., Ofon, U. A., Effiong, N. E. and Ibuotenang, N. D. (2021). Synthesis and Structural Elucidation of Nanoscale Manganese-Bamboo Composites. World Journal of Applied Science and Technology, 13 (1): 49-55.",
      },
    ],
  },
  {
    image: [profEnoMoses],
    title: "Professor",
    fullName: "Eno Moses",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: [imaUdousoro],
    title: "Dr.",
    fullName: "Imaobong Udousoro",
    email: ["imaobongudousoro@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?hl=en&user=u_jYZ4sAAAAJ",
    scopus: "",
    orcid: "https://orcid.org/0000-0003-3227-7656",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry (Head of Unit)",
    officeNo: "Room 004",

    profile: "Imaobong Udousoro (PhD), an Associate Professor of analytical and environmental chemistry, specialises in investigating elemental composition within diverse ecological matrices, including air, soil, sediment, water, foods, plants, and herbal medicinal plants, addressing associated health and environmental risks. Her work also involves using biological indicators of pollution to monitor air and soil quality. Her most recent research on Space Technology combined with conventional analytical techniques in environmental pollution and degradation of the coastal area is ongoing.",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "TETFUND IBR Grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2024",
      },
      {
        type: "Meritorious Award of Honour for outstanding contribution to the success of the student union. ",
        awarder: "The Student Union Governments, University of Uyo, Uyo (Wisdom Emmanuel led Exco).",
        year: "November 22, 2022",
      },
      {
        type: "Award of Excellence for outstanding contributions to the Students' Chemical Society of Nigeria (National) at the 10th Annual National/International Conference, Uyo.",
        awarder: "Students' Chemical Society of Nigeria (National) - Adewumi Samuel S. led Exco.",
        year: "April 03, 2009",
      },
      {
        type: "TETFUND Conference Grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2016",
      },
      {
        type: "TETFUND Conference Grant",
        awarder: "Tertiary Education Fund (TETFUND)",
        year: "2015",
      },
      {
        type: "Research grant",
        awarder: "International Foundation for Science (IFS)",
        year: "1996",
      },
    ],
    researchAreas: ["E-waste characterisation and impact on the environment", "Assessment and monitoring of contaminants in the aquatic environment, soils and plants, health/ecological risk assessment and pollution indicators. ","Assessing the health risks of toxic elements in foods."],
    researchCollaborators: [
      {
        title: "Collaborative studies with Butler University - 2018 - Date",
        collaborator: "The Department of Chemistry, Butler University, Indianapolis, Indiana, USA",
      },
      {
        title: "Collaborative studies on Herbal supplements - natural and processed - 2016 - Date",
        collaborator: "The Department of Chemistry, Butler University, Indianapolis, Indiana, USA",
      },
      {
        title: "Collaborative studies on Contaminants in grains food - 2019 - Date",
        collaborator: "The Department of Agriculture and Environmental Sciences, Lincoln University in Missouri, Jefferson City, USA",
      },
     
    ],
    publications: [
      {
        title: "Ikem, A., Odumosu, P. & Udousoro, I. (2023). Elemental composition of cereal grains and the contribution to the dietary intake in the Nigerian population. Journal of Food Composition and Analysis, 118: 105207. https://doi.org/10.1016/j.jfca.2023.105207 (USA)",
      },
      {
        title: "Udousoro, I. I., Otong, E. J. & Ebiekpi, I. E. (2019). Health risks associated with consumption of antinutrients and elevated heavy metals level in leafy vegetables marketed in Uyo, Akwa Ibom State. World Journal of Applied Science and Technology, 1(1): 8-16. (Nigeria)",
      },
      {
        title: "Udoh, A. P., Udousoro, I. I. & Sunday, I. U. (2019). Some aspects of the nutritional properties of the seed and raw seed oil of Hura crepitans. Nigerian Journal of Chemical Research, 24(2): 15-25. (African Journal online - Nigeria)",
      },
      {
        title: "Udousoro, I. I., Udo, E. S., Udoh, A. P. & Udoanya, E. E. (2018). Proximate and antinutrients compositions and health risk assessment of toxic metals in some edible vegetables. Nigerian Journal of Chemical Research, 23(2): 51-62. (African Journal online - Nigeria)",
      },
      {
        title: "Udousoro, I. I., Offiong, N.O. & Abraham, E. M. (2018). Bioaccumulation and health risk of trace elements in shellfish and their leachates from two coastal areas of Nigeria. International Journal of Development and Sustainability, 7(4): 1474-1494. (Japan) ",
      },
      {
        title: "Wilson, I. S., Udoh, A. P. & Udousoro, I. I. (2018). Nutritionally and medicinally important compounds in the flower of Xanthosoma sagittifolium (L) SCHOTT (yellow flesh cultivar). Annals. Food Science and Technology (afst), 19(1): 92-102. (Romania)",
      },
      {
        title: "Udousoro, I. I. & Essien, E. E. (2017). Amino acids, vitamins and other 	nutritional and anti-nutritional components of Cola lepidota (monkey kola). The American Association for Science and Technology (AASCIT) Communications, 4(3): 12-18. (USA)",
      },
      {
        title: "Essien, E. E. & Udousoro, I. I. (2017). Cola parchycarpa K. Schum: Chemical evaluation of amino acids, vitamins and other nutritional factors in seed, fruit mesocarp and epicarp. UK Journal of Pharmaceutical and Biosciences, 5(4): 23-29. https://doi.org/10.20510/ukjpb/5/i4/155964 (India)",
      },
      {
        title: "Udousoro I. I. (2016). Carbohydrate polymers as environmentally friendly inhibitors of metals and alloy corrosion In Chemical environmental pollution: A selection of reviews and studied, Chapter 17, pp 247-291 [P.C. Onianwa and G. U. Adia, editors]. Ibadan, Nigeria: Depet Publishers.",
      },
      {
        title: "Udousoro I. I. (2013). Potentials of ketogenic diet. In Contemporary issues in sustainable tropical agriculture, Chapter 20, pp 193-201 [L. Etim, J. P. Udo, N. Etim and A. Ekwu, editors]. University of Uyo, Nigeria: Faculty of Agriculture",
      },
    ],
  },
  {
    image: helenEtuk,
    title: "Dr.",
    fullName: "helen etuk",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Inorganic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: emmanuelEssien,
    title: "Dr.",
    fullName: "emmanuel essien",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Organic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: [imaobong, imaobong2, imaobong3],
    title: "Dr.",
    fullName: "imaobong daniel",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Organic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: boEkom,
    title: "Dr.",
    fullName: "ekerette jackson",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Physical Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },

  {
    image: [iniUmoren, iniUmoren2],
    title: "Dr.",
    fullName: "iniobong umoren",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
    {
    image: [itoroUdoh, itoroUdoh2],
    title: "Dr.",
    fullName: "itoro udoh",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Industrial Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
    {
    image: [nSimon],
    title: "Dr.",
    fullName: "Nzikhayel Simon",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Inorganic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
    {
    image: [atimJohnson],
    title: "Dr.",
    fullName: "Atim Johnson",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Inorganic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
    {
    image: [godwinEbong],
    title: "Dr.",
    fullName: "Godwin Ebong",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Inorganic Chemistry",
    officeNo: "",

    profile: "",
    experience: [
      {
        title: "",
        year: "",
      },
    ],
    awards: [
      {
        type: "",
        awarder: "",
        year: "",
      },
    ],
    researchAreas: [],
    researchCollaborators: [
      {
        title: "",
        collaborator: "",
      },
    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  // ... other lecturers
];

export default staffData;
