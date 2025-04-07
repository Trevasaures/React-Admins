import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      backgroundColor={colors.primary[100]} 
      borderBottom={`1px solid ${colors.neutral[300]}`} 
    >
      {/* Search bar */}
      <Box
        display="flex"
        backgroundColor={colors.secondary[100]} // Soft secondary color
        borderRadius="10px"
        width="50%"
        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search..."
          style={{ color: colors.neutral[800] }}
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon style={{ color: colors.primary[600] }} />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" gap="10px">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{ color: colors.neutral[400] }} />
          ) : (
            <LightModeOutlinedIcon style={{ color: colors.neutral[700] }} />
          )}
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon style={{ color: colors.primary[600] }} />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon style={{ color: colors.primary[600] }} />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon style={{ color: colors.primary[600] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;