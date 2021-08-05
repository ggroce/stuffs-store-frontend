import React from 'react'
import { useSelector } from 'react-redux'
import './CollectionPage.styles.scss'
import CollectionItem from '../../components/CollectionItem/CollectionItem.jsx'
import { selectCollection } from '../../redux/shop/shop.selectors.js'

const CollectionPage = ({ match }) => {
  const { title, items } = useSelector(
    selectCollection(match.params.collectionId),
  )

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
