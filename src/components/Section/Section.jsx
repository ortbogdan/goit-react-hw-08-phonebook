import { Wrapper, Title } from "./Section.styled";
import PropTypes from "prop-types";
export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
