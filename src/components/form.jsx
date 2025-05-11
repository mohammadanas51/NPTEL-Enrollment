import React, { useState } from "react";
import "./form.css";

const RegistraionForm = () => {
    const [courseCounts, setCourseCounts] = useState({
        Course1: 0,
        Course2: 0,
        Course3: 0,
        Course4: 0,
      });
    
      const [formData, setFormData] = useState({
        name: "",
        registerNumber: "",
        year: "",
        section: "",
        nptelCourse: "",
      });
    
      const [error, setError] = useState("");
      const [success, setSuccess] = useState(false);
      const [courseLimitError, setCourseLimitError] = useState("");
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
        setCourseLimitError("");
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, registerNumber, year, section, nptelCourse } = formData;
    
        if (!name || !registerNumber || !year || !section || !nptelCourse) {
          setError("Please fill in all fields.");
          return;
        }
    
        // Check if the selected course has reached the limit (4 students)
        if (courseCounts[nptelCourse] >= 4) {
          setCourseLimitError(`${nptelCourse} has reached its limit of 4 students.`);
          return;
        }
    
        // Increment the course count and display success
        setCourseCounts({ ...courseCounts, [nptelCourse]: courseCounts[nptelCourse] + 1 });
        setSuccess(true);
        setFormData({
          name: "",
          registerNumber: "",
          year: "",
          section: "",
          nptelCourse: "",
        });
      };
    
      return (
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Enrollment Form</h2>
    
            {error && <div className="error-message">{error}</div>}
            {courseLimitError && (
              <div className="error-message">{courseLimitError}</div>
            )}
            {success && (
              <div className="success-message">
                🎉 Enrollment successful! We'll get in touch soon.
              </div>
            )}
    
            <form className="form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="form-input"
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
    
              {/* Register Number Field */}
              <div className="form-group">
                <label className="form-label">Register Number</label>
                <input
                  type="text"
                  name="registerNumber"
                  value={formData.registerNumber}
                  className="form-input"
                  onChange={handleChange}
                  placeholder="Enter your register number"
                />
              </div>
    
              {/* Year Field */}
              <div className="form-group">
                <label className="form-label">Year</label>
                <div className="radio-grid">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="year"
                      value="1"
                      checked={formData.year === "1"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    1st Year
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="year"
                      value="2"
                      checked={formData.year === "2"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    2nd Year
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="year"
                      value="3"
                      checked={formData.year === "3"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    3rd Year
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="year"
                      value="4"
                      checked={formData.year === "4"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    4th Year
                  </label>
                </div>
              </div>
    
              {/* Section Field */}
              <div className="form-group">
                <label className="form-label">Section</label>
                <div className="radio-grid">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="section"
                      value="A"
                      checked={formData.section === "A"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    A
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="section"
                      value="B"
                      checked={formData.section === "B"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    B
                  </label>
                </div>
              </div>
    
              {/* NPTEL Course Field */}
              <div className="form-group">
                <label className="form-label">NPTEL Course</label>
                <div className="radio-grid">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="nptelCourse"
                      value="Course1"
                      checked={formData.nptelCourse === "Course1"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    Course 1
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="nptelCourse"
                      value="Course2"
                      checked={formData.nptelCourse === "Course2"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    Course 2
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="nptelCourse"
                      value="Course3"
                      checked={formData.nptelCourse === "Course3"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    Course 3
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="nptelCourse"
                      value="Course4"
                      checked={formData.nptelCourse === "Course4"}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    Course 4
                  </label>
                </div>
              </div>
    
              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Enroll
              </button>
            </form>
          </div>
        </div>
      );
    };
    

export default RegistraionForm;