import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="max-w-3xl flex flex-col min-h-screen w-full mx-auto">
      <div className="flex flex-col gap-4 mt-10 px-10 lg:px-0">
        <h2 className="text-2xl font-bold text-center">
          Cloudflare and Next js
        </h2>
        <Input
          type="text"
          className="w-full border-black text-slate-500 font-semibold"
          placeholder="input message"
        />
        <Button className="hover:bg-green-400 hover:text-black hover:font-semibold">
          Submit
        </Button>
      </div>
      <div className="flex flex-col mt-6 px-16 lg:px-8">
        <ul className="flex flex-col justify-start">
          <li>First Message</li>
          <li>Second Message</li>
          <li>Third Message</li>
        </ul>
      </div>
    </main>
  );
}
