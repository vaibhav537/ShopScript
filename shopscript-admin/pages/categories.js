import Layout from "@/components/Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { toastConfig } from "@/config/toastConfig";
import { withSwal } from "react-sweetalert2";
import { RxCross1 } from "react-icons/rx";

function Categories({ swal }) {
  const [name, setName] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  const [properties, setProperties] = useState([]);

  function FetchCategories() {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }
  useEffect(() => {
    FetchCategories();
  }, []);

  async function saveCategory(event) {
    event.preventDefault();
    const data = {
      name,
      parentCategory,
      properties: properties.map((p) => ({
        name: p.name,
        values: p.values.split(","),
      })),
    };
    if (editedCategory) {
      data._id = editedCategory._id;
      const res = await axios.put("/api/categories", data);
      if (res.statusText === "OK") {
        toast.success("Category Updated !!.", toastConfig);
        setName("");
        setParentCategory("");
        setProperties([]);
        FetchCategories();
        setEditedCategory(null);
      }
    } else {
      const res = await axios.post("/api/categories", data);
      if (res.statusText === "OK") {
        toast.success("Category Added !!.", toastConfig);
        setName("");
        setParentCategory("");
        setProperties([]);
        FetchCategories();
      }
    }
  }

  function deleteCategory(category) {
    swal
      .fire({
        title: "Are You Sure?",
        text: `Do you want to delete ${category.name} ?`,
        didOpen: () => {
          const swalPopup = swal.getPopup();
          swalPopup.style.backgroundColor = "#334155";
          swalPopup.style.color = "#fff";
        },
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#FF2F64",
        confirmButtonText: "Delete",
        reverseButtons: true,
        icon: "question",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const { _id } = category;
          const res = await axios.delete("/api/categories?_id=" + _id);
          if (res.statusText === "OK") {
            toast.success("Category Deleted !!.", toastConfig);
            FetchCategories();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(
      category.properties.map(({ name, values }) => ({
        name,
        values: values.join(","),
      }))
    );
  }

  function addProperty() {
    console.log("RUN");
    setProperties((prev) => {
      return [...prev, { name: "", values: "" }];
    });
  }

  function handlePropertyNameChange(index, property, newName) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    });
  }

  function handlePropertyValuesChange(index, property, newValues) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    });
  }

  function removeProperty(indexToRemove) {
    setProperties((prev) => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
    });
  }
  return (
    <Layout>
      <Toaster />
      <h1 className="text-xl">Categories</h1>
      <label className={"text-lg"}>
        {editedCategory
          ? `Edit Category : ${editedCategory.name}`
          : "Create New Category Name"}
      </label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            type="text"
            className="mt-1"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            onChange={(e) => setParentCategory(e.target.value)}
            value={parentCategory}
            className="border border-slate-300 bg-slate-700 hover:bg-slate-600 text-black mr-5 p-2 h-10 mt-1 rounded-lg ring-1 focus:ring-2 focus:ring-slate-300 transition-all duration-500 ring-slate-500  outline-none focus:outline-none"
          >
            <option value="">No Parent Category</option>
            {categories.length > 0 &&
              categories.map((category, index) => {
                return (
                  <option
                    key={index}
                    className="bg-white p-2 border-b text-slate-300 dark:bg-gray-800 dark:border-gray-700"
                    value={category._id}
                  >
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="properties" className="text-lg block">
            Properties
          </label>
          <button type="button" onClick={addProperty} className="btn-secondary">
            Add new Property
          </button>
          {properties.length > 0 &&
            properties.map((property, index) => {
              return (
                <div
                  className="flex gap-2 mt-3"
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  key={index}
                >
                  <input
                    type="text"
                    value={property.name}
                    onChange={(event) =>
                      handlePropertyNameChange(
                        index,
                        property,
                        event.target.value
                      )
                    }
                    placeholder="property name (example: color)"
                  />{" "}
                  <span className="mt-2"> :</span>
                  <input
                    type="text"
                    value={property.values}
                    onChange={(event) =>
                      handlePropertyValuesChange(
                        index,
                        property,
                        event.target.value
                      )
                    }
                    placeholder="values, comma seprated"
                  />
                  <button
                    className="flex items-center justify-center mb-2"
                    onClick={() => removeProperty(index)}
                    type="button"
                  >
                    <RxCross1 className="text-slate-300 hover:text-black" />
                  </button>
                </div>
              );
            })}
        </div>

        <button type="submit" className="btn-default">
          Save
        </button>
        {editedCategory && (
          <button
            onClick={() => {
              setEditedCategory(null);
              setName("");
              setParentCategory("");
              setProperties([]);
            }}
            className="btn-default"
          >
            Cancel
          </button>
        )}
      </form>
      {!editedCategory && (
        <div className="relative w-[70rem] z-10 md:mx-auto mt-10 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[70rem] text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Parent Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 &&
                categories.map((category, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {category.name}
                      </td>
                      <td className="px-6 py-4">
                        {category.parent
                          ? category.parent.name
                          : "No Parent Category"}
                      </td>
                      <td className="px-6 py-4 w-40">
                        <div className="flex">
                          <button
                            className="btn-default"
                            onClick={() => editCategory(category)}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCategory(category)}
                            className="btn-default"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => <Categories swal={swal} />);
