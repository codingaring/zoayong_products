import facebookIcon from 'public/assets/icons/facebook.svg';
import instagramIcon from 'public/assets/icons/instagram.svg';
import youtubeIcon from 'public/assets/icons/youtube.svg';

type SNS = {
  name: string;
  link: string;
  imageUrl: string;
};

export const SNS_List: SNS[] = [
  {
    name: 'youtube',
    link: 'https://www.youtube.com/@TheYongin',
    imageUrl: youtubeIcon,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/yongin_stagram/',
    imageUrl: instagramIcon,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/yicity?locale=ko_KR',
    imageUrl: facebookIcon,
  },
];
