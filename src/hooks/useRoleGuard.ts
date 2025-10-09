"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

type Role = "user" | "worker";

export const useRoleGuard = (allowedRoles: Role[]) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") {
      return; // Do nothing while loading
    }

    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    const userRole = session?.user?.role as Role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      router.push("/"); // Redirect to home if role is not allowed
    }
  }, [session, status, router, allowedRoles, pathname]);
};
