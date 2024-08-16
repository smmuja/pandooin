import { baseApi } from "api/baseApi";
import {
  DestinationProps,
  DestinationPublicProps,
} from "api/destinations/types";

export async function getDestinations(): Promise<DestinationProps[]> {
  try {
    const response = await baseApi.get<DestinationPublicProps>(
      "/zamrood/itinerary?highlight=true"
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching destination List: ${error}`);
    throw new Error("Failed to fetch destination list");
  }
}
