const helper = {};

// success response
helper.successResponse = (code, message, data) => {
  return {
    status: code,
    response: {
      isSuccess: true,
      message,
      data,
    },
  };
};

// error response
helper.errorResponse = (code, message, error) => {
  return {
    status: code,
    response: {
      isSuccess: false,
      message,
      error,
    },
  };
};
