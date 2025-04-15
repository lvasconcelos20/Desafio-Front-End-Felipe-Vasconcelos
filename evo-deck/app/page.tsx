import Link from "next/link";
import Login from "./(public)/login/page";

import PublicOnlyFeature from "@/components/templates/Public/public";

export default function Home() {
  return (
   <PublicOnlyFeature>
    <Login />
   </PublicOnlyFeature>
  );
}
