import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 40em) {
    align-items: center;
  }
`;

export const CollectionPreviewTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CollectionCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 40em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export const CollectionItemContainer = styled.div`
  margin-right: 5px;
`;
