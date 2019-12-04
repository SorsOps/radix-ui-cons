import * as React from 'react';
import { BaseIconProps } from './types';

interface TextCasingCapitalizeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const TextCasingCapitalizeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: TextCasingCapitalizeIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.37 2.82a.5.5 0 00-.93 0L.062 11.329a.5.5 0 00.93.369L2.038 9.06h3.733l1.046 2.637a.5.5 0 00.93-.37L4.369 2.822zm1.043 5.34l-1.508-3.8-1.51 3.8h3.018zM11.1 5.207c.761 0 1.452.361 1.955.947v-.497a.45.45 0 11.9 0v5.73a.45.45 0 01-.9 0v-.522c-.503.586-1.194.947-1.955.947-1.54 0-2.79-1.478-2.79-3.302s1.25-3.303 2.79-3.303zm.188 1.05c.781 0 1.456.53 1.767 1.296v1.913c-.311.765-.986 1.296-1.767 1.296-1.078 0-1.952-1.009-1.952-2.252 0-1.244.874-2.252 1.952-2.252z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.37 2.82a.5.5 0 00-.93 0L.062 11.329a.5.5 0 00.93.369L2.038 9.06h3.733l1.046 2.637a.5.5 0 00.93-.37L4.369 2.822zm1.043 5.34l-1.508-3.8-1.51 3.8h3.018zM11.1 5.207c.761 0 1.452.361 1.955.947v-.497a.45.45 0 11.9 0v5.73a.45.45 0 01-.9 0v-.522c-.503.586-1.194.947-1.955.947-1.54 0-2.79-1.478-2.79-3.302s1.25-3.303 2.79-3.303zm.188 1.05c.781 0 1.456.53 1.767 1.296v1.913c-.311.765-.986 1.296-1.767 1.296-1.078 0-1.952-1.009-1.952-2.252 0-1.244.874-2.252 1.952-2.252z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`TextCasingCapitalizeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default TextCasingCapitalizeIcon;