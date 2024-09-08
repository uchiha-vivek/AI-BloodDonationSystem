import { FC } from 'react';

const Button: FC = () => {
    return (
        <button style={{
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            Explore More !
        </button>
    );
};

export default Button;
