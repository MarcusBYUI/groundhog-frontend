function numberWithCommas(x) {
  if (typeof x !== "number") {
    return x;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default numberWithCommas;
