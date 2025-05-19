import React from 'react';
import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { UserCard } from './components/UserCard';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { Pagination } from './components/Pagination';
import { User } from './types/user';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5;

  // Filtrar usuarios por nombre
  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Lista de Usuarios</h1>
        
        {/* Barra de búsqueda */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Lista de usuarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Mostrar mensaje si no hay resultados */}
        {currentUsers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">No se encontraron usuarios</p>
          </div>
        )}

        {/* Paginación */}
        {filteredUsers.length > usersPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default App;