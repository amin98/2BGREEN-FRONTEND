import RequestHandler from "./RequestHandler";

const componentURL = "/users";

const UserSummaryAPI = {
    register: async (name, prefix, surname, email, password) =>{
        try{
            const res = await RequestHandler.put(componentURL+"/register", {
                name: name,
                prefix: prefix,
                surname: surname,
                email: email,
                password: password, 
            });
            
            return res.data;
        }
        catch (err) {
            throw err;
        }
    },
    getUser: async (token) =>{
        try{
            const res = await RequestHandler.get(componentURL, {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            
            return res.data;
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserSummaryAPI;