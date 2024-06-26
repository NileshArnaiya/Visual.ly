import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Spacer } from "@nextui-org/spacer";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Create&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Educational&nbsp;</h1>
        <br />
        <h1 className={title()}>
          videos using&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>AI&nbsp;</h1>
        <h1 className={title()}>to <b>self-learn any concept</b> in your own language using your fav characters like Tom cruise or Naruto or Shinchan.
        </h1>
        <Spacer y={2} />
        <h2 className={subtitle({ class: "mt-4" })}>
          <b> A new way to learn visually and practically from your characters so you will remember more. 90% retention promise.</b>
        </h2>
        <Spacer y={10} />
        <Card className="bg-white p-4">
          <CardHeader className="text-black font-bold">
            What can the AI do?
          </CardHeader>
          <CardBody className="text-emerald-800 font-semibold p-5">
            Create your own videos on any concept you want to learn in your own language, in your own learning style, in your chosen animation and character and if you want a celebrity to teach you, we will dub it for you. Go for it. Try it now,
            {/* Detailed information goes here */}
          </CardBody>
        </Card>

      </div>

      <div className="flex gap-5">
        <Link
          isExternal
          className={`custom-bg p-12 border-red-500 border-2 ${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "bordered",
          })}`}
          href={siteConfig.links.create}
        >
          <h3 className={title({ color: "black" })}
          >Create Now</h3>
        </Link>

      </div>


    </section>
  );
}
