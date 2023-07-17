import React from "react";
import Form from "./Form";
import FormButtons from "./FormButtons";

import { useRef, memo } from "react";
import FormHeading from "./FormHeading";

const ExperienceForm = (props) => {
  console.log("Render work form");
  const itemsRef = useRef(null);

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first uage.
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  const handleInputChange = (e) => {
    // console.log("value: ", e.target.value);
    // console.log("column: ");
    const { name, value } = e.target;
    const { column } = e.target.dataset;
    const { index } = e.target.closest(".form-column").dataset;

    console.log({ column });
    const map = getMap();
    const node = map.get(+column);
    console.log({ node });
    // convert index from string to number
    const target = { index: +index, name, value };
    props.onChangeInputs(target);
  };

  const renderWorkInputs = () => {
    const { works } = props;

    return works.map((work, i) => {
      return (
        <div
          key={i}
          ref={(node) => {
            const map = getMap();
            if (node) {
              map.set(i, node);
            } else {
              map.delete(i);
            }
          }}
          data-index={i}
          className="form-column"
        >
          <input
            data-column={i}
            type="text"
            onChange={handleInputChange}
            id={`work-position-${i}`}
            placeholder="position"
            value={work.position}
            name="position"
          />
          <input
            data-column={i}
            type="text"
            onChange={handleInputChange}
            id={`work-company-${i}`}
            placeholder="company"
            value={work.company}
            name="company"
          />
          <input
            data-column={i}
            type="text"
            onChange={handleInputChange}
            id={`work-city-${i}`}
            placeholder="city"
            value={work.city}
            name="city"
          />
          <input
            data-column={i}
            type="text"
            onChange={handleInputChange}
            id={`work-from-${i}`}
            placeholder="from"
            value={work.from}
            name="from"
          />
          <input
            data-column={i}
            type="text"
            onChange={handleInputChange}
            id={`work-to-${i}`}
            placeholder="to"
            value={work.to}
            name="to"
          />
        </div>
      );
    });
  };

  return (
    <Form>
      <FormHeading title="Work Experience" />
      {renderWorkInputs()}
      <FormButtons
        formLength={props.works.length}
        onClickAdd={props.addWork}
        onClickDelete={props.deleteWork}
      />
    </Form>
  );
};

export default memo(ExperienceForm);
