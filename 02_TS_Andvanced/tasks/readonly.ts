/* Instructions:
  • Implement the built-in Readonly<T> generic without using it.
  
  This generic should construct a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
  
  For example:
  
  interface Todo {
    title: string
    description: string
  }
  
  const implemented: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  implemented.title = "Hello" // Error: cannot reassign a readonly property
  implemented.description = "barFoo" // Error: cannot reassign a readonly property
*/

export type MyReadonly<T> = any
