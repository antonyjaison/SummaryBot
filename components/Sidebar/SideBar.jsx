"use client";

import sidebar from "./SideBar.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = () => {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setUpProviders();
  }, []);

  return (
    <section className={sidebar.sidebar_wrapper}>
      <div className={sidebar.top}>
        <button>
          New Summary
          <span>
            <AddCircleOutlineIcon />
          </span>
        </button>
      </div>
      <hr />
      <div className={sidebar.middle}>
        <h2>Previous Summeries</h2>
      </div>
      <hr />
      <div className={sidebar.bottom}>
        {session?.user && (
          <div className={sidebar.user}>
            <h3>{session.user.name}</h3>
            <Image
              className={sidebar.user_image}
              src={session.user.image}
              width={40}
              height={40}
            />
          </div>
        )}

        {session?.user ? (
          <>
            <div onClick={() => signOut()} className={sidebar.settings}>
              <LogoutIcon className={sidebar.settings_icon} />
              <p>Logout</p>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div
                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                  className={sidebar.settings}
                >
                  <LoginOutlinedIcon className={sidebar.settings_icon} />
                  <p>Signup/Login</p>
                </div>
              ))}
          </>
        )}

        <div className={sidebar.settings}>
          <SettingsOutlinedIcon className={sidebar.settings_icon} />
          <p>Settings</p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
