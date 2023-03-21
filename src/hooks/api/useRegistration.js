import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useRegistrations() {
  const token = useToken();

  const {
    data: registration,
    loading: registrationLoading,
    error: registrationError,
    act: getRegistrations,
  } = useAsync(() => activitiesApi.getRegistrations(token));

  return {
    registration,
    registrationLoading,
    registrationError,
    getRegistrations,
  };
}
