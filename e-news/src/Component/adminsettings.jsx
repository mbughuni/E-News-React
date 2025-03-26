import { useState } from "react";
import { Switch } from "@mui/material"; // Using Material UI Switch for better UX
import "./adminsettings.css"; 

const AdminSettings = () => {
  const [siteName, setSiteName] = useState("E-News Channel");
  const [contactEmail, setContactEmail] = useState("admin@enews.com");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: false,
  });

  return (
    <div className="settings-container">
      <h2>Admin Settings</h2>
      
      {/* General Settings */}
      <div className="settings-section">
        <h3>General Settings</h3>
        <div className="setting-item">
          <label>Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>
        <div className="setting-item">
          <label>Contact Email</label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <div className="setting-toggle">
          <span>Maintenance Mode</span>
          <Switch
            checked={maintenanceMode}
            onChange={() => setMaintenanceMode(!maintenanceMode)}
          />
        </div>
      </div>

      {/* Security Settings */}
      <div className="settings-section">
        <h3>Security Settings</h3>
        <div className="setting-toggle">
          <span>Enable Two-Factor Authentication (2FA)</span>
          <Switch />
        </div>
        <div className="setting-toggle">
          <span>Enable CAPTCHA on Login</span>
          <Switch />
        </div>
      </div>

      {/* Theme & Appearance */}
      <div className="settings-section">
        <h3>Theme & Appearance</h3>
        <div className="setting-toggle">
          <span>Enable Dark Mode</span>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <h3>Notification Settings</h3>
        <div className="setting-toggle">
          <span>Enable Email Notifications</span>
          <Switch
            checked={notificationSettings.email}
            onChange={() =>
              setNotificationSettings({
                ...notificationSettings,
                email: !notificationSettings.email,
              })
            }
          />
        </div>
        <div className="setting-toggle">
          <span>Enable Push Notifications</span>
          <Switch
            checked={notificationSettings.push}
            onChange={() =>
              setNotificationSettings({
                ...notificationSettings,
                push: !notificationSettings.push,
              })
            }
          />
        </div>
      </div>

      <button className="save-button" onClick={() => alert("Settings Saved!")}>
  Save Settings
</button>
    </div>
  );
};

export default AdminSettings;
