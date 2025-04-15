"use client";

import React, { JSX, useEffect } from "react";

import { useRouter } from "next/navigation";

import useAuth from "@/source/hooks/useAuth";
import FetchAuthState from "@/components/templates/FetchAuth/fetchAuth";

interface Props {
  children: JSX.Element;
}

function AuthenticatedOnlyFeature({ children }: Props): JSX.Element {
  const { userUid } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userUid === "") {
      router.push(`/login`);
    }
  }, [userUid, router]);

  return children;
}

export default function AuthenticatedOnlyFeatureWrapper({
  children
}: Props): JSX.Element {
  return (
    <FetchAuthState>
      <AuthenticatedOnlyFeature>{children}</AuthenticatedOnlyFeature>
    </FetchAuthState>
  );
}
