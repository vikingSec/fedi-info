import * as React from 'react'
import { Link } from 'react-router-dom';
import Style from './Style'
function Header(){
    return(
        <div style={Style.containerstyle}>

            <div style={Style.linkcontainerstyle}>
                
                <Link to={"/"}><h3>Home</h3></Link>
                <Link to={"/about"}><h3>About</h3></Link>
                <h3>Blah</h3>

            </div>
            <button style={Style.buttonstyle} href="https://checkout.stripe.com/c/pay/cs_live_a1cOz7A2btEWJUXcGwQ6zIh9mrxta0gUXAsD4a6agpUpff61EHHJWtG4J6#fidkdWxOYHwnPyd1blppbHNgWjA0TGJ8T1JPdEg2NVUxQVNCTWdQYDVCM0JfaG1XVmE0cVU8QExHb2R%2Fb2p0a1xqfFRiYlB2Q1U1QHBUTklddW5QdTNTV3dcTX12dEF1VDZkY3Z%2Ff3BKVW5hNTVAb1xONjN0QycpJ3VpbGtuQH11anZgYUxhJz8nZ0xcYVBVYDVBPX9MYWNkPXJyJ3gl">Donate</button>
        </div>

    );

}
export default Header;
