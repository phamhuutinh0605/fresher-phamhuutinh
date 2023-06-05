import { ChangeEvent, useState } from 'react';

const TestComponent = () => {
  const [errorMess, setErrorMess] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsernameValue = (e: React.ChangeEvent<EventTarget>) => {
    const value = (e.target as HTMLInputElement).value;
    setUserName(value)
    console.log("username", username)
  }
  const handleChangePasswordValue = (e: React.ChangeEvent<EventTarget>) => {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value)
    console.log("password", password)
  }

  const handleLogin=()=>{
    if(!username||!password){
      setErrorMess(true)
    }else{
      setErrorMess(false)
    }
  }
  return (
    <form action="" className="">
      <h1>Đăng nhập</h1>
      <div className="">
        <input type="text" placeholder="Tài khoản" value={username} onChange={handleChangeUsernameValue} />
      </div>
      <div className="">
        <input type="password" placeholder="Mật khẩu" value={password} onChange={handleChangePasswordValue} />
      </div>
      <button disabled={!username || !password} onClick={handleLogin}>
        ĐĂNG NHẬP
      </button>
      <span data-testid="error" style={{ visibility: errorMess ? "visible" : "hidden" }}>Something went wrong</span>
      
    </form>
  )
}

export default TestComponent