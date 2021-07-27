import React from 'react'
import SHOP_DATA from './ShopPage.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherShopDataProps }) => (
        <CollectionPreview key={id} {...otherShopDataProps} />
      ))}
    </div>
  )
}
export default ShopPage
