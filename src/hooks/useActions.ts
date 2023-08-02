import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/slices/Messages/chat_slice.slice";





const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch)
    , [dispatch])
}
