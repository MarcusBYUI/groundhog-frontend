import React, { useState, useMemo } from "react";
import AppPagination from "../../../../components/pagination/pagination";

import styles from "./users.module.css";

const Users = () => {
  const rawData = useMemo(
    () => [
      {
        id: 1,
        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 2,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 3,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 4,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John2 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 5,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 6,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 7,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "Joh2n Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 8,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 9,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 10,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 11,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 12,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John2 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 13,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John3 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 14,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John3 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 15,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 16,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 17,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 18,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "Joh3n Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 19,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 20,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 21,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
      {
        id: 22,

        address: "0xdgf6t4yt8654ytrdfvvr86tg4r",
        name: "John1 Doe",
        email: "example@gmail.com",
        haddress: "000 Hog Camp Road Oak Lawn, IL 00000",
        tel: "+1 465 454 4667",
      },
    ],
    []
  );
  const [userData, setUserData] = useState(null);
  return (
    <div className={styles.userContainer}>
      <div>
        <div className={styles.Header}>
          <p>Address</p>
          <p>Name</p>
          <p>Email</p>
          <p>Home</p>
          <p>Phone</p>
          <p>Action</p>
        </div>
        <hr />
      </div>
      {userData &&
        userData.map((item, index) => {
          return (
            <div key={item.id + index}>
              <div className={styles.Row}>
                <span>{item.address}</span>
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span>{item.haddress}</span>
                <span>{item.tel}</span>
                <img
                  src={require("../../../../assets/delete.png")}
                  alt="delete"
                />
              </div>
              <hr />
            </div>
          );
        })}
      <AppPagination callback={setUserData} rawData={rawData} />
    </div>
  );
};

export default Users;
