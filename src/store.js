import { proxy } from "valtio";

export const state = proxy({
  intro: true,
  cupVolume: 350,
  logo: "typescript",
  color: "#0000ff",
});
