// 使用 Mock
import Mock from "mockjs";

export default Mock.mock("/fetchClientVersion", "get", {
  success: true,
  message: "success",
  data: {
    name: "create-react-app-internet",
    version: 3.1
  }
});
