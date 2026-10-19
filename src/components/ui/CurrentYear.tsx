"use client";

import React, { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => fallback
  );

  return <span>{year}</span>;
}
