import { Avatar, Box, Button,Popover } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { signOut } from "next-auth/react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const paths = [
  {
    id: "1",
    name: "DashBoard",
    path: "/dashboard",
    icon : DashboardIcon
  },
  {
    id: "2",
    name: "DemoPage",
    path: "/demo",
    icon : BorderAllIcon
  },
];
export default function MainLayout({ children }) {
  const router = useRouter();
  const [open,setOpen] = useState(false);
  const ref = useRef("")

  return (
    <>
      <Box
        sx={{
          width: "200px",
          background: "#11192a",
          position: "fixed",
          p: "10px",
          height: "100%",
          top:"0",
          left:"0",
          bottom:"0",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
        }}
      >
        <Box sx={{mt:"15px"}}>
          {paths.map((item, index) => (
            <React.Fragment key={index}>
              <Box>
                <Button
                  onClick={() => router.push(item.path)}
                  sx={{ color: "#fff" }}
                  startIcon={<item.icon />}
                >
                  {item.name}
                </Button>
              </Box>
            </React.Fragment>
          ))}
        </Box>
        <Box>
          <Avatar src="" ref={ref}  onClick={()=>{
        setOpen(true)
      }}/>
        </Box>
      </Box>
      <Box sx={{ marginLeft: "220px" }}>{children}</Box>
      <Popover
      open={open}
      anchorEl={ref.current}
      onClose={()=>{
        setOpen(false)
      }}
      disableScrollLock
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{marginLeft:"40px"}}
      >
        <Button onClick={()=>signOut()}>Logout</Button>
      </Popover>
    </>
  );
}
