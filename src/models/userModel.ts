import connection from './connection';

const createUser = async ({ username, classe, level, password }) => {
  const [user] = await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?, ?, ?)',
    [username, classe, level, password],
  );
  return { id: user.insertId, username, classe, level, password };
};

module.exports = {
  createUser,
};
