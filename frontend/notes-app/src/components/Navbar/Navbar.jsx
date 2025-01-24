import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const isToken = localStorage.getItem("token");

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    handleClearSearch();
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow min-h-[4rem]">
      {/* Logo Section */}
      <h2 className="text-xl font-medium text-black py-2 cursor-pointer " onClick={() => window.location.reload()}>DAILEX</h2>

      {/* Centered Search Bar with 20px margin left and right */}
      {isToken && (
        <div className="flex-1 flex justify-center ml-5 mr-5">
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>
      )}

      {/* Profile Info Section */}
      {isToken && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  );
};

export default Navbar;
