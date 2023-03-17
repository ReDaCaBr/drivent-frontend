import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivitiesDates() {
  const token = useToken();

  const {
    data: activitiesDates,
    loading: activitiesDatesLoading,
    error: activitiesDatesError,
    act: getActivitiesDates,
  } = useAsync(() => activitiesApi.getActivitiesDates(token));

  return {
    activitiesDates,
    activitiesDatesLoading,
    activitiesDatesError,
    getActivitiesDates,
  };
}
