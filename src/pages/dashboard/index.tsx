import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <DashboardLayout>
    <h1>Hello World</h1>
  </DashboardLayout>
  );
};

export default Home;
