import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ItemBox from '../../components/Item'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function GridContainer() {
  return (
    <Box sx={{ width: '100%' }} backgroundColor="#e3f2fd">
      <Stack direction="column" spacing={4} justifyContent="center">
        <Stack justifyContent="center" direction="row" backgroundColor="white">
          <Typography variant="h5">Tissue Inventory</Typography>
        </Stack>

        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 0, md: 0 }}
          justifyContent="center"
        >
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Typography>3F</Typography>
          </Stack>
          <Grid container justifyContent="center">
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 0, md: 0 }}
          justifyContent="center"
        >
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Typography>2F</Typography>
          </Stack>
          <Grid container justifyContent="center">
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 0, md: 0 }}
          justifyContent="center"
        >
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Typography>1F</Typography>
          </Stack>
          <Grid container justifyContent="center">
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
            <Grid item xs={2.3}>
              <ItemBox />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}
