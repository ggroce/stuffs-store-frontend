## Stuffs Store: a ReactJS frontend for a generic web store  
  WIP - Developing a fully featured React storefront, complete with account creation, user login, shopping cart, and multiple layers of components that host the collections of products.  
  
### Details on the tech and packages being used
* ReactJS, using functional components and hooks
* Redux used for state, with Reselect for memoization and Redux-persist used for persistence between reloads and page close
* Redux-saga used extensively for handling and monitoring all dispatched actions
* Styled Components being used throughout
* React-router-dom used with both normal component routes and dynamic routes acting off match.params
* Firebase being used for user auth/accounts and store of data, (collections of products)
* Stripe integrated for payments

<br>
<img src="https://user-images.githubusercontent.com/25714007/170388330-cf5d7be6-e1f3-44e0-a3ae-b81c0169c6ee.gif">
<br>
<img src="https://user-images.githubusercontent.com/25714007/170388341-b2b0b438-32c0-49db-b259-dbe4f789a64e.gif">
<br>
<img src="https://user-images.githubusercontent.com/25714007/170388348-eed9b440-274e-4de4-a86d-815f5365276d.gif">
<br>


#### Todo: 
- [ ] Update Stripe package/component to a newer version, possibly refactor into a new component rather than modal
- [ ] Create function to clear cart contents on Stripe transaction success
