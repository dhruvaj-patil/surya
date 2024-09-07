import React from "react";
import FooterForm from "../../Components/Contact/FooterForm";
import bannerBg from "../../assets/img/page-banner.jpg";
import PageBanner from "../../Components/PageBanner";

function ContactPage() {
  return (
    <div>
        <PageBanner
          title="Get In Touch"
          bannerBg={bannerBg}
          currentPage="Contact"
        />
      <FooterForm />
    </div>
  );
}

export default ContactPage;
