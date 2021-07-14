import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {useHistory} from "react-router-dom";
function Login(){
    const history= useHistory();
    const [user,setUser]=useState('');
    const [password,setPass]=useState('');
    const { control, handleSubmit, formState } = useForm({
        // defaultValues: { ...initialValues },
        mode: "onChange",
      });
      const onSubmit = () => {
          localStorage.setItem('user',user);
          history.push('/search')
      };
    return(
        <>
        <html>
<head>
	<title>Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>

	<link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username" onChange={(event)=>{setUser(event.target.value)}}/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn" onClick={handleSubmit(onSubmit)}/>
                       
					</div>
				</form>
			</div>
			{/* <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div> */}
		</div>
	</div>
</div>
</body>
</html>
        </>
    )
}
export default Login;