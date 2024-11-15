import { Box } from "@mui/material";
import Header from "../../components/header";
import BarChart from "../../components/barchart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="Simple Bar Chart With Random Data" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
