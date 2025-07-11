import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { Typography } from "@mui/material";
// Import Link from react-router-dom
import { useNavigate, Link } from "react-router-dom";

const MenuPopupState = ({ title, submenuItems, menuURL }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const navigate = useNavigate(); // Keep useNavigate if you still have logic that directly uses it

  // This function is for the main button's click behavior (left-click)
  // It handles opening/closing the menu OR navigating if it's a Ctrl/Cmd click
  const handleMainButtonClick = (event) => {
    // Check for Ctrl/Cmd key or middle mouse click to allow opening in new tab
    if (event.ctrlKey || event.metaKey || event.button === 1) {
      // Let the default Link behavior handle opening in new tab
      // No need to call navigate here if component={Link} handles it
      return;
    }
    // For a regular left-click, we want to toggle the menu.
    // If the menu is currently open, a click on the main button should close it
    // and navigate to the main URL. If closed, it should open it.
    if (popupState.isOpen) {
      popupState.close();
      navigate(menuURL);
    } else {
      popupState.open(event);
    }
  };

  // This function is for submenu item clicks (left-click)
  const handleSubMenuItemClick = (url) => {
    popupState.close(); // Close the submenu when a menu item is clicked
    // navigate(url); // No longer needed here as component={Link} will handle navigation
  };

  return (
    <React.Fragment>
      <Button
        {...bindHover(popupState)}
        variant="regular"
        role="menuitem"
        // Replace onClick with component={Link} and to={menuURL}
        component={Link} // This makes the button behave like a Link
        to={menuURL} // This is the path for the Link
        onClick={handleMainButtonClick} // Use the new handler for complex click logic
        sx={{
          color: "text.primary",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          borderRadius: "999px",
          maxHeight: 40,
          border: "1px solid",
          borderColor: "transparent",
        }}
      >
        <Typography variant="body1">{title}</Typography>
      </Button>
      <HoverMenu
        disableScrollLock //Added PDN
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {submenuItems.map((item, index) => (
          <MenuItem
            key={index}
            // Replace onClick with component={Link} and to={item.url}
            component={Link} // Makes the MenuItem behave like a Link
            to={item.url} // The path for this sub-item
            onClick={handleSubMenuItemClick} // Keep this to close the menu
          >
            {item.label}
          </MenuItem>
        ))}
      </HoverMenu>
    </React.Fragment>
  );
};

export default MenuPopupState;
