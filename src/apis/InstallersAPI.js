import RequestHandler from "./RequestHandler";

const componentURL = "/installers";

const getAllInstallers = async() => {
    const response = await RequestHandler.get(componentURL);
    return response.data;
}

const getInstallersByProvince = async(province) => {
    const response = await RequestHandler.get(componentURL, {
        params : { province: province }
    });
    return response.data;
}

const addInstaller  = async (data, token) => {
    const response = await RequestHandler.post(componentURL, data, {
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

const updateInstaller = async (data, token) =>{
    const response = await RequestHandler.put(componentURL, data, {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    if (response.status === 204 | response.status === 200){
        return response;
    }else{
        console.error('Failed to update installer', response);
        return null;
    }
}

const deleteInstaller = async (id, token) => {
    try{
        const response = await RequestHandler.del(componentURL + `/${id}`,{
            headers:{
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status === 204 | response.status === 200){
            return response;
        }
        else{
            console.error('Failed to delte product:', response);
            return null;
        }
    }
    catch (error){
        console.error("Error during delete request:", error);
    }
}

const InstallersAPI = {
    getAllInstallers,
    getInstallersByProvince,
    addInstaller,
    updateInstaller,
    deleteInstaller
}

export default InstallersAPI;