import React from "react"

const AccordionComponent = ({ title, id, children }) => (
  <div className="tab">
    <input type="checkbox" id={"tab" + id} hidden />
    <label htmlFor={"tab" + id} className="tab__title">
      {title}
    </label>
    <div className="tab__content">{children}</div>
  </div>
)

export default AccordionComponent
