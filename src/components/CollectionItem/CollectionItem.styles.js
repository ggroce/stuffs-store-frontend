import styled from "styled-components";
import CustomButton from "components/CustomButton/CustomButton";

export const CollectionItemImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
  }
`;

export const CollectionItemAddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 15%;
  display: none;

  @media screen and (max-width: 40em) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionItemAttribution = styled.div`
  position: absolute;
  display: none;
  width: 90%;
  height: 5%;
  bottom: 5%;
  color: white;
  background-color: black;
  opacity: 80%;
`;

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  max-width: 300px;
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

    ${CollectionItemAttribution} {
      display: flex;
      align-items: center;
      justify-content: center;
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
