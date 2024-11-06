import { useState } from 'react';

const [_loan, _setLoan] = useState<{ farmerName: string; amount: string; purpose: string }>({
  farmerName: '',
  amount: '',
  purpose: ''
})
