import React, { useState } from "react";
import "../scss/compaignform.scss";
import { useDispatch } from "react-redux";
import { addNewCompaign } from "../redux/compaignSlice";
import Toast from "../utils/reusable/Toast";

const CompaignForm = () => {
  const [compaign, setCompaign] = useState({
    name: { value: "", error: "" },
    description: { value: "", error: "" },
    launchDate: { value: "", error: "" },
  });

  const [showToast, setShowToast] = useState(false);
  const handleOpenToast = () => {
    setShowToast(true);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompaign((prev) => {
      return { ...prev, [name]: { ...prev[name], value } };
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (!value.trim()) {
      setCompaign((prev) => ({
        ...prev,
        [name]: { ...prev[name], error: "Field is required" },
      }));
    } else {
      setCompaign((prev) => ({
        ...prev,
        [name]: { ...prev[name], error: "" },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    Object.keys(compaign).forEach((fieldName) => {
      const value = compaign[fieldName].value;

      if (value === "") {
        formIsValid = false;
        setCompaign((prev) => ({
          ...prev,
          [fieldName]: { ...prev[fieldName], error: "Field is required" },
        }));
      }
    });

    // If any field is invalid, return early
    if (!formIsValid) {
      return;
    }
    const formattedDate = new Date(compaign.launchDate.value)
      .toISOString()
      .split("T")[0];

    console.log("first", formattedDate);

    dispatch(
      addNewCompaign({
        name: compaign.name.value,
        description: compaign.description.value,
        launchDate: compaign.launchDate.value,
      })
    );
    handleOpenToast();
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={compaign.name.value}
          onChange={handleChange}
          placeholder="Compaign Name"
          onBlur={handleBlur}
        />
        {compaign.name.error && (
          <p className="error-text">{compaign.name.error}</p>
        )}
        <textarea
          rows="4"
          name="description"
          value={compaign.description.value}
          onChange={handleChange}
          placeholder="Description"
          onBlur={handleBlur}
        />
        {compaign.description.error && (
          <p className="error-text">{compaign.description.error}</p>
        )}
        <input
          type="date"
          name="launchDate"
          value={compaign.launchDate.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className="date"
        />
        {compaign.launchDate.error && (
          <p className="error-text">{compaign.launchDate.error}</p>
        )}
        <button disabled={showToast} type="submit">
          submit
        </button>
      </form>
      {showToast && (
        <Toast
          message="Compaign successfully created"
          closeFn={handleCloseToast}
          delay={1000}
        />
      )}
    </div>
  );
};

export default CompaignForm;
