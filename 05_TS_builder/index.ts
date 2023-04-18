import { StringBuilder } from "./string-builder";

const quote = new StringBuilder("She ");
const firstResult = quote.append("live").append(" at").delete(9, 10).insert(7, "s").append("in New York.").build();
console.log(firstResult); // "She lives in New York."

const secondResult = quote.reset().append("Hello!").delete(4, 4).build();
console.log(secondResult); // "Hell!"