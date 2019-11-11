import React from 'react';
import {Link} from 'react-router-dom';


const Menu = ()=>{

return (

<div>

<ul>
<li>
<Link to="/">
Home</Link>


</li>

<li>
<Link to="About">
About Us</Link>


</li>
<li>
<Link to="Contact">
Contact Us</Link>


</li>
<li>
<Link to="Portfolio">
Portfolio</Link>

</li>

</ul>

</div>

)

}
export default Menu;