import React from "react";

function LoginForm() {
  return (
    <form>
		Username:
		<input type="text"/>
		<br/>
		Password:
		<input type="text"/>
		<br/>
		<input type="submit" value="Submit"/>
	</form>
  );
}

export default LoginForm;
