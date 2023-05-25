import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="select-none justify-between text-blue-900 flex">
        <div>Hello</div>
        <div className="h-[90vh] w-[15rem] flex-col  bg-slate-900 text-slate-300 flex items-center rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt="..."
            className="w-32 h-32 rounded-full mt-10"
          />
          <span className="px-3 pt-3 font-bold capitalize">
            {session?.user?.name}
          </span>
          <span className="px-3 text-sm">{session?.user?.email}</span>
        </div>
      </div>
    </Layout>
  );
}
