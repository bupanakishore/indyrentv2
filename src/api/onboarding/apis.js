import axios from "axios";

// const endpoint = "https://637260270785877861928909.mockapi.io/api/mock/";
const endpoint = "http://localhost:5000";

// function that makes the api request and returns a Promise for response
export const sendOtp = ({ phone, userId, role }) => {
  console.log("sending otp to phone", phone);
  return axios({
    method: "post", //post
    url: `https://indyrent-v2.onrender.com/api/auth/generate-OTP`,
    data: {
      user_type: role,
      otp_type: "phone",
      phone: phone,
    },
  });
};

export const createNewUser = ({ phone, role }) => {
  console.log("creating new User", phone, role);
  return axios({
    method: "post", //post
    url: `${endpoint}/auth/createnewuser`,
    data: {
      phone: phone,
      role: role,
    },
  });
};

export const sendOtpEmail = ({ email, userId, role }) => {
  console.log("sending otp to email", email);
  return axios({
    // method: "get", //post
    // url: `${endpoint}/auth/getotp?channel=email&target=${email.toString()}&userId=${userId}`,
    method: "post",
    url: `https://indyrent-v2.onrender.com/api/auth/generate-OTP`,
    data: {
      user_type: role,
      otp_type: "email",
      email: email,
    },
  });
};

export const checkOtp = ({ otp, channel, phone, role }) => {
  console.log("checking otp", otp);
  return axios({
    method: "post", //post
    url: `https://indyrent-v2.onrender.com/api/auth/validate-OTP`,
    data: {
      user_type: role,
      otp_type: channel,
      phone: phone,
      otp: otp,
    },
  });
};

export const checkOtpV2 = ({ otp, email, channel, role }) => {
  console.log("checking otp", otp);
  return axios({
    method: "post", //post
    url: `https://indyrent-v2.onrender.com/api/auth/validate-OTP`,
    data: {
      user_type: role,
      otp_type: channel,
      email: email,
      otp: otp,
    },
  });
};

export const checkUSPSAddress = ({ address, userId }) => {
  console.log("checking address", address, userId);
  return axios({
    method: "post", //post
    url: `https://indyrent-v2.onrender.com/api/auth/validate-usps`,
    data: {
      address1: address.line1,
      address2: address.line2,
      city: address.city,
      zipcode: address.zipcode,
    },
  });
};

export const addUSPSAddress = ({ address, userId }) => {
  console.log("adding address to db", address, userId);
  return axios({
    method: "post", //post
    url: `${endpoint}/auth/addaddress`,
    data: {
      address: address,
      userId: userId,
    },
  });
};

export const postUserDetails = ({ data, userId }) => {
  console.log("adding user details to db", data);
  return axios({
    method: "post", //post
    url: `${endpoint}/auth/updateuser`,
    data: {
      name: data.name,
      email: data.email,
      userId: userId,
    },
  });
};

// landlord

export const getLandlordProperties = (userId) => {
  return axios({
    method: "get",
    url: `${endpoint}/landlord/getlandlordprops?userId=${userId}`,
  });
};

export const addNewProperty = ({ userId, address }) => {
  return axios({
    method: "post",
    url: `${endpoint}/landlord/newproperty`,
    data: {
      userId: userId,
      address: address,
    },
  });
};

//tenant application

export const getFirstQuestion = () => {
  return axios({
    method: "get",
    url: `${endpoint}/tenant/startapplication`,
  });
};

export const submitAnswer = () => {
  return axios({
    method: "get",
    url: `${endpoint}/tenant/submitanswer`,
  });
};

export const getNextQuestion = (nextId) => {
  return axios({
    method: "get",
    url: `${endpoint}/tenant/nextquestion?nextId=${nextId}`,
  });
};
