import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "redux/shop/shop.selectors.js";
import WithSpinner from "components/WithSpinner/WithSpinner.jsx";
import CollectionPage from "pages/CollectionPage/CollectionPage.jsx";

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionLoaded,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionsOverviewContainer;
