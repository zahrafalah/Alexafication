// getAccessTokenAsync(
//     options? : AuthOptions,
//      callback? : (result: AsyncResult<string>) => void): void;
function getAccessToken() {
  accessToken = null;
  Office.context.auth.getAccessTokenAsync(function(result) {
    if (result.status === "succeeded") {
      // Use this token to call Web API
      accessToken = result.value;
      console.log(accessToken);
    } else {
      // Handle error
      console.log(result.error.code + result.error.message + result.error.name);
    }
  });
}

Ajax({
  type: "POST",
  url: "/api/DoSomething",
  headers: {
    Authorization: "Bearer " + ssoToken
  },
  data: {
    /* some JSON payload */
  },
  contentType: "application/json; charset=utf-8"
})
  .done(function(data) {
    // Handle success
  })
  .fail(function(error) {
    // Handle error
  })
  .always(function() {
    // Cleanup
  });

module.exports = getAccessToken;
