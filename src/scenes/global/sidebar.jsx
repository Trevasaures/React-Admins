import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[400],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const location = useLocation();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const [selected, setSelected] = useState(() => {
    switch (location.pathname) {
      case "/team":
        return "Manage Team";
      case "/contacts":
        return "Contacts Information";
      case "/invoices":
        return "Invoices Balances";
      case "/form":
        return "Profile Form";
      case "/calendar":
        return "Calendar";
      case "/faq":
        return "FAQ Page";
      case "/bar":
        return "Bar Chart";
      case "/pie":
        return "Pie Chart";
      case "/line":
        return "Line Chart";
      case "/geography":
        return "Geography Chart";
      case "/":
      default:
        return "Dashboard";
    }
  });  

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: colors.secondary[100],
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "8px 20px",
          borderRadius: "25px", // Rounded sidebar items
          margin: "5px 10px",
          color: colors.neutral[900], // Default text color
          transition: "all 0.8s ease", // Smooth transition
        },
        "& .pro-menu-item.active": {
          backgroundColor: colors.primary[500], 
          color: colors.primary[600],            
          borderRadius: "25px",                 
          fontWeight: "bold",
          transition: "all 0.8s ease",
          width: "90%",        
        },
        "& .pro-sidebar.collapsed .pro-inner-item": {
          justifyContent: "center",
          alighnItems: "center",
          padding: "8px 16px", // Adjust padding for collapsed state
          width: "90%", 
          margin: "5px auto", // Center the item in collapsed state
        },  
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0", // Add margin to the top and bottom
              color: colors.secondary[400], // Change the color of the icon warm beige
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="5px"
              >
                <Typography variant="h3" color={colors.secondary[500]}>
                  Admins
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/vp_operations.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.neutral[500]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jim James
                </Typography>
                <Typography variant="h5" color={colors.secondary[500]}>
                  VP of Staffing
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.primary[500]}
              sx={{
                m: "15px 0 5px 20px",
                ml: isCollapsed ? "auto" : "15px", // Center the text when collapsed
                mr: isCollapsed ? "auto" : "0px", // Center the text when collapsed
                textAlign: isCollapsed ? "center" : "left", // Align text center when collapsed
                width: isCollapsed ? "100%" : "auto", // Take full width when collapsed to center
              }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.primary[500]}
              sx={{
                m: "15px 0 5px 20px",
                ml: isCollapsed ? "auto" : "15px", // Center the text when collapsed
                mr: isCollapsed ? "auto" : "0px", // Center the text when collapsed
                textAlign: isCollapsed ? "center" : "left", // Align text center when collapsed
                width: isCollapsed ? "100%" : "auto", // Take full width when collapsed to center
              }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.primary[500]}
              sx={{ m: "15px 0 5px 20px", ml: "15px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
