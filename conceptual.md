### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
it routes to different components
- What is a single page application?
it is an application that does not operate on a server, all the routing is done on the browser
- What are some differences between client side and server side routing?
server side renders whole html pages where as client side just changes the components
- What are two ways of handling redirects with React Router? When would you use each?
- one way in v6 is with using navigate that can be used as a function whenever a certain operation is completed and you can use a link to click on.

- What are two different ways to handle page-not-found user experiences using React Router? 
- in v6 you can create a page not found component and have it redirect to that page  and i do not know any other way

- How do you grab URL parameters from within a component using React Router?
- const {parameterName} = useParams()

- What is context in React? When would you use it?
- context allows data to be used within its children components,
- i would use whenever i have multiple nested components

- Describe some differences between class-based components and function
  components in React.
  class based does not use hooks and it relies on understanding the life cycle

- What are some of the problems that hooks were designed to solve?
- classes uses higher order functions to morph/refactor rendering code such jsx, but using multiple higher order functions on the same code became ncreasingly difficult.