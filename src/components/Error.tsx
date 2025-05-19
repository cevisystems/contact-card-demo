import React from 'react';
interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <div className="flex justify-center items-center h-64">
      <p className="text-xl font-semibold text-red-500">{message}</p>
    </div>
  );
};