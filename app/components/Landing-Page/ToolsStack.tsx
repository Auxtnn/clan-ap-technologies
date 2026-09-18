import Image from "next/image";
import { tools } from "./tools";

export default function ToolsStack() {
  return (
    <section className="bg-[#FFFDF9] px-5 pb-20 text-[#140a00] md:pb-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="[font-family:var(--font-display)] text-3xl font-black tracking-tight md:text-4xl">
          We work in your stack
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {tools.map((tool) => (
            <Image
              key={tool.name}
              src={tool.path}
              alt={tool.name}
              width={100}
              height={32}
              className="h-7 w-auto "
            />
          ))}
        </div>
      </div>
    </section>
  );
}