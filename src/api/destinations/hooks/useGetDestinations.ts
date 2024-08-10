// "use client";

import { getDestinations } from "api/destinations";
import { useQuery } from "react-query";

export function useGetDestinations() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["destinationData"],
    queryFn: getDestinations,
  });

  const currencyIDR = new Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const destination = data?.map((item) => ({
    id: item.itinerary_id,
    name: item.itinerary_name,
    day: item.itinerary_day,
    slug: item.itinerary_slug,
    partnerName: item.partner_name,
    partnerAlias: item.partner_alias,
    location: item.itinerary_location,
    shortDescription: item.itinerary_short_description,
    longDescription: item.itinerary_long_description,

    price: currencyIDR.format(
      Number(item.related_variant.itinerary_variant_pub_price)
    ),

    imgUrl: item.related_galleries.slice(0, 2).map((item) => ({
      imgid: item.gallery_id,
      imgUrl: item.src,
      imgAltText: item.gallery_alt_text,
    })),
  }));

  return {
    data: destination,
    isError,
    isLoading,
  };
}
