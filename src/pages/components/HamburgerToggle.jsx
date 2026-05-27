import React from "react";
import styled from "styled-components";

const HamburgerToggle = ({ isOpen, toggleMenu, dark = false }) => {
  return (
    <StyledWrapper $dark={dark}>
      <label className="hamburger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          aria-label="Toggle Menu"
        />

        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22L7 22"
          />

          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 2.8em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${({ $dark }) => ($dark ? "#ffffff" : "#24304a")};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.6;
    transition:
      stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 300ms ease;
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default HamburgerToggle;
