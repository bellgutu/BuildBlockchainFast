"use client";

import { useState, useEffect } from "react";
import { format, addDays } from "date-fns";

export function NextSlot() {
  const [nextSlotDate, setNextSlotDate] = useState("");

  useEffect(() => {
    const date = addDays(new Date(), 3);
    setNextSlotDate(format(date, "MMMM do"));
  }, []);

  if (!nextSlotDate) {
    return (
      <span className="inline-block h-6 w-36 animate-pulse rounded-md bg-muted/50" />
    );
  }

  return <span className="text-accent">{nextSlotDate}</span>;
}
