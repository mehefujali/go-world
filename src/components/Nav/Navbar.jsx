
const Navbar = () => {
      return (
            <nav className=" container mx-auto">
                  <div className="navbar bg-base-100">
                        <div className="flex-1">
                              <a className="btn btn-ghost text-xl">GO WORLD</a>
                        </div>
                        <div className="flex-none gap-2">
                              <div className="form-control">
                                    <input type="text" placeholder="Search.." className="input input-bordered w-24 md:w-auto focus:outline-none" />
                              </div>
                              <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                          <div className="w-10 rounded-full">
                                                <img
                                                      alt="Mehefuj Ali"
                                                      src="https://yt3.googleusercontent.com/jxi6GJOLSWz1oaHTBFYWYhT8FD5pwMqlyHvm2TWIGJOR7qgDK5p0luuCzDJKTz3vpDzyvlW2=s900-c-k-c0x00ffffff-no-rj" />
                                          </div>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <li>
                                                <a className="justify-between">
                                                      Profile
                                                      <span className="badge">New</span>
                                                </a>
                                          </li>
                                          <li><a>Settings</a></li>
                                          <li><a>Logout</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;