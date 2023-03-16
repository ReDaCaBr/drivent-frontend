import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelById(hotelId) {
  const token = useToken();

  const {
    data: hotelById,
    loading: hotelByIdLoading,
    error: hotelByIdError,
    act: getHotelById,
  } = useAsync(() => hotelApi.getHotelById(hotelId, token));

  return {
    hotelById,
    hotelByIdLoading,
    hotelByIdError,
    getHotelById,
  };
}
