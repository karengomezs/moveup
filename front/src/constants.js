const useLocal = false;
const local = "http://localhost:8080/api";
const aws = "http://ec2-3-141-164-5.us-east-2.compute.amazonaws.com:8080/api";
export const host = useLocal ? local : aws;
// eslint-disable-next-line
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
