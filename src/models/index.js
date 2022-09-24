import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
export const userNameAtom = atomWithStorage("userName", "");
export const tokenAtom = atomWithStorage("token", undefined);
export const commonUrlAtom = atom("http://localhost:5000");
