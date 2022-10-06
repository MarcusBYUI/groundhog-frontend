import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppPagination from "../../../../components/pagination/pagination";
import { apiRequest } from "../../../../helpers/connections";
import { notificationActions } from "../../../../store/notification/notification";
import styles from "./paymentDue.module.css";

const PaymentDue = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);

  const { constractAction } = useSelector((state) => state.notification);

  const [fetchedData, setFetchedData] = useState([]);

  const updateUser = async (id, amount) => {
    const data = await apiRequest(
      "user",
      { userid: id, amount },
      "put",
      authState.loggedIn
    );
    if (data.status === 200) {
      dispatch(notificationActions.setContractAction());

      dispatch(notificationActions.setMessage("Update Successful"));
    } else {
      dispatch(notificationActions.setMessage("An error occured"));
    }
  };

  const handlePullCSV = async (e) => {
    const response = await axios({
      method: "get",
      url: "https://api.gophermines.com/user/pending",
      headers: {
        Authorization: `Bearer ${authState.loggedIn.token}`,
      },
      responseType: "blob",
    });

    const blob = response.data;

    // 2. Create blob link to download
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `payments.csv`);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await apiRequest(
        "user/users",
        undefined,
        undefined,
        authState.loggedIn
      );
      setFetchedData(data);
    };
    getData();
  }, [authState.loggedIn, constractAction]);

  return (
    <>
      <div className={styles.userContainer}>
        <div>
          <div className={styles.Header}>
            <p>Address</p>
            <p>Amount(USDC)</p>
            <p>Action</p>
          </div>
          <hr />
        </div>
        {userData &&
          userData.map((item) => {
            return (
              <div key={item._id}>
                {item.pendingPaid > 0 && (
                  <>
                    <div className={styles.Row}>
                      <span>{item.address}</span>
                      <span>{item.pendingPaid}</span>
                      <img
                        onClick={() => updateUser(item._id, item.pendingPaid)}
                        src={require("../../../../assets/paid.png")}
                        alt="delete"
                      />
                    </div>
                    <hr />
                  </>
                )}
              </div>
            );
          })}
        <button onClick={handlePullCSV} className={styles.paymentsButton}>
          Get Pending CSV
        </button>
      </div>

      <div className={styles.paginationContainer}>
        <AppPagination callback={setUserData} rawData={fetchedData} />
      </div>
    </>
  );
};

export default PaymentDue;
