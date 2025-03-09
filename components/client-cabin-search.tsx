"use client";

import { CabinSearch } from "@/components/cabin-search";

export function ClientCabinSearch() {
  const handleSearch = (params: any) => {
    console.log(params);
  };

  return <CabinSearch onSearch={handleSearch} />;
}
