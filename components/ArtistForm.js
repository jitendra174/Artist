"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const categoriesList = ["Singer", "Dancer", "DJ", "Speaker"];
const languageList = ["Hindi", "English", "Telugu", "Tamil"];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Artist submitted:", data);
    alert("Form submitted! Check console.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-dark-card text-dark-text shadow-lg p-6 rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-dark-accent mb-4">Onboard Artist</h2>

      {/* Name */}
      <div>
        <label className="block mb-1">Name</label>
        <input
          {...register("name")}
          className="w-full bg-dark-bg border border-gray-600 p-2 rounded text-white"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1">Bio</label>
        <textarea
          {...register("bio")}
          className="w-full bg-dark-bg border border-gray-600 p-2 rounded text-white"
        />
        {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
      </div>

      {/* Categories */}
      <div>
        <label className="block mb-1">Category</label>
        <div className="space-y-1">
          {categoriesList.map((cat) => (
            <label key={cat} className="text-sm flex items-center gap-2">
              <input type="checkbox" value={cat} {...register("categories")} />
              {cat}
            </label>
          ))}
        </div>
        {errors.categories && (
          <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>
        )}
      </div>

      {/* Languages */}
      <div>
        <label className="block mb-1">Languages Spoken</label>
        <div className="space-y-1">
          {languageList.map((lang) => (
            <label key={lang} className="text-sm flex items-center gap-2">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>
        )}
      </div>

      {/* Fee */}
      <div>
        <label className="block mb-1">Fee Range</label>
        <select
          {...register("fee")}
          className="w-full bg-dark-bg border border-gray-600 p-2 rounded text-white"
        >
          <option value="">Select Fee</option>
          <option value="5000-10000">₹5000–10000</option>
          <option value="10000-20000">₹10000–20000</option>
          <option value="20000-30000">₹20000–30000</option>
        </select>
        {errors.fee && <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1">Location</label>
        <input
          {...register("location")}
          className="w-full bg-dark-bg border border-gray-600 p-2 rounded text-white"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Profile Image */}
      <div>
        <label className="block mb-1">Profile Image </label>
        <input type="file" className="w-full bg-dark-bg border border-gray-600 p-2 rounded text-white" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-dark-accent hover:bg-dark-accent/80 text-white px-4 py-2 rounded font-semibold transition"
      >
        Submit
      </button>
    </form>
  );
}
