import React from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
  to: To;
  bold?: boolean;
  tiny?: boolean;
  is?: boolean;
};

const LinkTextCustom: React.FC<Props> = ({
  children,
  to,
  bold,
  tiny,
  is,
  ...rest
}) => {
  return (
    <Link to={to}>
      <span
        style={{
          fontWeight: bold ? '600' : 'normal',
          fontSize: tiny ? '0.8rem' : '1.4rem',
          textDecorationLine: 'underline',
          fontFamily: 'Montserrat',
          lineHeight: '1.5rem',
          color: '#834825',
          display: is ? 'flex' : undefined,
          justifyContent: is ? 'flex-end' : undefined,
          marginTop: is ? '-2.5rem' : undefined,
          bottom: is ? '1.5rem' : undefined,
        }}
        {...rest}
      >
        {children}
      </span>
    </Link>
  );
};

export default LinkTextCustom;
