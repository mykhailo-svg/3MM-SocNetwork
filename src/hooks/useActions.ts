import { fetchUsers } from './../redux/slices/Messages/people_slice.slice';
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/slices/Messages/chat_slice.slice";


import { actions as people_actions } from "../redux/slices/Messages/people_slice.slice";



const rootActions = {
    ...actions,fetchUsers
}
debugger
export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch)
    , [dispatch])
}
