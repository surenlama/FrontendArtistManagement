import axios from 'axios';
// UserServices.js

export function RegisterUser(user,token){
  console.log('userssss',user.email)
  return axios.post('http://localhost:8000/register/', {
    
    email:user.email,
    password:user.password,

  },{
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      Authorization: `Token ${token}`,

    }
  }
  )
    .then(response=>response.data)
}
export const LoginUser = async (credentials) => {
  console.log('credentials', credentials.username,credentials.password);
  
  try {
    const response = await axios.post('http://127.0.0.1:8000/auth/', {
      username: credentials.username,
      password: credentials.password
    });
    console.log('data', response.data);
    return response.data;
  } catch (error) {
    console.log('Login error', error.message);
    throw new Error('Error during login');
  }
};




export function getUsers(token) {
    return axios.get('http://127.0.0.1:8000/userapi/',{
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        Authorization: `Token ${token}`,
      }
    })
       .then(response => response.data)
}

export function addUser(user,token){
    return axios.post('http://127.0.0.1:8000/userapi/', {

      id:null,
      first_name:user.first_name.value,
      last_name:user.last_name.value,
      phone:user.phone.value,
      email:user.email.value,
      dob:user.dob.value,
      password:user.password.value,
      last_login:user.last_login.value,
      is_superuser:user.is_superuser.value,
      date_joined:user.date_joined.value,
      is_staff:user.is_staff.value,
      is_active:user.is_active.value,
    },{
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        Authorization: `Token ${token}`,

      }
    }
    )
      .then(response=>response.data)
  }


  export function UpdateUser(userid, user, token) {
    return axios.put(`http://127.0.0.1:8000/userapi/${userid}/`, user, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
      .then(response => response.data);
  }
  
  export function deleteUser(userid, token) {
    return axios.delete(`http://127.0.0.1:8000/userapi/${userid}/delete/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    })
      .then(response => response.data);
  }
  