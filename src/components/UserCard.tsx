import React from 'react';

import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{user.name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Teléfono:</span> {user.phone}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Empresa:</span> {user.company.name}
      </p>
    </div>
  );
};