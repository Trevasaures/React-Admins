import { Box } from "@mui/material";
import Header from "../../components/header";
import BarChart from "../../components/barchart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header
        title="REGIONAL PERFORMANCE METRICS (BAR)"
        subtitle="Sales, expenses, profit, and growth by region"
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
