import { IconBaseType } from './IconBaseType';

const RightIcon = ({ className, color = 'white', width = '15', height = '27' }: IconBaseType) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 15 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.21845 0.514997C0.351526 1.27943 0.255692 2.61668 1.0044 3.50181L9.65785 13.7321L1.03611 23.4616C0.26759 24.3288 0.333169 25.668 1.18258 26.4527C2.03199 27.2373 3.34358 27.1704 4.1121 26.3031L13.9639 15.1855C14.6664 14.3927 14.68 13.1897 13.9956 12.3806L4.14381 0.733544C3.3951 -0.151592 2.08537 -0.249439 1.21845 0.514997Z"
        fill={color}
      />
    </svg>
  );
};

export default RightIcon;
