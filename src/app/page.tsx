"use client";

import Admission from "../components/Admission";
import Core from "../components/Core";
import CourseDetail from "../components/CourseDetail";
import FAQ from "../components/FAQ";
import GeneralStructure from "../components/GeneralStructure";
import Hero from "../components/Hero";
import Incentive from "../components/Incentive";

export default function Home() {
  return (
    <>
      <Hero/>
      <Core/>
      <GeneralStructure/>
      <CourseDetail/>
      <Incentive/>
      <Admission/>
      <FAQ/>
    </>
  );
}
