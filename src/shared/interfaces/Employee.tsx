export interface ManagementData {
	imageUrl: string
	name: string
	position: string
	introduction: string
	email: string
	phone: string
	linkedIn: string
}

export interface ManagementDataProps {
	data: ManagementData
}

export interface EmployeeData {
	imageUrl: string
	name: string
	skills: Array<string>
	introduction: string
	linkedIn: string
	github: string
}

export interface EmployeeDataProps {
	data: EmployeeData
}

export interface EmployeeArray {
	manager: Array<ManagementData>
	employee: Array<EmployeeData>
}
