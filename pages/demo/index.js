import { getSession } from "next-auth/react";
import Head from "next/head";
import MainLayout from "src/layouts/MainLayout";
import dynamic from "next/dynamic";
const DemoPage = dynamic(()=>import("src/content/DemoPage"));


function DemoPageBoard() {
  return (
    <>
      <Head>
        <title>Demo page</title>
      </Head>
      <DemoPage />
    </>
  );
}
DemoPageBoard.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default DemoPageBoard;

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
