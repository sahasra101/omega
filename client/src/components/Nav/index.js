import React from "react";

function Nav() {
  return (
    <nav>
		<ul>
    	<li><a href="/">
			Login
		</a></li>

		<li><a href="/dashboard">
			Dashboard
		</a></li>

		<li><a href="/research">
			Research
		</a></li>
		</ul>
    </nav>
  );
}

export default Nav;
