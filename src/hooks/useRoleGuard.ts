"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRoleGuard(allowedRoles: string[]) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // If user not logged in → redirect to login
    if (!session) {
      router.push("/login");
      return;
    }

    // If logged in but not allowed → redirect home
    if (!allowedRoles.includes(session.user.role)) {
      router.push("/");
    }
  }, [session, status, allowedRoles, router]);
}
