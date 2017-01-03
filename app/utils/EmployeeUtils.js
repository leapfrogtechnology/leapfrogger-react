export function getEmployeeFullName({firstName, middleName, lastName}){
	let mName = ( middleName === '' || middleName === null ) ? '' : middleName + ' ';
	return `${firstName} ${mName}${lastName}`;
}