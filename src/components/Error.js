import { useNavigate } from 'react-router-dom';

import './Error.css';

export default function Error() {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 2000)

  return (
      <div className='error'>Not Found</div>
  )
}
