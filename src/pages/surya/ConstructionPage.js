import React from "react";
import PageBanner from "../../Components/PageBanner";
import Details from "../../Components/Services/Details";
import bannerBg from "../../assets/img/page-banner.jpg";
import ServiceDetails from "../../Components/surya/Services/ServiceDetails";
import { v4 as uuidv4 } from "uuid";



const CONSTRUCTION_SERVICES = [
  {
    id: uuidv4(),
    serviceName: "Industrial Buildings",
    description:
      "Our expertise in industrial building construction ensures robust and efficient facilities tailored to meet the specific needs of various industries. We employ advanced construction techniques and adhere to strict safety standards to deliver projects on time and within budget. From warehouses to manufacturing plants, we create spaces that enhance productivity and operational efficiency.",
    projects: [
      {
        id: uuidv4(),
        projectName: "Vulcan Technologies Phase III",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "EngineTech Systems Pvt. Ltd.",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    serviceName: "PEB Structures",
    description:
      "Pre-engineered buildings (PEB) offer a smart and economical solution for many applications. We partner with reputable PEB designers and manufacturers to construct durable and sustainable structures quickly and efficiently. Whether for warehouses, factories, or commercial spaces, our PEB structures are built to last.",
    projects: [
      {
        id: uuidv4(),
        projectName: "Hodek",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Fleetguard.",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    serviceName: "Water Treatment Plants",
    description:
      "Hydraulic structures have been our specialty since the beginning. We continue this legacy by constructing water and sewage treatment plants for metropolitan cities. From municipal to industrial water treatment facilities, we ensure efficient and sustainable solutions serving large populations and industries alike.",
    projects: [
      {
        id: uuidv4(),
        projectName: "540 MLD Water Treatment Plant",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "127 MLD Sewage Treatment Plant (On-Going):.",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    serviceName: "Commercial Buildings",
    description:
      "We build commercial spaces that blend aesthetic appeal with practical functionality. Our projects include office buildings, commercial spaces, and retail centres, all constructed to meet the needs of modern businesses. We focus on creating versatile environments that promote business growth and customer engagement.",
    projects: [
      {
        id: uuidv4(),
        projectName: "Surya House",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "DS Icon",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Forhum",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Fleetgaurd Office",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    serviceName: "Institutional Buildings",
    description:
      "Our institutional projects focus on constructing educational buildings such as schools, colleges, and hostels. We are committed to quality, safety, and user-friendly construction, ensuring that our buildings serve educational purposes effectively and comfortably.",
    projects: [
      {
        id: uuidv4(),
        projectName: "Sanjay Ghodawat Institute",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Wai School",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    serviceName: "Bungalows",
    description:
      "We construct luxurious bungalows that reflect elegance and personal style. Our custom-built homes are crafted with attention to detail, using premium materials to ensure each bungalow meets our clients' unique preferences and lifestyle requirements. We aim to provide a perfect blend of comfort and sophistication",
    projects: [
      {
        id: uuidv4(),
        projectName: "Kudje Farmhouse",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Donje Farmhouse",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Hatwe",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
  {
    serviceName: "Recreational Facilities",
    description:
      "Our construction expertise extends to a variety of recreational structures, including podiums, watchtowers, swimming pools, and more. Each project is approached with meticulous planning and attention to detail, ensuring that the final results exceed expectations.",
    projects: [
      {
        id: uuidv4(),
        projectName: "Amby Valley Ghat",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Amby Valley Watch Tower",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
      {
        id: uuidv4(),
        projectName: "Swimming Pool",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      },
    ],
  },
];
const TITLE = "Construction Projects";
const DESCRIPTION =
  "Our portfolio includes diverse construction projects, each executed with precision and excellence. From industrial facilities that drive productivity to commercial spaces that blend functionality with aesthetics, we deliver projects that exceed expectations. We also specialise in constructing water and sewage treatment plants, which are vital for sustainable urban development and environmental conservation.";


function ConstructionPage() {
  return (
    <>
      <div>
        <PageBanner
          title="Construction"
          bannerBg={bannerBg}
          currentPage="SERVICES"
        />
        <ServiceDetails services={CONSTRUCTION_SERVICES} title={TITLE} description={DESCRIPTION}   />
      </div>
    </>
  );
}

export default ConstructionPage;
