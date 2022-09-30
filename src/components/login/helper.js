import { apiRequest } from "../../helpers/connections";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";
import { setLocalStorage } from "../../helpers/utils";

export const formHandler = async (
  e,
  setLoading,
  dispatch,
  setResendVerification,
  setEmail,
  navigate
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

    const data = await apiRequest("auth/login", body, "post");
    if (data.message === "User Not Verified") {
      setLoading(false);
      setEmail(body.email);
      setResendVerification(true);
    } else if (typeof data === "object") {
      if (data.user && data.user.isverified) {
        const auth = {};
        auth.state = true;
        auth.token = data.token;
        auth.user = data.user;
        dispatch(authSliceActions.setLoggedIn(auth));
        setLocalStorage("expiry", new Date().getTime() + 3600000);
        dispatch(notificationActions.setMessage("Login Successful"));
        setLoading(false);

        if (data.user.level === "admin") {
          navigate("/gadmin");
        }
      } else {
        dispatch(notificationActions.setMessage("Invalid LogIn Credentials"));
        setLoading(false);
      }
    } else {
      setLoading(false);

      dispatch(notificationActions.setMessage("Invalid LogIn Credentials"));
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

export const resendVer = async (setLoading, email, dispatch, setResent) => {
  const resent = JSON.parse(localStorage.getItem("resent"));

  if (typeof resent === "object" && resent.email === email) {
    setResent(true);
  } else {
    setLoading(true);
    const data = await apiRequest("auth/resend", { email }, "post");
    if (data.message) {
      dispatch(
        notificationActions.setMessage(
          "A verification email has been sent to " + email
        )
      );

      setResent(true);

      const item = {
        email,
        expiry: new Date().getTime() + 1800,
      };
      localStorage.setItem("resent", JSON.stringify(item));

      setLoading(false);
    } else {
      dispatch(
        notificationActions.setMessage("An error occurred while sending email")
      );

      setLoading(false);
    }
  }
};
