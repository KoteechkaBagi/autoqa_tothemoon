/* Instructions:
  • Implement the built-in Omit<T, K> generic without using it.
  This generic should construct a type by picking all properties from T and then removing K
  
  For example:
  
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }
*/

export type MyOmit<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>] : T[P]
}

