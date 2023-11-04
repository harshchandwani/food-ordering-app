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

# Lazy Loading
What is Lazy Loading?
To optimize the app, React bundles the code and form one file, all the components in the React app are in that particular file
In order, all the components are defined and used in that particular file
Now that particular file becomes so big and it takes alot time to load
To make differnt bundles, so that the app loads fast, we divide them into different files
Lazy loads come into play, it only imports the components when user demands it and this makes the main file ligher and easy to load
There are many names of this
-Code Splittingg
- Dynamic Import
- Chunking
- Deferred Loading
- Route based Loading
- on-Demand Loading

# Order of LifeCycle


- Constructor  (Intializing Component state and binding Event Handlers)
- Render (Mandatory and responsible for returning JSX that represent component UI)
- Component Did Mount (called after component is inserted into DOM tasks like fetching data from API)
 (Will be called after the renders)
 - Component Will Unmount (When you go to a difference page)

Mounting -> Constructor  -> Render -> React updated DOM and references -> Component did Mount -> Component did Update -> Component will Unmount


# Redux Toolkit
- Install Library (Redux Toolkit and React Redux)
- Build our Store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch Action
- Selector



