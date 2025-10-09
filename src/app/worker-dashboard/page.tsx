"use client";
import React from "react";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { signOut, useSession } from "next-auth/react";

export default function UserDashboad() {
  const { data: session } = useSession();
  useRoleGuard(["worker"]);

  return (
    <div>
      <h1>Worker Dashboard</h1>
      {session && session.user ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
