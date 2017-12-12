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

export const groupByDepartment = (employeesList = [], departmentList = []) => {
  // var finalList = [];
  // departmentList.forEach(department => {
  //   var group = {};    
  //   var list = [];
  //   employeesList.forEach(employee => {
  //     if (department.id === employee.department.id) {
  //       list.push(employee); 
  //     }
  //   });
  //   group.title = department;
  //   group.data = list;
  //   finalList.push(group);
  // });

  console.log('xxxx', departmentList)
  
  return departmentList.map(department => {
    var employees = employeesList.filter(emp => emp.department.id === department.id)
    return {
      title: department.name,
      data: employees
    }
  })

  // return departmentList.map(department => {
  //   var employees = employeesList.filter(emp => department.id === emp.department.id)
  //   return {
  //     title: department.name,
  //     data: employees
  //   }
  // })

  return finalList;
}

export const getMyInformation = (employeesList, email) => {
  return employeesList.filter((employee) => {
    if (employee.username === email) { return employee }
  })
}

//-------------------search----------

export const searchEmployeesOfName = (employeesList, characters) => {
  var chars = characters.toLowerCase()
  return employeesList.filter((employee) => {
    var name = (employee.firstName + " " + employee.lastName).toLowerCase();
    var department = employee.department.name.toLowerCase();
    var mobilePhone = employee.contact.mobilePhone;
    if (parseInt(chars.substring(0, 1))) {
      // first character number
      if ((mobilePhone.search(chars)) !== -1) { //This method returns -1 if no match is found.
        return employee 
      }
    } else {
      if ((name.search(chars) !== -1) || (department.search(chars)) !== -1) { //This method returns -1 if no match is found.
        return employee 
      }
    }
  })
}
