"use client";

import Admission from "../components/Admission";
import Core from "../components/Core";
import CourseDetail from "../components/CourseDetail";
import FAQ from "../components/FAQ";
import GeneralStructure from "../components/GeneralStructure";
import Hero from "../components/Hero";
import ProgramHighlights from "../components/ProgramHighlights";
import Incentive from "../components/Incentive";
import Reveal from "../components/Reveal";
import StudentGuide from "../components/StudentGuide";
import WhyThisClass from "../components/WhyThisClass";

export default function Home() {
  return (
    <>
      <Hero/>
      <Reveal><ProgramHighlights/></Reveal>
      <Reveal><WhyThisClass/></Reveal>
      <Reveal><Core/></Reveal>
      <Reveal><GeneralStructure/></Reveal>
      <Reveal><CourseDetail/></Reveal>
      <Reveal><Incentive/></Reveal>
      <Reveal><Admission/></Reveal>
      <Reveal><StudentGuide/></Reveal>
      <Reveal><FAQ/></Reveal>
    </>
  );
}
