"use client"

import ProfileCard from "@/app/components/members/member/ProfileCard";
import { fetchMemberById } from "@/app/lib/members";
import { useParams } from "next/navigation";
import Head from "next/head";
import Summary from "@/app/components/members/member/Summary";
import { Awards } from "@/app/components/members/member/Awards";
import Languages from "@/app/components/languages";
import ShowReel from "@/app/components/show-reel";
import Links from "@/app/components/links";
import { Works } from "@/app/components/members/member/Works";
import {Gallery}  from "@/app/components/members/member/Gallary";



const page = ({ params }) => {
  const { id } = useParams();

  const memberData = fetchMemberById(id);

  ;


  if (!memberData) {
    return <p>Member not found!</p>;
  }

  return (
    <>

      <Head>
        <title>Profile of Member {id}</title>
        <meta name="description" content={`Details of Member ${id}`} />
      </Head>
      <main className="max-w-screen-2xl mx-auto">
      <ProfileCard member={memberData} />
      <div className="py-section px-section space-y-8">
        <div className="grid lg:grid-cols-3 gap-x-16 gap-y-12">
          <div className=" space-y-8 lg:col-span-2">

            <Summary summary={memberData.summary} />
            <Awards/>


          </div>

          <div className="lg:col-span-1 space-y-8">
            <Languages languages={memberData.languages}/>
            <ShowReel videoId={memberData.showReelId} description={"Watch the Audition video of the model to get an idea if your requirements align with model’s capabilities."} />
            <Links header='Links' description='Stripe offices spread across 20 countries' links={memberData.links} />
          </div>



        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-12">
          <div className="col-span-3 lg:col-span-2 space-y-8">
              <Works/>
              <Gallery/>
          </div>
          

          
        </div>
      </div>
     
      </main>

    </>
  );
};

export default page;

