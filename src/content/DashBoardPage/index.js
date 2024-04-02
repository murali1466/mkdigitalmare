import { Card, Grid, Typography ,Item, Paper} from "@mui/material";
export default function DashBoardPage({ cardsData }) {
  return (
    <>
    <Typography variant="h2" sx={{fontWeight:"500",fontSize:"20px",my:"10px"}}>
        MAIN DashBoardPage
    </Typography>
      <Grid container rowSpacing={"10px"} columnSpacing={"10px"}>
        {cardsData.map((carditem,index) => (
          <>
          <Grid item xs={12} sm={6} md={4} key={carditem.id + "img"}>
            <Paper>
                <img src={carditem.url} alt={carditem.title} width={"200px"}  height={"200px"}/>
                <Typography noWrap>
                    {carditem.title}
                </Typography>
            </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
