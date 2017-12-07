/*
    {
        "address": {
            "permanentAddress": "Charikot",
            "temporaryAddress": "Putalisadak"
        },
        "avatarUrl": null,
        "contact": {
            "githubId": "karkipy",
            "homePhone": null,
            "mobilePhone": "+9779813816729",
            "skypeId": null
        },
        "dateCreated": "2017-12-06",
        "dateofBirth": "1995-06-08",
        "department": {
            "id": 2,
            "name": "JAVA"
        },
        "designation": "Associate Software Engineer",
        "empId": "342",
        "empStatus": "Probation",
        "firstName": "Aashish",
        "gender": "MALE",
        "id": 231,
        "isHod": false,
        "isHr": false,
        "isRaffleEligible": true,
        "isSupervisor": false,
        "joinDate": "2017-12-06",
        "lastName": "Karki",
        "lastUpdated": "2017-12-06",
        "maritialStatus": "Married",
        "middleName": null,
        "projects": null,
        "role": "USER",
        "supervisor": null,
        "username": "aashishkarki@lftechnology.com"
    }
 */

 // group by alphabets, department
// {
//   [
//     {'A': ['Amit', 'Ashish']},
//     {'B': ['Bob', 'Bunny']},    
//   ]
// }

const getVarNameFromObject = (nameObject) => {
  for(let varName in nameObject) {
    return varName;
  }
}

export const groupByAlphabets = (employeesList) => {
  var A = B = C = D = E = F = G = H = I = J = K = L = M = N = O = P = Q = R = S = T = U = V = W = X = Y = Z = [];
  var alphabets = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
  employeesList.forEach(employee => {
    
    for (i = 65; i < (26 + 65); i++) { // 'A' ascii => 65 and 26 alphabets
      if (employee.firstName.substring(0,1).toUpperCase().charCodeAt(0) == i) {
        alphabets[i - 65].push(employee)
      }
    }
  });
    
  var finalData = []
  alphabets.forEach(data => {
    var key = getVarNameFromObject(data);
    var value = data;
    var singularData = {};
    singularData.key = key;
    singularData.value = data;
    finalData.push(singularData)
  })
  return finalData;
}

export const myInformation = (employeesList, email) => {
  return employeesList.filter((employee) => {
    if (employee.username === email) { return employee }
  })
}