import { apiRequest } from "../../helpers/connections";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";

export const passwordReset = async (
  e,
  setLoading,
  dispatch,
  setResendVerification,
  setEmail
) => {
  e.preventDefault();

  setLoading(true);
  const form = new FormData(e.target);
  const strongPassword = new RegExp(
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{6,16}$/
  );
  if (strongPassword.test(form.get("password"))) {
    const body = {};
    for (const key of form.keys()) {
      body[key] = form.get(key);
    }

    const data = await apiRequest("auth/reset", body, "post");
    if (data.message === "Your password has been updated.") {
      //back to login view
      dispatch(authSliceActions.setLoginPop(true));
      dispatch(authSliceActions.setResetPop(false));
      setLoading(false);

      dispatch(notificationActions.setMessage(data.message));
    } else {
      setLoading(false);

      dispatch(notificationActions.setMessage(data.message));
    }
  } else {
    dispatch(
      notificationActions.setMessage(
        "Password must have minimum of 6 characters, must contain capital letter, small letter, number and special character"
      )
    );

    setLoading(false);
  }
};

export const formHandler = async (
  e,
  setLoading,
  dispatch,
  setResent,
  setCodeSent
) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const email = form.get("email");

  const resent = JSON.parse(localStorage.getItem("resent"));
  if (resent !== null && resent.email === email) {
    setResent(true);
  } else {
    setLoading(true);
    const data = await apiRequest("auth/recover", { email }, "post");
    if (data.status === 200) {
      setResent(true);
      setCodeSent(true);

      const item = {
        email,
        expiry: new Date().getTime() + 1800,
      };
      localStorage.setItem("resent", JSON.stringify(item));

      dispatch(
        notificationActions.setMessage(
          "A verification email has been sent to " + email
        )
      );

      setLoading(false);
    } else {
      dispatch(notificationActions.setMessage(data.message));
      setLoading(false);
    }
  }
};
