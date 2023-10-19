# Food Ordering App

# Here is the Complete structure how we build it:

We have divided the web app into 3 parts

- Header

  - Logo
  - Nav Items (Home, About, Cart)

- Body

  - Search
  - Restaurant Container
    - Restaurant Card
      - Image
      - Name of restaurant, star rating, cuisine, delivery time

- Footer
  - Copyright
  - Links
  - Address
  - Contact



There are 2 Types of Import/Export

- Default Import/Export (if there is one component, strictly use this)

 export default <name of component>
 import <name of component > from path

- Named Import/Export

  export const Component = () => {
    .....
  }
  import { Component } from path

  

  # React Hooks
  (Normal JS Utility functions)
  - useState() - Superpowerful React variables  [Import as Named import ]
  - useEffect()



# Use State

const [origionalState, setOrigionalState] = useState(origional data);

setOrigionalState(changes in data);

WHENEVER A STATE VARIABLE CHANGE, REACT WILL RE-RENDER

What is reconciliation?

The algorithm React uses to diff one tree with another to determine which parts need to be changed.




# Types of Routing

1. Client Side Routing:  Whenever we make a call, there is no network calls
2.  Server Side Routing: Whenever we make a network call and the page comes from server
