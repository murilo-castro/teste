import { apiPlaces } from "@/app/services/axiosAPi";

const findPlace = async (id: string | number) => {
  try {
    const details = await apiPlaces.get(
      `/details/json?fields=formatted_phone_number%2Copening_hours/weekday_text%2Cphotos&place_id=${id}&key=${process.env.NEXT_PUBLIC_MAPS_KEY}`
    );

    console.log(details.data.result);

    return details.data.result;
  } catch (error) {
    console.log(error);
  }
};

export default findPlace;
