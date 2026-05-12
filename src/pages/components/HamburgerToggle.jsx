import React from "react";
import styled from "styled-components";

const HamburgerToggle = ({ isOpen, toggleMenu, $dark }) => {
  return (
    <StyledWrapper $dark={$dark}>
      <input
        type="checkbox"
        id="hamburger-checkbox"
        checked={isOpen}
        onChange={toggleMenu}
        aria-label="Toggle Menu"
      />
      <label htmlFor="hamburger-checkbox" className="toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #hamburger-checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 100%;
    height: 3px;
    background-color: ${({ $dark }) => ($dark ? "#ffffff" : "#1f2937")};
    border-radius: 4px;
    transition: all 0.5s ease;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #hamburger-checkbox:checked + .toggle .bars {
    position: absolute;
  }

  #hamburger-checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
  }

  #hamburger-checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
  }

  #hamburger-checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
  }

  #hamburger-checkbox:checked + .toggle {
    transform: rotate(180deg);
  }
`;

export default HamburgerToggle;
