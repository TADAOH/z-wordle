import styles from '@/style/Keyboard.module.css'

function Keyboard() {
  return (
    <div className={styles.base}>
      <div className={styles.line1}>
        <span>Q</span>
        <span>W</span>
        <span>E</span>
        <span>R</span>
        <span>T</span>
        <span>Y</span>
        <span>U</span>
        <span>I</span>
        <span>O</span>
        <span>P</span>
      </div>
      <div className={styles.line2}>
        <span>A</span>
        <span>S</span>
        <span>D</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>J</span>
        <span>K</span>
        <span>L</span>
      </div>
      <div className={styles.line3}>
        <span>
          {/* Arrow SVG */}
          <svg
            enableBackground="new 0 0 500 500"
            id="arrow"
            version="1.1"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clipRule="evenodd"
              d="M433.704,237.465c4.456,6.086,7.092,13.539,7.092,21.622  c0,20.079-16.266,36.341-36.344,36.341h-36.341c-9.991,0-18.173,8.18-18.173,18.172v109.025c0,20.079-16.262,36.341-36.341,36.341  H186.4c-20.079,0-36.34-16.262-36.34-36.341V313.6c0-9.992-8.181-18.172-18.172-18.172H95.547  c-20.079,0-36.342-16.262-36.342-36.341c0-8.083,2.635-15.536,7.08-21.622L217.747,54.388c17.807-17.808,46.695-17.808,64.505,0  L433.704,237.465z"
            />
          </svg>
        </span>
        <span>Z</span>
        <span>X</span>
        <span>C</span>
        <span>V</span>
        <span>B</span>
        <span>N</span>
        <span>M</span>
        <span>
          {/* Backspace SVG */}
          <svg
            baseProfile="tiny"
            id="backspace"
            version="1.2"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M19.5,5h-10C8.234,5,6.666,5.807,5.93,6.837L3.32,10.49c-0.642,0.898-1.182,1.654-1.199,1.679  C2,12.344,1.999,12.661,2.124,12.833c0.023,0.033,0.555,0.777,1.188,1.664l2.619,3.667C6.666,19.193,8.233,20,9.5,20h10  c1.379,0,2.5-2.122,2.5-2.5v-10C22,6.122,20.879,5,19.5,5z M17.207,14.793c0.391,0.391,0.391,1.023,0,1.414  C17.012,16.402,16.756,16.5,16.5,16.5s-0.512-0.098-0.707-0.293L13.5,13.914l-2.293,2.293C11.012,16.402,10.756,16.5,10.5,16.5  s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.293-2.293l-2.293-2.293c-0.391-0.391-0.391-1.023,0-1.414  s1.023-0.391,1.414,0l2.293,2.293l2.293-2.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L14.914,12.5L17.207,14.793z" />
          </svg>
        </span>
      </div>
      <div className={styles.line4}>
        <span>123</span>
        <span>
          {/* Smile SVG */}
          <svg
            viewBox="0 0 48 48"
            id="smile"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48h-48z" fill="none" />
            <path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm.01 36c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7h-20.42c1.6 4.09 5.55 7 10.21 7z" />
          </svg>
        </span>
        <span>
          {/* Mic SVG */}
          <svg
            baseProfile="tiny"
            id="mic"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Guides__x26__Forms" />
            <g id="Icons">
              <g>
                <path d="M16,21c2.209,0,4-1.791,4-4v-7c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v7C12,19.209,13.791,21,16,21z M14,10    c0-1.103,0.897-2,2-2c1.103,0,2,0.897,2,2v7c0,1.103-0.897,2-2,2c-1.103,0-2-0.897-2-2V10z" />
                <path d="M24,17h-2c0,3.308-2.692,6-6,6s-6-2.692-6-6H8c0,4.079,3.055,7.438,7,7.931V26h-4v2h10v-2h-4v-1.069      C20.945,24.438,24,21.079,24,17z" />
              </g>
            </g>
          </svg>
        </span>
        <span>Space</span>
        <span>Return</span>
      </div>
    </div>
  );
}

export default Keyboard;