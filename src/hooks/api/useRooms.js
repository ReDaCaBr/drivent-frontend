import useAsync from '../useAsync';
import useToken from '../useToken';
import * as roomsApi from '../../services/roomsApi';

export default function useRooms(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getRooms,
  } = useAsync(() => roomsApi.getRooms(1, token)); //TODO colocar hotelId

  return {
    rooms,
    roomsLoading,
    roomsError,
    getRooms,
  };
}
