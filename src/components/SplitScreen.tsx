import React from "react";
import styled from "styled-components";
import FormContainer from "./Form/FormContainer";
// const Container = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   width: 100;
//   height: 100;
// `;
// const PaneWhite = styled.div`
//   background-color: "grey";
//   flex: 1;
// `;
interface IProps {
  children: JSX.Element;
}

const SplitScreen = ({ children }: IProps) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(#0000 50%, #F1F1F1 50%)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SplitScreen;
