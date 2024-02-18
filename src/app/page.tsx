import { getSheetData } from "@/lib/google-sheet";
import Image from "next/image";
import { Inbox, Linkedin } from "lucide-react";

export default async function Home() {
  const data = await getSheetData();
  console.log("data", data);

  return (
    <div
      className={`w-screen h-screen bg-gradient-to-r from-fuchsia-950 to-violet-950 flex flex-col gap-4 justify-center items-center`}
    >
      <Image
        src={data.get("dp") || ""}
        alt="display picture"
        width={150}
        height={150}
        className={"rounded-full border-4 border-white"}
      />
      <h1 className={`text-white text-5xl`}>{data.get("name")}</h1>
      <h2 className={`text-white text-3xl`}>{data.get("designation")}</h2>
      <a href={`mailto:${data.get("email")}`}>
        <div className={`flex gap-1 items-center justify-center`}>
          <Inbox />
          <h4 className={`text-white text-2xl`}>{data.get("email")}</h4>
        </div>
      </a>
      <a href={`${data.get("linkedin")}`}>
        <div className={`flex items-center justify-center`}>
          <Linkedin />
          <h4 className={`text-white text-2xl`}>/sandun-rathsara</h4>
        </div>
      </a>
    </div>
  );
}
