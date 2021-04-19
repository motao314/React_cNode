import { useSelector } from "react-redux";

function useUser(){
  const {user} = useSelector(state=>state.user);
  if(user.authorization){
    return user;
  }
  return null;
}

export default useUser;