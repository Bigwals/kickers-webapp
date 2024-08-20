import React from 'react'
// import '../Navbar/ResponsiveNavBar.css'
import Header from "../../components/Navbar/ResponsiveNavBar"
import Footer from "../Footer/Footer"

const PrivPolicy = () => {
  return (
    
    <div style={{width:'100%'}} >
      <Header/>
        <div className="bannerImage" style={{width:'100%',height:'400px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{textAlign:'center',fontSize:'50px',color:'white'}}>Privacy Policy</h1>
        </div>
     <div style={{width:'85%',margin:'auto'}}>
    <h3 style={{marginTop:'50px'}}><strong>Privacy Policy</strong></h3>
    <p style={{textAlign:'justify',marginTop:'30px'}}>This privacy policy applies to the Kickers app (hereby referred to as "Application") for mobile devices that was created by Muhammad Raheel (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>
    
    <h3 style={{marginTop:'20px'}}>Information Collection and Use</h3>
    <p>
    <p style={{marginTop:'20px',fontSize:'15px',fontFamily: 'Medium'}}>The Application collects information when you download and use it. This information may include information such as</p>
  <ul style={{paddingLeft:'40px', paddingTop:'20px'}}>
    <li>Your device's Internet Protocol address (e.g. IP address)</li>
    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
    <li> The time spent on the Application</li>
    <li>The operating system you use on your mobile device</li>
</ul>

    
    
    
   <p style={{paddingTop:'20px'}}> The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
   <ul style={{paddingLeft:'40px',paddingTop:'20px'}}>
        <li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
        <li> Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
        <li> Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
        
   </ul>

    
   
   
    
   <p style={{paddingTop:'20px'}}> The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
    
   <p style={{paddingTop:'20px'}}> For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to male. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
    
    <h3 style={{paddingTop:'20px'}}>Third Party Access</h3>
   <p style={{paddingTop:'20px'}}> Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
    
   <p style={{paddingTop:'20px'}}> Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
   <ul style={{paddingLeft:'40px',paddingTop:'20px'}}>
        <li><a href='#'>Google Play Service</a></li>
        <li><a href='#'>Google Analytics for Firebase</a></li>
        <li><a href='#'>Firebase Crashlytics</a></li>
        <li><a href='#'>Facebook</a></li>
   </ul>
    
    
    
    
    
    <p style={{paddingTop:'20px'}}>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
    <ul style={{paddingLeft:'40px', paddingTop:'20px'}}>
        <li> as required by law, such as to comply with a subpoena, or similar legal process;</li>
        <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
        <li> with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>    
    </ul>
    
    
   
    
    <h3 style={{paddingTop:'20px'}}>Opt-Out Rights</h3>
    <p style={{paddingTop:'20px'}}>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
    
    <h3 style={{paddingTop:'20px'}}>Data Retention Policy</h3>
    <p style={{paddingTop:'20px'}}> The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at bigwalstudio@gmail.com and they will respond in a reasonable time.
    </p>
    <h3 style={{paddingTop:'20px'}}>Children</h3>
    <p style={{paddingTop:'20px'}}>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>

   <p style={{paddingTop:'20px'}}> The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (bigwalstudio@gmail.com) so that they will be able to take the necessary actions.
    </p>
    <h3 style={{paddingTop:'20px'}}>Security</h3>
    <p style={{paddingTop:'20px'}}>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
    </p>
    <h3 style={{paddingTop:'20px'}}>Changes</h3>
    <p style={{paddingTop:'20px'}}>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
    </p>
    <p style={{paddingTop:'20px'}}>This privacy policy is effective as of 2024-04-04
    </p>
    <h3 style={{paddingTop:'20px'}}>Your Consent</h3>
    <p style={{paddingTop:'20px'}}>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
    </p>
    <h3 style={{paddingTop:'20px'}}>Contact Us</h3>
    <p style={{paddingTop:'20px', paddingBottom:'70px'}}>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href='https://www.bigwals.com'>bigwalstudio@gmail.com</a></p>
    </p>
    </div>
    <Footer/>
    </div>
    
  )
  
}

export default PrivPolicy