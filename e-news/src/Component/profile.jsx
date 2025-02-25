import '../styles/profile.css'; // Ensure the path is correct


// const ProfileDetails = () => {
//   return (
//     <div className="profile-container">
//       <header className="profile-header">
//         <h1>About You</h1>
//         <h2>Profile Details</h2>
//       </header>
//       <p className="profile-description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid, fuga quam saepe earum debitis sapiente.
//       </p>
//       <div className="profile-content">
//         <div className="profile-picture">
//           <img src="profile-pic-url" alt="Profile" />
//           <h3>MD ASRAF ALI</h3>
//         </div>
//         <button className="edit-button">Edit</button>
//         <div className="profile-details">
//           <h4>Profile Details</h4>
//           <div className="profile-field">
//             <label>First Name</label>
//             <input type="text" value="MD" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Middle Name</label>
//             <input type="text" value="ASRAF" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Last Name</label>
//             <input type="text" value="ALI" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Email</label>
//             <input type="email" value="mail692@pku.ac.in" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Phone</label>
//             <input type="text" value="7781826301" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>DOB</label>
//             <input type="text" value="30-12-2002" readOnly />
//           </div>
//         </div>
//         <div className="login-details">
//           <h4>Login Details</h4>
//           <div className="profile-field">
//             <label>Email</label>
//             <input type="email" value="mail692@pku.ac.in" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Phone</label>
//             <input type="text" value="7781826301" readOnly />
//           </div>
//           <div className="profile-field">
//             <label>Password</label>
//             <input type="password" value="************" readOnly />
//           </div>
//           <a href="#" className="change-password">Change Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetails;


const ProfileForm = () => {
    return (
     
        <div className="profile-content">
          <div className="image-section">
            <img src="/assets/A3.png" alt="Profile" />
            <button className="edit-button">Edit</button>
          </div>
  
          <div className="details-section">
            <div className="profile-details">
              <h3>Profile Details</h3>
              <div className="detail-item">
                <span className="label">First Name</span>
                <span className="value">MD ASRAF ALI</span>
              </div>
              <div className="detail-item">
                <span className="label">Middle Name</span>
                <span className="value">ASRAF</span>
              </div>
              <div className="detail-item">
                <span className="label">Last Name</span>
                <span className="value">DOR</span>
              </div>
              <div className="detail-item">
                <span className="label">Email</span>
                <span className="value">male978@vlu.ac.in</span>
              </div>
              <div className="detail-item">
                <span className="label">Phone</span>
                <span className="value">7781826301</span>
              </div>
              <div className="detail-item">
                <span className="label">Date of Birth</span>
                <span className="value">30-12-2002</span>
              </div>
            </div>
  
            <div className="login-details">
              <h3>Login Details</h3>
              <div className="detail-item">
                <span className="label">Email</span>
                <span className="value">male978@vlu.ac.in</span>
              </div>
              <div className="detail-item">
                <span className="label">Phone</span>
                <span className="value">7781826301</span>
              </div>
              <div className="detail-item">
                <span className="label">Password</span>
                <span className="value">********</span>
              </div>
              <button type="button">Change Password</button>
            </div>
          </div>
        </div>
   
    );
  };
  
  export default ProfileForm;