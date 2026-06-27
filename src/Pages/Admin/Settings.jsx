import React, { useState } from "react";

const tabs = [
  { key: "profile", label: "Profile" },
  { key: "security", label: "Security" },
  { key: "store", label: "Store Settings" },
  { key: "notifications", label: "Notifications" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Mehedi Hasan",
    email: "mehedi@gmail.com",
    phone: "+880 1XXX-XXXXXX",
  });

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [store, setStore] = useState({
    storeName: "Shops",
    currency: "USD ($)",
    address: "Dhaka, Bangladesh",
  });

  const [notifications, setNotifications] = useState({
    newOrder: true,
    lowStock: true,
    customerSignup: false,
    promotions: false,
  });

  const handleProfileChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });
  const handlePasswordChange = (e) =>
    setPassword({ ...password, [e.target.name]: e.target.value });
  const handleStoreChange = (e) =>
    setStore({ ...store, [e.target.name]: e.target.value });
  const toggleNotification = (key) =>
    setNotifications({ ...notifications, [key]: !notifications[key] });

  const inputClass =
    "w-full px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 outline-none focus:border-orange-400 transition-colors";
  const labelClass = "block text-[11px] font-medium text-gray-500 mb-1";

  return (
    <div className="space-y-4">
      <h1 className="text-base font-bold text-gray-800">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side - tab list */}
        <div className="lg:w-48 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-orange-500 text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right side - active tab content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          {/* Profile tab */}
          {activeTab === "profile" && (
            <div>
              <h2 className="font-bold text-gray-800 text-sm mb-0.5">
                Profile information
              </h2>
              <p className="text-[11px] text-gray-400 mb-5">
                Update your personal details here.
              </p>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-orange-400 text-white font-semibold text-xs flex items-center justify-center">
                  MH
                </div>
                <button className="text-[11px] border border-gray-200 rounded-lg px-3 py-1 text-gray-500 hover:bg-gray-50">
                  Change photo
                </button>
              </div>

              <div className="space-y-3 max-w-sm">
                <div>
                  <label className={labelClass}>Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition-colors">
                Save changes
              </button>
            </div>
          )}

          {/* Security tab */}
          {activeTab === "security" && (
            <div>
              <h2 className="font-bold text-gray-800 text-sm mb-0.5">
                Change password
              </h2>
              <p className="text-[11px] text-gray-400 mb-5">
                Update your password to keep your account secure.
              </p>

              <div className="space-y-3 max-w-sm">
                <div>
                  <label className={labelClass}>Current password</label>
                  <input
                    type="password"
                    name="current"
                    value={password.current}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>New password</label>
                  <input
                    type="password"
                    name="newPass"
                    value={password.newPass}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Confirm new password</label>
                  <input
                    type="password"
                    name="confirm"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </div>
              </div>

              <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition-colors">
                Update password
              </button>
            </div>
          )}

          {/* Store Settings tab */}
          {activeTab === "store" && (
            <div>
              <h2 className="font-bold text-gray-800 text-sm mb-0.5">
                Store settings
              </h2>
              <p className="text-[11px] text-gray-400 mb-5">
                Manage your store's general information.
              </p>

              <div className="space-y-3 max-w-sm">
                <div>
                  <label className={labelClass}>Store name</label>
                  <input
                    type="text"
                    name="storeName"
                    value={store.storeName}
                    onChange={handleStoreChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Currency</label>
                  <select
                    name="currency"
                    value={store.currency}
                    onChange={handleStoreChange}
                    className={inputClass}
                  >
                    <option>USD ($)</option>
                    <option>BDT (৳)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Store address</label>
                  <input
                    type="text"
                    name="address"
                    value={store.address}
                    onChange={handleStoreChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition-colors">
                Save changes
              </button>
            </div>
          )}

          {/* Notifications tab */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="font-bold text-gray-800 text-sm mb-0.5">
                Notification preferences
              </h2>
              <p className="text-[11px] text-gray-400 mb-5">
                Choose what you want to be notified about.
              </p>

              <div className="space-y-1 max-w-sm">
                {[
                  { key: "newOrder", label: "New order received" },
                  { key: "lowStock", label: "Low stock alert" },
                  { key: "customerSignup", label: "New customer signup" },
                  { key: "promotions", label: "Promotions and updates" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-xs text-gray-600">
                      {item.label}
                    </span>
                    <button
                      onClick={() => toggleNotification(item.key)}
                      className={`w-9 h-5 rounded-full transition-colors relative ${
                        notifications[item.key]
                          ? "bg-orange-500"
                          : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                          notifications[item.key] ? "translate-x-4" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;