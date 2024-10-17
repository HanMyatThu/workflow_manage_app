"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/common/dotted-separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[486px] border-none shadow-sm">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            type="email"
            name="email"
            required
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            type="password"
            name="password"
            required
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size="lg" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Login with Gitub
        </Button>
      </CardContent>
    </Card>
  );
};
