import React from 'react'

const Users = ({ users }) => {
  return (
    <div>
      <center><h1>List of Users</h1></center>
      {users.map((user) => (
        <div class="card">
          <div class="card-body">
            <p class="card-text">{user.firstName}</p>
            <p class="card-text">{user.lastName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users;

// this uses webpack cards stylesheet
// from https://pusher.com/tutorials/consume-restful-api-react