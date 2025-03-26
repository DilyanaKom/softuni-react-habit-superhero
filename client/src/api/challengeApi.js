import { useEffect, useState } from "react";
import { get } from "../utils/request";

const url = 'http://localhost:3030/data/challenges';

export const useChallenges = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
        })
        const getAllChallenges = async () => {
            try {
                const data = await get(`${url}?${searchParams.toString()}`);
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