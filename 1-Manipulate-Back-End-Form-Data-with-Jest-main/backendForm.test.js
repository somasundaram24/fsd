const manipulateFormData = require("./manipulateFormData"); // Assuming this is the module you're testing

describe("Manipulate Back-End Form Data", () => {
  test("it should add a new field to the form data", () => {
    // Arrange
    const formData = {
      name: "John Doe",
      email: "john@example.com",
    };

    // Act
    const updatedFormData = manipulateFormData.addNewField(formData, "age", 30);

    // Assert
    expect(updatedFormData).toEqual({
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    });
  });

  test("it should remove a field from the form data", () => {
    // Arrange
    const formData = {
      name: "Jane Doe",
      age: 25,
      email: "jane@example.com",
    };

    // Act
    const updatedFormData = manipulateFormData.removeField(formData, "age");

    // Assert
    expect(updatedFormData).toEqual({
      name: "Jane Doe",
      email: "jane@example.com",
    });
  });

  test("it should update an existing field in the form data", () => {
    // Arrange
    const formData = {
      name: "Bob Smith",
      email: "bob@example.com",
      age: 40,
    };

    // Act
    const updatedFormData = manipulateFormData.updateField(formData, "age", 41);

    // Assert
    expect(updatedFormData).toEqual({
      name: "Bob Smith",
      email: "bob@example.com",
      age: 41,
    });
  });
});
