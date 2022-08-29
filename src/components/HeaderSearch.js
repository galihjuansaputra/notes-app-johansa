import React from "react";

class HeaderSearch extends React.Component {
  render() {
    return (
        <div className="flex flex-col sm:flex-row justify-between p-5">
          <div className="self-center">
            <h1 className="text-3xl font-bold text-yellow-400 mb-3 sm:mb-0">Notes App</h1>
          </div>
          <div className="self-center">
            <form>
              <input
                type="text"
                className="p-2 w-64"
                placeholder="Cari catatan..."
              />
            </form>
          </div>
        </div>
    );
  }
}

export default HeaderSearch;