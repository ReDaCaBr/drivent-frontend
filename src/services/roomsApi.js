import api from './api';

export async function getRooms(hotelId, token) {
  console.log('foi antes do response');
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data.Rooms;
}
