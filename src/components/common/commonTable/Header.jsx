import React from "react";
import Input from "../Input";
import {
  ActiveWrapper,
  Button,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Icon,
} from "./style";

const Header = ({
  title,
  isInput,
  isButton,
  isActive,
  handleOpen,
  isAccordion,
  addingBtn,
  topControls,
  Component
}) => {
  return (
    <HeaderWrapper topControls={topControls} isAccordion={isAccordion}>
      {topControls ? (
        <>
          <h2>{title}</h2>
          {topControls}
          <Input
            width="250px"
            placeholder="Search name, email, or etc."
            icon={<Icon.Search />}
            bg="#fff"
            borderRadius="6px"
            height="40px"
          />
        </>
      ) : (
        <>
          <HeaderLeft>
            <h2>{title}</h2>

            {isActive && (
              <ActiveWrapper>
                <Button bg="#289672">Aktive</Button>
                <Button bg="none" border="1px solid #B9B9B9" color="#000">
                  Aktive
                </Button>
              </ActiveWrapper>
            )}
          </HeaderLeft>

          <HeaderRight>
          <div>
              {Component}
            </div>
            {isButton && (
              <Button onClick={handleOpen}>
                <Icon.Plus />
                <span>{addingBtn}</span>
              </Button>
            )}
            {isInput && (
              <Input
                width="250px"
                placeholder="Search name, email, or etc."
                icon={<Icon.Search />}
                bg="#fff"
                borderRadius="6px"
                height="40px"
              />
            )}
          </HeaderRight>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
