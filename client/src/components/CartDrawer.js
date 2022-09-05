import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();
  // if(openDrawer) setIsDrawerOpen(true);
  //setIsDrawerOpen(true);
  //   debugger;
  return (
    <>
      {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)} /> */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="400px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Shopping Cart
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => navigate(`/cart`)}>
          Open Shopping Cart
        </Button>
      </Drawer>
    </>
  );
};

export default CartDrawer;
