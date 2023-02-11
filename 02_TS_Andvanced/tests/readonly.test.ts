import type { Equal, Expect } from "../assertions";
import type { MyReadonly } from "../tasks/readonly";

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]
