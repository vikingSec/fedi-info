import * as React from 'react'
import Styles from './Styles'
import './CSS_Styles.css'
function Footer(){
    return(
    <div style={Styles.bodystyle}>
        <div>
            <p className="project-description">This application was built live on <a href="https://youtube.com/@valhalla_dev">YouTube</a> and <a href="https://twitch.tv/valhalla_dev">Twitch</a></p><br/>
            <p className="donate-description">This application was made open source and free of charge, if you'd like to donate, you can do so via Stripe <a href="https://checkout.stripe.com/c/pay/cs_live_a1cOz7A2btEWJUXcGwQ6zIh9mrxta0gUXAsD4a6agpUpff61EHHJWtG4J6#fidkdWxOYHwnPyd1blppbHNgWjA0TGJ8T1JPdEg2NVUxQVNCTWdQYDVCM0JfaG1XVmE0cVU8QExHb2R%2Fb2p0a1xqfFRiYlB2Q1U1QHBUTklddW5QdTNTV3dcTX12dEF1VDZkY3Z%2Ff3BKVW5hNTVAb1xONjN0QycpJ3VpbGtuQH11anZgYUxhJz8nZ0xcYVBVYDVBPX9MYWNkPXJyJ3gl">Stripe</a></p>
        </div>
       <div style={Styles.socialstyle}>
            <h3 style={Styles.socialheader}>Socials</h3>
            <p>Mastodon</p>
            <p>Twitter</p>
            <p>YouTube</p>
            <p>Twitch</p>    
            <p>Blog</p>
        </div>

    </div>

    );

}

export default Footer;
