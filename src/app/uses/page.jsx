import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UsesTable from './UsesTable';
import ThemeSwitcher from '../../components/ThemeSwitcher'; // Import the ThemeSwitcher component

const Uses = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <Header title="My Uses" />
      <main className="max-w-screen-lg py-8 md:py-12 px-4 md:px-0 mx-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-4xl text-center my-4">Here is a glimpse into the software, gadgets, and resources that are integral to my workflow and that I highly recommend.</h1>
          <p className="text-base md:text-lg text-left">
          As a dedicated data science student, I've carefully curated a set of tools and resources to support my learning and project endeavors. Here's a glimpse into the technology stack and essentials that fuel my passion for data science:
          </p>
          <div className="overflow-x-auto">
            <UsesTable className="w-full" />
          </div>
        </div>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default Uses;
