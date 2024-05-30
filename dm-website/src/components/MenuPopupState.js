import * as React from 'react';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MenuPopupState = ({ title, submenuItems, menuURL }) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  });
  const navigate = useNavigate();

  const handleMenuItemClick = (url) => {
    popupState.close(); // Close the submenu when a menu item is clicked
    navigate(menuURL); // Navigate to the specified URL
  };

  const handleSubMenuItemClick = (url) => {
    popupState.close(); // Close the submenu when a menu item is clicked
    navigate(url); // Navigate to the specified URL
  };

  return (
    <React.Fragment>
      <Button
        {...bindHover(popupState)}
        variant="regular"
        role="menuitem"
        onClick={() => handleMenuItemClick(menuURL)}
        sx={{
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          borderRadius: '999px',
          maxHeight: 40,
          border: '1px solid',
          borderColor: 'transparent',
        }}
      >
        <Typography variant="body1">{title}</Typography>
      </Button>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {submenuItems.map((item, index) => (
          <MenuItem
          key={index}
          onClick={() => handleSubMenuItemClick(item.url)}
        >
          {item.label}
        </MenuItem>
        
        
        ))}
      </HoverMenu>
    </React.Fragment>
  );
};

export default MenuPopupState;
