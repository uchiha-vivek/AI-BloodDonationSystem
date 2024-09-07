import { FC } from 'react';
import { socials } from '../constants';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <>
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='caption text-n-4 lg:block'>
          {new Date().getFullYear()} All Rights Reserved
        </p>
        <ul className='flex gap-5 flex-wrap'>
          {socials.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              target='_blank'
              className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transitions-colors hover:bg-n-6'
            >
              <img
                src={item.iconUrl}
                alt={item.title}
                className='w-6 h-6'
              />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
