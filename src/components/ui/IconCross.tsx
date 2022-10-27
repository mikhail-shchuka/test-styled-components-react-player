type Props = {
  width?: string;
  height?: string;
  color?: string;
};

export const IconCross: React.FC<Props> = ({
  width = "10px",
  height = "10px",
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0547 12.5938C12.8203 12.8281 12.3906 12.8281 12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.14062 12.8281 0.90625 12.5938C0.671875 12.3594 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.90625 1.34375C0.671875 1.10938 0.671875 0.679688 0.90625 0.445312C1.14062 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.8203 0.210938 13.0547 0.445312C13.2891 0.679688 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3594 13.0547 12.5938Z"
        fill={color}
      ></path>
    </svg>
  );
};