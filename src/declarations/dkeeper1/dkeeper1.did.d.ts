import type { Principal } from '@dfinity/principal';
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNotes' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'deleteNote' : (arg_0: bigint) => Promise<undefined>,
  'readNotes' : () => Promise<Array<Note>>,
}
