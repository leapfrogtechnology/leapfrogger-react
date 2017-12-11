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
const getFirstLetterOfEmployee = (employee) => {
  return employee.firstName.substring(0, 1);
}

export const getUniqueArrayOfFirstCharOfName = (employeesList) => {
  var firstLettersOfNames = employeesList.map((employee) => {
    return employee.firstName.substring(0, 1);
  });
  var uniqueArray = firstLettersOfNames.filter((value, index, array) => {
    return index == array.indexOf(value);
  });
  return uniqueArray;
}

export const groupByAlphabets = (employeesList) => {
  var uniqueLetterList = getUniqueArrayOfFirstCharOfName(employeesList)
  var finalList = [];
  uniqueLetterList.forEach(letter => {
    var group = {};    
    var list = [];
    employeesList.forEach(employee => {
      if (letter === getFirstLetterOfEmployee(employee)) {
        list.push(employee); 
      }
    });
    group.title = letter;
    group.data = list;
    finalList.push(group);
  });
  return finalList;
}

//-----------------------------------

export const getUniqueArrayOfDepartmrnt = (employeesList) => {
  var departments = employeesList.map((employee) => {
    return employee.department.id;
  });
  var uniquedepartment = departments.filter((value, index, array) => {
    return index == array.indexOf(value);
  });
  return uniquedepartment;
}

export const groupByDepartment = (employeesList = []) => {
  var uniqueDepartmentList = getUniqueArrayOfDepartmrnt(employeesList)
  var finalList = [];
  uniqueDepartmentList.forEach(department => {
    var group = {};    
    var list = [];
    employeesList.forEach(employee => {
      if (department === employee.department.id) {
        list.push(employee); 
      }
    });
    group.title = department;
    group.data = list;
    finalList.push(group);
  });
  return finalList;
}

export const getMyInformation = (employeesList, email) => {
  return employeesList.filter((employee) => {
    if (employee.username === email) { return employee }
  })
}

//-------------------search----------

export const searchEmployeesOfName = (employeesList, characters) => {
  return employeesList.filter((employee) => {
    var name = employee.firstName + " " + employee.lastName;
    if (name.search(characters) !== -1) { //This method returns -1 if no match is found.
      // console.log('employee---', employee)
      return employee 
    }
  })
}
