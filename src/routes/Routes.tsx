import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ShopView } from '../view/shop/ShopView'
import { SignInView } from '../view/signin/SignInView'
import { Footer } from '../components/Footer'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route component={InitialView} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
