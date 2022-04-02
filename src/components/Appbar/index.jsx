import React from "react";
import Typography from "geeky-ui/core/Typography";
import Button from "geeky-ui/core/Button";
import Badge from "geeky-ui/core/Badge";
import "./appbar.scss";

function AppBar() {
  const [user, setUser] = React.useState(null);

  return (
    <div className="GuiAppbar">
      <div className="GuiAppbar__container GuiContainer">
        <div className="GuiAppbar__brand">
          <Typography variant="h5">Geek-Shop</Typography>
        </div>

        <div className="GuiAppbar__searchBar">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search" />
        </div>

        <div className="GuiAppbar__menu">
          {user ? (
            <div className="GuiAppbar__menu__user">
              <Typography variant="subtitle2">Hi,</Typography>
              <Typography variant="subtitle1">Sandeep</Typography>
            </div>
          ) : (
            <Button variant="contained" size="small">
              Log In
            </Button>
          )}

          <Badge badgeContent={5} color="secondary">
            <i className="fas fa-heart"></i>
          </Badge>
          <Badge badgeContent={5} color="secondary">
            <i className="fa fa-baby-carriage" aria-hidden="true"></i>
          </Badge>
        </div>
      </div>
      <div className="GuiAppbar__searchBar--bottom">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default AppBar;
