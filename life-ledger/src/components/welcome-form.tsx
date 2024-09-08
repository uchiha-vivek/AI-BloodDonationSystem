// WelcomeForm.tsx
 
import { Link } from 'react-router-dom';

const WelcomeForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome Back! Let's Get You Started.</h1>
        <p className="text-lg text-gray-300 mb-8">New Here? Join Us and Dive Right In!</p>

        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition duration-200 hover:bg-blue-500 hover:border-blue-500">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg transition duration-200 hover:bg-green-500 hover:border-green-500">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
