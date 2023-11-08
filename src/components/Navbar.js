import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4">IoT - Reto</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography>Usuario</Typography>
            <IconButton>
              <Avatar alt="Invitado" src="/public/images/avatar.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
