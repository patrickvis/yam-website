import React from "react";
import SectionHero from "../../components/SectionHero";
import SubmitButtons from "../../components/gallery/submit/SubmitButtons";
import Guidelines from "../../components/gallery/submit/Guidelines";

export default function Submit() {
  return (
    <div className="submit page">
      <SectionHero
        title="Submit Art"
        subtitle="Express Your Voice Through Art"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:100/v1612564911/Pages/68fb53deeec7203e2b6aedabb081965d-d6mi5to_xz9smc.jpg"
      />
      <SubmitButtons />
      <Guidelines />
    </div>
  );
}
