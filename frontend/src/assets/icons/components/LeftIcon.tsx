import { IconBaseType } from './IconBaseType';

const LeftIcon = ({ className, color = 'white', width = '14', height = '26' }: IconBaseType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8072 0.486387C13.6432 1.20836 13.7356 2.47131 13.0136 3.30727L4.66923 12.9692L12.9831 22.1582C13.7241 22.9773 13.6609 24.242 12.8418 24.9831C12.0227 25.7242 10.758 25.6609 10.0169 24.8419L0.516929 14.3419C-0.160479 13.5931 -0.173592 12.4569 0.486355 11.6928L9.98635 0.692793C10.7083 -0.14317 11.9713 -0.235582 12.8072 0.486387Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftIcon;
