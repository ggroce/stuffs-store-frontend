## Stuffs Store: a ReactJS frontend for a generic web store  
  WIP - Developing a fully featured React storefront, complete with account creation, user login, shopping cart, and multiple layers of components that host the collections of products.  

### Details on the tech and packages being used
* ReactJS, using functional components and hooks
* Styled Components being used throughout
* React-router-dom used with both normal component routes and dynamic routes acting off match.params
* Redux used for state, with Reselect for memoization and Redux-persist used for persistence between reloads and page close
* Redux-saga used extensively for handling and monitoring all dispatched actions
* Firebase being used for user auth and store of data, (collections of products)
* Stripe integrated for payments

#### Todo: 
- [ ] Update Stripe package/component to a newer version, possibly refactor into a new component rather than modal
- [ ] Create function to clear cart contents on Stripe transaction success
