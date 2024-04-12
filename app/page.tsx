import Image from "next/image"; // Import if needed elsewhere, not used directly in this example.
import Button from "@/components/ui/button"; // Make sure your imports match your actual file structure.
import {Calendar} from "@/components/ui/calendar"; // Make sure your imports match your actual file structure.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-slate-500 to-slate-300 p-24">
      <div>
        <h1 className="text-4xl font-bold">Metallica!</h1>
        <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-popover hover:text-popover-foreground transition-colors duration-5000">
          Click me!
        </button>
        <Calendar className="bg-card rounded-lg"/>
      </div>
    </main>
  );
}
