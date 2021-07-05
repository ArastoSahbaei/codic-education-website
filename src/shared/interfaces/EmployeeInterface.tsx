export interface EmployeeData {
	imageUrl: string
	name: string
	title: Array<string>
	introduction: string
	email: string
	phone: string
	github: string
	linkedIn: string
}

export interface EmployeeDataProps {
	data: EmployeeData
}

export interface EmployeeArray {
	employee: Array<EmployeeData>
}
