import type { Equal, Expect } from "../assertions";
import type { If } from "../tasks/if";

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]
