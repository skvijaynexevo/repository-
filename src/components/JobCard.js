/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import React from "react";
export const StyledDesignCardContainer = styled.div`
  width: 100%;
  min-height: 23.1rem;
  height: fit-content;
  background-color: MediumAquaMarine;
`;

const JobCard = React.forwardRef(function JobCard({ data, last }, ref) {
  let { company, location } = data;

  return (
    <StyledDesignCardContainer ref={ref} className={last}>
      <p className="card__company">{company}</p> 
      <p className="card__locations">{location}</p>
    </StyledDesignCardContainer>
  );
});

export default JobCard;
