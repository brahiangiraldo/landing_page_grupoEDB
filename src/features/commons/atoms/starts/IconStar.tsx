import { IconStarProps } from './IconStarProps';



const IconStar = ({ color, width, height }: IconStarProps) => {

  return (
    <svg width={ width } height={ height } viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.0978 11.4207L22.6456 9.918L17.9607 0.526C17.6108 -0.175333 16.3882 -0.175333 16.0383 0.526L11.3548 9.918L0.902628 11.4207C0.0441281 11.5447 -0.298705 12.5273 0.303378 13.1073L7.89671 20.4327L6.1018 30.7887C5.95871 31.6113 6.8923 32.2287 7.66438 31.8247L17.0002 26.9687L26.336 31.826C27.101 32.226 28.0431 31.6207 27.8986 30.79L26.1037 20.434L33.697 13.1087C34.2991 12.5273 33.9549 11.5447 33.0978 11.4207Z"
        fill={ color } />
    </svg>
  );
};

export default IconStar;