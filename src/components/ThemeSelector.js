import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css';
import modeIcon from '../assets/brightness6.svg'

export default function ThemeSelector() {

    const colors = ['#58249c', '#249c6b', '#b70233']
    
    const { changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => changeMode(mode === 'dark' ? 'light' : 'dark')

  return (
      <div className='theme-selector'>
          <div className='mode-toggle'>
              <img
                  src={modeIcon}
                  alt="dark/light mode toggle"
                  onClick={toggleMode}
                  style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
              />
          </div>
          <div className='theme-buttons'>
              {colors.map(color => (
                  <div
                      key={color}
                      onClick={() => changeColor(color)}
                      style={{ backgroundColor: color }}
                      />
              ))}
          </div>
      </div>
  )
}
