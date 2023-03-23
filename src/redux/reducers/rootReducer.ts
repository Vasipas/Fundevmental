import { combineReducers } from "@reduxjs/toolkit";
import persons from './persons/reducer';

const createRootReducer = () =>
	combineReducers({ persons });

export default createRootReducer;