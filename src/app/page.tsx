"use client";

import Core from "../components/Core";
import CourseDetail from "../components/CourseDetail";
import GeneralStructure from "../components/GeneralStructure";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <Core/>
      <GeneralStructure/>
      <CourseDetail/>
    </>
  );
}
