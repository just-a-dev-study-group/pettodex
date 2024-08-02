import LogoutButton from "@/components/logout-button";
import SampleActionButton from "@/components/sample-action-button";
import SampleProtectedActionButton from "@/components/sample-protected-action-button";

export default function Home() {
  return (
    <main className="p-24">
      <div>welcome to pettodex home page!</div>

      <div>
        <LogoutButton />
      </div>

      <div>
        <SampleActionButton />
      </div>

      <div>
        <SampleProtectedActionButton />
      </div>
    </main>
  );
}
