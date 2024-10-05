import React, { useState } from 'react';
import InfoAboutDWD from "../components/InfoAboutDWD";
import welcome from '../assets/welcome.png';
import course from '../assets/course.png';
import cert from '../assets/cert.png';
import SignUp from './SignUp'; // Import SignUp

const WelcomePage = () => {
  // Initialize state for current page index
  const [currentPage, setCurrentPage] = useState(0);

  // Pages array that holds information for each page (excluding SignUp)
  const pages = [
    {
      src: welcome,
      alt: 'welcome page',
      text: 'Welcome to DWD',
      subtitle: 'Welcome as you learn a world-changing skill to get a better job.',
    },
    {
      src: course,
      alt: 'welcome page 2',
      text: 'Choose Your Course',
      subtitle: 'Choose the course of your choice and gain industry knowledge and experience in it.',
    },
    {
      src: cert,
      alt: 'welcome page 3',
      text: 'Get Certified',
      subtitle: 'Start learning and get certified after your training to get a lucrative job.',
    },
  ];

  // Handle previous button click
  const handleSkipClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next button click
  const handleNextClick = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* Conditionally render the InfoAboutDWD pages or the SignUp component */}
      {currentPage < pages.length ? (
        <InfoAboutDWD 
          src={pages[currentPage].src} 
          alt={pages[currentPage].alt} 
          text={pages[currentPage].text}
          subtitle={pages[currentPage].subtitle}
        />
      ) : (
        <SignUp />  // Render SignUp when currentPage exceeds the length of `pages`
      )}

      {/* Navigation buttons */}
      <div className='flex flex-col items-center'>
        <button  
          className={`cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px] p-[10px] w-[350px] h-[44px] ${currentPage === pages.length ? 'hidden' : ''}`}
          onClick={handleNextClick} 
          disabled={currentPage === pages.length}>
          Next
        </button>

        <button 
          className={`cursor-pointer text-[#491B6D] text-[16px] font-semibold leading-[24px] border border-[#491B6D] p-[10px] w-[350px] h-[44px] m-4 ${currentPage === pages.length ? 'hidden' : ''}`}
          onClick={handleSkipClick} 
          disabled={currentPage === 0}>
          {currentPage === 0 || currentPage === pages.length? 'Skip' : 'Prev'}
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
