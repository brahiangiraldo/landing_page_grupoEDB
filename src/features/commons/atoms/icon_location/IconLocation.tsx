import { IconLocationProps } from './IconLocationProps';

const IconLocation = ({ color, width, height }: IconLocationProps) => {

  return (

    <svg width={ width } height={ height } viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_176_11388)">
        <path d="M15.5 31C24.0604 31 31 24.0604 31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31Z"
          fill={ color } />
        <path d="M15.5002 6.41797C11.7323 6.41797 8.67773 9.47256 8.67773 13.2404C8.67773 15.6762 11.5289 20.4527 13.5445 23.5261C14.4678 24.9338 16.5319 24.9338 17.4552 23.5261C19.4714 20.4527 22.322 15.6762 22.322 13.2404C22.322 9.47256 19.2674 6.41797 15.4996 6.41797H15.5002ZM15.5002 16.1727C13.8805 16.1727 12.5679 14.86 12.5679 13.2404C12.5679 11.6208 13.8805 10.3081 15.5002 10.3081C17.1198 10.3081 18.4324 11.6208 18.4324 13.2404C18.4324 14.86 17.1198 16.1727 15.5002 16.1727Z"
          fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_176_11388">
          <rect width="31" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default IconLocation;