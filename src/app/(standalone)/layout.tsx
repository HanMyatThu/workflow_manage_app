import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[64px]">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" height={256} width={256} />
          </Link>
          <UserButton />
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        {children}
      </div>
    </main>
  );
};

export default StandaloneLayout;
