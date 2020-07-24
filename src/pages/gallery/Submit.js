import React from "react";
import SectionHero from "../../components/SectionHero";
import SubmitButtons from "../../components/gallery/submit/SubmitButtons";
import Guidelines from "../../components/gallery/submit/Guidelines";

export default function Submit() {
  return (
    <div className="submit page text-center text-md-left">
      <SectionHero
        title="Submit Art"
        subtitle="Express Your Voice Through Art"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595605529/yam-website/gallery/previews/submit-cover.jpg"
      />
      <SubmitButtons />
      <Guidelines />
    </div>
  );
}
