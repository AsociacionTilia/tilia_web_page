import { Container, Grid, Typography } from "@mui/material";

export default function Section({ children, title, subtitle }) {
  return (
    <Container sx={{ paddingBlock: 5 }}>
      <Typography variant='h4' component={"h2"}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant='subtitle1' component={"h2"}>
          {subtitle}
        </Typography>
      )}
      <Grid container sx={{ paddingBlock: 2 }}>
        {children}
      </Grid>
    </Container>
  );
}
