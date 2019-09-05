import React, { Component } from "react";
import styled, { css, withTheme } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { PropTypes } from "prop-types";

const MainContainer = styled.div`
  visibility: visible;
  max-width: 50px;
  height: 50px;
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;

  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
  border-radius: 24px;
  text-overflow: ellipsis;

  ${props =>
    props.Show &&
    css`
      visibility: visible;
      animation: fadein 0.5s, expand 0.5s 0.5s, stay 99999999995s 1s;
      /* shrink 1s 5s,
        fadeout 0.5s 6s; */
    `};
  ${props =>
    !props.Show &&
    css`
      min-width: ${props => props.minWidth}
    `};

  ${props =>
    props.state === "exiting" &&
    css`
      visibility: visible;
      animation: shrink 0.5s 0.5s, fadeout 1s 1s;
    `};

  ${props => props.state === "exited" && css``};

  @keyframes fadein {
    from {
      bottom: 2px;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes expand {
    from {
      opacity: 1;
      min-width: 50px;
    }
    to {
      opacity: 1;
      min-width: ${props => props.minWidth};
    }
  }

  @keyframes stay {
    from {
      opacity: 1;
      min-width: ${props => props.minWidth};
    }
    to {
      opacity: 1;
      min-width: ${props => props.minWidth};
    }
  }

  @keyframes shrink {
    from {
      opacity: 1;
      min-width: ${props => props.minWidth};
    }
    to {
      opacity: 1;
      min-width: 50px;
    }
  }

  @keyframes fadeout {
    from {
      min-width: 50px;
      bottom: 30px;
      opacity: 1;
    }
    to {
      min-width: 50px;
      bottom: 60px;
      opacity: 0;
    }
  }
`;

const IconContainer = styled.div`
  border-radius: 24px;
  width: 50px;
  height: 50px;

  float: left;

  padding-top: 14px;

  box-sizing: border-box;
  background-color: #111;
  color: #fff;
`;

const DefaultIcon = styled.i`
  color: white;
  transition: all 150ms linear;
`;

const DefaultText = styled.div`
  color: #fff;
  align-self: center;
  padding-left: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;

  text-align: center;
  vertical-align: middle;
`;

const TextContainer = styled.div`
  transition: all 150ms linear;
  display: flex;
  height: 100%;
  position: relative;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ReactSnackBar = props => {
  return (
    <CSSTransition
      in={props.Show}
      classNames="_bottom-toaster-transition"
      timeout={props.Show ? 0 : 1500}
      unmountOnExit
    >
      {state => (
        <MainContainer state={state} Show={props.Show} minWidth={props.minWidth}>
          <IconContainer>
            <DefaultIcon>{props.Icon}</DefaultIcon>
          </IconContainer>
          <TextContainer>
            <DefaultText>{props.children}</DefaultText>
          </TextContainer>
        </MainContainer>
      )}
    </CSSTransition>
  );
};

ReactSnackBar.propTypes = {
  children: PropTypes.any,
  Icon: PropTypes.any,
  Show: PropTypes.bool,
  minWidth: PropTypes.string,
};

ReactSnackBar.defaultProps = {
  minWidth: '350px',
}

export default ReactSnackBar;
