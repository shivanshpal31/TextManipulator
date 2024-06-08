import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lo=word.toLowerCase();
    return lo.charAt(0).toUpperCase() + lo.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-success alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
