import styled, { css } from "styled-components";

const CheckoutItemDetailSpacing = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemNameSpan = styled.span`
  ${CheckoutItemDetailSpacing}
`;

export const ItemQuantitySpan = styled.span`
  ${CheckoutItemDetailSpacing}
  display: flex;
`;

export const ItemPriceSpan = styled.span`
  ${CheckoutItemDetailSpacing}
`;

export const QuantityArrowContainer = styled.div`
  cursor: pointer;
`;

export const QuantityValueContainer = styled.div`
  margin: 0 10px;
`;

export const RemoveItemButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
