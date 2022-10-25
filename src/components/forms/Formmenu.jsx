import React, { useState, useRef } from "react";
import Select from "./Select";
import Input from "./Input";
import "../../../styles/sass/style.css";

const Formmenu = () => {
  const [field, setField] = useState("");

  const selectField = useRef([
    { value: "q", display: "Any Field / أي مُصطلح" },
    { value: "title", display: "Title / العنوان" },
    { value: "author", display: "Author / الكاتب" },
    { value: "category", display: "Category / فئة الموضوع" },
    { value: "publisher", display: "Publisher / الناشر" },
    { value: "pubplace", display: "Place of Publication / مكان النشر" },
    { value: "provider", display: "Provider / الشريك" },
    { value: "subject", display: "Subject / الموضوع" },
  ]);

  const selectScope = useRef([
    { value: "containsAny", display: "Contains Any / يحتوي على اي" },
    { value: "containsAll", display: "Contains All / يحتوي على كل" },
    { value: "matches", display: "Matches / يساوي" },
  ]);
  return (
    <div
      className="search_holder_advanced widget"
      dataName="search_form"
      dataScript='{ "js" : [ "search_form_adv.min.js" ] }'
      id="yui_3_18_1_1_1664553736321_66"
    >
      <form
        className="advanced"
        method="get"
        action="/aco/search"
        role="search"
        id="yui_3_18_1_1_1664553736321_65"
      >
        <div className="fieldset group1" id="yui_3_18_1_1_1664553736321_64">
          <Select
            type="field-select"
            ariatype="Attribute"
            choices={selectField.current}
          />
          <Select
            type="scope-select"
            ariatype="Boolean Operator"
            choices={selectScope.current}
          />
          <Input placeholder={field}/>
          <div className="submit-hold">
            <input type="submit" className="submit-search" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formmenu;
