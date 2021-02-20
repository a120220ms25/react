import axios from "axios";

export const getTemperature = async () => {
  const data = await axios.get(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-7E0FDB3F-BB6F-4FD4-9888-DB3BD2CA7A70&limit=1&locationName=%E6%9D%B1%E5%8D%80,string&elementName="
  );
  // console.log(data.data.records.locations[0].location[0]);

  return data.data.records.locations[0].location[0];
};

// getTemperature()
//   .then((res) => {
//     console.log(
//       "今天平均氣溫" + res.weatherElement[3].time[0].elementValue[0].value
//     );
//   })
//   .catch();

//login 帶入輸入的帳好密碼Llogin
export const userLogin = async (login) => {
  const userInfo = await axios.post(
    " https://api.weblab.tw/v1/auth/general-login",
    {
      appId: "weblab",
      account: login.account,
      password: login.password
    }
  );
  return userInfo;
};

export const getUsers = async () => {
  const usersinfo = await axios.get(
    "https://weblab-react-special-midtern.herokuapp.com/v1/users/"
  );
  // console.log(usersinfo.data.result);
  return usersinfo.data.result;
};

export const getUser = async (userId) => {
  const userinfo = await axios.get(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`
  );
  // console.log(userinfo.data.result);
  return userinfo.data.result;
};

export const deleteUserProfile = async (userId, authToken) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  const deleteProfile = await axios.delete(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`,
    { headers }
  );
  return deleteProfile;
};

export const getUpdateUser = async (user, userId, authToken) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  };
  const updateUserRes = await axios.post(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`,
    {
      username: user.username,
      description: user.description || null,
      pictureUrl: user.picture_url || null
    },
    {
      headers
    }
  );

  return updateUserRes;
};
