import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TopButton = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setIsShowButton(true);
      } else {
        setIsShowButton(false);
      }
    };
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    isShowButton && (
      <ArrowUpButton onClick={scrollToTop} type="button">
        <img src="/images/arrow-up.png" alt="arrow-up" />
      </ArrowUpButton>
    )
  );
};

export default TopButton;

const ArrowUpButton = styled.button`
  position: fixed;
  z-index: 1;
  background-color: white;
  align-items: center;
  border: 1px solid #e6e6e6;
  cursor: pointer;
  border-radius: 29px;
  right: 20px;
  width: 58px;
  height: 58px;
  bottom: 30px;
  :hover {
    transform: scale(1.1);
    transition: transform 0.2s;
    background-color: #f5f5f5;
  }
`;
