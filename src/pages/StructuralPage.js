import React from 'react'
// import PageBanner from '../../Components/PageBanner'
import bannerBg from '../assets/img/page-banner.jpg';
import ServiceDetails from "../Components/surya/Services/ServiceDetails";
import { v4 as uuidv4 } from "uuid";
import PageBanner from '../Components/surya/Home/PageBanner';


const STRUCTURAL_SERVICES = [
  {
    id: uuidv4(),
    serviceName: "Commercial and Residential Buildings",
    description: "For commercial and residential buildings, our structural designing services focus on creating spaces that are not only aesthetically pleasing but also structurally sound. We work closely with architects and developers to design buildings that meet the functional and aesthetic requirements of the project while ensuring safety and durability. From office complexes to apartment buildings, we have the expertise to deliver designs that exceed expectations.",
    projects: [
      {
        id: uuidv4(),
        projectName: "DS Icon",
        description:
          "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
        img: "vulcan.jpg",
      }
    ],
  },
  {
    id: uuidv4(),
    serviceName: "Bungalows",
    description: "Our structural designing services for bungalows are aimed at creating homes that are as beautiful as they are sturdy. We understand that a bungalow is more than just a house – it's a reflection of your lifestyle and personality. That's why we pay special attention to every detail, ensuring that the design not only meets your requirements but also enhances the overall appeal of your home. From the foundation to the roof, we design bungalows that stand the test of time.",
    // projects: [
    //   {
    //     id: uuidv4(),
    //     projectName: "DS Icon",
    //     description:
    //       "Construction of a 50,000 sq. ft. manufacturing facility for Vulcan Technologies, a leading manufacturer of industrial equipment. The project involved the construction of a pre-engineered building with a mezzanine floor, office space, and a production area.",
    //     img: "vulcan.jpg",
    //   }
    // ],
  },
];
const TITLE = "Structural Design Projects";
const DESCRIPTION =
"We collaborate closely with clients for structural design to create innovative solutions tailored to their specific needs. Whether it's designing a commercial complex that maximizes space utilization or a residential building that blends style with safety, our experienced team ensures that every design meets the highest standards of quality and compliance."

function StructuralPage() {
  return (
    <>
      <div>
        <PageBanner
          title={TITLE}
          bannerBg={bannerBg}
          currentPage="SERVICES"
        />
        <ServiceDetails services={STRUCTURAL_SERVICES} title={TITLE} description={DESCRIPTION}   />
      </div>
    </>
  )
}

export default StructuralPage