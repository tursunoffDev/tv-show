import { useSelector } from "react-redux";

export default function UseAuthListener() {
  const user = useSelector((state) => state.firebase.auth);
  return user;
}
