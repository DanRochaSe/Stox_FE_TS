type Args = {
    status: "idle" | "loading" | "success" | "error";
};


const ApiStatus = ({ status }: Args) => {

    switch (status) {
        case "idle":
            return <div>Idle</div>
        case "loading":
            return <div>Loading...</div>
        case "error":
            return <div>Error</div>
        default:
            throw Error("Invalid status");
    }
    

}


export default ApiStatus;


