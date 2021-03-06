// @flow
import type { MutableState, Mutator, Tools } from 'final-form'

type Args = [string, number, any]

const insert: Mutator = (
  [name, index, value]: Args,
  state: MutableState,
  { changeValue }: Tools
) => {
  changeValue(state, name, (array: ?(any[])): any[] => {
    const copy = [...(array || [])]
    copy.splice(index, 0, value)
    return copy
  })
}

export default insert
