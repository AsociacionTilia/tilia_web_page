import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import useLenguageContext from "../../../context/LanguageContext";

export default function CardsSection() {
  const elevation = 4;
  const { language } = useLenguageContext();
  return (
    <Grid container>
      <Grid item lg={4} sx={{ paddingInline: 2 }} justifyContent='center'>
        <Paper elevation={elevation}>
          <Typography variant='h6' sx={{ paddingInline: 2, paddingBlock: 1 }}>
            {language === "ES" ? "Actividades locales" : "Local activities"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={4} sx={{ paddingInline: 2 }}>
        <Paper elevation={elevation}>
          <Typography variant='h6' sx={{ paddingInline: 2, paddingBlock: 1 }}>
            {language === "ES" ? "Actividades europeas" : "European activities"}
          </Typography>
        </Paper>
      </Grid>
      <Grid item lg={4} sx={{ paddingInline: 2 }}>
        <Paper elevation={elevation}>
          <Typography variant='h6' sx={{ paddingInline: 2, paddingBlock: 1 }}>
            {language === "ES" ? "Quienes somos" : "Who we are"}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
