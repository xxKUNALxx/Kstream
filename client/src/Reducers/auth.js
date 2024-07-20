// const authreducer=(state={data:null},actions)=>{
//     switch (actions.type) {
//         case "AUTH":
//             localStorage.setItem("Profile",JSON.stringify({...actions?.data}));
//             return {...state,data:actions?.data}
    
//         default:
//             return state;
//     }
// }

// export default authreducer;

const authreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "AUTH":
            // Check if action data is valid and serialize to JSON
            if (action.data) {
                localStorage.setItem("Profile", JSON.stringify(action.data));
                return { ...state, data: action.data };
            }
            return state;

        default:
            return state;
    }
}

export default authreducer;
