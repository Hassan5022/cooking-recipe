import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './Error.css';

export default function Error({message}) {

    const navigate = useNavigate()
    const { mode } = useTheme()

    setTimeout(() => {
        navigate('/')
    }, 2000)

  return (
      <div className={`error ${mode}`}>{message }</div>
  )
}
