export function getEmployeeFullName({firstName, middleName, lastName}){
	// if ((firstName == null) || (middleName == null) || (lastName == null)) {
	// 	console.log("NULL HEHEHEHEHEHEHEHE");
	// 	console.log(firstName, middleName, lastName)
	// } else {
	// 	console.log(firstName, middleName, lastName)
	// }
	// let mName = ( middleName === '' || middleName === null ) ? '' : middleName + ' ';
	// return `${firstName} ${mName}${lastName}`;
	return `${firstName} ${lastName}`
}
