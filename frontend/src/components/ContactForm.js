import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ContactUsForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      company: "",
      document: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phoneNumber", values.phoneNumber);
        formData.append("company", values.company);
        formData.append("document", values.document);
    
        const response = await axios.post(
          "http://localhost:5000/contact/",
          formData
        );
    
        if (response.status === 200) {
          console.log("Form values submitted:", values);
          resetForm(); // Reset the form fields
          formik.setFieldValue("document", null); // Reset the document field
          navigate("/success");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Required";
      }
      if (!values.company) {
        errors.company = "Required";
      }
      if (!values.document) {
        errors.document = "Required";
      }
      return errors;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("phoneNumber", formik.values.phoneNumber);
    formData.append("company", formik.values.company);
    formData.append("document", formik.values.document);

    try {
      const response = await axios.post(
        "http://localhost:5000/contact/",
        formData
      );
      if (response.status === 200) {
        navigate.push("/success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{ fontFamily: "Inter, sans-serif" }}
        className="flex flex-col relative max-w-xl mx-auto p-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
          >
            Name
          </label>
          <input
            type="text"
            className="appearance-none border font-light rounded-xl w-full p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25"
            id="name"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
          >
            Email
          </label>
          <input
            type="email"
            className="appearance-none border font-light rounded-xl w-full p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25"
            id="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
          >
            Phone Number
          </label>
          <div className="flex items-center">
            <select
              className="appearance-none border rounded-l-xl w-1/4 p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25"
              id="countryCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.countryCode}
            >
              <option value="+1">+1</option>
              <option value="+7">+7</option>
              <option value="+27">+27</option>
              <option value="+31">+31</option>
              <option value="+33">+33</option>
              <option value="+44">+44</option>
              <option value="+46">+46</option>
              <option value="+49">+49</option>
              <option value="+54">+54</option>
              <option value="+55">+55</option>
              <option value="+57">+57</option>
              <option value="+61">+61</option>
              <option value="+65">+65</option>
              <option value="+81">+81</option>
              <option value="+82">+82</option>
              <option value="+86">+86</option>
              <option value="+91">+91</option>
              <option value="+92">+92</option>
              <option value="+93">+93</option>
              <option value="+94">+94</option>
              <option value="+95">+95</option>
              <option value="+98">+98</option>
              <option value="+212">+212</option>
              <option value="+213">+213</option>
              <option value="+216">+216</option>
              <option value="+218">+218</option>
              <option value="+220">+220</option>
              <option value="+221">+221</option>
              <option value="+222">+222</option>
              <option value="+223">+223</option>
              <option value="+224">+224</option>
              <option value="+225">+225</option>
              <option value="+226">+226</option>
              <option value="+227">+227</option>
              <option value="+228">+228</option>
              <option value="+229">+229</option>
              <option value="+230">+230</option>
              <option value="+231">+231</option>
              <option value="+232">+232</option>
              <option value="+233">+233</option>
              <option value="+234">+234</option>
              <option value="+235">+235</option>
              <option value="+236">+236</option>
              <option value="+237">+237</option>
              <option value="+238">+238</option>
              <option value="+239">+239</option>
              <option value="+240">+240</option>
              <option value="+241">+241</option>
              <option value="+242">+242</option>
              <option value="+243">+243</option>
              <option value="+244">+244</option>
              <option value="+245">+245</option>
              <option value="+246">+246</option>
              <option value="+247">+247</option>
              <option value="+248">+248</option>
              <option value="+249">+249</option>
              <option value="+250">+250</option>
              <option value="+251">+251</option>
              <option value="+252">+252</option>
              <option value="+253">+253</option>
              <option value="+254">+254</option>
              <option value="+255">+255</option>
              <option value="+256">+256</option>
              <option value="+257">+257</option>
              <option value="+258">+258</option>
              <option value="+260">+260</option>
              <option value="+261">+261</option>
              <option value="+262">+262</option>
              <option value="+263">+263</option>
              <option value="+264">+264</option>
              <option value="+265">+265</option>
              <option value="+266">+266</option>
              <option value="+267">+267</option>
              <option value="+268">+268</option>
              <option value="+269">+269</option>
              <option value="+290">+290</option>
              <option value="+291">+291</option>
              <option value="+297">+297</option>
              <option value="+298">+298</option>
              <option value="+299">+299</option>
              <option value="+350">+350</option>
              <option value="+351">+351</option>
              <option value="+352">+352</option>
              <option value="+353">+353</option>
              <option value="+354">+354</option>
              <option value="+355">+355</option>
              <option value="+356">+356</option>
              <option value="+357">+357</option>
              <option value="+358">+358</option>
              <option value="+359">+359</option>
              <option value="+370">+370</option>
              <option value="+371">+371</option>
              <option value="+372">+372</option>
              <option value="+373">+373</option>
              <option value="+374">+374</option>
              <option value="+375">+375</option>
              <option value="+376">+376</option>
              <option value="+377">+377</option>
              <option value="+378">+378</option>
              <option value="+379">+379</option>
              <option value="+380">+380</option>
              <option value="+381">+381</option>
              <option value="+382">+382</option>
              <option value="+383">+383</option>
              <option value="+385">+385</option>
            </select>
            <input
              type="text"
              className="appearance-none border font-light  rounded-r-xl w-3/4 p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25 pr-10"
              id="phoneNumber"
              placeholder="Enter phone number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-xs">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className="relative mb-4">
          <label
            htmlFor="company"
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
          >
            Company
          </label>
          <div className="relative">
            <div className="flex items-center">
              <div className="absolute right-4 font-light top-1/2 transform -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown
                  className="text-gray-500 cursor-pointer"
                  onClick={() => formik.setFieldTouched("company")}
                />
              </div>
              <select
                className="appearance-none border rounded-xl w-full p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25"
                id="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              >
                <option value=""></option> {/* Add this line */}
                <option value="Devanics">Devanics</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
                <option value="Amazon">Amazon</option>
                <option value="Apple">Apple</option>
                <option value="Facebook">Facebook</option>
                <option value="Oracle">Oracle</option>
                <option value="IBM">IBM</option>
              </select>
            </div>
          </div>
          {formik.touched.company && formik.errors.company ? (
            <div className="text-red-500 text-xs">{formik.errors.company}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="document"
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
          >
            Upload Document
          </label>
          <input
            type="file"
            className="appearance-none border font-light rounded-xl w-full p-3 text-gray-700 leading-loose focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-25"
            id="document"
            onChange={(event) => {
              formik.setFieldValue("document", event.currentTarget.files[0]);
            }}
          />
          {formik.touched.document && formik.errors.document ? (
            <div className="text-red-500 text-xs">{formik.errors.document}</div>
          ) : null}
        </div>

        <p className="text-left text-gray-700 text-sm mt-3 w-96">
          By completing and submitting the form, I acknowledge Wrike’s Privacy
          Policy.
        </p>
        <button
          type="submit"
          className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-extralight py-3 px-6 rounded-full focus:outline-none focus:shadow-outline self-end mt-4"
          style={{ backgroundColor: "#7f3ddd" }}
        >
          Get in touch
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
