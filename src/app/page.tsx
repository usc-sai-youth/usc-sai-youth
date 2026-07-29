"use client";

import Admission from "../components/Admission";
import Core from "../components/Core";
import CourseDetail from "../components/CourseDetail";
import FAQ from "../components/FAQ";
import GeneralStructure from "../components/GeneralStructure";
import Hero from "../components/Hero";
import ProgramHighlights from "../components/ProgramHighlights";
import Incentive from "../components/Incentive";
import StudentGuide from "../components/StudentGuide";
import WhyThisClass from "../components/WhyThisClass";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProgramHighlights/>
      <WhyThisClass/>
      <Core/>
      <GeneralStructure/>
      <CourseDetail/>
      <Incentive/>
      <Admission/>
      <StudentGuide/>
      <FAQ/>
    </>
  );
}
