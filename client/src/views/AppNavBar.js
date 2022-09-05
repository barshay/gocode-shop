import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

export default function AppNavBar({ itemsInCart, isAdmin, setIsDrawerOpen }) {
  // const {itemsInCart} = props.itemsInCart;
  let navigate = useNavigate();

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -5,
      top: 0,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton sx={{ color: "white" }}>
            <StoreIcon />
          </IconButton>
        </Link>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: "20px" }}
        >
          My GoCode Shop
        </Typography>
        {isAdmin && (
          <Button color="inherit" onClick={() => navigate("menage")}>
            Manage
          </Button>
        )}
        <Button
          color="inherit"
          sx={{ marginLeft: "10px" }}
          onClick={() => navigate("about")}
        >
          About
        </Button>
        <Button
          color="inherit"
          sx={{ marginLeft: "10px" }}
          onClick={() => navigate("login")}
        >
          Login
        </Button>
        <IconButton
          aria-label="cart"
          sx={{ color: "white" }}
          // onClick={() => navigate("cart")}
          onClick={() => setIsDrawerOpen(true)}
        >
          <StyledBadge
            badgeContent={itemsInCart}
            color="secondary"
            overlap="rectangular"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
