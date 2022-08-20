import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center justify-between bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4"> Medium </span>is a place to write, read and connect
          </h1>
          <h2>Its easy and free to post whatever you like.</h2>
        </div>
    
        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

// YT Minute 46
// https://www.youtube.com/watch?v=6fNy0iD3hsk


//to start Sanity cd into sanity folder and do "sanity start"