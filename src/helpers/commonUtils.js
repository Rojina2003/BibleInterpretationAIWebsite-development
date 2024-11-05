// import store from "../redux/store";

export const getHeaders = () => {
  // const token = store?.getState().auth?.userData?.token || localStorage.getItem('token') || ''
  return {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  };
};

export const getFormHeaders = () => {
  return {
    "Content-Type": "multipart/form-data",
  };
};

export function capitalizeFirstLetter(string = "") {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

export const calculateAge = (dob) => {
  // Split the input string into day, month, and year
  if (dob) {
    const [day, month, year] = dob.split("-").map(Number);

    // Create a Date object for the date of birth
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date

    // Get the current date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birth date has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    return age;
  } else {
    return 0;
  }
};

export const formatObject = (object = {}) => {
  let copyObj = {};
  for (const property in object)
    if (object[property] !== undefined) copyObj[property] = object[property];
  return copyObj;
};

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
