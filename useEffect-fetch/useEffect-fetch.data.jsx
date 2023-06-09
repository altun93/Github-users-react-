import { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const other = await response.json();
    setUsers(other);
  };
  console.log(users);

  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              
              <img src={avatar_url} alt={login}  />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="blank">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UseEffectFetchData;
