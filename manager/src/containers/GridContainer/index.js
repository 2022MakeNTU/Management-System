import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemBox from "../../components/Item";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import { init, makePrediciton } from "../../api/index";
const Caption = styled.section`
  font-size: 2em;
  color: black;
  font-family: "Times New Roman";
  opacity: 0.8;
  // &:hover{color:blue;}
  animation-duration: 2s;
  animation-iteration-count: 1;
`;

export default function GridContainer() {

  const useEffect = () => {

  }
  ,[]}
  // const room = init;
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2}>
        <Stack justifyContent="center" direction="row" backgroundColor="white">
          <Caption>Tissue Inventory</Caption>
        </Stack>
        <Divider />
        {Floors.map((floor, index) => {
          return (
            <div key={index}>
              <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 1, sm: 0, md: 0 }}
                justifyContent="center"
              >
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Typography>{index + 1}F</Typography>
                </Stack>

                <Grid container justifyContent="center">
                  {floor.map((room) => {
                    return (
                      <Grid item xs={2.3}>
                        <ItemBox />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Stack>
    </Box>
  );
}
