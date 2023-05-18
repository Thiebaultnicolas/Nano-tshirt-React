import React from "react";
import { useRef } from "react";
import updateProduct from "../data/Update";

export const DasboardForm = ({ propsForm }) => {
  const form = useRef(0);
  const { id, Title, Price, Image } = propsForm;

  const handleSubmit = (e) => {
    console.log(form.current.Title.value);
    e.preventDefault();
    updateProduct(
      form.current.id.value,
      form.current.Title.value,
      form.current.Price.value,
      form.current.Image.value
    );
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input type="text" defaultValue={id} name="id" placeholder="Product ID" />
      <input
        type="text"
        defaultValue={Title}
        name="Title"
        placeholder="Title"
      />
      <input
        type="text"
        defaultValue={Price}
        name="Price"
        placeholder="Price"
      />
      <input
        type="text"
        value={propsForm.Image}
        name="Image"
        placeholder="Image URL"
      />
      <button type="submit">Update Product</button>
    </form>
  );
};
