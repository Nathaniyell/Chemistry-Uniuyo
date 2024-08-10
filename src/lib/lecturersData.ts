import eduInam from "../../public/images/teachingstaff/eduinam4.jpg";
import profInam from "../../public/images/teachingstaff/prof-inam.jpg";
import shaibu from "../../public/images/teachingstaff/shaibuSE.jpg";
import emmanuelEssien from "../../public/images/teachingstaff/EmmanEssien.jpg";
import helenEtuk from "../../public/images/teachingstaff/HelenEtuk.jpg"
import iniUmoren from "@/public/images/teachingstaff/iniu.jpg";
import iniUmoren2 from "@/public/images/teachingstaff/iniu.jpg";;
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
import imaUdousoro from "../../public/images/teachingstaff/imaUdousoro.jpg"
import mkpenie from "@/public/images/teachingstaff/mkpenie2.jpg"
import abakedi from "@/public/images/teachingstaff/abakedi.jpg"
import enin from "@/public/images/teachingstaff/enin.jpg"
import anweting from "@/public/images/teachingstaff/anweting.jpg"
import basilIta from "@/public/images/teachingstaff/itaBasil.jpg"
import emmadan from "@/public/images/teachingstaff/emmadan.jpg"
import inemesitakpan from "@/public/images/teachingstaff/inemesitakpan.jpg"
import uwah from "@/public/images/teachingstaff/uwah.jpg"
import ekeminituen from "@/public/images/teachingstaff/ekeminituen.jpg"
import profAntia from "@/public/images/teachingstaff/prof_antia.jpg"
import emptyImg from "@/public/empty-user.jpg"





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
  researchProjects?: string[]
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
      "Edu Inam is an experienced and ambitious academic of the rank of a professor in analytical and environmental chemistry, with over 20 years in the university system across Africa, Europe and Asia. \n Edu Inam is very passionate about STEM education and the advancement of research and innovation in her country. She has championed and participated in several key research and innovation projects focused on environmental sustainability issues including water resources management, waste valorisation, and renewable energy. \n Edu Inam has extensive experience in environmental monitoring and analysis, pollution, ecological and human health risk, environmental projects design, data interpretation and compliance-related issues. She has clarity in communications, strong leadership qualities honed by experiences gathered from the various leadership roles undertaken during her academic career. \n Edu Inam is also passionate about developing young talents – She has over the years consistently inspired her students to reach their potentials",
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
          "Professor of Chemistry, Department of Chemistry, University of Uyo",
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
        title: "Lecturer I, Department of Chemistry, University of Uyo",
        year: "2005 - 2007",
      },

      {
        title:
          "Ph.D Chemistry (specializing in Analytical and   Radiochemistry), Loughborough University, United Kingdom",
        year: "2001 - 2005",
      },
      {
        title: "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "1998 - 2001",
      },

      {
        title:
          "M.Sc Chemistry (Specializing in Analytical Chemistry), Univeristy of Uyo, Nigeria",
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
          "Promoting Renewable Energy for Research, Education and Development (PRERED)- 2022",
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
    image: [profAntia],
    title: "Professor",
    fullName: "bassey antia",
    email: ["basseyantia@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?user=ctODY1kAAAAJ&hl=en&oi=ao",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=10339941100",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Organic Chemistry",
    officeNo: "Room 005",

    profile: "Professor Bassey Sunday Antia is a distinguished Professor of Organic Chemistry with a focus on organic chemistry and natural products research. He currently serves as the Dean of the Postgraduate School at the University of Uyo, where he has been a faculty member since 1994.\n His research encompasses organic chemistry, medicinal plants, and nutraceutical development.He has made significant contributions to the study of phytochemical properties and biological activities of plant extracts, particularly their potential in drug discovery and development.His work on the chemical composition and antioxidant properties of plants has been pivotal in understanding their therapeutic potentials.\n Professor Antia holds a Ph.D. in Organic Chemistry from the University of Calabar. He has taught and mentored students in both undergraduate and postgraduate courses, focusing on the theoretical and practical aspects of chemistry. With over 60 journal articles published, Professor Antia's research has primarily focused on the pharmacological effects of plant extracts. His community service includes promoting the activities of the Chemical Society of Nigeria and participating in educational workshops to improve science education in Africa and the world over.\n Professor Antia continues to supervise postgraduate research and is actively involved in national and international conferences.Through his research, teaching, and community involvement, Professor Bassey Antia has made substantial contributions to organic chemistry and natural products research, inspiring the next generation of scientists and fostering excellence at the University of Uyo and beyond."
,
    experience: [
      {
        title: "Professor of Chemistry, Department of Chemistry, University of Uyo",
        year: "2014",
      },
      {
        title: "Dean, Postgraduate School, University of Uyo, Uyo",
        year: "March 2021 - date",
      },
      {
        title: "The Focal Officer/Director, SERVICOM Unit, University of Uyo, Uyo",
        year: "June 2017 - March 2021",
      },
      {
        title: "Permanent member of Senate, University of Uyo, Uyo",
        year: "October 2014 - date",
      },
      {
        title: "Associate Professor (Organic Chemistry), Department of Chemistry, University of Uyo",
        year: "October 2011 – Sept. 2014",
      },
      {
        title: "Acting Head, Department of Chemistry, University of Uyo, Uyo ",
        year: "November 2012 to January 18, 2016",
      },
      {
        title:
        "PhD. Organic Chemistry (with Thesis on Isolation and Characterization of Bioactive Constituents from the Stem bark of Garcinia kola and Marine-derived Fungus Aspergillus aculeatus (2011)), University of Ibadan, Ibadan, Oyo State",
      year: "2011 - 2012",
    },
      {
        title: "Member, Business and Vetting Committee of Senate, University of Uyo, Uyo",
        year: "2006 - date",
      },
      {
        title: "Senior Lecturer (Organic Chemistry), Department of Chemistry, University of Uyo",
        year: "Oct. 2005 – Sept. 2011",
      },
      {
        title: "Trainee Scientist, Chulabhorn Research Institute,Vibhavadi-Rangsit Road, Bangkok 10210, Thailand",
        year: "Nov. 2008 - Nov. 2009",
      },
      {
        title: "Lecturer I (Organic Chemistry), Department of Chemistry, University of Uyo",
        year: "Oct. 2001 – Sept. 2005",
      },
      {
        title: "Lecturer II (Organic Chemistry), Department of Chemistry and Biochemistry, University of Uyo",
        year: "Oct. 1996 – Sept. 2001",
      },
      {
        title: "Assistant Lecturer (Organic Chemistry), Department of Chemistry and Biochemistry, University of Uyo",
        year: "Jan. 1994 – Sept. 1996",
      },
      {
        title:
        "M.Sc. Organic Chemistry (with dissertation on Characterization of Insoluble Organic Matter of the Lokpanta Oil Shale, Anambra basin by Infrared spectroscopy (1991)), University of Calabar, Calabar, Cross River State",
      year: "1990 - 1992",
    },
    {
      title:
        "B.Sc. (Hons) Chemistry (Second Class Upper), University of Calabar, Calabar, Nigeria",
      year: "1982 -1986",
    },

    ],
    awards: [
      {
        type: "Federal Award for Graduate Studies",
        awarder: "Federal Government of Nigeria",
        year: "1990 – 1991",
      },
      {
        type: "Scholarship Award",
        awarder: "Cross River State, Nigeria",
        year: "1975 – 1980",
      },
    ],
    researchAreas: ["Natural products chemistry research", "Medicinal plants research (for drug discovery, development and nutraceuticals)",],
    researchCollaborators: [

    ],
    publications: [
      {
          "title": "Essien E. E., Antia, B. S., Solomon, A. U., Choudhary, M. I. (2017). In 			vitro cytotoxic, antioxidant and antimicrobial activities of Adronidia merrilli and Archontopheonix tuckeri fruit pericarps. UK Journal of Pharmaceutical and Biosciences. 5(1): 68-75.	http://www.ukjpb.com/index.php (India)"
      },
      {
          "title": "Okokon, J. E., Antia, B.S., Azare, B. A., and Okokon, P. J. (2017). Antiplasmodial activity and cytotoxicity of ethanol extract of Zea mays root. Avicenna Journal of Phytomedicine. 7 (3): 275-284. (Mashhad, Iran)."
      },
      {
          "title": "Antia, B. S., Essien, E. E., Udonkanga, E. D. (2017). Nutritional composition and acute toxicity potentials of Archontophoenix tukeri and Adonnidia merrilli kernels. UK Journal of Pharmaceutical and Biosciences. 5(3): 1-8. http://www.ukjpb.com/index.php (India)."
      },
      {
          "title": "Antia, B. S., Essien, E. E., Jacob, I. E., David, E. M. (2017). Phytochemical profile, antimicrobial and antioxidant activities of Ptychosperma macarthurii and Achontophoenix tukeri seed extracts. American Journal of Chemistry and Applications. (4)6: 50 – 54. http://www.aascit.org/journal/ajca. (New Castle DE 19803 USA)."
      },
      {
          "title": "Antia, B.S., Ita, B. N., and Akpan, I. (2020). Nutritional evaluation and antioxidant activity of a lesser – known wild edible fruit Tristemma hirtum P. Beauv. Journal of Natural Sciences Research. 10 (6): 57-66. www.iiste.org., ISSN 2224-3186 (Paper) ISSN 2225-0921 (Online)."
      },
      {
          "title": "Essien, E. E., Antia, B. S., Etuk, E. I., and David, E. M. (2021). Chemical composition of Livistona chinensis and Areca catechu palm nuts. Chemistry of Natural Compounds. 57 (6), 1184-1186. DOI 10.1007/s10600-021-03583-9."
      },
      {
          "title": "Essien, E. E., Antia, B. S., David, E. M., Solomn, A.U. (2022). Amino acids, fatty acids, and minerals composition of Roystonea regia and Ptychomaperma macarthurii palm kernels. World Journal of Applied Science and Technology. 14 (1b): 94-96. DOI: 10.4314/wojast.v14i1b.94."
      },
      {
          "title": "Enin, G. N., Antia, B.S., Shaibu, S. E., Willie, I. N., Asuquo, E. E., Umoh, U. I (2023). Comparison of the Chemical composition, nutritional values, total phenolics and flavonoids content of the ripe and unripe Solanum nigrum Linn. fruits from Nigeria. World Journal of Pharmacy and Pharmaceutical Sciences. DOI: 10.20959/wjpps20238-25410."
      },
      {
          "title": "Enin, G. N., Okokon, J. E., Odokwo, B. O., Antia, B. S. (2023). Phytochemical Screening and in vivo Inhibitory Study of Telfaira occidentalis Hook f. Seeds Extract on Alpha Amylase and Alpha Glucosidase of Rats. Journal of Science and Technology Research. 5 (4); 26 – 35."
      },
      {
          "title": "Ekanem, I.R., Antia, B.S., Essien, E.E., and Thomas, P.S. (2023). In Vitro Antioxidant Activity and Hypoglycemic Efficacy of the Leaf, Stem, and Rhizome Extracts of Costus Igneus Nak (Costaceae) in Alloxan Induced Diabetic Rats. World Journal of Applied Science and Technology. 15 (1) 98 – 103."
      }
  ]
  ,
  },
  {
    image: [profEnoMoses],
    title: "Professor",
    fullName: "eno moses",
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
        title: "Professor of Chemistry, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },


  {
    image: [basilIta],
    title: "Professor",
    fullName: "basil ita",
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
        title: "Professor of Chemistry, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: imaUdousoro,
    title: "Dr.",
    fullName: "imaobong udousoro",
    email: ["imaobongudousoro@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?hl=en&user=u_jYZ4sAAAAJ",
    scopus: "",
    orcid: "https://orcid.org/0000-0003-3227-7656",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry",
    officeNo: "Room 004",

    profile: "Imaobong Udousoro (PhD), an Associate Professor of analytical and environmental chemistry, specialises in investigating elemental composition within diverse ecological matrices, including air, soil, sediment, water, foods, plants, and herbal medicinal plants, addressing associated health and environmental risks. \n Her work also involves using biological indicators of pollution to monitor air and soil quality. Her most recent research on Space Technology combined with conventional analytical techniques in environmental pollution and degradation of the coastal area is ongoing.",
    experience: [
      {
        title: "Associate Professor, Department of Chemistry, University of Uyo",
        year: "2015 - Date",
      },
      {
        title: "Head Analytical Chemistry Unit, Department of Chemistry",
        year: "2020 - Date",
      },
      {
        title: "Vice Dean Faculty of Science",
        year: "2021 - 2022",
      },
      {
        title: "Ag. HOD Department of Chemistry",
        year: "2020 - 2022",
      },

      {
        title: "Faculty of Science Research Committee (Secretary)",
        year: "2016 - Date",
      },
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2012 - present",
      },
      {
        title: "Lecturer I, Department of Chemistry, University of Uyo",
        year: "2009 - 2012",
      },
      {
        title: "Lecturer II, Department of Chemistry, University of Uyo",
        year: "2002 - 2009",
      },
      {
        title: "Examination Officer, Department of Chemistry, University of Uyo",
        year: "2004 - 2014",
      },
      {
        title:
          "PhD. Chemistry (Analytical Chemistry), University of Ibadan, Ibadan, Oyo State",
        year: "1990 - 1998",
      },
      {
        title:
          "M.Sc. Chemistry (Analytical Chemistry with Research in Environmental Analysis- Pesticides residues in aquatic environment) , University of Ibadan, Ibadan, Oyo State",
        year: "1987 - 1989",
      },
      {
        title:
          "M.Ed. (Teacher Education), University of Ibadan, Ibadan, Oyo State",
        year: "1986 - 1987",
      },
      {
        title:
          "B.Ed.  (Hons) Chemistry/Botany , University of Ibadan, Ibadan, Oyo State",
        year: "1982 - 1985",
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
    researchAreas: ["E-waste characterisation and impact on the environment", "Assessment and monitoring of contaminants in the aquatic environment, soils and plants, health/ecological risk assessment and pollution indicators. ", "Assessing the health risks of toxic elements in foods."],
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
    image: godwinEbong,
    title: "Dr.",
    fullName: "godwin ebong",
    email: ["godwinebong@uniuyo.edu.ng"],
    googleScholar: "",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=16743659700",
    orcid: "https://orcid.org/0000-0003-4555-3090",
    website: "",
    linkedIn: "",
    unit: "Inorganic Chemistry",
    officeNo: "Room 149",

    profile: "",
    experience: [
      {
        title: "Associate Professor, Department of Chemistry, University of Uyo",
        year: "October 2017 - present",
      },
      {
        title: "Staff Adviser for Students̓ Chemical Society of Nigeria, Department of Chemistry, University of Uyo",
        year: "2015 - present",
      },
      {
        title: "Departmental SIWES Coordinator, Department of Chemistry, University of Uyo",
        year: "2014 - present",
      },
      {
        title: "Coordinator, Remedial Chemistry, Department of Chemistry, University of Uyo",
        year: "2012 - 2013",
      },
      {
        title: "Departmental Welfare Officer, University of Uyo",
        year: "2005 - 2010",
      },
      {
        title: "Examination Officer",
        year: "2000 - 2008",
      },
      {
        title: "Coordinator, Research Project, Department of Chemistry, University of Uyo",
        year: "2001 - 2010",
      },
      // {
      //   title:
      //     "Lecturer I, Department of Chemistry, University of Uyo",
      //   year: "October 2016 - October 2019",
      // },
      // {
      //   title:
      //     "Lecturer II, Department of Chemistry, University of Uyo",
      //   year: "October 2008 - October 2016",
      // },
      // {
      //   title:
      //     "Assistant Lecturer, Department of Chemistry, University of Uyo",
      //   year: "October 2005 - October 2008",
      // },
      // {
      //   title:
      //     "Graduate Assistant, Department of Chemistry, University of Uyo",
      //   year: "June 2000",
      // },
      {
        title:
          "PhD. Chemistry (Inorganic Chemistry with thesis on Trace metal levels: Levels, Speciation and Physicochemical Determinants of their bioavailability at Dumpsite soils within Akwa Ibom State, Niger Delta region of Nigeria (2014)), University of Calabar, Nigeria",
        year: "2009 - 2014",
      },
      {
        title:
          "M.Sc. Applied Chemistry (Environmental with research on Chemical speciation and trace metal levels in water samples from Qua Iboe river estuary and its associated creeks, Ibeno, Nigeria (1999)), University of Uyo, Nigeria",
        year: "1997 - 2001",
      },
      {
        title:
          "B.Sc. (Hons) Applied Chemistry, University of Uyo, Nigeria",
        year: "1990 -1994",
      },
      {
        title:
          "Chemistry Master Government Grammar Secondary School, Bichi, Kano State: (NYSC)",
        year: "1994 -1995",
      },
      {
        title:
          "Head of Research Unit, Eti-Udoessien and Associates, an Environmental Consultancy Firm",
        year: "1995 -1999",
      },
    ],
    awards: [
      {
        type: "Research Grant",
        awarder: "TETFUND",
        year: "2016",
      },
      {
        type: "Golden Award",
        awarder: "National Association of Akwa Ibom State Students",
        year: "2016",
      },
      {
        type: "Award of Excellence Service",
        awarder: "Students’ Chemical Society of Nigeria, University of Uyo Branch",
        year: "2015",
      },
      {
        type: "Distinguish Service Award",
        awarder: "Students’ Chemical Society of Nigeria, University of Uyo Branch",
        year: "2014",
      },
      {
        type: "Merit Award",
        awarder: "Chemistry Graduating Students",
        year: "2005",
      },
      {
        type: "Professional Excellence Award",
        awarder: "Students’ Chemical Society of Nigeria, University of Uyo Branch",
        year: "2003",
      },
      {
        type: "Distinguish Service Award",
        awarder: "Students’ Chemical Society of Nigeria, University of Uyo Branch",
        year: "2000",
      },
      {
        type: "Award of Excellence Service",
        awarder: "Enugu Students’ Association, University of Uyo Branch",
        year: "2000",
      },
    ],
    researchAreas: ["Trace Metals"],
    researchCollaborators: [

    ],
    publications: [
      {
        title: "Ebong, G. A.,  Anweting, I. B.,  Etuk, H. S. and Ikpe, E. E. (2024). Cancer and non-cancer risks potentials of metals in transformer impacted soils in Nigeria. Journal of Materials and Environmental Science, 15(4): 512-729. http://www.jmaterenvironsci.com. (Morocco)",
      },
      {
        title: "Akpabio, J. U.,  Okon, A. O., Ebong, G. A., Udoinyang, E. P.,  Essien, E. A., Josiah, I. U. and Akpan, A. W. (2024). Pertubation of Road Construction and Inorganic Sedimentation on the Macroinvetebrate Fauna in the Midstream Segment of Qua Iboe River, Nigeria. Asian Journal of Advanced Research and Reports, 18(4): 24-33. (UK)",
      },
      {
        title: "Anweting, I. B., Ebong, G. A., Okon, I. E., Etuk, H. S. and Etim, I. S. (2024). Physicochemical Characteristics and Heavy Metals Assessment of Surface Water and Sediment from Idim Idaang Stream in Ibiono Ibom, Akwa Ibom State, Nigeria. Journal of Materials and Environmental Science, 15(1): 72-83.(Morocco)",
      },
      {
        title: "Ebong, G. A., Anweting, I. B., Etuk, H. S., Ambrose, I. S. and Okon, A. O. (2023). Impacts of varied industrial activities within southern Nigeria on air environment and human health. GSC Advanced Research and Reviews, 17(03): 134–144. (India)",
      },
      {
        title: "Etuk, H. S., Ebong, G. A., Okon, A. O., Anweting, I. B., and Ekot, A. E. (2023). Spatial and seasonal variations, ecological and human risks of trace metals in major rivers within the oil producing zone of Nigeria. World Journal of Advanced Pharmaceutical and Medical Research, 05(02): 001–017. (Philippines)",
      },
      {
        title: "Ebong, G. A., Etuk, H. S., Okon, A. O., Anweting, I. B., Ekot, A. E. and. Essien, J. P. (2023). Air Quality Index of some Commercial Centres in Uyo Metropolitan Area, Akwa Ibom State, Nigeria. British Journal of Earth Sciences Research, 11(3): 28-46. (UK)",
      },
      {
        title: "Ebong, G. A., Etuk, H. S., Anweting, I. B., Ekot, A. E. and. Ite, A. E. (2023). Relationship between traffic density, metal accumulation, pollution status, and human health problems in roadside soils and vegetables within the South-South Region of Nigeria. International Journal of Environment, Agriculture and Biotechnology, 8(3): 65 -79. (Italy)",
      },
      {
        title: "Dan, E. U., Ebong, G. A., Etuk, H. S. and Daniel, I. E. (2023). Carcinogenic Potentials of Toxic Metals and Polycyclic Aromatic Hydrocarbons in Telfairia occidentalis and Talinum triangulare Impacted by Wastewater, Southern Nigeria. Environmental Protection Research, 3(1): 110 -129. (Singapore)",
      },
      {
        title: "Ebong, G. A., Etuk , H. S., Umoren , I. U. and Umanah , K. I. (2022). Effects of NPK fertilizers on  trace metals loads in soil and vegetables, bioavailability in vegetables and the related health risk using simulation techniques. World Journal of Applied Science and Technology, 14(2): 42 – 52. (Nigeria)",
      },
      {
        title: "Ebong, G. A., Etuk, H. S., Anweting, I. B. and Bassey, I. N. (2022). Soil Characteristics Interrelationship with Treated Soil Micronutrients in Nigerian Southern. Chemical Science International Journal, 31(6): 51 - 63. (London)",
      },
    ],
  },
  {
    image: uwah,
    title: "Dr.",
    fullName: "emmmanuel uwah",
    email: ["emmanueliuwah@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?user=W2Iccb4AAAAJ&hl=en&oi=ao",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=16743659700",
    orcid: "https://orcid.org/0000-0003-4555-3090",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry",
    officeNo: "Room 002",

    profile: "",
    experience: [
      {
        title: "Associate Professor, Department of Chemistry, University of Uyo",
        year: "October 2017 - present",
      },
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "October 2013 - October 2017",
      },
      {
        title: "Lecturer I, Department of Chemistry, University of Uyo",
        year: "June 2013 - September 2013",
      },
      {
        title: "Examination Officer,  Department of Chemistry, University of Maiduguri",
        year: "June 2011 - 2013",
      },
      {
        title: "Lecturer I,Department of Chemistry, University of Maiduguri",
        year: "October 2010 - May 2013",
      },
      {
        title:
          "PhD. Chemistry (Analytical Chemistry with thesis on Distribution of Some Agricultural Pollutants in Soils and   Vegetables Grown in Maiduguri, Nigeria), University of Maiduguri Nigeria",
        year: "2010",
      },
      {
        title:
          "M.Sc. Chemistry (Analytical Chemistry with Research in Determination of Nitrate, Nitrite, Phosphate and    Sulphate 	    Levels in Some Fresh Vegetables in Maiduguri, Nigeria) , University of Maiduguri, Nigeria",
        year: "2006",
      },
      {
        title:
          "B.Sc. (Hons) Chemistry, University of Maiduguri, Nigeria",
        year: "2006",
      },
      {
        title: "Principal Technologist,Department of Chemistry, University of Maiduguri",
        year: "October 2007 - May 2010",
      },
      {
        title: "Senior Technologist,Department of Chemistry, University of Maiduguri",
        year: "2000 - 2004",
      },
      {
        title: "General Secretary: Akwa Ibom State Welfare Association, University of Maiduguri",
        year: "2006 - 2012",
      },
      {
        title: "Staff Adviser: National Association of Akwa Ibom State Students (NAAKISS), University of Maiduguri Chapter",
        year: "2012 - 2013",

      },
      {
        title: "Senior Staff Adviser: Ibibio Students Union (ISU), University of Maiduguri Chapter",
        year: "2012 - 2013",
      },
      {
        title: "Technologist II,Department of Chemistry, University of Maiduguri",
        year: "1997 - 2000",
      },


    ],
    awards: [
      {
        type: "Certificate of Reviewing",
        awarder: " ELSEVIER Journal of Environmental Nanotechnology, Monitoring and Management",
        year: "2020",
      },
      {
        type: "Award of Certificate of Excellence in Reviewing",
        awarder: " Chemical Science International Journal",
        year: "2017",
      },
      {
        type: "Award of Honour",
        awarder: "Students’ Chemical Society of Nigeria (SCSN), University of  Uyo Chapter",
        year: "2016",
      },
      {
        type: "Award of Honour",
        awarder: "National Association of Akwa Ibom State  Students (NAAKISS), University of Maiduguri Chapter",
        year: "2012",
      },
      {
        type: "Award of Honour",
        awarder: "National Association of Akwa Ibom State  Students (NAAKISS), University of Maiduguri Chapter",
        year: "2013",
      },
      {
        type: "Federal Government Scholarship for studies in Nigerian Tertiary Institutions (Undergraduate)",
        awarder: "The Federal Government of Nigeria",
        year: "2001",
      },
      {
        type: "",
        awarder: "Best Student award in Intermediate Diploma Course (IDC II)",
        year: "1990",
      },
    ],
    researchAreas: ["Human Health Risk Assessment of Heavy Metals", "Analytical Chemistry"],
    researchCollaborators: [

    ],
    publications: [
      {
        title: "Uwah, E. I., Etuk, H. S. and Ekpo, I. E. (2022). Elemental and Proximate Analyses of Aquatic Animal Species Obtained in Ishiet River, Nigeria. International Journal of       Innovative Environmental Studies Research 10(1):1-9. www.seahipaj.org  (Nigeria).",
      },
      {
        title: "Udoaka, N. C., Uwah, E.  I. and  Essiett, U. A. (2021). Human Health Risk Assessment      of Heavy Metals Contamination in Bitter Leaf Grown in an Oil Exploration Area.  Chemistry Research Journal, 6(5):12-23. www.chemrj.org (United Kingdom).",
      },
      {
        title: "Uwah, E.  I., Okon, R. U., Udosen, E.  D. and Udoidiong,  O.  M.  (2021). Atomic       Absorption Spectrophotometric Determination of Elements in Water, Fish and Sediment       of Atabong River, Nigeria. Science Journal of Analytical Chemistry 9(4): 77 – 87. http://doi:10.11648/j.sjac.20210904.11 (USA).",
      },
      {
        title: "Uwah, E. I., Edem, E. M., Udosen, I. E., Udosen, E. D., Udoidiong, O. M. and Essien, A.    M. (2021). Human Health Risk Assessment of Trace Metals Contamination in a Tropical   River. Journal of Chemical Society of Nigeria (JCSN) 46 (1):  0016 – 0027 (Nigeria).",
      },
      {
        title: "Uwah, E. I., Jonathan, I. I. and Udosen, I. E. (2020). Risk Assessment of Trace Metals in      Roadsides Vernonia amygdalina Obtained in Abak, Nigeria. Modern Chemistry 8(4): 48  – 53.  https://doi:10.11648/j.mc.20200804.11 (USA).",
      },
      {
        title: "Uwah, E.I., Etuk, H.S. and Udoh, E. A. (2020). Quantification and Risk Assessment of      Some Trace Metals in Vegetables Obtained in Sand Mining Environment of Ukat Nsit,      Nigeria. American Journal of Applied Chemistry 8(6):135-142. https://doi:10.11648/j.ajac.20200806.12 (USA). ",
      },
      {
        title: "Uwah, E  I., Udoaka,  N. C. and Essiett, U. A. (2020). Distribution of Some Trace       Metals In Bitter Leaf (Vernonia amygdalina) Obtained in oil Exploration Area of Ibeno,        Nigeria. American Journal of Quantum Chemistry and Molecular Spectroscopy 4(1):7 – 16. https://doi:10.11648/j.ajqcms.20200401.12 (USA).",
      },
      {
        title: "Uwah, E. I., Edem, E. M., Udosen, I. E., Udosen, E, D. and Udoidiong, O. K. (2020).         Quantification of Pollutant Levels in Water, Sediment and Winkles in Akani Obio         Uruan River, Nigeria. Science Journal of Analytical Chemistry 8(2): 45-55.        https://doi:10.11648/j.sjac.20200802.12.  (USA).",
      },
      {
        title: "Uwah, E. I., Nwoke, I, B., Inam, E. J., Udosen, I. E. and Udosen, E, D. (2020). Human    Health Risk Assessment of Heavy Metal Contamination in New Calabar River. Bulletin     of Environmental Contamination and Toxicology 105(2): 317 – 324. https://doi10.1007/s00128-020-02921-x  (USA).",
      },
      {
        title: "Uwah, E. I. and Ikwebe, E. D. (2020). Trace Metals, Potassium Bromate and       Nutritional Potentials in Bread from Bakeries in Uyo, Akwa Ibom State, Nigeria.        American Journal of Applied Chemistry 8(3): 63-73.   https://doi:10.11648/j.ajac.20200803.11  (USA).",
      },
    ],
  },
  {
    image: [inemesitakpan],
    title: "Dr.",
    fullName: "inemesit akpan",
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
        title: "Associate Professor, Department of Chemistry, University of Uyo",
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
    email: ["emmanuelessien@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?user=hnUzw5oAAAAJ&hl=en&oi=ao",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=15061102300",
    orcid: "https://orcid.org/0000-0002-2663-6969",
    website: "",
    linkedIn: "linkedin.com/in/dr-emmanuel-essien-17389572",
    unit: "Organic Chemistry",
    officeNo: "Room 154",

    profile: "Emmanuel Essien is a distinguished researcher specializing in the structure elucidation and biological activities of volatile and non-volatile secondary metabolites from aromatic and medicinal plants. His work spans both in vivo and in vitro studies, focusing on the synthesis and molecular docking of compounds with significant antidiabetic, anticancer, anti-inflammatory, antinociceptive, antimicrobial, and anti-ulcer properties \n Essien has made substantial contributions to the nutraceutical field, exploring the potential of medicinal plants in the formulation of beverages and capsules. His current research includes the isolation and characterization of bioactive compounds from the leaves of <i>Laisenthera africana</i>, <i>Heinsa crinata</i>, <i>Pterocarpus mildbreadii</i>, and <i>Eremomastx polysperma</i>. Additionally, he has developed functional herbal beverages from the leaves of <i>Justicia secunda</i> and the seeds of <i>Telfairia occidentalis</i>. \n Furthermore, Essien has investigated the volatile constituents of several under-utilized aromatic plants grown in Nigeria, highlighting their potential applications in various health-related formulations. His work not only advances scientific knowledge but also contributes to the development of new therapeutic agents and health-promoting products.",
    experience: [
      {
        title: "Associate Professor, Department of Chemistry, University of Uyo",
        year: "October 2017 – Date",
      },
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "October 2013 – September 2016",
      },
      {
        title: "Lecturer I, Department of Chemistry, University of Uyo",
        year: "October 2010 – September 2013",
      },
      {
        title: "Lecturer II, Department of Chemistry, University of Uyo",
        year: "September 2007 – September 2010",
      },
      {
        title: "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "March 1, 2007 – September 28, 2007",
      },
    ],
    awards: [
      {
        type: "Institutional Based Research Grant",
        awarder: "Tertiary Education Trust Fund (Tetfund)",
        year: "2023",
      },
      {
        type: "Institutional Based Research Grant",
        awarder: "Tertiary Education Trust Fund (Tetfund)",
        year: "2016",
      },
      {
        type: "TWAS–ICCBS Postdoctoral Research Fellowship tenable at the International Centre for Chemical and Biological Sciences, University of Karachi, Karachi, Pakistan, ",
        awarder: "TWAS–ICCBS",
        year: "2015-2016",
      },
    ],
    researchAreas: ["Structure Elucidation and Biological Activities (in vivo / in vitro) of volatile and non volatile secondary metabolites of aromatic and medicinal plants", "Synthesis and Molecular docking studies with emphasis on antidiabetic, anticancer, anti-inflammatory, antinoceiceptive antimicrobial and anti-ulcer", "Nutraceutic Potentials of Medicinal Plants in the Formulation of Beverages and Capsules"],
    researchCollaborators: [
      {
        title: "Research Collaboration on the Characterization of Essential Oils from Nigerian Grown Aromatic Plants. (2014-Date)",
        collaborator: "Prof. Emeritus William N. Setzer, Department of Chemistry, University of Alabama in Huntsville, USA",
      },
      {
        title: "Research Collaboration on the Characterization of Volatile and Non-volatile Secondary Metabolites Isolated from Medicinal Plants. (2017-Date)",
        collaborator: "Prof. Guido Flamini and Prof. Marinella De Leo, Dipartmento di Farmacia, University of Pisa, Pisa, Italy",
      }
    ],
    researchProjects: [
      "Isolation and Characterization of bioactive compounds from Leaves extracts of <i>Laisenthera africana</i>, <i>Heinsa crinata</i>, <i>Pterocarpus mildbreadii</i> and <i>Eremomastx polysperma</i>",
      "Formulation of functional herbal beverages from <i>Justicia secunda</i> leaves and seeds of <i>Telfairia occiedentals</i>",
      "Volatile constituents of some under-utilized aromatic plants grown in Nigeria"
    ],
    publications: [
      {
        title: "Thomas, P. S., Essien, E. E. (2020). Antiglycation, antioxidant, and cytotoxic activities of Uvaria chamae root and essential oil composition. Natural Product Research, 34(6): 880-883."
      },
      {
        title: "Thomas, P. S., Essien, E. E., Udoh, A., Archibong, B., Akpan, O., Etukudo, E., De Leo, M., Eseyin, O., Flamini, G., Ajibesin, K. (2021). Isolation and characterization of anti-inflammatory and analgesic compounds from Uapaca staudtii Pax (Phyllanthaceae) stem bark. Journal of Ethnopharmacology, 269, 113737."
      },
      {
        title: "Josiah, E., Essien, E. E., Thomas, P. S., Flamini, G. (2021). Chemical composition of the Dillenia indica L. fruit and Adonidia merrillii Becc. floral volatile metabolites. Chemistry of Natural Compounds, 57(1): 177-179."
      },
      {
        title: "Umoh, U. F., Thomas, P. S., Essien, E. E., Okokon, J. E., de Leo, M., Ajibesin, K. K., Eseyin, O. A., Flamini, G. (2021). Isolation and characterisation of bioactive xanthones from Hippocratea africana (Wild) Loes. Ex Engl. (Celastraceae). Journal of Ethnopharmacology. 280, 114031."
      },
      {
        title: "Oriakhi, K., Ibeji, C. U., Essien, E. E. Nkeiruka, E., Orumwemsodia, K., Uadia, P., Choudhary, M.I. (2021). The antiglycation activity of compounds isolated from antidiabetic Tetracera alnifolia stem bark: experimental and computational study. Journal of Biomolecular Structure and Dynamics. DOI: 10.1080/07391102.2021.1934542."
      },
      {
        title: "Essien, E. E., Thomas, P. S., Ekanem, I. R., Choudhary, M. I. (2021). Isolation of 5-hydroxymethylfurfural, antiglycation, antihyperglycaemic, antioxidant, and cytotoxic effects of Garcinia kola Heckel root extracts and fractions. South African Journal of Botany, 140: 62-67."
      },
      {
        title: "Essien, E. E., Antia, B. S., Etuk, E. I., David, E. M. (2021). Chemical composition of Livistonia chinensis and Areca catechu palm nuts. Chemistry of Natural Compounds, 57(6): 1184-1186."
      }
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
        title: "Associate Professor, Department of Chemistry, University of Uyo",
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
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: [abakedi],
    title: "Dr.",
    fullName: "okon abakedi",
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
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
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
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
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
    fullName: "ini umoren",
    email: ["iniumoren@uniuyo.edu.ng"],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Analytical Chemistry",
    officeNo: "Room 151",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "January 2021 - present",
      },
      {
        title:
          "Lecturer I, Department of Chemistry, University of Uyo",
        year: "October 2008 - December 2020",
      },
      {
        title:
          "Lecturer II, Department of Chemistry, University of Uyo",
        year: "October 2005 - September 2008",
      },
      {
        title:
          "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "March 2002 - September 2005",
      },
      {
        title:
          "Ph.D Analytical Chemistry (Dissertation - Sorption Studies of Nitrate, Sulphate and Phosphate Ions on Selected Agricultural Soils in Akwa Ibom State, Nigeria), Michael Okpara University of Agriculture, Umudike, Nigeria",
        year: "2016 - 2020",
      },
      {
        title:
          "M.Phil Analytical / Environmental Chemistry (Dissertation - Physicochemical Studies and Chemical Speciation in Surface Water of Two Rivers in Akwa Ibom State, Nigeria), University of Ibadan, Nigeria",
        year: "2007 - 2014",
      },
      {
        title:
          "M.Sc. Analytical Chemistry (with Research on Metal Soil and Plant Pollution Index for Ibadan city), University of Ibadan, Nigeria ",
        year: "2000 - 2002",
      },
      {
        title:
          "B.Sc. (Hons) Applied Chemistry, University of Uyo, Nigeria",
        year: "1990 -1995",
      },
      {
        title:
          "Graduate Assistant, Department of Chemistry, University of Uyo",
        year: "October 1999 - March 2002",
      },
      {
        title:
          "Graduate Assistant, Department of Chemistry, Ladoke Akintola University of Technology, Ogbomoso, Oyo State",
        year: "December 1995 - October 1996",
      },
      {
        title:
          "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "October 2005 - October 2008",
      },
      {
        title:
          "Graduate Assistant, Department of Chemistry, University of Uyo",
        year: "January 1994 - May 2005",
      },
    ],
    awards: [
      {
        type: "Staff Development Award",
        awarder: "University of Uyo ",
        year: "2016 - 2020",
      },
      {
        type: "Staff Development Award",
        awarder: "University of Uyo ",
        year: "2007 - 2010",
      },
      {
        type: "Staff Development Award",
        awarder: "University of Uyo ",
        year: "2000 - 2002",
      },
      {
        type: "Award of Excellence",
        awarder: "Students’ Chemical Society of Nigeria, Uniuyo Chapter",
        year: "2005",
      },
      {
        type: "Award of Excellence for Good Leadership",
        awarder: "Students’ Chemical Society of Nigeria, Uniuyo Chapter",
        year: "1994",
      },
    ],
    researchAreas: ["Sorption Studies of Heavy Metal Cations", "Environmental Sustainability", "Physicochemical Studies"],
    researchCollaborators: [

    ],
    publications: [
      {
        title: "Umoren, I. U., Odoemelam, S. A. and Ogbuagu, M. N. (2023). Sorption studies of tetraoxophosphate (V) ions on some agricultural soils in Akwa Ibom State, Eastern Niger Delta,Nigeria. World Journal of Applied Science and Technology, 15(1): 1 – 14. https://dx.doi.org/10.4314/WOJAST.v15i1.1"
      },
      {
        title: " Ebong, G. A., Etuk, H. S., Umoren, I. U. and Umanah, K. I. (2022). Effects of NPK fertilizers on trace metals loads in soil and vegetables, Bioavailability in vegetables and the related health risk using simulation techniques. World Journal of Applied Science and Technology, 14(2): 42 – 52. https://dx.doi.org/10.4314/WOJAST.v14i2.42"
      },
      {
        title: "Odoemelam, S. A., Umoren, I. U. and Ogbuagu, M. N. (2020). Investigation of adsorption of tetraoxosulphate (VI) ions by some agricultural soils in Akwa Ibom State, South-South Nigeria. Communication in Physical Sciences, 5(2): 73-82"
      },
      {
        title: "Udoh, A. P., Umoren, I. U. and Michael, E. P. (2020). Physicochemical properties and storage stability of the raw seed oil of Hura crepitans at room temperature. Journal of Material Environmental Science, 11(1): 157-165"
      },
      {
        title: "Joseph, J. O., Umoren, I. U. and Offiong, N. O. (2016). Chemical Speciation of Some Metal Ions in Surface Water Samples of Itu River, Akwa Ibom State, Nigeria. Equatorial Journal of Chemical Sciences, 1(1): 75- 83"
      },
      {
        title: "Udousoro, I. I., Umoren, I. U., Izuagie, J. M., Ikpo, C. U., Ngeri, S. F. and Shaibu, E. S. (2015). Soil. Invertebrates as Bio-monitors of Toxic Metal Pollution in Impacted Soils. Current World Environment, 10 (2): 367–385"
      },
      {
        title: "Udousoro, I. I. and Umoren, I. U. (2014). Assessment of Surface and Ground water quality in Uruan in Akwa Ibom State of Nigeria. Journal of Natural Sciences Research, 4(1): 11 - 27"
      },
      {
        title: "Umoren, S. A., Umoren, I. U. and Johnson, A. S. (2013). Metal soaps of Hura crepitans seed oil: Potential stabilizer for unplasticised polyvinyl chloride against thermal degradation. Journal of Chemica Acta, 2: 92-94"
      },
    ],
  },
  {
    image: [itoroUdoh, itoroUdoh2],
    title: "Dr.",
    fullName: "itoro udo",
    email: ["itoroudo@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?hl=en&user=3aThfCgAAAAJ",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=59119960000",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Industrial Chemistry",
    officeNo: "Room 30",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2014 - Date",
      },
      {
        title: "Head Industrial Chemistry Unit, Department of Chemistry",
        year: "2020 - Date",
      },
      {
        title: "Departmental Coordinator, Intellectual Property and Technology Transfer Office (IPTTO)",
        year: "2017 - Date",
      },
      {
        title: "Ph.D Chemistry (Industrial Chemistry with Thesis in Hydrolysis and saponification products of Dacryodes edulis \(African Pear)\ stem exudates as sizing and binding agents in paper industry) , University of Port Harcourt, Nigeria",
        year: "2012 - 2017",
      },
      {
        title:
          "M.Sc. Chemistry (Analytical Chemistry with Research in physicolchemical studies on the hydrolysis and saponification products of Dacryodes edulis exudates) , University of Calabar, Nigeria",
        year: "2006 - 2009",
      },
      {
        title: "Coordinator: Chemistry Practical for Pre-degree and Basic Studies Programmes (University of Uyo)",
        year: "2016 - 2022",
      },
      {
        title: "HND (Science laboratory Technology, Chemistry/Biochemistry, Upper Credit)",
        year: "2007",
      },

      {
        title: "B.Sc (Chemistry)",
        year: "2002",
      },
      {
        title: "Assistant Lecturer, Department of Applied Chemistry (Veritas University Abuja)",
        year: "2013 -2014",
      },
      {
        title: "Technologist II, Department of Applied Chemistry (Veritas University Abuja)",
        year: "2013 - 2014",
      },
      {
        title: "Vice Principal Academics and Chemistry Teacher (Rowth Christian Academy, Uyo)",
        year: "2003 - 2009",
      },
      {
        title: "Chemistry Teacher - National Youth Service Corps (Senior Science College, Faskari, Katsina State)",
        year: "January 2002 - December 2002",
      },
      {
        title:
          "Quality Control Analyst - SIWES (Central Research laboratory, University of Uyo)",
        year: "2000 - 2001",
      },
    ],
    awards: [
      {
        type: "Certificate of National Service",
        awarder: "National Youth Service Corp (NYSC)",
        year: "2002",
      },

      {
        type: "Best Student in Science and Mathematics",
        awarder: "Community Secondary School Idoro",
        year: "1994",
      },
    ],
    researchAreas: ["Production of pulp from non-woody materials of agriculturalwaste", " Production of biodegradable hydrophobic paper environmentally friendly food packing material to replace the plastics coating on the surface of paper", "Determination of properties of Epoxy composites filled with coconut husk"],
    researchCollaborators: [

    ],
    publications: [
      {
        title: "Udo, I. E., Akpbio, U. D., and Akpakpan, A. E. (2012). Physicochemical studies on the hydrolysis and saponification products of Dacryodes edulis exudates, Archives of Applied Science Research, 4(4): 1741 – 1747. ",
      },
      {
        title: "Umoren, G. P., Udo, A. O., and Udo, I. E. (2023). Suitability of Lagenaria breviflora Rind filled plaster of Paris ceilings for building design, Research Journal of Science and Technology (REJOST), 3(2): 1-14.",
      },
      {
        title: "Okon, I. E., Anweting, I. B., Udo, I. E. (2023). Investigation into some Physicochemical Parameters and Heavy Metal Status in Bread from Bakeries in Zaria, Journal of Material and Environmental Science, 14(6): 711 – 719.",
      },
      {
        title: "Akpakpan, A. E, Inam, E. J., and Udo, I. E. (2023). Preparation, Chracterization and Application of Soda Lignin and its Ester Derivatives as Adsorbent in the Adsorption of Pb2+ and Cd2+ from wastewater, Journal of Material and Environmental Science, 14(1): 82-96.",
      },
      {
        title: "Akpabio,U. D. Umoh, E. D., and Udo, I. E.  (2013). Acute Toxicity and Anti – Diabetic Studies of the Aqueous and Alcoholic Extracts of Phyllanthus amarus in Albino Rats, Elixir organic chemistry, 65: 20116 – 20121.",
      },

      {
        title: "Akpabio,U. D., Akpakpan, A. E., Udo, I. E. and G. C. Nwokocha (2012). Comparative Studies on the Physicochemical Properties of Two Varieties of cassava Peels Manihot utilissima Pohl, International Journal of Environment and Bioenergy, USA, 2(1): 19 – 32.",
      },

      {
        title: "Udoidong, A. A., Etuk, B. A. and Udo, I. E. (2014). Phytochemical and Chromatographic extract of Macedonia latifelia.  Advances in Applied Science Research, 5(1): 53 – 58",
      },
      {
        title: "Udo I. E., Obuzor, G. U. and Horsfall, M. Jnr. (2016). Proximate and Phytochemical Studies of Exudate of Dacryodes edulis, Research Journal of Chemical Sciences, 6(3): 1 –9.",
      },
      {
        title: "Udo, I. E., Obuzor, G U. And Horsfall, M. Jnr. (2016). Physicochemical characteristic of Exudate of Dacryodes edulis, Journal of Applied Science and Environmental Management, 20(1): 209 – 213.",
      },
      {
        title: "Ita, B. N. and Udo, I. E. (2018). Total Phenolics, Flavonoids and Antioxidant activity of Icacina trichnatha tuber extracts, World Journal of Applied Science and Technology, 10 (1): 27 – 32.",
      },
    ],
  },
  {
    image: [enin],
    title: "Dr.",
    fullName: "godwin enin",
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
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: [anweting],
    title: "Dr.",
    fullName: "idongesit anweting",
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
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
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
    unit: "Environmental / Nanochemistry",
    officeNo: "Room 30",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2022 - present",
      },

      {
        title: "Lecturer I, Department of Chemistry, University of Uyo",
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
          "B.Sc. (Hons) Chemistry, University of Illorin, Nigeria",
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
        title: "Senior Lecturer , Department of Chemistry, University of Uyo",
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
    fullName: "ekerete boekom",
    email: ["ekereteboekom@uniuyo.edu.ng"],
    googleScholar: "https://scholar.google.com/citations?hl=en&user=GJ6_8fwAAAAJ",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=8701608700",
    orcid: "https://orcid.org/0000-0002-2401-6379",
    website: "",
    linkedIn: "",
    unit: "Physical Chemistry",
    officeNo: "Room 151",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "October 2019 - present",
      },
      {
        title:
          "Lecturer I, Department of Chemistry, University of Uyo",
        year: "October 2016 - October 2019",
      },
      {
        title:
          "Lecturer II, Department of Chemistry, University of Uyo",
        year: "October 2008 - October 2016",
      },
      {
        title:
          "Assistant Lecturer, Department of Chemistry, University of Uyo",
        year: "October 2005 - October 2008",
      },
      {
        title:
          "Graduate Assistant, Department of Chemistry, University of Uyo",
        year: "January 1994 - May 2005",
      },
      {
        title:
          "Ph.D Physical Chemistry, University of Calabar, Nigeria",
        year: "2008 - 2019",
      },
      {
        title:
          "M.Sc. Physical Chemistry, University of Calabar, Nigeria",
        year: "1995 - 2005",
      },
      {
        title:
          "B.Sc. Pure Chemistry, University of Uyo, Nigeria",
        year: "1988 - 1992",
      },
      {
        title: "Examination Officer, Department of Chemistry, University of Uyo",
        year: "2002 - 2008, 2014 - 2020",
      },
      {
        title: "Secretary of the Department of Chemistry, Department of Chemistry, University of Uyo",
        year: "2002 - 2008, 2014 - 2020",
      },
    ],
    awards: [
      {
        type: "University of Uyo Honour Roll",
        awarder: "University of Uyo",
        year: "1990, 1991, 1992",
      },
      {
        type: "Research Grant",
        awarder: "Education Trust Fund Research Grant",
        year: "2008",
      },
    ],
    researchAreas: ["Thermochemistry", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "Computational Chemistry"],
    researchCollaborators: [

    ],
    publications: [
      {
        title: "Chimezie, P. O., BoEKOM, E. J. and Akpan, I. A. (2023) Synthesis, Characterization and Electrochemical Studies on the Corrosion Inhibition Properties of Schiff Bases foe Mild Steel in 1 M HCl Solution, Chemical Science International Journal, 32 (2): 30 - 50 (America)",
      },
      {
        title: "BoEKOM, E. J. and Essien, K. E. and Obot, A. (2020). Kinetics, Molecular Dynamics and Adsorption behaviour of Pyridine on mild steel in 0.1 M HCl solutions, Elixir Applied Chemistry, 142: 54382-54387. (India)",
      },
      {
        title: "BoEKOM, E. J. and Essien, K. E. (2019). Experimental and Theoretical Approach of L-Methionine Sulphone (LMS) as corrosion inhibitor for mild steel in HCl solutions, Elixir Computational Chemistry 129: 52983-52988. (India)",
      },
      {
        title: "BoEKOM, E. J. and Essien, K. E. and Obot, A. (2019). Effects of thiophene on acid corrosion of mild steel. World Journal of Applied Science and Technology, 11(2): 176-182. (Nigeria)",
      },
      {
        title: "BoEKOM, E. J. and Essien, K. E. (2018). Thermodynamics and Sorption studies of 5-phenylisoxazole on mild steel in 2 M HCl solutions. World Journal of Applied Science and Technology (special edition), 10(2): 113-117. (Nigeria)",
      },
      {
        title: "BoEKOM, E. J., Essien, K. E., Akpan, I. A. and Abakedi, O. U. (2018). Electrochemical Investigation and Quantum Chemical Evaluation of 5-phenylisoxazole for mild steel in HCl. World Journal of Applied Science and Technology (special edition), 10(1): 33-37. (Nigeria)",
      },
      {
        title: "Ebenso, E. E., Ekpe, U. U., Umoren, S. A Jackson, E. U., Oforka, N. C. and Abiola, O. K. (2006). Synergistic effect of halide ions on the corrosion of aluminium in acidic medium be some Polymers, Journal of Applied Polymer Science, 100 (4): 2889–2894. (USA)"
      },
      {
        title: "Obot, A. S., BoEKOM, E. J., Ita, B. N. and Utam, E. C. (2022). Kinetics consideration of ethanol leave extract of Costus lucanusianus as green corrosion inhibitor for mild steel and aluminium in 1 M HCl solution, International Journal of Research - GRANTHAALAYAH, 10(1): 106 -118. (India)"
      },
      {
        title: "Obot, A. S., BoEKOM, E. J., Ugi, B. U., Essien, K. E. and Jonah, N. B. (2021). Thermodynamic investigation and quantum chemical evaluation of n-hexane extracts of Costus lucanusianus as corrosion inhibitors for mild steel and aluminium in 1 M HCl solution, Journal of Applied Physical Science International, 13(3): 6-27. (USA)"
      },
      {
        title: "Ituen, E., Dim C. and BoEKOM, E. J. (2021). Orange peel extract mediated silver nanofluid as corrosion inhibitor for X80 steel in simulated oilfield scale dissolver. Journal of Metallic Research, 4(1):41-45. (Singapore, China)"
      },
    ],
  },

  {
    image: [ekeminituen],
    title: "Dr.",
    fullName: "ekemini ituen",
    email: ["ekeminiituen@uniuyo.edu.ng "],
    googleScholar: "https://scholar.google.com/citations?user=coxyq5kAAAAJ&hl=en&oi=ao",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=57126213700",
    orcid: "https://orcid.org/0000-0002-6029-523X",
    website: "",
    linkedIn: "",
    unit: "Physical Chemistry",
    officeNo: "Room 227",

    profile: "",
    experience: [
      {
        title: "Senior Lecturer, Department of Chemistry, University of Uyo",
        year: "2021 - Date",
      },
      {
        title: "Leader, Emerging Materials and Energy Research Group, University of Uyo.",
        year: "2022 - Date",
      },
      {
        title: "Lecturer I, Department of Chemistry, University of Uyo, Nigeria",
        year: "2018 - 2021",
      },
      {
        title: "Visiting Researcher, School of Materials Science and Engineering, Southwest Petroleum University, Chengdu, China",
        year: "2018 - 2019",
      },
      {
        title: "Lecturer II, Department of Chemistry, University of Uyo, Nigeria",
        year: "2015 - 2018",
      },
      {
        title: "PhD Exchange Student, China University of Petroleum, Qingdao, China",
        year: "2015 - 2016",
      },
      {
        title:
          "Ph.D in Physical Chemistry, University of Port Harcourt, Nigeria",
        year: "2017",
      },

      {
        title: "Assistant Lecturer, Department of Chemistry, University of Uyo, Nigeria",
        year: "2012 - 2015",
      },
      {
        title:
          "M.Sc in Physical Chemistry, University of Ibadan, Nigeria",
        year: "2011",
      },
      {
        title:
          "B.Sc in Applied Chemistry, University of Uyo, Nigeria",
        year: "2006",
      },
    ],
    awards: [
      {
        type: "Research Grant",
        awarder: "TETFUND",
        year: "2023",
      },
      {
        type: "Robert S. McNamara PhD Fellowship taken at China University of Petroleum, Qingdao, Shandong Province, China",
        awarder: "World Bank",
        year: "2015",
      },
      {
        type: "Best Graduating Student in Physical Chemistry, Class of 2010",
        awarder: "University of Ibadan, Nigeria",
        year: "2011",
      },
      {
        type: "University Honours Roll as Best Graduating Student in Faculty of Science, Class of 2001",
        awarder: "University of Uyo, Nigeria",
        year: "2008",
      },
    ],
    researchAreas: ["New materials for industrial, agricultural and energy applications", "Corrosion, electrochemistry and surface science", "Food and chemical toxicology", "Computational materials science"],
    researchCollaborators: [
      {
        title: "State Key Laboratory of Oil and Gas Reservoir Geology and Exploitation",
        collaborator: "Southwest Petroleum University, Chengdu, China",
      },
      {
        title: "African Centre of Excellence for Oilfield Chemicals Research",
        collaborator: "University of Port Harcourt, Nigeria",
      },
      {
        title: "School of Materials Chemistry and Physics",
        collaborator: "China University of Petroleum, Qingdao, China.",
      },
      {
        title: "State Key Laboratory of Environmental Aquatic Chemistry, Research Center for Eco-Environmental Sciences",
        collaborator: "Chinese Academy of Sciences, Beijing, China",
      },
      {
        title: "Center for Materials Science",
        collaborator: "College of Science, Engineering and Technology, University of South Africa, South Africa.",
      },
      {
        title: "Corrosion and Electrochemistry Group",
        collaborator: "Department of Chemistry, Nagaland University, Lumami, India",
      },
    ],
    publications: [
      {
        title: "Wu, Ziqi, Junjie Fan, Jianwen Hu, Wenqing Xie, Shuangqing Sun, Songqing Hu, Chunling Li, Zhikun Wang, Ekemini Ituen. Temperature-responsive salt-resistant poly (sulfobetaine methacrylate)-based emulsifiers for heavy oils. International Journal of Biological Macromolecules. 2024, 268, 131977.",
      },
      {
        title: "Ekemini Ituen, Lin Yuanhua, Chandrabhan Verma, Akram Alfantazi, Onyewuchi Akaranta, Eno Ebenso. Synthesis and Characterization of Walnut Husk Extract-Silver Nanocomposites for Removal of Heavy Metals from Petroleum Wastewater and Its Consequences on Pipework Steel Corrosion. Journal of Molecular Liquids. 2021, 335, 116132. "
      },
      {
        title: "Ekemini Ituen, Ambrish Singh, Lin Yuanhua. Inhibitive effect of onion mesocarp extract-nickel nanoparticles composite on simultaneous hydrogen production and pipework corrosion in 1 M HCl. International Journal of Hydrogen Energy. 2020, 45, 10814-10825."
      },
      {
        title: "Ekemini Ituen, Ekere Ekemini, Lin Yuanhua, Ruiyun Li, Ambrish Singh. Mitigation of microbial biodeterioration and acid corrosion of pipework steel using Citrus reticulata peels extract mediated copper nanoparticles composite. International Biodeterioration and Biodegradation. 2020, 149:104935"
      },
      {
        title: "Ekemini Ituen, Ambrish Singh, Lin Yuanhua, Ruiyun Li. Synthesis and evaluation of anticorrosion properties of onion mesocarp-nickel nanocomposites on X80 steel in acidic cleaning solution. Journal of Materials Research and Technology. 2020, 9(3), 2832–2845"
      },
      {
        title: "Ambrish Singh, Kashif Ansari, Ekemini Ituen, Lei Guo, Md Abdul Wahab, M. A. Quraishi, Xingwei Kong, Yuanhua Lin. A new series of synthesized compounds as corrosion mitigator for storage tanks: Detailed electrochemical and theoretical investigations. Construction and Building Materials. 2020, 259, 120421."
      },
      {
        title: "Ekemini Ituen, Victor Mkpenie, Ekere Ekemini. Corrosion inhibition of X80 steel in simulated acid wash solution using glutathione and its blends: Experimental and theoretical studies. Colloids and Surfaces A: Physicochemical and Engineering Aspects. 2019, 578, 123597 "
      },
      {
        title: "Ekemini Ituen, Victor Mkpenie, Eno Moses, Ime Obot. Electrochemical kinetics, molecular dynamics, adsorption and anticorrosion behavior of melatonin biomolecule on steel surface in acidic medium. Bioelectrochemistry. 2019, 129, 42-53"
      },
      {
        title: "Ekemini Ituen, Moses Solomon, Saviour Umoren, Onyewuchi Akaranta. Corrosion inhibition by amitriptyline and amitriptyline-based formulations for steels in simulated pickling and acidizing media. Journal of Petroleum Science and Engineering. 2019, 174: 984-996"
      },
      {
        title: "Ekemini Ituen, Onyewuchi Akaranta, Saviour Umoren. N-acetyl cysteine based corrosion inhibitor formulations for steel protection in 15% HCl solution. Journal of Molecular Liquids. 2017, 246:112-118."
      },
      {
        title: "Ekemini Ituen, Onyewuchi Akaranta, Abosede James, Shuangqin Sun. Green and sustainable local biomaterials for oilfield chemicals: Griffonia simplicifolia extract as steel corrosion inhibitor in hydrochloric acid. Sustainable Materials and Technologies. 2017, 11, 12–18."
      },
      {
        title: "Ekemini Ituen, Onyewuchi Akaranta, Abosede James. Green anticorrosive oilfield chemicals from 5-hydroxytryptophan and synergistic additives for X80 steel surface protection in acidic well treatment fluids. Journal of Molecular Liquids. 2016, 224. 408–419"
      }
    ],
  },
  {
    image: [mkpenie],
    title: "Mr.",
    fullName: "victor mkpenie",
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
        title: "Lecturer I, Department of Chemistry, University of Uyo",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },

  {
    image: [emmadan],
    title: "Mr.",
    fullName: "emmanuel dan",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Environmental Chemistry",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },
  {
    image: [emptyImg],
    title: "Mr.",
    fullName: "Victor Ekpo",
    email: [],
    googleScholar: "",
    scopus: "",
    orcid: "",
    website: "",
    linkedIn: "",
    unit: "Petroleum Chemistry",
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

    ],
    publications: [
      {
        title: "",
      },
    ],
  },

  {
    image: [emptyImg],
    title: "Mrs.",
    fullName: "enobong david",
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
        title: "Lecturer II, Department of Chemistry, University of Uyo",
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
