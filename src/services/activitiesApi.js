import api from './api';

export async function getActivitiesDates(token) {
  const response = await api.get('/activities/dates', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getActivitiesByLocals(date, token) {
  const response = await api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getNumberOfUsersByActivity(token, activityId) {
  const response = await api.get(`/activities/availableSlots/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getRegistrations(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
