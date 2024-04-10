import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "center", p: 2 }}>
        <Typography variant="h2" component="h1">
          To Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
