import React from "react";

const Alert = () => {

  const appendAlert = (message, type) => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

    alertPlaceholder.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="alert alert-${type} alert-dismissible" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;

    alertPlaceholder.append(wrapper);
  };

  return (
    <div>
      <div id="liveAlertPlaceholder"></div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => appendAlert("Nice, you triggered this alert message!", "success")}
      >
        Show live alert
      </button>
    </div>
  );
};

export default Alert;