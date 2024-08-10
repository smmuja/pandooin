import {
  DestinationProps,
  DestinationPublicProps,
} from "api/destinations/types";
import axios from "axios";

export async function getDestinations(): Promise<DestinationProps[]> {
  try {
    const response = await axios.get<DestinationPublicProps>(
      "https://pandooin.com/api/zamrood/itinerary?highlight=true"
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching destination List: ${error}`);
    throw new Error("Failed to fetch destination list");
  }
}
