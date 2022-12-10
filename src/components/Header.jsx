import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit" sx={{ 
          flexGrow: 1,
        }}>
Ecomm
        </Typography>
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="Shows cart items count"
            color="inherit"
          >
            <Badge badgeContent={5} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
        <Button color="inherit"> Login</Button>
      </Toolbar>
    </AppBar>
  );
}
