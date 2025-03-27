import { useEffect, useState } from "react";
import { get, patch, post } from "../utils/request";

const url = 'http://localhost:3030/data/challenges';

export const useChallenges = (challengeId = null) => {
    const [challenges, setChallenges] = useState([]);
    const [currentChallenge, setCurrentChallenge] = useState(null);
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

useEffect(() => {
    if (!challengeId){
        return;
    };
    const searchParams = new URLSearchParams({
        load: `author=_ownerId:users`,
    });

    const getChallenge = async() => {
        try {
            const challengeData = await get(`${url}/${challengeId}?${searchParams.toString()}`);
            setCurrentChallenge(challengeData);
        } catch (error) {
            
        }
    }

    getChallenge();
}, [challengeId]);


const addChallenge = async (challengeData) => {
    try {
      await post(url, challengeData);
        
    } catch (error) {
        console.log(error.message);
    }
}

const editChallenge = async (challengeId, challengeData) => {
    patch(`${url}/${challengeId}`, challengeData);
}


    return {
        challenges,   
        currentChallenge,
        addChallenge,
        editChallenge
    }
}