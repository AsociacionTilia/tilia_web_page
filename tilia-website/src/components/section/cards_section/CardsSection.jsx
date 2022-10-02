import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import useLenguageContext from "../../../context/LanguageContext";
import CARD_EU from "../../../../public/assets/images/CARD_EU.png";
import CARD_LOCALES from "../../../../public/assets/images/CARD_LOCALES.png";
import CARD_LOGO from "../../../../public/assets/images/CARD_LOGO.png";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Link from "next/link";
import styles from "./Cards.module.css";
import useWindowSize from "../../../hooks/useWindoowSize";

export default function CardsSection() {
  const elevation = 4;
  const { language } = useLenguageContext();
  const windowSize = useWindowSize();
  return (
    <Grid container>
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        sx={{ padding: 3 }}
        justifyContent='center'
        justifyItems={"center"}>
        <Paper elevation={elevation} className={styles.card}>
          <Link href={"/local_activities"}>
            <Image src={CARD_LOCALES} alt={"Local activities"} />
          </Link>
          <Grid container>
            <Typography
              variant='bod1'
              sx={{ paddingInline: 2, paddingBlock: 1 }}>
              {language === "ES" ? "Actividades locales" : "Local activities"}{" "}
            </Typography>
            <Link href={"/local_activities"}>
              <IconButton style={{ marginLeft: "auto", marginRight: "0.5rem" }}>
                <ArrowCircleRightOutlinedIcon />
              </IconButton>
            </Link>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={12} sx={{ padding: 3 }}>
        <Paper elevation={elevation} className={styles.card}>
          <Link href={"/european_activities"}>
            <Image src={CARD_EU} alt={"european activities"} />
          </Link>
          <Grid container>
            <Typography
              variant={"body1"}
              sx={{ paddingInline: 2, paddingBlock: 1 }}>
              {language === "ES"
                ? "Actividades europeas"
                : "European activities"}
            </Typography>
            <Link href={"/european_activities"}>
              <IconButton style={{ marginLeft: "auto", marginRight: "0.5rem" }}>
                <ArrowCircleRightOutlinedIcon />
              </IconButton>
            </Link>
          </Grid>
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} sm={12} sx={{ padding: 3 }}>
        <Paper elevation={elevation} className={styles.card}>
          <Link href={"/tilia"}>
            <Image src={CARD_LOGO} alt={"Logo"} />
          </Link>
          <Grid container>
            <Typography
              variant='bod1'
              sx={{ paddingInline: 2, paddingBlock: 1 }}>
              {language === "ES" ? "Quíenes somos" : "Who we are"}
            </Typography>
            <Link href={"/tilia"}>
              <IconButton style={{ marginLeft: "auto", marginRight: "0.5rem" }}>
                <ArrowCircleRightOutlinedIcon />
              </IconButton>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
