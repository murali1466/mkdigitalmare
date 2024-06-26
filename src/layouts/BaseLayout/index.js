
import { Box } from "@mui/material";


const BaseLayout = ({ children }) => {
    return (
      <Box
        sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          padding:"10px",
          my:"30px"
        }}
      >
        {children}
      </Box>
    );
  };

export default BaseLayout;