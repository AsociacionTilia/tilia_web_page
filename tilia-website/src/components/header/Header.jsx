import { Button, Grid, Typography } from "@mui/material";
import header from "../../../public/assets/images/HEADER.png";
import useLenguageContext from "../../context/LanguageContext";
import useWindowSize from "../../hooks/useWindoowSize";

export default function Header() {
  const { language } = useLenguageContext();
  const windowSize = useWindowSize();
  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${header.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        // width: "100%",
        paddingTop: windowSize.width <= 767 ? "10rem" : "15rem",
        marginInline: 0,
        paddingLeft: windowSize.width <= 767 ? "1.5rem" : "10rem",
        paddingBottom: "4rem",
      }}>
      <Grid
        item
        style={{
          width: "40rem",
          transform: `scale(${windowSize.width <= 767 ? 0.8 : 1})`,
          transformOrigin: "left",
        }}>
        <Typography
          variant={windowSize.width <= 767 ? "h2" : "h1"}
          component={"h1"}
          style={{
            fontWeight: "900",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: windowSize.width <= 767 ? "2.8rem" : "4.4rem",
            marginLeft: -8,
            marginBottom: 5,
          }}>
          Entre
          <br />
          Culturas
        </Typography>
        <Typography
          variant={windowSize.width <= 767 ? "h6" : "h5"}
          style={{ color: "#fff", maxWidth: "34ch", paddingBottom: "1rem" }}>
          Promover la interculturalidad, la solidaridad, la inclusión y la
          convivencia entre personas.
        </Typography>
        <Button size='large' variant='contained'>
          {language === "ES" ? "Descubre más" : "Show more"}
        </Button>
      </Grid>
    </Grid>
  );
}
