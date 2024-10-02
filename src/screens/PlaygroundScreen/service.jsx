const languageCodeMap = {
  cpp: 54,
  python: 92,
  javascript: 93,
  java: 91,
};

const getSubmission = async (tokenId, callback) => {
  const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "x-RapidAPI-Key": "14454e300cmsh09adae056adbe94p18b81ejsn3c2469f30fef",
      "x-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    callback({ apiStatus: "error", message: JSON.stringify(error) });
    console.log(error);
  }
};

export const makeSubmission = async ({ code, language, callback, stdin }) => {
  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*";
  const httpOptions = {
    method: "POST",
    headers: {
      "x-rapidAPI-Key": "14454e300cmsh09adae056adbe94p18b81ejsn3c2469f30fef",
      "x-rapidAPI-Host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      language_id: languageCodeMap[language],
      source_code: btoa(code),
      stdin: btoa(stdin),
    }),
  };

  try {
    callback({ apiStatus: "loading" });
    const response = await fetch(url, httpOptions);
    const result = await response.json();
    const tokenId = result.token;
    let statusCode = 1;
    let apiSubmissionResult;

    while (statusCode === 1 || statusCode === 2) {
      try {
        // Get the submission and parse it to JSON
        const submissionResponse = await getSubmission(tokenId);
        apiSubmissionResult = JSON.parse(submissionResponse);

        if (apiSubmissionResult && apiSubmissionResult.status) {
          statusCode = apiSubmissionResult.status.id;
        } else {
          statusCode = -1; // Exit the loop if no status is returned
        }

      } catch (error) {
        callback({ apiStatus: "error", message: JSON.stringify(error) });
        console.log(error);
        return;
      }
    }

    if (apiSubmissionResult) {
      callback({ apiStatus: "success", data: apiSubmissionResult });
    }
  } catch (error) {
    callback({
      apiStatus: "error",
      message: JSON.stringify(error),
    });
    console.log(error);
  }
};

