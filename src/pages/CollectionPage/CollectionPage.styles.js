import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  @media screen and (max-width: 40em) {
    align-items: center;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 60em) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
