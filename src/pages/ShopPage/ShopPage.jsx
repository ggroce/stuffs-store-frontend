import React from 'react'
import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selectors.js'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.jsx'

const ShopPage = () => {
  const shopData = useSelector(selectCollections)

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherShopDataProps }) => (
        <CollectionPreview key={id} {...otherShopDataProps} />
      ))}
    </div>
  )
}
export default ShopPage
