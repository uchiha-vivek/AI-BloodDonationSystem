import { FC } from "react";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="bg-n-8 py-6 border-t border-n-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <p className="text-sm text-gray-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} LifeLedger. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <ul className="flex items-center gap-4">
          {socials.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors duration-200 hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  className="w-5 h-5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
