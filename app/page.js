"use client";

import {
  Box,
  Checkbox,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [amostra, setAmostra] = useState();
  const [produto, setProduto] = useState();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["fulgor", "enxofre", "destilação"];

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        spacing={8}
        bgcolor={"lightgray"}
        // className="border border-black"
      >
        <Grid item xs={12} className="">
          <Typography variant="h2">Etiqueta de amostra/</Typography>
          <Typography
            variant="h3"
            // justifyContent={"center"}
            justifySelf={"center"}
            margin={3}
          >
            SAMPLE LABEL
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <Typography variant="h5">
              Origem do produto / Cargo origin:
            </Typography>
          </Grid>
          <Grid item sx={6}>
            <Typography variant="h5">Terminal / Base:</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <Typography variant="h5" color={"blue"}>
              TQ 410.07
            </Typography>
          </Grid>
          <Grid item sx={6} color={"blue"} className="">
            <Typography variant="h5">TA / GUAMARÉ</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={4} padding={0} className="">
            <Typography variant="h5">Data / Date:</Typography>
          </Grid>
          <Grid item sx={4}>
            <Typography variant="h5">Hora / Time:</Typography>
          </Grid>
          <Grid item sx={4}>
            <Typography variant="h5">Produto / Cargo:</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={4} padding={0} className="">
            <Typography variant="h5" color={"blue"}>
              04/04/2024
            </Typography>
          </Grid>
          <Grid item sx={4} color={"blue"} className="">
            <Typography variant="h5">TA / GUAMARÉ</Typography>
          </Grid>
          <Grid item sx={4} color={"blue"} className="">
            <InputLabel id="demo-simple-select-label">Produto</InputLabel>
            <Select
              className="bg-slate-200"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={produto}
              defaultValue={1}
              label="produto"
              onChange={(e) => {
                console.log(e.target);
                setProduto(e.target);
                console.log("produto", produto);
              }}
            >
              <MenuItem value={1} key="selecione">
                Selecione um produto
              </MenuItem>
              <MenuItem value={10} key="Diesel">
                Diesel
              </MenuItem>
              <MenuItem value={20} key="gasolina">
                Gasolina
              </MenuItem>
              <MenuItem value={30} key="Petroleo">
                Petroleo
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <Typography variant="h5">Tipo de Amostra / Sample Type:</Typography>
          </Grid>
          <Grid item sx={6}>
            <Typography variant="h5">Item de movim. / Item</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"start"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <InputLabel id="demo-simple-select-label">
              Tipo de amostra
            </InputLabel>
            <Select
              className="bg-slate-200"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={amostra}
              defaultValue={1}
              label="Age"
              onChange={(e) => {
                console.log(e.target);
                setAmostra(e.target);
                console.log("amostra", amostra);
              }}
            >
              <MenuItem value={1} key="selecione">
                Selecione um tipo de amostra
              </MenuItem>
              <MenuItem value={10} key="corrida">
                Corrida
              </MenuItem>
              <MenuItem value={20} key="nivel">
                Nivel
              </MenuItem>
              <MenuItem value={30} key="linha">
                Linha
              </MenuItem>
            </Select>
          </Grid>
          <Grid item sx={6} color={"blue"} className="">
            <Typography variant="h5"></Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <Typography variant="h5">
              Ponto de amostragem / Cargo tank:
            </Typography>
          </Grid>
          <Grid item sx={6}>
            <Typography variant="h5">Lacre / Seal:</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <Typography variant="h5" color={"blue"}>
              AMOSTRADOR DE COSTADO
            </Typography>
          </Grid>
          <Grid item sx={6} color={"blue"} className="">
            <Typography variant="h5"></Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={12} padding={0} className="">
            <Typography variant="h5">
              Finalidade da amostra / Reason:
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={6} padding={0} className="">
            <InputLabel id="demo-multiple-checkbox-label">
              Finalidade da amostra
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={12} padding={0} className="">
            <Typography variant="h5">
              Responsável pela amostragem / Sample responsible:
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"start"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={12} padding={0} className="">
            <Typography variant="h5" color={"blue"}>
              Malonei
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={5}
        >
          <Grid item sx={12} padding={0} className="">
            <Typography variant="h5">Observação / Remarks:</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"start"}
          spacing={5}
        >
          <Grid item sx={12} padding={0} className="">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value="Entregar ao laboratório até às 03h00 *Não é necessária coleta de
              amostra de testemunho"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
