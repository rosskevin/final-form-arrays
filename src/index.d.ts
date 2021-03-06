import { Mutator } from 'final-form'

type DefaultType = { [key: string]: Mutator }

export default DefaultType

/** The shape of the mutators once final-form has bound them to state */
export type Mutators = {
  insert: (name: string, index: number, value: any) => void
  move: (name: string, from: number, to: number) => void
  pop: (name: string) => any
  push: (name: string, value: any) => void
  remove: (name: string, index: number) => any
  shift: (name: string) => any
  swap: (name: string, indexA: number, indexB: number) => void
  unshift: (name: string, value: any) => void
}
