import React from "react";

function Header() {

    return (
      <div className="flex flex-col sm:flex-row justify-between p-5">
        <div className="self-center">
          <h1 className="text-3xl font-bold text-yellow-400 mb-3 sm:mb-0">
            Notes App
          </h1>
        </div>
      </div>
    );
  }

export default Header;