import { getSession } from "next-auth/react";
import Head from "next/head";
import MainLayout from "src/layouts/MainLayout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const MainDashBoardPage = dynamic(()=>import('src/content/DashBoardPage'))

function MainDashBoard() {
 const [cardsData,setCardsData] = useState([])
 console.log(cardsData)
  useEffect(()=>{
    const apiCall = async()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            setCardsData(data);
        }
        catch(err){
            console.log(err)
        }
    }
    apiCall()
  },[])
  return (
    <>
      <Head>
        <title> MainDashBoard</title>
      </Head>
      <MainDashBoardPage cardsData={cardsData} />
    </>
  );
}
MainDashBoard.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default MainDashBoard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
}
