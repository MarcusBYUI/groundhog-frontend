import React from "react";

import styles from "./paymentsHistory.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const PaymentsHistory = () => {
  const authState = useSelector((state) => state.auth);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    let body = {};
    for (const key of form.keys()) {
      body[key] = form.get(key);
    }

    const response = await axios({
      method: "post",
      url: "https://api.gophermines.com/user/payments",
      headers: {
        Authorization: `Bearer ${authState.loggedIn.token}`,
      },
      data: body,
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
  return (
    <form className={styles.paymentsGrid} onSubmit={handleSubmission}>
      <label>
        From
        <input name="from" type="date" required />
      </label>
      <label>
        To
        <input name="to" type="date" required />
      </label>
      <button type="submit" className={styles.paymentsButton}>
        Get Payments
      </button>
    </form>
  );
};

export default PaymentsHistory;
