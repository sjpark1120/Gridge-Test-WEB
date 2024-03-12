import { atom, selector } from "recoil";

export const signupState = atom({
  key: "signupState",
  default: {
    loginId: "",
    password: "",
    realName: "",
    phone: "",
    birthDate: "",
  },
});

export const loginIdState = selector({
  key: "loginIdState",
  get: ({ get }) => get(signupState).loginId,
  set: ({ get, set }, loginId) =>
    set(signupState, { ...get(signupState), loginId }),
});

export const passwordState = selector({
  key: "passwordState",
  get: ({ get }) => get(signupState).password,
  set: ({ get, set }, password) =>
    set(signupState, { ...get(signupState), password }),
});

export const realNameState = selector({
  key: "realNameState",
  get: ({ get }) => get(signupState).realName,
  set: ({ get, set }, realName) =>
    set(signupState, { ...get(signupState), realName }),
});

export const phoneState = selector({
  key: "phoneState",
  get: ({ get }) => get(signupState).phone,
  set: ({ get, set }, phone) =>
    set(signupState, { ...get(signupState), phone }),
});

export const birthDateState = selector({
  key: "birthDateState",
  get: ({ get }) => get(signupState).birthDate,
  set: ({ get, set }, birthDate) =>
    set(signupState, { ...get(signupState), birthDate }),
});
