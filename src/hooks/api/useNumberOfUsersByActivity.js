import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useNumberOfUsersByActivity(activityId) {
  const token = useToken();

  const {
    data: numberOfUsersByActivity,
    loading: numberOfUsersByActivityLoading,
    error: numberOfUsersByActivityError,
    act: getNumberOfUsersByActivity,
  } = useAsync(() => activitiesApi.getNumberOfUsersByActivity(token, activityId));

  return {
    numberOfUsersByActivity,
    numberOfUsersByActivityLoading,
    numberOfUsersByActivityError,
    getNumberOfUsersByActivity,
  };
}
