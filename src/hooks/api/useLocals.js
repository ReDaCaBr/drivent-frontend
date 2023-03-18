import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useLocals() {
  const token = useToken();

  const {
    data: locals,
    loading: localsLoading,
    error: localsError,
    act: getLocals,
  } = useAsync((date) => activitiesApi.getActivitiesByLocals(date, token));

  return {
    locals,
    localsLoading,
    localsError,
    getLocals,
  };
}
