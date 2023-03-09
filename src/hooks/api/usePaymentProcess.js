import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentProcessApi from '../../services/paymentProcessApi';

export default function usePaymentProcess(body) {
  const token = useToken();
  
  const {
    data,
    loading: paymentProcessLoading,
    error: paymentProcessError,
    act: paymentProcess
  } = useAsync(() => paymentProcessApi.paymentProcess(body, token));

  return {
    data,
    paymentProcessLoading,
    paymentProcessError,
    paymentProcess
  };
}
