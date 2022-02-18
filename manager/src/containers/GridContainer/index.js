import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemBox from "../../components/Item";
export default function GridContainer() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <ItemBox />
        </Grid>
        <Grid item xs={6}>
          <ItemBox />
        </Grid>
        <Grid item xs={6}>
          <ItemBox />
        </Grid>
        <Grid item xs={6}>
          <ItemBox />
        </Grid>
      </Grid>
    </Box>
  );
}
