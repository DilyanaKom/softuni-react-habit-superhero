import { useEffect, useState } from "react";
import { get } from "../utils/request";

const url = 'http://localhost:3030/data/challenges';

export const useChallenges = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        const getAllChallenges = async () => {
            try {
                const data = await get(url);
                setChallenges(data);

            } catch (error) {
                console.log(error.message)
            }
        };
        getAllChallenges();
    }, []);

    return {
        challenges,   
    }
}