import styled from "styled-components";
import CustomButton from "components/CustomButton/CustomButton";

export const CollectionItemImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemAddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 40em) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  max-width: 290px;
  min-width: 200px;
  align-items: center;
  position: relative;

  &:hover {
    ${CollectionItemImageContainer} {
      opacity: 0.8;
    }

    ${CollectionItemAddButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 40em) {
    width: 40vw;

    &:hover {
      ${CollectionItemImageContainer} {
        opacity: unset;
      }

      ${CollectionItemAddButton} {
        opacity: unset;
        display: flex;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ItemNameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const ItemPriceSpan = styled.span`
  width: 10%;
`;
