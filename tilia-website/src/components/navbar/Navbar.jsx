import {
  AppBar,
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logoLight from "../../../public/assets/images/logo_img_light.png";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
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
                <Image src={logoLight} alt='logo' height={34} width={34} />
              </Grid>
              <Grid
                item
                style={{ placeItems: "center", paddingLeft: "0.8rem" }}>
                <Typography variant='body1' sx={{ fontWeight: "bold" }}>
                  Asociación Tilia
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} justifyContent='flex-end'>
            <Box width={48} sx={{ marginLeft: "auto" }}>
              <Hamburger size={24} rounded toggled={isOpen} toggle={setOpen} />
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      {/*  */}
      <Drawer
        anchor='right'
        hideBackdrop
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
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </ClickAwayListener>
        </Box>
      </Drawer>
    </>
  );
}
