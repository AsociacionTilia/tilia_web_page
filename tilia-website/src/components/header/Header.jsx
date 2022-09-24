import { Button, Grid, Typography } from "@mui/material";
import header from "../../../public/assets/images/HEADER.png";

export default function Header() {
  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${header.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: 100,
        // width: "100%",
        paddingTop: "8rem",
        marginInline: 0,
        paddingLeft: "15rem",
        paddingBottom: "4rem",
      }}>
      <Grid item style={{ width: "40rem" }}>
        <Typography
          variant='h1'
          component={"h1"}
          style={{
            fontWeight: "900",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: "4.4rem",
            marginLeft: -8,
            marginBottom: 5,
          }}>
          Entre
          <br />
          Culturas
        </Typography>
        <Typography
          variant='h5'
          style={{ color: "#fff", maxWidth: "34ch", paddingBottom: "1rem" }}>
          Promover la interculturalidad, la solidaridad, la inclusión y la
          convivencia entre personas.
        </Typography>
        <Button size='large' variant='contained'>
          Descubre más
        </Button>
      </Grid>
    </Grid>
  );
}
