import React from "react";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};
export default function IntroAbout() {
  return (
    <div className="flex flex-col justify-start items-start max-w-1380 h-1412 p-6 ">
      <div className="hidden w-full h-112 bg-white bg-opacity-90 rounded-full"></div>

      <h1 className="w-full h-30 text-4xl tracking-tight font-bold ">
      Data Science Enthusiast
      </h1>

      <p className="w-full h-42 text-base p-4 ">
      As a Data Scientist, I am enthusiastic about applying theoretical knowledge and hands-on skills in real-world settings through a meaningful internship opportunity. I am in statistical analysis, machine learning techniques, and programming languages like Python, R, and SQL. Passionate about extracting actionable insights from data, I have obtained knowledge demonstrating my ability to tackle complex problems and deliver impactful solutions. With a robust data visualization and storytelling foundation, I excel at communicating findings to technical and non-technical audiences. I seek to develop my skills further and contribute to innovative projects in a dynamic team environment. Let@apos connect and explore how I can bring value to your organization as a Data Science intern.
      </p>

      <p className="w-full h-42 text-base p-4">
      </p>

      <p className="w-full h-42 text-base p-4">
      </p>
    </div>
  );
}
