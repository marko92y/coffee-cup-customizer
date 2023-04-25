import { useSnapshot } from "valtio";
import { state } from "../store";
import { Box, FormControl, FormLabel, Slider } from "@mui/material";

import react from "../assets/cup_logo/react.png";
import typescript from "../assets/cup_logo/typescript.png";
import vs from "../assets/cup_logo/vs.png";

const logoes = [react, typescript, vs];
const colors = ["#0000ff", "#ff0000", "#00ff00"];

const Interface = () => {
  const snap = useSnapshot(state);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100px",
        right: 0,
      }}
      p={3}
    >
      <FormControl>
        <Box m={1} display={"flex"} flexDirection={"column"}>
          <FormLabel>Cup volume</FormLabel>
          <Slider
            name={"cupVolume"}
            sx={{
              width: "200px",
            }}
            min={150}
            max={450}
            value={snap.cupVolume}
            onChange={(e) => {
              state.cupVolume = e.target.value;
            }}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box m={1}>
          {logoes.map((logo, key) => (
            <img
              alt="logo"
              key={key}
              style={{ width: "50px", cursor: "pointer", margin: "10px" }}
              src={logo}
              onClick={() => {
                state.logo =
                  logo === react
                    ? "react"
                    : logo === typescript
                    ? "typescript"
                    : "vs";
              }}
            />
          ))}
        </Box>
        <Box m={1}>
          {colors.map((color, key) => (
            <button
              style={{ background: color, width: "50px" }}
              key={key}
              onClick={() => (state.color = color)}
            />
          ))}
        </Box>
      </FormControl>
    </Box>
  );
};

export default Interface;
