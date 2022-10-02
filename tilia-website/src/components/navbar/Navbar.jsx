import {
  AppBar,
  Box,
  ClickAwayListener,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Cross as Hamburger } from "hamburger-react";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import logoLight from "../../../public/assets/images/logo_img_light.png";
import useLenguageContext from "../../context/LanguageContext";
import useWindowSize from "../../hooks/useWindoowSize";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { language, handleLanguageSelection } = useLenguageContext();
  const windowSize = useWindowSize();

  // useEffect(() => {
  //   let selected = localStorage.getItem("selectedLanguage");
  //   if (selected) {
  //     setLanguage(selected);
  //   }
  // }, []);

  useEffect(() => {
    console.log("LANG: ", language);
  }, [language]);

  const drawerWidth = 240;
  return (
    <>
      <AppBar
        position='fixed'
        elevation={1}
        sx={{
          zIndex: (theme) => theme.zIndex.appBar + 1,
          background: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
          border: "none",
        }}>
        <Grid container justifyContent='space-between'>
          <Grid
            item
            xs={3}
            style={{
              placeItems: "center",
              paddingLeft: "2rem",
              paddingBlock: "0.2rem",
            }}>
            <Grid container style={{ placeItems: "center" }}>
              <Grid item style={{ paddingTop: "0.2rem" }}>
                <Image
                  src={logoLight}
                  alt='logo'
                  height={windowSize.width <= 767 ? 30 : 34}
                  width={windowSize.width <= 767 ? 30 : 34}
                />
              </Grid>
              <Grid
                item
                style={{
                  placeItems: "center",
                  paddingLeft: "0.8rem",
                  display: windowSize.width <= 767 ? "none" : "grid",
                }}>
                <Typography variant='body1' sx={{ fontWeight: "bold" }}>
                  Asociación Tilia
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2} justifyContent='flex-end'>
            <Box
              width={"auto"}
              sx={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "flex-end",
              }}>
              <div>
                <ReactFlagsSelect
                  countries={["ES", "GB"]}
                  customLabels={{
                    GB: "",
                    ES: "",
                  }}
                  showSecondarySelectedLabel={false}
                  showSelectedLabel={false}
                  showOptionLabel={false}
                  placeholder={false}
                  selected={language}
                  onSelect={(code) => handleLanguageSelection(code)}
                  selectButtonClassName={styles.language_selector}
                />
              </div>
              <div>
                <Hamburger
                  size={24}
                  rounded
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      {/*  */}
      <Drawer
        anchor='right'
        // hideBackdrop
        elevation={1}
        open={isOpen}
        sx={{
          zIndex: (theme) => theme.zIndex.appBar,
          position: "fixed",
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <List>
              {language === "ES"
                ? [
                    "Actividades locales",
                    "Actividades europeas",
                    "Quienes somos",
                    "Contacto",
                  ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))
                : [
                    "Local activities",
                    "European activities",
                    "Who we are",
                    "Contact",
                  ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
            </List>
          </ClickAwayListener>
        </Box>
      </Drawer>
    </>
  );
}
