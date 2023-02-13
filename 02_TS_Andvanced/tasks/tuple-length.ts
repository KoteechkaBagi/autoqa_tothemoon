/* Instructions:
  • For given a tuple, you need to create a generic Length, that will pick the length of the tuple
  
  For example:
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
*/

interface MyLength {
  length: number
}

export type Length<T extends MyLength> = T["length"]
