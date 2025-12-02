import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Helo !</h1>
      <Button variant={"ghost"}>Subscribe</Button>
      <UserButton/>
    </div>
  );
}
