const MESSAGES = {
  // Success Messages
  CREATED: "Record created successfully!",
  UPDATED: "Record updated successfully!",
  DELETED: "Record deleted successfully!",
  FETCHED: "Record fetched successfully!",
  FETCHED_ALL: "All Records fetched successfully!",
  MULTIPLE_CREATED: "Multiple records created successfully!",
  MULTIPLE_DELETED: "Multiple records deleted successfully!",

  // Validation Messages
  INVALID_ID: "Invalid ID provided!",
  INVALID_TOKEN: "Invalid TOKEN provided!",
  INVALID_ID_ARRAY: "IDs should be an array!",
  INVALID_PAYLOAD: "Invalid request payload!",
  REQUIRED_FIELDS_MISSING: "Required fields are missing!",

  // Authentication Messages
  LOGIN_SUCCESS: "Login successful!",
  LOGOUT_SUCCESS: "Logout successful!",
  UNAUTHORIZED: "Unauthorized access!",
  FORBIDDEN: "Access forbidden!",
  INVALID_CREDENTIALS: "Invalid credentials!",

  // Not Found Messages
  NOT_FOUND: "Record not found!",
  USER_NOT_FOUND: "User not found!",

  // Conflict Messages
  ALREADY_EXISTS: "Record already exists!",

  // Server Messages
  INTERNAL_SERVER_ERROR: "Something went wrong!here",
  DATABASE_ERROR: "Database operation failed!",

  // Generic Messages
  SUCCESS: "Operation completed successfully!",
  FAILED: "Operation failed!",
};

export default MESSAGES