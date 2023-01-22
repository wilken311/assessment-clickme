export const useUserCounter = async (userId) => {
    try {
        const user = await axios.get(`http://127.0.0.1:8000/counter/${userId}`);
        if (user.data["data"] == null) {
            return {
                success: false,
                counterId: 0,
                counter: 0,
            };
        } else {
            return {
                success: true,
                counterId: user.data["data"].id,
                counter: user.data["data"].count,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
