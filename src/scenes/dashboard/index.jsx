import { Box, Button, Typography, useTheme, IconButton, ToggleButton, ToggleButtonGroup, Divider, Tooltip, Chip } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/lineChart.jsx";
import BarChart from "../../components/barChart.jsx";
import PieChart from "../../components/pieChart.jsx";
import GeographyChart from "../../components/geoChart.jsx";
import CompletionCircle from "../../components/completionCircle.jsx";
import StatsBox from "../../components/statsBox.jsx";
import Header from "../../components/header.jsx";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const cardSx = {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: 2,
    border: `1px solid ${colors.primary[500]}`,
    bgcolor: colors.primary[400],
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard bud" />
      

      { /* Download Reports Button */ }
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.gray[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "15px" }} />
          Download Reports
        </Button>
      </Box>
      </Box>


      {/* Grids and Boxes */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="20px"
      >
        {/* First Row Email*/ }
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatsBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <Email
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* First Row Sales*/ }
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatsBox
            title="2,212,361"
            subtitle="Sales Obtained"
            progress={0.52}
            increase="+26%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* First Row Customers*/ }
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatsBox
            title="871,234"
            subtitle="New Customers"
            progress={0.43}
            increase="+15%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* First Row Traffic */ }
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatsBox
            title="1,234,567"
            subtitle="Traffic Received"
            progress={0.61}
            increase="+69%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>


      {/* Second Row — Revenue card + Recent Transactions */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        mt="20px"
      >
        {/* Revenue Generated (spans 8 cols, 2 rows) */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: 2,
            border: `1px solid ${colors.primary[500]}`
          }}
        >
          {/* Header Row */}
          <Box
            px="24px"
            py="18px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderBottom: `1px solid ${colors.primary[500]}`
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700} color={colors.gray[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.8 }}>
                Last updated just now • All channels
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1.5}>
              {/* Range selector */}
              <ToggleButtonGroup
                exclusive
                size="small"
                color="primary"
                sx={{
                  bgcolor: colors.primary[300],
                  borderRadius: "8px",
                  "& .MuiToggleButton-root": {
                    textTransform: "none",
                    color: colors.gray[100],
                    border: "none"
                  }
                }}
                value="30d"
              >
                <ToggleButton value="24h">24h</ToggleButton>
                <ToggleButton value="7d">7d</ToggleButton>
                <ToggleButton value="30d">30d</ToggleButton>
                <ToggleButton value="ytd">YTD</ToggleButton>
              </ToggleButtonGroup>

              {/* Download */}
              <Tooltip title="Download revenue CSV">
                <IconButton>
                  <DownloadOutlinedIcon sx={{ fontSize: 22, color: colors.greenAccent[500] }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* KPI Row */}
          <Box
            px="24px"
            py="14px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={2}
          >
            <Box display="flex" alignItems="baseline" gap={1}>
              <Typography variant="h3" fontWeight={800} color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
              <Chip
                size="small"
                label="+4.3% WoW"
                sx={{
                  bgcolor: colors.greenAccent[700],
                  color: colors.gray[100],
                  fontWeight: 700
                }}
              />
            </Box>

            <Box display="flex" alignItems="center" gap={1.5}>
              <Chip
                size="small"
                label="+12.1% MoM"
                sx={{ bgcolor: colors.greenAccent[600], color: colors.gray[100], fontWeight: 700 }}
              />
              <Chip
                size="small"
                label="+28.4% YoY"
                sx={{ bgcolor: colors.greenAccent[600], color: colors.gray[100], fontWeight: 700 }}
              />
              <Chip
                size="small"
                label="Top channel: Online"
                sx={{ bgcolor: colors.primary[300], color: colors.gray[100], fontWeight: 600 }}
              />
            </Box>
          </Box>

          <Divider sx={{ borderColor: colors.primary[500] }} />

          {/* Chart Area */}
          <Box height="280px" px="6px" pt="4px" pb="8px">
            {/* Your existing chart component */}
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Recent Transactions (spans 4 cols, 2 rows) */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          overflow="auto"
          sx={{
            borderRadius: "12px",
            boxShadow: 2,
            border: `1px solid ${colors.primary[500]}`
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[500]}`}
            p="16px 20px"
          >
            <Typography color={colors.gray[100]} variant="h6" fontWeight={700}>
              Recent Transactions
            </Typography>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: colors.primary[500],
                color: colors.gray[100],
                textTransform: "none"
              }}
            >
              View all
            </Button>
          </Box>

          {mockTransactions.map((t, i) => (
            <Box
              key={`${t.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[500]}`}
              p="12px 20px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} fontWeight={700}>
                  {t.txId}
                </Typography>
                <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.85 }}>
                  {t.user}
                </Typography>
              </Box>
              <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.8 }}>
                {t.date}
              </Typography>
              <Box
                sx={{
                  bgcolor: colors.greenAccent[500],
                  color: colors.gray[100],
                  px: 1.25,
                  py: 0.5,
                  borderRadius: "8px",
                  fontWeight: 700,
                  minWidth: 64,
                  textAlign: "right"
                }}
              >
                ${t.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Third Row — Key Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="200px"
        gap="20px"
        mt="20px"
      >
        {/* Sales by Category (Bar) */}
        <Box gridColumn="span 4" gridRow="span 2" sx={cardSx}>
          <Box
            px="20px"
            py="14px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ borderBottom: `1px solid ${colors.primary[500]}` }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700} color={colors.gray[100]}>
                Sales by Category
              </Typography>
              <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.8 }}>
                Last 12 months
              </Typography>
            </Box>
            <Button size="small" sx={{ textTransform: "none", color: colors.gray[100] }}>
              Details
            </Button>
          </Box>

          <Box height="100%" px="6px" pt="6px" pb="10px">
            {/* Ensure your BarChart fills the parent */}
            <BarChart isDashboard />
          </Box>
        </Box>

        {/* Users by Region (Geography) */}
        <Box gridColumn="span 4" gridRow="span 2" sx={cardSx}>
          <Box
            px="20px"
            py="14px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ borderBottom: `1px solid ${colors.primary[500]}` }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700} color={colors.gray[100]}>
                Users by Region
              </Typography>
              <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.8 }}>
                Last 30 days
              </Typography>
            </Box>
            <Button size="small" sx={{ textTransform: "none", color: colors.gray[100] }}>
              Explore
            </Button>
          </Box>

          <Box height="100%" px="6px" pt="6px" pb="10px">
            <GeographyChart isDashboard />
          </Box>
        </Box>

        {/* Revenue Split (Pie) */}
        <Box gridColumn="span 4" gridRow="span 2" sx={cardSx}>
          <Box
            px="20px"
            py="14px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ borderBottom: `1px solid ${colors.primary[500]}` }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700} color={colors.gray[100]}>
                Revenue Split
              </Typography>
              <Typography variant="body2" color={colors.gray[100]} sx={{ opacity: 0.8 }}>
                Channels / Products
              </Typography>
            </Box>
            <Button size="small" sx={{ textTransform: "none", color: colors.gray[100] }}>
              Download
            </Button>
          </Box>

          <Box height="100%" px="6px" pt="6px" pb="10px">
            <PieChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
