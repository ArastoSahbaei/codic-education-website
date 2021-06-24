import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route component={InitialView} />
			</Switch>
		</BrowserRouter>
	)
}
